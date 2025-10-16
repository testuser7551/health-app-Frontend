import React, { useState, useEffect } from "react";
import {
  Search,
  Trash2,
  MapPin,
  Building2,
  UserCircle2,
  Pencil,
  Calendar,
  Plus,
  X,
  Share2, 
  FileText,
} from "lucide-react";

export default function CareTeam() {
  const [activeTab, setActiveTab] = useState("Care Team");
  const [showModal, setShowModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [insuranceData, setInsuranceData] = useState([
    { id: 1, carrier: "testing", policy: "1234567893", group: "A+", plan: "PPO" }
  ]);
  const [appointments, setAppointments] = useState([]);
  const [editingInsurance, setEditingInsurance] = useState(null);
  const [formData, setFormData] = useState({
    carrier: "",
    policy: "",
    group: "",
    plan: ""
  });
  const [formErrors, setFormErrors] = useState({
    carrier: "",
    policy: "",
    group: "",
    plan: ""
  });
  const [appointmentForm, setAppointmentForm] = useState({
    provider: "",
    date: "",
    time: "",
    type: "Consultation",
    reason: "",
    notes: ""
  });
  const [appointmentErrors, setAppointmentErrors] = useState({
    provider: "",
    date: "",
    time: "",
    type: "",
    reason: "",
    notes: ""
  });

  // Search functionality states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProviders, setAllProviders] = useState([
    { id: 1, name: "Dr. John Smith", specialty: "Cardiologist", location: "New York, NY" },
    { id: 2, name: "Dr. Jane Doe", specialty: "Dermatologist", location: "Los Angeles, CA" },
    { id: 3, name: "Dr. Mike Johnson", specialty: "Pediatrician", location: "Chicago, IL" },
    { id: 4, name: "Dr. Sarah Wilson", specialty: "Neurologist", location: "Boston, MA" },
    { id: 5, name: "Dr. Alex Chen", specialty: "Orthopedic Surgeon", location: "San Francisco, CA" }
  ]);

  const paymentHistory = [
    { date: "2025-09-01", description: "Consultation - Dr. John Smith", amount: "$120" },
    { date: "2025-09-10", description: "Lab Test - Blood Work", amount: "$80" },
    { date: "2025-09-25", description: "Follow-up Appointment", amount: "$90" },
  ];

  // Insurance validation functions
  const validateInsuranceField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "carrier":
        if (!value.trim()) {
          error = "Insurance carrier is required";
        } else if (!/^[a-zA-Z\s\-&.,()']+$/.test(value)) {
          error = "Only letters, spaces, and common punctuation allowed";
        }
        break;
        
      case "policy":
        if (!value.trim()) {
          error = "Policy number is required";
        } else if (!/^\d+$/.test(value)) {
          error = "Policy number must contain numbers only";
        } else if (value.length < 3) {
          error = "Policy number must be at least 3 characters";
        }
        break;
        
      case "group":
        if (value && !/^\d*$/.test(value)) {
          error = "Group number must contain numbers only";
        }
        break;
        
      case "plan":
        if (value && !/^[a-zA-Z\s]*$/.test(value)) {
          error = "Only letters and spaces allowed";
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

  const validateInsuranceForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateInsuranceField(key, formData[key]);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  // Appointment validation functions
  const validateAppointmentField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "provider":
        if (!value.trim()) {
          error = "Provider selection is required";
        }
        break;
        
      case "date":
        if (!value.trim()) {
          error = "Date is required";
        } else {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selectedDate < today) {
            error = "Appointment date cannot be in the past";
          }
        }
        break;
        
      case "time":
        if (!value.trim()) {
          error = "Time is required";
        }
        break;
        
      case "type":
        if (!value.trim()) {
          error = "Appointment type is required";
        }
        break;
        
      case "reason":
        if (value && value.length > 200) {
          error = "Reason cannot exceed 200 characters";
        }
        break;
        
      case "notes":
        if (value && value.length > 500) {
          error = "Notes cannot exceed 500 characters";
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

  const validateAppointmentForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(appointmentForm).forEach(key => {
      if (key === "reason" || key === "notes") {
        // These are optional fields, only validate if they have content
        if (appointmentForm[key]) {
          const error = validateAppointmentField(key, appointmentForm[key]);
          if (error) {
            errors[key] = error;
            isValid = false;
          }
        }
      } else {
        const error = validateAppointmentField(key, appointmentForm[key]);
        if (error) {
          errors[key] = error;
          isValid = false;
        }
      }
    });

    setAppointmentErrors(errors);
    return isValid;
  };

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = allProviders.filter(provider => 
      provider.name.toLowerCase().includes(query) ||
      provider.specialty.toLowerCase().includes(query) ||
      provider.location.toLowerCase().includes(query)
    );

    setSearchResults(filtered);
  }, [searchQuery, allProviders]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
 
  const handleShare = () => {
    const patientHistoryData = `Patient History Report\nGenerated: ${new Date().toLocaleDateString()}\n\nDemographics:\n- Age: 36\n- Height: 5'8"\n- Weight: 205 lbs\n\nVital Signs:\n- 2 metrics recorded\n\nMedications:\n- 0 listed\n\nAllergies:\n- 0 listed\n\nPayment History:\n${paymentHistory.map(p => `${p.date} - ${p.description} - ${p.amount}`).join('\n')}`;
    
    navigator.clipboard.writeText(patientHistoryData)
      .then(() => {
        alert("✅ Patient history copied to clipboard successfully!");
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert("❌ Failed to copy patient history to clipboard");
      });
  };

  const handleRegenerateHistory = () => {
    const historyData = `Patient History Report\nGenerated: ${new Date().toLocaleDateString()}\n\nDemographics:\n- Age: 36\n- Height: 5'8"\n- Weight: 205 lbs\n\nVital Signs:\n- 2 metrics recorded\n\nMedications:\n- 0 listed\n\nAllergies:\n- 0 listed\n\nPayment History:\n${paymentHistory.map(p => `${p.date} - ${p.description} - ${p.amount}`).join('\n')}`;
    
    const blob = new Blob([historyData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'patient-history.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert("✅ Patient history downloaded successfully!");
  };

  const handleInsuranceSubmit = (e) => {
    e.preventDefault();
    
    if (!validateInsuranceForm()) {
      return;
    }


    if (editingInsurance) {
      // Update existing insurance
      setInsuranceData(insuranceData.map(ins => 
        ins.id === editingInsurance.id 
          ? { ...ins, ...formData }
          : ins
      ));
    } else {
      // Add new insurance
      const newInsurance = {
        id: Date.now(),
        ...formData
      };
      setInsuranceData([...insuranceData, newInsurance]);
    }
    setFormData({ carrier: "", policy: "", group: "", plan: "" });
    setFormErrors({ carrier: "", policy: "", group: "", plan: "" });
    setEditingInsurance(null);
    setShowModal(false);
  };

  const handleEditInsurance = (insurance) => {
    setFormData({
      carrier: insurance.carrier,
      policy: insurance.policy,
      group: insurance.group,
      plan: insurance.plan
    });
    setFormErrors({ carrier: "", policy: "", group: "", plan: "" });
    setEditingInsurance(insurance);
    setShowModal(true);
  };

  const handleDeleteInsurance = (id) => {
    setInsuranceData(insuranceData.filter(ins => ins.id !== id));
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    
    if (!validateAppointmentForm()) {
      return;
    }
    const newAppointment = {
      id: Date.now(),
      ...appointmentForm,
      dateTime: `${appointmentForm.date} ${appointmentForm.time}`
    };
    setAppointments([...appointments, newAppointment]);
    setAppointmentForm({
      provider: "",
      date: "",
      time: "",
      type: "Consultation",
      reason: "",
      notes: ""
    });
    setAppointmentErrors({
      provider: "",
      date: "",
      time: "",
      type: "",
      reason: "",
      notes: ""
    });
    setShowAppointmentModal(false);
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      const error = validateInsuranceField(name, value);
      setFormErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleAppointmentInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (appointmentErrors[name]) {
      const error = validateAppointmentField(name, value);
      setAppointmentErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const renderContent = () => {
    if (activeTab === "Care Team") {
      return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md w-full max-w-full overflow-hidden ">
          <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-gilmer)" }}>
            Your Care Team (1)
          </h3>
          
          {/* Fixed Care Team Member Card */}
          <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col xs:flex-row items-start justify-between gap-4 mb-6 overflow-hidden border border-gray-200">
            <div className="flex gap-3 xs:gap-4 items-start w-full xs:flex-1 min-w-0">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-accent text-white rounded-full flex items-center justify-center">
                  <UserCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="text-left min-w-0 flex-1 overflow-hidden">
                <h4 className="text-base sm:text-lg font-semibold truncate" style={{ fontFamily: "var(--font-gilmer)" }}>
                  JH ORG 07302014
                </h4>
                <p className="text-sm text-purple-600 mb-2 truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                  Pharmacist, Infectious Diseases
                </p>
                <div className="text-gray-600 text-sm flex flex-col gap-1" style={{ fontFamily: "var(--font-poppins)" }}>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">JH ORG 07302014</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">SUMERDUCK, VA</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0 self-end xs:self-auto mt-2 xs:mt-0 cursor-pointer">
              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Fixed Search Results */}
          {searchResults.length > 0 && (
            <div className="bg-white rounded-xl border shadow-sm p-4 sm:p-5 mb-6 overflow-hidden">
              <h4 className="text-base sm:text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-gilmer)" }}>
                Search Results ({searchResults.length})
              </h4>
              <div className="space-y-4">
                {searchResults.map(provider => (
                  <div key={provider.id} className="bg-gray-50 rounded-lg p-4 flex flex-col xs:flex-row items-start justify-between gap-3 overflow-hidden">
                    <div className="flex gap-3 xs:gap-4 items-start w-full xs:flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                          <UserCircle2 className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="text-left min-w-0 flex-1 overflow-hidden">
                        <h5 className="text-base font-semibold truncate" style={{ fontFamily: "var(--font-gilmer)" }}>
                          {provider.name}
                        </h5>
                        <p className="text-sm text-blue-600 mb-1 truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                          {provider.specialty}
                        </p>
                        <p className="text-gray-600 text-sm truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                          {provider.location}
                        </p>
                      </div>
                    </div>
                    <button className="text-green-500 hover:text-green-700 transition-colors flex-shrink-0 self-end xs:self-auto text-sm font-medium mt-2 xs:mt-0">
                      Add to Team
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (activeTab === "Insurance") {
      return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md w-full max-w-full overflow-hidden">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ fontFamily: "var(--font-gilmer)" }}>
            <span>Insurance Information</span>
            <button
              className="px-4 py-2 rounded-full bg-primary-accent text-white text-sm hover:bg-opacity-90 transition w-full sm:w-auto cursor-pointer"
              onClick={() => {
                setFormData({ carrier: "", policy: "", group: "", plan: "" });
                setFormErrors({ carrier: "", policy: "", group: "", plan: "" });
                setEditingInsurance(null);
                setShowModal(true);
              }}
            >
              + Add Insurance
            </button>
          </h2>
          {insuranceData.map((insurance) => (
            <div key={insurance.id} className="bg-white rounded-xl border shadow-sm p-4 sm:p-5 mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 overflow-hidden">
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-semibold mb-2 truncate" style={{ fontFamily: "var(--font-gilmer)" }}>
                  {insurance.carrier}
                </h4>
                <p className="text-gray-700 text-sm truncate" style={{ fontFamily: "var(--font-poppins)" }}>Policy: {insurance.policy}</p>
                <p className="text-gray-700 text-sm truncate" style={{ fontFamily: "var(--font-poppins)" }}>Group: {insurance.group}</p>
                <p className="text-gray-700 text-sm truncate" style={{ fontFamily: "var(--font-poppins)" }}>Plan: {insurance.plan}</p>
              </div>
              <div className="flex gap-3 items-center self-end sm:self-auto">
                <button 
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => handleEditInsurance(insurance)}
                >
                  <Pencil className="w-5 h-5" />
                </button>
                <button 
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => handleDeleteInsurance(insurance.id)}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "Appointments") {
      return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md w-full max-w-full overflow-hidden">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ fontFamily: "var(--font-gilmer)" }}>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Appointments
            </span>
            <button
              className="px-4 py-2 rounded-full bg-primary-accent text-white text-sm flex items-center gap-2 hover:opacity-90 transition w-full sm:w-auto cursor-pointer"
              onClick={() => setShowAppointmentModal(true)}
            >
              <Plus className="w-4 h-4" /> Schedule Appointment
            </button>
          </h2>
          {appointments.length === 0 ? (
            <p className="text-gray-500 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
              No appointments scheduled yet.
            </p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="bg-white rounded-xl border shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 overflow-hidden">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-semibold mb-2 truncate" style={{ fontFamily: "var(--font-gilmer)" }}>
                      {appointment.provider}
                    </h4>
                    <p className="text-gray-700 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                      Date: {appointment.date} at {appointment.time}
                    </p>
                    <p className="text-gray-700 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                      Type: {appointment.type}
                    </p>
                    {appointment.reason && (
                      <p className="text-gray-700 text-sm truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                        Reason: {appointment.reason}
                      </p>
                    )}
                  </div>
                  <button 
                    className="text-red-500 hover:text-red-700 self-end sm:self-auto cursor-pointer"
                    onClick={() => handleDeleteAppointment(appointment.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (activeTab === "Patient History") {
      return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md w-full max-w-full overflow-hidden">
          <h2 className="text-lg sm:text-xl font-semibold flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6" style={{ fontFamily: "var(--font-gilmer)" }}>
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" /> Patient History
            </span>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-1 bg-primary-accent text-white px-3 py-1.5 rounded-md hover:bg-secondary transition text-sm w-full sm:w-auto cursor-pointer"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button 
                onClick={handleRegenerateHistory}
                className="flex items-center justify-center gap-1 bg-primary-accent text-white px-3 py-1.5 rounded-md hover:bg-secondary transition text-sm w-full sm:w-auto cursor-pointer"
              >
                <FileText className="w-4 h-4" /> Regenerate History
              </button>
            </div>
          </h2>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 overflow-hidden">
            <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Last Generated: 06/10/2025
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="overflow-hidden">
                <h4 className="font-semibold truncate">Demographics</h4>
                <p className="text-gray-600 text-sm truncate">Age: 36 • Height: 5'8" • Weight: 205 lbs</p>
              </div>
              <div className="overflow-hidden">
                <h4 className="font-semibold truncate">Vital Signs</h4>
                <p className="text-gray-600 text-sm truncate">2 metrics recorded</p>
              </div>
              <div className="overflow-hidden">
                <h4 className="font-semibold truncate">Medications</h4>
                <p className="text-gray-600 text-sm truncate">0 listed</p>
              </div>
              <div className="overflow-hidden">
                <h4 className="font-semibold truncate">Allergies</h4>
                <p className="text-gray-600 text-sm truncate">0 listed</p>
              </div>
            </div>
            
            {/* Payment History Section */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Payment History</h4>
              <div className="space-y-2">
                {paymentHistory.map((payment, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="text-sm font-medium">{payment.description}</p>
                      <p className="text-xs text-gray-500">{payment.date}</p>
                    </div>
                    <p className="text-sm font-semibold">{payment.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-accent to-secondary py-6 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 px-2" style={{ fontFamily: "var(--font-gilmer)", color: "var(--color-primary)" }}>
          Care Coordination
        </h1>

        {/* ✅ Fixed Responsive Tabs - No horizontal scrolling */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 mb-8 w-full max-w-full overflow-hidden ">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 ">
            {/* First line: Care Team and Insurance */}
            <div className="flex gap-2 sm:gap-4 flex-1">
              {["Care Team", "Insurance"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors whitespace-nowrap flex-1 text-center min-w-0 overflow-hidden ${
                    activeTab === tab ? "bg-primary-accent text-white" : ""
                  }`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Second line: Appointments and Patient History */}
            <div className="flex gap-2 sm:gap-4 flex-1 mt-2 sm:mt-0">
              {["Appointments", "Patient History"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors whitespace-nowrap flex-1 text-center min-w-0 overflow-hidden ${
                    activeTab === tab ? "bg-primary-accent text-white" : ""
                  }`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search section only for Care Team */}
        {activeTab === "Care Team" && (
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 shadow-md w-full max-w-full overflow-hidden">
            <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-gilmer)" }}>
              Find Healthcare Providers
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center w-full relative">
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  className="w-full px-4 py-3 sm:py-4 border rounded-full outline-none text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <button
                    className="absolute right-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-primary-accent text-white text-sm sm:text-base hover:bg-opacity-90 transition-colors w-full sm:w-auto mt-2 sm:mt-0 cursor-pointer">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                Search 
              </button>
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: "var(--font-poppins)" }}>
                Showing results for: "<span className="font-semibold">{searchQuery}</span>"
              </p>
            )}
          </div>
        )}

        {renderContent()}

        {/* Insurance Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-xl p-8 w-full max-w-2xl h-auto max-h-[90vh] relative shadow-lg overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-black font-semibold text-xl hover:text-gray-700 transition-colors"
                onClick={() => setShowModal(false)}
                type="button"
              >
                &times;
              </button>
              <h3
                className="font-medium text-xl mb-6 text-gray-900"
                style={{ fontFamily: "var(--font-gilmer)" }}
              >
                {editingInsurance ? "Edit Insurance" : "Add Insurance"}
              </h3>
              <form onSubmit={handleInsuranceSubmit} className="flex flex-col gap-6">
                {/* Insurance Carrier */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Insurance Carrier *
                  <input
                    type="text"
                    name="carrier"
                    placeholder="e.g., Blue Cross Blue Shield"
                    className={`px-4 py-3 mt-2 rounded-lg border placeholder:text-gray-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      formErrors.carrier ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.carrier}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.carrier && (
                    <span className="text-red-500 text-sm mt-1">{formErrors.carrier}</span>
                  )}
                </label>

                {/* Policy Number - Numbers Only */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Policy Number *
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="policy"
                    placeholder="Enter policy number (numbers only)"
                    className={`px-4 py-3 mt-2 rounded-lg border placeholder:text-gray-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      formErrors.policy ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.policy}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.policy && (
                    <span className="text-red-500 text-sm mt-1">{formErrors.policy}</span>
                  )}
                </label>

                {/* Group Number - Numbers Only */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Group Number
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="group"
                    placeholder="Enter group number (numbers only)"
                    className={`px-4 py-3 mt-2 rounded-lg border placeholder:text-gray-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      formErrors.group ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.group}
                    onChange={handleInputChange}
                  />
                  {formErrors.group && (
                    <span className="text-red-500 text-sm mt-1">{formErrors.group}</span>
                  )}
                </label>

                {/* Plan Type */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Plan Type
                  <input
                    type="text"
                    name="plan"
                    placeholder="e.g., PPO, HMO, EPO"
                    className={`px-4 py-3 mt-2 rounded-lg border placeholder:text-gray-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      formErrors.plan ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.plan}
                    onChange={handleInputChange}
                  />
                  {formErrors.plan && (
                    <span className="text-red-500 text-sm mt-1">{formErrors.plan}</span>
                  )}
                </label>

                <button
                  type="submit"
                  className="mt-4 bg-primary-accent text-white rounded-lg py-3 font-medium text-base hover:bg-secondary transition-colors"
                >
                  {editingInsurance ? "Update Insurance" : "Add Insurance"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Appointment Modal */}
        {showAppointmentModal && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-xl p-8 w-full max-w-2xl h-auto max-h-[90vh] relative shadow-lg overflow-y-auto">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-black font-semibold text-xl hover:text-gray-700 transition-colors"
                onClick={() => setShowAppointmentModal(false)}
                type="button"
              >
                &times;
              </button>

              {/* Modal Title */}
              <h3
                className="font-medium text-xl mb-6 text-gray-900"
                style={{ fontFamily: "var(--font-gilmer)" }}
              >
                Schedule New Appointment
              </h3>

              {/* Appointment Form */}
              <form onSubmit={handleAppointmentSubmit} className="flex flex-col gap-6">
                {/* Select Provider */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Select Provider *
                  <select
                    name="provider"
                    className={`px-4 py-3 mt-2 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      appointmentErrors.provider ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={appointmentForm.provider}
                    onChange={handleAppointmentInputChange}
                    required
                  >
                    <option value="" disabled>
                      Choose a provider
                    </option>
                    <option value="Dr. John Smith">Dr. John Smith</option>
                    <option value="Dr. Jane Doe">Dr. Jane Doe</option>
                    <option value="Dr. Mike Johnson">Dr. Mike Johnson</option>
                    <option value="Dr. Sarah Wilson">Dr. Sarah Wilson</option>
                  </select>
                  {appointmentErrors.provider && (
                    <span className="text-red-500 text-sm mt-1">{appointmentErrors.provider}</span>
                  )}
                </label>

                {/* Date and Time */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <label
                    className="flex flex-col text-base font-normal flex-1 text-gray-700"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Date *
                    <input
                      type="date"
                      name="date"
                      className={`px-4 py-3 mt-2 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                        appointmentErrors.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                      value={appointmentForm.date}
                      onChange={handleAppointmentInputChange}
                      required
                    />
                    {appointmentErrors.date && (
                      <span className="text-red-500 text-sm mt-1">{appointmentErrors.date}</span>
                    )}
                  </label>

                  <label
                    className="flex flex-col text-base font-normal flex-1 text-gray-700"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Time *
                    <input
                      type="time"
                      name="time"
                      className={`px-4 py-3 mt-2 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                        appointmentErrors.time ? 'border-red-500' : 'border-gray-300'
                      }`}
                      value={appointmentForm.time}
                      onChange={handleAppointmentInputChange}
                      required
                    />
                    {appointmentErrors.time && (
                      <span className="text-red-500 text-sm mt-1">{appointmentErrors.time}</span>
                    )}
                  </label>
                </div>

                {/* Appointment Type */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Appointment Type *
                  <select
                    name="type"
                    className={`px-4 py-3 mt-2 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      appointmentErrors.type ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={appointmentForm.type}
                    onChange={handleAppointmentInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="Consultation">Consultation</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Lab Test">Lab Test</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Routine Checkup">Routine Checkup</option>
                  </select>
                  {appointmentErrors.type && (
                    <span className="text-red-500 text-sm mt-1">{appointmentErrors.type}</span>
                  )}
                </label>

                {/* Reason for Visit */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Reason for Visit
                  <input
                    type="text"
                    name="reason"
                    placeholder="Brief description"
                    className={`px-4 py-3 mt-2 rounded-lg border placeholder:text-gray-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      appointmentErrors.reason ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={appointmentForm.reason}
                    onChange={handleAppointmentInputChange}
                  />
                  {appointmentErrors.reason && (
                    <span className="text-red-500 text-sm mt-1">{appointmentErrors.reason}</span>
                  )}
                  <span className="text-xs text-gray-500 mt-1">
                    {appointmentForm.reason.length}/200 characters
                  </span>
                </label>

                {/* Additional Notes */}
                <label
                  className="flex flex-col text-base font-normal text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Additional Notes
                  <textarea
                    name="notes"
                    placeholder="Any special instructions or information"
                    className={`px-4 py-3 mt-2 rounded-lg border placeholder:text-gray-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all ${
                      appointmentErrors.notes ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={appointmentForm.notes}
                    onChange={handleAppointmentInputChange}
                    rows="3"
                  />
                  {appointmentErrors.notes && (
                    <span className="text-red-500 text-sm mt-1">{appointmentErrors.notes}</span>
                  )}
                  <span className="text-xs text-gray-500 mt-1">
                    {appointmentForm.notes.length}/500 characters
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 bg-primary-accent text-white rounded-lg py-3 font-medium text-base hover:bg-secondary transition-colors"
                >
                  Schedule Appointment
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}