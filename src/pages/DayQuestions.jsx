import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import { programDays } from "./Questions";
import { DayCompletion, getProgramsById } from "../api/programs/programs";
import Modal from "../components/Modal";

const DayQuestions = () => {
  const { id, dayNumber } = useParams();
  const navigate = useNavigate();
  const currentDay = programDays.find((d) => d.day === Number(dayNumber));

  const [answers, setAnswers] = useState({});
  const [checklistAnswers, setChecklistAnswers] = useState({});
  const [programDetails, setProgramData] = useState({});
  const [toast, setToast] = useState(null);
  const [questionSuggestions, setQuestionSuggestions] = useState({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [error, setError] = useState(null);


  const handleBack = () => navigate(`/programs/${id}`);
  const goToChat = () => navigate(`/chat`);

  useEffect(() => {
    setAnswers({});
    setChecklistAnswers({});
    setQuestionSuggestions({});
  }, [dayNumber]);

  useEffect(() => {
    const fetchProgramData = async () => {
      try {
        const data = await getProgramsById(id);
        setProgramData(data);

      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };

    fetchProgramData();
  }, [id]);

  if (!currentDay) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Day not found.</p>
      </div>
    );
  }

  const handleChange = (questionId, value, qMeta) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    const suggestion = computeSuggestion(qMeta, value);
    if (suggestion) {
      setQuestionSuggestions((prev) => ({ ...prev, [questionId]: suggestion }));
    } else {
      setQuestionSuggestions((prev) => {
        const copy = { ...prev };
        delete copy[questionId];
        return copy;
      });
    }
  };

  const handleComplete = async () => {
    const allChecked = currentDay.checklist.every((item) => checklistAnswers[item]);
    if (!allChecked) {
      setError("Please fill all fields before finishing!")
      setIsSuccessOpen(true)
      return;
    }

    try {
      const data = await DayCompletion({ programId: id, day: currentDay.day });

      if (data.status == "Success") {
        setIsSuccessOpen(true)
        // setToast({
        //   type: "success",
        //   message: `Day ${currentDay.day} completed successfully!`
        // });
              // Navigate after showing success message (optional delay)
              setTimeout(() => {
                window.location.href = `/programs/${id}`;
              }, 1200);
      } else {
        setError(`Failed to Complete the Day ${currentDay.day}.`);
      }
    } catch (err) {
      console.error("Error Complete the Day:", err);
      setError("Failed to Complete the Day.");

      setTimeout(() => {
        navigate(`/programs/${id}`);
      }, 1200);
    };
  };
  // Handle the Check List
  const handleChecklistChange = (item) => {
    setChecklistAnswers((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  // Handle the Checl Box
  const handleCheckboxGroupChange = (questionId, option) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [questionId]: updated };
    });

    // Compute suggestion
    const qMeta = currentDay.questions.find((q) => q.id === questionId);
    const updatedValue = answers[questionId]?.includes(option)
      ? answers[questionId].filter((o) => o !== option)
      : [...(answers[questionId] || []), option];

    const suggestion = computeSuggestion(qMeta, updatedValue);
    if (suggestion) {
      setQuestionSuggestions((prev) => ({ ...prev, [questionId]: suggestion }));
    } else {
      setQuestionSuggestions((prev) => {
        const copy = { ...prev };
        delete copy[questionId];
        return copy;
      });
    }
  };

  // Handle the Suggestion For Scale
  const computeSuggestionForScale = (qMeta, value) => {
    if (!qMeta || value === undefined || value === null) return null;
    const num = Number(value);

    // 1️⃣ low/mid/high ranges (like mood, energy)
    if (qMeta.suggestions?.lowRange || qMeta.suggestions?.midRange || qMeta.suggestions?.highRange) {
      const low = qMeta.min ?? 1;
      const high = qMeta.max ?? 10;
      const pct = (num - low) / (high - low);

      if (pct <= 0.33 && qMeta.suggestions.lowRange) return pickRandom(qMeta.suggestions.lowRange);
      if (pct <= 0.66 && qMeta.suggestions.midRange) return pickRandom(qMeta.suggestions.midRange);
      if (pct > 0.66 && qMeta.suggestions.highRange) return pickRandom(qMeta.suggestions.highRange);

      return null;
    }

    // 2️⃣ Step-based / custom numeric keys (like Daily Steps)
    if (qMeta.marks && Array.isArray(qMeta.marks) && qMeta.suggestions) {
      // Find the first mark where value <= mark.value
      const mark = qMeta.marks.find((m) => num <= m.value);
      if (mark && qMeta.suggestions[mark.label]) return pickRandom(qMeta.suggestions[mark.label]);
    }

    // 3️⃣ Fallback: pick first available suggestion
    const keys = Object.keys(qMeta.suggestions || {});
    if (keys.length) return pickRandom(qMeta.suggestions[keys[0]]);

    return `Recorded ${num}. Keep tracking!`;
  };

  // Handele the Suggestion All type of Qustions
  const computeSuggestion = (qMeta, value) => {
    if (!qMeta) return null;

    if (qMeta.type === "yes-no") {
      if (value === "Yes" || value === true) {
        if (qMeta.suggestions?.Yes) return pickRandom(qMeta.suggestions.Yes);
        if (currentDay.suggestionPools?.yesResponses)
          return pickRandom(currentDay.suggestionPools.yesResponses);
        return "Great job — keep it up!";
      } else if (value === "No" || value === false) {
        if (qMeta.suggestions?.No) return pickRandom(qMeta.suggestions.No);
        if (currentDay.suggestionPools?.noResponses)
          return pickRandom(currentDay.suggestionPools.noResponses);
        return "No worries — try again tomorrow!";
      }
    }

    if (qMeta.type === "group") {
      if (qMeta.suggestions?.text) return pickRandom(qMeta.suggestions.text);
      return "Great work tracking your progress this week!";
    }

    if (qMeta.type === "checkbox-group") {
      if (qMeta.suggestions?.length) return pickRandom(qMeta.suggestions);
      return "Good job logging your meals today!";
    }

    if (qMeta.type === "single-choice") {
      if (qMeta.suggestions && qMeta.suggestions[value]) {
        // Pick a random suggestion based on selected option
        return pickRandom(qMeta.suggestions[value]);
      }

      // Optional: fallback pools if defined globally
      if (currentDay.suggestionPools?.[value]) {
        return pickRandom(currentDay.suggestionPools[value]);
      }

      // Default fallback message
      return "Thanks for sharing — keep tracking your progress!";
    }

    if (qMeta.type === "scale") {
      return computeSuggestionForScale(qMeta, value);
    }

    if (qMeta.type === "number") {
      if (qMeta.suggestions?.numeric) return pickRandom(qMeta.suggestions.numeric);
      return `Recorded ${value}. Track it daily to see patterns.`;
    }

    if (qMeta.type === "text") {
      if (qMeta.suggestions?.text) return pickRandom(qMeta.suggestions.text);
      return null;
    }

    if (qMeta.type === "checkbox") {
      if (value) {
        if (qMeta.suggestions?.checked) return pickRandom(qMeta.suggestions.checked);
        return "Good habit — keep it going!";
      } else {
        if (qMeta.suggestions?.unchecked) return pickRandom(qMeta.suggestions.unchecked);
        return "Try including this habit today.";
      }
    }

    return null;
  };

  const pickRandom = (arr) => {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-secondary">
            Day {currentDay.day} Questions
          </h1>
          <div className="flex gap-2">
            <button
              onClick={handleBack}
              className="py-2 px-4 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-300 transition cursor-pointer"
            >
              {"<"} Back
            </button>
            {currentDay.askRachel && (
              <button
                onClick={goToChat}
                className="py-2 px-4 bg-gradient-to-r from-primary-accent to-secondary text-white rounded-lg shadow hover:scale-105 transition transform"
              >
                Ask Rachel
              </button>
            )}
          </div>
        </div>

        {/* Day Overview */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h2 className="text-2xl font-semibold">{programDetails?.currentProgram?.title} {currentDay.title}</h2>
          <p className="text-gray-700">{currentDay.description}</p>
        </div>

        {/* Questions */}
        <div className="grid gap-6 bg-white rounded-xl shadow p-8">
          {currentDay.questions.map((q) => {
            const qId = q.id;
            const answerVal = answers[qId];
            const suggestion = questionSuggestions[qId];

            return (
              <div key={qId} className="transition transform">
                <label className="font-semibold mb-2 block">{q.label}</label>

                {/* Yes/No */}
                {q.type === "yes-no" && (
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`q-${qId}`}
                          value={option}
                          checked={answerVal === option}
                          onChange={() => handleChange(qId, option, q)}
                          className="accent-secondary w-5 h-5"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}

                {q.type === "single-choice" && (
                  <div className="flex flex-col gap-3">
                    {q.options?.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2 cursor-pointer bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition ${answerVal === option ? "border border-primary-accent" : ""
                          }`}
                      >
                        <input
                          type="radio"
                          name={`q-${qId}`}
                          value={option}
                          checked={answerVal === option}
                          onChange={() => handleChange(qId, option, q)}
                          className="accent-secondary w-5 h-5"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {/* Group Type */}
                {q.type === "group" && (
                  <div className="space-y-3">
                    {q.fields.map((field, idx) => {
                      const fieldKey = `${qId}-${idx}`;
                      const fieldValue = answerVal?.[fieldKey] || "";

                      return (
                        <div key={fieldKey} className="flex flex-col">
                          <label className="text-sm text-gray-700 mb-1">{field.label}</label>
                          <input
                            type={field.type || "text"}
                            value={fieldValue}
                            onChange={(e) => {
                              const newGroupValues = {
                                ...(answers[qId] || {}),
                                [fieldKey]: e.target.value
                              };
                              handleChange(qId, newGroupValues, q);
                            }}
                            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* checkbox-group */}
                {q.type === "checkbox-group" && (
                  <div className="flex flex-col gap-2">
                    {q.options.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={(answers[q.id] || []).includes(option)}
                          onChange={() => handleCheckboxGroupChange(q.id, option)}
                          className="accent-secondary w-5 h-5"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}

                {/* Scale */}
                {q.type === "scale" && (
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={q.min}
                      max={q.max}
                      step={q.step || 1}
                      value={answerVal || q.min}
                      onChange={(e) => handleChange(qId, Number(e.target.value), q)}
                      className="w-full accent-secondary"
                    />
                    {q.marks && (
                      <div className="flex justify-between text-xs text-gray-600 px-1">
                        {q.marks.map((mark) => (
                          <span key={mark.value}>{mark.label}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Number */}
                {q.type === "number" && (
                  <input
                    type="number"
                    value={answerVal || ""}
                    onChange={(e) => handleChange(qId, e.target.value, q)}
                    className="border p-2 rounded-lg w-full"
                  />
                )}

                {/* Text */}
                {q.type === "text" && (
                  <input
                    type="text"
                    value={answerVal || ""}
                    onChange={(e) => handleChange(qId, e.target.value, q)}
                    className="border p-2 rounded-lg w-full"
                  />
                )}

                {/* Checkbox */}
                {q.type === "checkbox" && (
                  <input
                    type="checkbox"
                    checked={answerVal || false}
                    onChange={(e) =>
                      handleChange(qId, e.target.checked, q)
                    }
                    className="w-5 h-5"
                  />
                )}

                {/* Suggestion */}
                {suggestion && (
                  <div className="mt-2 p-3 bg-primary-accent bg-opacity-10 border-l-4 border-primary-accent rounded">
                    <p className="text-sm text-gray-800">{suggestion}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Checklist */}
        <div className="bg-white p-5 rounded-2xl shadow-xl space-y-2">
          <h3 className="text-xl font-semibold mb-2">Today's Checklist</h3>
          <div className="flex flex-col gap-2">
            {Array.isArray(currentDay?.checklist) && currentDay.checklist.length > 0 ? (
              currentDay.checklist.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={checklistAnswers?.[item] || false}
                    onChange={() => handleChecklistChange(item)}
                    className="accent-secondary w-5 h-5 cursor-pointer"
                  />
                  {item}
                </label>
              ))
            ) : (
              <p className="text-gray-500 italic">No checklist.</p>
            )}
          </div>
        </div>

        {/* Complete Button */}
        <button
          onClick={handleComplete}
          className="w-full py-3 mt-4 bg-gradient-to-r from-primary-accent to-secondary text-white rounded-lg cursor-pointer text-lg font-semibold"
        >
          Complete Day {currentDay.day}
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      {(isSuccessOpen && !error) && (
        <Modal
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          title="Success!"
          message={`Day ${currentDay.day} completed successfully!`}
          type="success"
        />
      )}
      {(error) && (
        <Modal
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          title="Failed!"
          message={error}
          type="error"
        />
      )}
    </div>
  );

};

export default DayQuestions;