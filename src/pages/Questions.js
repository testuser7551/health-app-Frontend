// programDays.js
// 180-day Menopause Wellness Program dataset (flattened single array)

export const programDays = [
  {
    day: 1,
    title: "",
    description:
      "No content for that day",
    askRachel: true,
    questions: [
      // STEP 1: Verification
      { id: 1, type: "scale", label: "Sleep(1–10)", min: 1, max: 10 },
      { id: 2, type: "scale", label: "Mood(1–10)", min: 1, max: 10 },
      { id: 3, type: "number", label: "Hot Flases-Count" },
      { id: 4, type: "number", label: "Hydration (glasses)" },
    ],

    checklist: [
      "Complete all health and lifestyle questions",
      "Set your wellness goals",
      "Confirm readiness to begin the program",
    ],
  },
  {
    day: 2,
    title: "Menopause Wellness Program - Day 2",
    description: "Message from Rachel: Just to reiterate, here's the plan we agreed upon, XXY. We strongly believe that YOU can control how you feel during this menopause transition. By sending us every day:\n1. Your food choices\n2. Daily physical activity record\n3. 'Mood check'\nIt makes you more aware of what is going on with your body and mind. So make sure you let us know how you are doing every day!\nThanks, Dr Roizen and the 4YOUngevity.com team",
    askRachel: true,
    questions: [
      // STEP 1: Food Intake
      {
        id: 101,
        type: "checkbox-group",
        label: "Food Log for Today",
        options: [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Morning snack",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Afternoon snack",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Evening snack",
          "7:35 p.m. - Kitchen closed for the night"
        ],
        suggestions: [
          "Review your meals for balance and nutrient intake.",
          "Notice patterns or late-night snacking to adjust tomorrow."
        ]
      },

      // STEP 2: Physical Activity
      {
        id: 102,
        type: "yes-no",
        label: "Did you complete any physical activity today?",
        suggestions: {
          Yes: [
            "Great job staying active! Every step counts toward your health goals.",
            "Consistency is key — keep it up!"
          ],
          No: [
            "No worries! Tomorrow is a new opportunity to move your body.",
            "Even a short walk counts — try 10 minutes tomorrow."
          ]
        }
      },
      {
        id: 103,
        type: "number",
        label: "Minutes of physical activity today",
        suggestions: [
          "Tracking minutes helps you notice patterns and progress.",
          "Celebrate any movement — even 5–10 minutes adds up!"
        ]
      },
      {
        id: 104,
        type: "single-choice",
        label: "Type of physical activity",
        options: ["Walking", "Treadmill", "Bike", "Swimming", "Strength training", "Sports", "Other"],
        suggestions: [
          "Variety in activity keeps your body challenged and engaged.",
          "Strength + cardio together improve overall wellness."
        ]
      },

      // STEP 3: Mood Check
      {
        id: 105,
        type: "scale",
        label: "How do you feel today? (1 = not great, 10 = great)",
        min: 1,
        max: 10,
        suggestions: {
          lowRange: [
            "Try a 5-minute breathing exercise or light stretch.",
            "Even small steps like a short walk can lift your mood."
          ],
          midRange: [
            "Good — small improvements add up. Keep tracking your progress."
          ],
          highRange: [
            "Fantastic! Keep enjoying your day and celebrate your achievements.",
            "Your positive mood helps you stay consistent. Way to go!"
          ]
        }
      },

      // STEP 4: Mindful Eating
      {
        id: 106,
        type: "checkbox",
        label: "Did you eat mindfully today?",
        suggestions: {
          checked: [
            "Mindful eating improves digestion and helps recognize fullness cues."
          ],
          unchecked: [
            "Try one mindful bite per meal tomorrow: chew slowly and notice flavors."
          ]
        }
      },

      // STEP 5: Daily Adherence Check
      {
        id: 107,
        type: "single-choice",
        label: "Daily Adherence Check",
        options: [
          "Sent food log and met activity goal",
          "Sent food log but did not meet activity goal",
          "Did not send food log",
          "Sent mood check",
          "Did not send mood check"
        ],
        suggestions: {
          "Sent food log and met activity goal": [
            "Awesome! Keeping track every day makes a big difference. Pat yourself on the back!"
          ],
          "Sent food log but did not meet activity goal": [
            "Good job logging your food! Try adding a few more minutes of activity tomorrow."
          ],
          "Did not send food log": [
            "Remember, tracking your food helps awareness. Try to send it tomorrow!"
          ],
          "Sent mood check": [
            "Great! Checking in on your mood is important for self-awareness."
          ],
          "Did not send mood check": [
            "Checking your mood daily helps manage menopause symptoms. Try tomorrow!"
          ]
        }
      }
    ],

    checklist: [
      "Log all meals today",
      "Record any physical activity",
      "Do a mood check",
      "Track mindful eating"
    ]
  },


  // The remaining days (3–180) would continue in this array,
  // each as a plain object — for example:
  {
    day: 3,
    title: "Menopause Wellness Program - Day 3",
    description: "Food Felon Check: XXY — Are you staying away from the 5 food felons? We hope so!",
    askRachel: true,
    questions: [
      // STEP 1: Five Food Felons Check
      {
        id: 201,
        type: "single-choice",
        label: "Did you stay away from the Five Food Felons today?",
        options: ["Yes", "No"],
        suggestions: {
          Yes: [
            "FANTASTIC JOB. We know this is tough to do but you did it!",
            "YEAH! YOU are such a strong woman!",
            "GREAT! Can't wait to hear back from you tomorrow!"
          ],
          No: [
            "OK, keep trying, we know it is tough, let us know again tomorrow.",
            "There is nothing you cannot do...try again tomorrow!",
            "Try just a little harder...you can do it tomorrow...we know you can!"
          ]
        }
      },

      // STEP 2: Step Tracking Follow-up
      {
        id: 202,
        type: "single-choice",
        label: "Did you send your steps for the past 1-2 days?",
        options: [
          "Yes, sent steps on both Days 1 & 2",
          "Yes, sent steps on either Day 1 or Day 2",
          "No, did not send steps"
        ],
        suggestions: {
          "Yes, sent steps on both Days 1 & 2": [
            "Thanks for sending your steps in. I need them every day, so keep it up! — Rachel for Dr Roizen and the 4YOUngevity.com team"
          ],
          "Yes, sent steps on either Day 1 or Day 2": [
            "Thanks for sending your steps in. I need them every day, so keep it up! — Rachel for Dr Roizen and the 4YOUngevity.com team"
          ],
          "No, did not send steps": [
            "Hey! Do you think we can succeed in your plan without you? This plan is about your health and your life! I need your steps daily.",
            "If you don't have a pedometer on your phone, you can order one at the app store. Use Apple Health or Android Health apps to start with.",
            "Now send me your steps for yesterday, XXY. — Rachel for Dr Roizen and the 4YOUngevity.com team"
          ]
        }
      },

      // STEP 3: Optional Daily Check-ins
      {
        id: 203,
        type: "scale",
        label: "How do you feel today? (1 = not great, 10 = great)",
        min: 1,
        max: 10,
        suggestions: {
          lowRange: [
            "Try a 5-minute breathing exercise or light stretch.",
            "Even a short walk can lift your mood."
          ],
          midRange: [
            "Good — small improvements add up. Keep tracking your progress."
          ],
          highRange: [
            "Fantastic! Keep enjoying your day and celebrate your achievements."
          ]
        }
      }
    ],

    checklist: [
      "Avoid the Five Food Felons today",
      "Send your daily steps",
      "Check in on your mood"
    ]
  },
  {
    day: 4,
    title: "Menopause Wellness Program - Day 4",
    description: "Mid-Week Mood Check: It is now the middle of your first week, how are you doing? It's time for our mid-week mood check!",
    askRachel: true,
    questions: [
      {
        id: 301,
        type: "single-choice",
        label: "How do you feel today?",
        options: [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        suggestions: {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Let us know how you are doing tomorrow. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy. Let us know if that helps the mood."
          ],
          "C. I do not feel great today": [
            "We would like to give you instructions on breathing exercises you can use anytime during the day when you want to feel just a little more relaxed. Click here to learn a double deep breathing program.",
            "When you have 30 minutes, learn the first exercise in the stress management program."
          ]
        }
      },
      {
        id: 302,
        type: "scale",
        label: "Rate your stress level today (1 = low, 10 = high)",
        min: 1,
        max: 10,
        suggestions: {
          lowRange: [
            "Great! Keep using your relaxation techniques to stay balanced."
          ],
          midRange: [
            "Try a 5-minute mindfulness break or breathing exercise."
          ],
          highRange: [
            "Consider taking 10–15 minutes for deep breathing or a short walk to help reduce stress."
          ]
        }
      }
    ],
    checklist: [
      "Complete mid-week mood check",
      "Practice recommended stress management techniques",
      "Stay consistent with steps and food logging"
    ]
  },

  {
    day: 5,
    title: "Menopause Wellness Program - Day 5",
    description: "Hot Flashes Education & Assessment: Today we want to address some physical symptoms of menopause, particularly hot flashes.",
    askRachel: true,
    educationalContent: "Hot flashes are caused by decreasing and fluctuating estrogen levels. Most women experience the most hot flashes in the first few years after menopause. Common triggers include stress, caffeine, and alcohol.",
    questions: [
      // Hot Flashes Assessment
      {
        id: 401,
        type: "single-choice",
        label: "Are you experiencing hot flashes?",
        options: [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        suggestions: {
          "A. Yes, they are driving me crazy!": [
            "Let's review possible treatment options and strategies to help you manage hot flashes."
          ],
          "B. Yes, but they are tolerable.": [
            "Try to get a good night's sleep and relax for 15 minutes before bedtime.",
            "Limit caffeine and alcohol — this may help symptoms.",
            "Keep staying active — send us those steps daily.",
            "Consider adding soy products to your diet, which may help."
          ],
          "C. No": [
            "Great! Stay active and continue sending daily steps.",
            "You lucky woman! We'll check back on this symptom next week.",
            "Wonderful! Focus on diet and steps for overall wellness."
          ]
        }
      },

      // Step Tracking Assessment
      {
        id: 402,
        type: "number",
        label: "Average daily steps this week",
        suggestions: [
          "Use this information to set your daily step goal for next week."
        ]
      },
      {
        id: 403,
        type: "single-choice",
        label: "Recommended step goal based on your current activity",
        options: [
          "Under 4000 steps for 3 days → aim for 5,000 steps/day next week",
          "Variable amounts, max 6,000 steps → aim for 6,000 steps/day next week",
          "Variable amounts, max 8,000 steps → aim for 8,000 steps/day next week",
          "Variable amounts, max 10,000 steps → aim for 10,000 steps/day next week",
          "Already doing 10,000+ steps → maintain 10,000+ steps/day minimum"
        ],
        suggestions: [
          "Remember: extra steps do not average out — aim for the minimum recommended steps each day.",
          "Maintaining consistent daily steps helps improve heart health, weight, and overall wellbeing."
        ]
      },

      // Optional Mood Check
      {
        id: 404,
        type: "scale",
        label: "How do you feel today? (1 = not great, 10 = great)",
        min: 1,
        max: 10,
        suggestions: {
          lowRange: [
            "Take a 5–10 minute walk or practice deep breathing to lift your mood."
          ],
          midRange: [
            "Good — keep tracking your mood and staying active."
          ],
          highRange: [
            "Fantastic! Celebrate your achievements and continue healthy habits."
          ]
        }
      }
    ],
    checklist: [
      "Complete hot flashes assessment",
      "Log your daily steps",
      "Check in on your mood",
      "Follow the recommended step goals for next week"
    ]
  }


  ,
  {
    day: 6,
    title: "Menopause Wellness Program - Day 6",
    description: "Bone Health Education: Lack of estrogen can cause your bones to lose mass or thickness (osteopenia or osteoporosis). It's important to get enough calcium and vitamin D, incorporate strength training, and do jumping exercises if your doctor approves.",
    askRachel: true,
    educationalContent: "Most women should obtain 1200mg of calcium daily, ideally from diet. Strength training and jumping 20 times morning and night on a hard surface can also help if cleared by your doctor.",
    questions: [
      // Step 1: Calcium List Option
      {
        id: 601,
        type: "yes-no",
        label: "Do you want to see or have me read the calcium-rich foods list?"
      },

      // Step 2: Supplements Assessment
      {
        id: 602,
        type: "single-choice",
        label: "Calcium intake today (1200 mg, half from supplements)?",
        options: [
          "A. Yes",
          "B. Probably, at least 600 mg from supplements",
          "C. No"
        ],
        suggestions: {
          "A. Yes": ["Great job! Meeting your calcium goals helps maintain bone density."],
          "B. Probably, at least 600 mg from supplements": ["Good effort! Try to meet at least half from your diet next time."],
          "C. No": ["Aim to get your calcium intake tomorrow, even small steps help."]
        }
      },
      {
        id: 603,
        type: "single-choice",
        label: "Vitamin D2/3 with K2 intake today (1000 units)?",
        options: ["A. Yes", "B. No"],
        suggestions: {
          "A. Yes": ["Excellent! Vitamin D and K2 support bone health."],
          "B. No": ["Try to include this tomorrow to support your bones."]
        }
      },
      {
        id: 604,
        type: "single-choice",
        label: "Magnesium intake today (400 mg)?",
        options: ["A. Yes", "B. No"],
        suggestions: {
          "A. Yes": ["Great! Magnesium helps maintain bone and muscle health."],
          "B. No": ["Remember to include magnesium-rich foods or supplements tomorrow."]
        }
      },
      {
        id: 605,
        type: "single-choice",
        label: "Vitamin K2 from green, leafy vegetables today?",
        options: ["A. Yes", "B. No"],
        suggestions: {
          "A. Yes": ["Excellent! Vitamin K2 is important for bone mineralization."],
          "B. No": ["Try to include some leafy greens tomorrow for better bone support."]
        }
      },

      // Step 3: Strength Training
      {
        id: 606,
        type: "single-choice",
        label: "Did you do strength training today?",
        options: ["A. Yes", "B. No"],
        suggestions: {
          "A. Yes": ["Awesome! Strength training supports bone and muscle health."],
          "B. No": ["Try to include at least one strength session tomorrow if cleared by your doctor."]
        }
      }
    ],
    checklist: [
      "Check your calcium intake",
      "Take supplements as recommended",
      "Complete strength training exercises",
      "Follow bone health recommendations"
    ]
  },
  {
    day: 7,
    title: "Menopause Wellness Program - Day 7",
    description: "Weekly Check-In: We have made it through one week together! Today is your weekly review.",
    askRachel: true,
    questions: [
      // Step 1: Weekly Measurements
      {
        id: 701,
        type: "group",
        label: "Weekly Measurements",
        fields: [
          { type: "number", label: "Weight (lbs or kg)" },
          { type: "number", label: "Waist Measurement (inches or cm)" }
        ],
        suggestions: {
          text: [
            "Tracking weekly measurements helps you notice trends over time.",
            "Celebrate improvements, no matter how small."
          ]
        }
      },

      // Step 2: Physical Activity
      {
        id: 702,
        type: "number",
        label: "Steps this week",
        suggestions: [
          "Great job tracking your steps! Consistent walking helps your heart and overall health."
        ]
      },
      {
        id: 703,
        type: "text",
        label: "Other Exercise (include resistance and cardio exercises)"
      },

      // Step 3: Food Log
      {
        id: 704,
        type: "checkbox-group",
        label: "Food Log for the Week",
        options: [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Morning snack",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Afternoon snack",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Evening snack",
          "7:35 p.m. - Kitchen closed for the night"
        ],
        suggestions: [
          "Review your meals for balance and nutrient intake.",
          "Notice patterns or late-night snacking to adjust next week."
        ]
      }
    ],
    checklist: [
      "Complete weekly measurements",
      "Log your physical activity",
      "Review your food intake for the week",
      "Reflect on progress and set goals for next week"
    ]
  },
  {
    day: 8,
    title: "Menopause Wellness Program - Day 8",
    description: "Weekly Progress Review: Ok XXY let's review your weekly data.",
    askRachel: true,
    questions: [
      {
        id: 801,
        type: "group",
        label: "Weekly Measurements Comparison",
        fields: [
          { type: "number", label: "Starting Waist Measurement (inches or cm)" },
          { type: "number", label: "Current Waist Measurement (inches or cm)" },
          { type: "number", label: "Starting Weight (lbs or kg)" },
          { type: "number", label: "Current Weight (lbs or kg)" },
          { type: "number", label: "Step Goal (10,000 or 10% higher than week 1)" }
        ]
      },
      {
        id: 802,
        type: "single-choice",
        label: "Have you been sending food and steps daily?",
        options: ["Yes", "No"],
        suggestions: {
          Yes: [
            "We are so proud of you for being in touch with us every day! Taking control of your life and symptoms at this time of biologic life change begins with making yourself AWARE of what you are doing to your body every day. Double BRAVO if this is the first time you recorded food and steps!"
          ],
          No: [
            "We don't want this program to be a burden, but we need your daily food and step reports to coach you effectively. Please make sure to send steps and food EVERY DAY!"
          ]
        }
      }
    ],
    checklist: [
      "Compare waist and weight measurements from start to now",
      "Confirm step goal for next week",
      "Ensure daily food and step reporting"
    ]
  },
  {
    day: 9,
    title: "Menopause Wellness Program - Day 9",
    description: "Daily Step Motivation: Let's check your step performance today!",
    askRachel: true,
    questions: [
      {
        id: 901,
        type: "single-choice",
        label: "Step performance today:",
        options: [
          "Hit target steps",
          "Missed target by < 1,500 steps (first time)",
          "Missed target by < 1,500 steps (repeat occurrence)",
          "Missed target by > 1,500 steps",
          "Multiple misses > 1,500 steps",
          "Did not send steps (first time)",
          "Did not send steps (repeat occurrence)"
        ],
        suggestions: {
          "Hit target steps": [
            "BRAVO!",
            "FANTASTIC!",
            "Great - Keep on stepping strong!",
            "You did it, FANTASTICO!",
            "Check that Baby as done!",
            "You are ON TARGET!",
            "WOW, WOW, Love emails with targets done!"
          ],
          "Missed target by < 1,500 steps (first time)": [
            "You were so close on steps! Walk 100 steps/minute — just a few more minutes and you'll hit your goal!"
          ],
          "Missed target by < 1,500 steps (repeat occurrence)": [
            "Come on, you're so close! This is about your health — you can do it!"
          ],
          "Missed target by > 1,500 steps": [
            "Hey — get on it! It's not that hard. Let's move!"
          ],
          "Multiple misses > 1,500 steps": [
            "Is ___ more steps too tough? This plan is about your HEALTH — you need to prioritize yourself!"
          ],
          "Did not send steps (first time)": [
            "Hey, we need your daily step report. Use a pedometer or your phone's Health App to track and send your steps!"
          ],
          "Did not send steps (repeat occurrence)": [
            "Okay, have you quit? You control your health — your choice. Please send steps daily."
          ]
        }
      }
    ],
    checklist: [
      "Check your step performance",
      "Send daily step report if not sent",
      "Stay motivated and keep walking"
    ]
  },
  {
    day: 10,
    title: "Menopause Wellness Program - Day 10",
    description: "Healthy Snacking Education: Staying away from the 5 food felons is easier when you prepare healthy snacks ahead of time.",
    askRachel: true,
    educationalContent: "Key to successful dietary planning: prepare meals/snacks ahead to avoid sugary, waist-expanding foods. Options include cut-up vegetables, sautéed vegetables, soups, steel-cut oats, salmon burgers, and emergency snacks like nuts or dried fruit.",
    questions: [
      {
        id: 1001,
        type: "single-choice",
        label: "Did you stay away from the Five Food Felons today?",
        options: ["Yes", "No"],
        suggestions: {
          Yes: [
            "FANTASTIC JOB. We know this is tough but you did it!",
            "YEAH! YOU are such a strong woman!",
            "GREAT! Can't wait to hear back from you tomorrow!"
          ],
          No: [
            "OK, keep trying, we know it is tough. Let us know again tomorrow.",
            "There is nothing you cannot do...try again tomorrow!",
            "Try just a little harder...you can do it tomorrow...we know you can!"
          ]
        }
      },
      {
        id: 1002,
        type: "checkbox-group",
        label: "Healthy Snack Options Prepared Today",
        options: [
          "Cut-up Vegetables (baby carrots, grape tomatoes, broccoli, jicama, sugar snap peas, peppers)",
          "Sautéed Vegetables (olive oil, garlic, red pepper, turmeric)",
          "Soups (prepped weekly)",
          "Steel-cut Oats (prepped weekly)",
          "Salmon Burgers (prepped weekly)",
          "Emergency Foods (nuts, dried fruit, pre-chopped fruits/veggies, edamame)"
        ],
        suggestions: [
          "Preparing healthy snacks ahead helps control hunger and supports waist management.",
          "Aim to close the kitchen by 8:30 p.m. or earlier."
        ]
      }
    ],
    checklist: [
      "Stay away from the 5 food felons",
      "Prepare healthy snacks for the day",
      "Maintain food and step tracking"
    ]
  }
  ,
  {
    day: 11,
    title: "Sleep & Mood Management - Day 11",
    description: "Eating well, sleeping well, and exercising daily are key to managing menopausal mood. Focus on getting 7 hours of sleep each night this week.",
    askRachel: true,
    educationalContent: "Tips for better sleep:\n• Avoid caffeine after 3pm each day\n• Do not watch TV in your bedroom\n• Do not work in bed\n• Wind down for at least 15 minutes before bedtime",
    questions: [
      {
        id: 1101,
        type: "single-choice",
        label: "How do you feel today?",
        options: [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        suggestions: {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."
          ],
          "C. I do not feel great today": [
            "We would like to give you instructions on breathing exercises you can use anytime during the day when you want to feel a little more relaxed. [Link to breathing exercise and stress management program]"
          ]
        }
      }
    ],
    checklist: [
      "Aim for 7 hours of sleep per night",
      "Follow sleep hygiene tips",
      "Check-in on your mood daily"
    ]
  },
  {
    day: 12,
    title: "Hot Flash Treatment Options & Hormone Therapy - Day 12",
    description: "Today we address non-hormonal and hormonal options for hot flashes, including discussion with your gynecologist.",
    askRachel: true,
    educationalContent: "Non-Hormonal Options:\n• Antidepressants: Can help with hot flashes and mood.\n• Soy products: Edamame, tofu (protein-rich, cardiovascular-friendly).\n• Acupuncture: Helps some women.\n\nImportant Notes: Hormone therapy is optional. Discuss with your gynecologist. Consider baby aspirin if using estrogen/progestin to reduce clotting risk.",
    questions: [
      {
        id: 1201,
        type: "yes-no",
        label: "Do you want to review the data on hormone therapy?",
        suggestions: {
          Yes: [
            "Comprehensive Hormone Therapy Education: Benefits include reduced heart attacks, strokes, dementia, breast cancer risk, and bone loss. Always discuss with your doctor before starting."
          ],
          No: [
            "No problem — focus on lifestyle and non-hormonal strategies for now."
          ]
        }
      },
      {
        id: 1202,
        type: "yes-no",
        label: "Do you worry about your bones or belly fat?",
        suggestions: {
          Yes: [
            "Monitoring bone and belly fat is important for health. Continue calcium, vitamin D, and exercise for bone strength."
          ],
          No: [
            "Great! Continue healthy habits to maintain bone and metabolic health."
          ]
        }
      },
      {
        id: 1203,
        type: "yes-no",
        label: "Have you ever had hot flashes?",
        suggestions: {
          Yes: [
            "Track frequency and severity. Discuss non-hormonal or hormonal options with your gynecologist if bothersome."
          ],
          No: [
            "Lucky you! Continue healthy habits to minimize risk."
          ]
        }
      },
      {
        id: 1204,
        type: "yes-no",
        label: "Do you engage in extreme sports?",
        suggestions: {
          Yes: [
            "Be cautious with aspirin or hormone therapy. Discuss safety with your doctor."
          ],
          No: [
            "You may safely consider aspirin as advised by your healthcare provider."
          ]
        }
      }
    ],
    checklist: [
      "Review hormone therapy education if desired",
      "Track hot flashes frequency and severity",
      "Assess bone and belly fat concerns",
      "Discuss options with your gynecologist"
    ]
  },
  {
    day: 13,
    title: "Bone Health & Strength Training - Day 13",
    description: "Focus on maintaining strong bones with calcium, vitamin D, K2, magnesium, weight-bearing exercises, and strength training.",
    askRachel: true,
    educationalContent: "Strength training and jumping exercises help maintain bone mass. Beginners can start with chair-ups, wall pushups, lunges, wall squats, bent-over back rows, and planks. Use the 8-12 rule to adjust weights. Jumping on a hard surface 20 times morning and evening improves hip and spine bone strength. Always check with your doctor before starting new exercises.",
    questions: [
      {
        id: 1301,
        type: "single-choice",
        label: "Calcium 1,200 mg today (half or less from supplements)?",
        options: ["A. Yes", "B. Probably, got 600 mg from a supplement", "C. No"]
      },
      {
        id: 1302,
        type: "yes-no",
        label: "Vitamin D2/3 with K2 1,000 units today?"
      },
      {
        id: 1303,
        type: "yes-no",
        label: "Strength Training today?"
      }
    ],
    checklist: [
      "Ensure calcium, vitamin D, K2, and magnesium intake",
      "Complete at least one strength training session",
      "Perform 20 jumps morning and evening if cleared by your doctor"
    ]
  },
  {
    day: 14,
    title: "Second Weekly Measurements - Day 14",
    description:
      "End of Week 2! Record your weight, waist, steps, other exercises, and food intake. Review your step performance and reflect on your weekly progress.",
    askRachel: true,
    questions: [
      {
        id: 1401,
        type: "group",
        label: "Weekly Measurements",
        fields: [
          { type: "number", label: "Weight (lbs or kg)" },
          { type: "number", label: "Waist Measurement (inches or cm)" }
        ],
        suggestions: {
          text: [
            "Tracking weekly measurements helps you notice trends over time.",
            "Celebrate improvements, no matter how small."
          ]
        }
      },
      {
        id: 1402,
        type: "group",
        label: "Physical Activity Summary",
        fields: [
          { type: "number", label: "Steps (total or average per day)" },
          {
            type: "text",
            label:
              "Other Exercise (include resistance exercises and cardio that makes you sweat)"
          }
        ],
        suggestions: {
          text: [
            "Include all types of movement to get a full picture of your activity.",
            "Remember that resistance training helps maintain muscle and bone health."
          ]
        }
      },
      {
        id: 1403,
        type: "checkbox-group",
        label: "Food Log for the Day",
        options: [
          "7:30 a.m. - Breakfast foods",
          "10:00 a.m. - Morning snack",
          "12:30 p.m. - Lunch foods",
          "3:00 p.m. - Afternoon snack",
          "6:00 p.m. - Dinner foods",
          "7:30 p.m. - Evening snack",
          "7:35 p.m. - Kitchen closed for the night"
        ],
        suggestions: [
          "Review your meals for balance and nutrient intake.",
          "Notice patterns or late-night snacking to adjust next week."
        ]
      },
      {
        id: 1404,
        type: "single-choice",
        label: "Step Performance",
        options: ["Hit or exceeded step goal", "Missed step goal"],
        suggestions: {
          "Hit or exceeded step goal": [
            "FANTASTICO! You hit your steps goal! Keep sending steps; your goal is ___ steps a day, NO EXCUSES.",
            "You are on your way! Your steps hit your target. We are proud of you.",
            "Keep going! Am proud of you (and you should be, too) for your stepping."
          ],
          "Missed step goal": [
            "Hey, you only missed your steps by ___ steps. That is ___ minutes more walking. At the end of your day, look at your pedometer and go for the full goal. Okay?"
          ]
        }
      }
    ],
    checklist: [
      "Record weight and waist measurements",
      "Update steps and other exercises",
      "Complete today’s food log",
      "Reflect on weekly progress and step goals",
      "Plan adjustments for Week 3 based on trends"
    ],
    suggestionPools: {
      positive: [
        "Fantastic consistency — keep tracking and celebrating your progress!",
        "You’re building healthy habits that last beyond this program."
      ],
      moderate: [
        "Good work — small adjustments in steps or meals can boost your next week’s success.",
        "Even if some goals were missed, reflect and reset for next week."
      ],
      low: [
        "It’s okay — focus on one area to improve next week and keep moving forward.",
        "Consistency is key; start fresh and commit to tracking daily."
      ]
    },
    stepCountingReference:
      "If pedometer doesn't record (swimming, biking): count 100 steps per minute for moderate+ intensity, 50 steps per minute for leisurely constant pace."
  }
  ,


  {
    day: 15,
    title: "Third Week Review - Day 15",
    description:
      "Review your weekly progress: waist, weight, step goal, and your adherence to steps and food tracking. Reflect on your achievements and areas for improvement.",
    educationalContent:
      "So here we are now...the 3rd week of the program! How are you doing? We hope you are enjoying this journey as much as we are!",
    askRachel: true,
    questions: [
      {
        id: 1501,
        type: "group",
        label: "Weekly Measurements",
        fields: [
          { type: "number", label: "Starting Waist Measurement (inches)" },
          { type: "number", label: "Current Waist Measurement (inches)" },
          { type: "number", label: "Starting Weight (lbs or kg)" },
          { type: "number", label: "Current Weight (lbs or kg)" },
          { type: "number", label: "Step Goal (10,000 or 10% higher than week 1)" }
        ],
        suggestions: {
          text: [
            "Tracking weekly measurements helps you see trends over time.",
            "Celebrate progress, even small improvements are important!"
          ]
        }
      },
      {
        id: 1502,
        type: "single-choice",
        label: "Daily Adherence Check",
        options: [
          "Sending steps daily and meeting target",
          "Sending steps daily but not meeting target",
          "Not sending steps",
          "Sending food diary daily",
          "Not sending food diary daily"
        ],
        suggestions: {
          "Sending steps daily and meeting target": [
            "Doesn't it feel great to keep track of how active you are every day? Give yourself credit for what you are accomplishing!! Pat yourself on the back and say 'great job!'"
          ],
          "Sending steps daily but not meeting target": [
            "We appreciate you letting us know how you are doing every day. Think about adding another 10 minutes of walking each day — extra steps bring you closer to your goal! Keep letting us know daily."
          ],
          "Not sending steps": [
            "Hey, strong woman...where are you?? We need you to 'talk' to us every day. Start from wherever you are and we will help you get to your goal."
          ],
          "Sending food diary daily": [
            "How does it feel to write down everything you are eating each day? It's an eye-opener! Think about how what you eat affects how you feel."
          ],
          "Not sending food diary daily": [
            "We hope you are keeping track of what you are eating daily! Send your food log to help make better food choices. We'll look for this from you tomorrow."
          ]
        }
      }
    ],
    checklist: [
      "Record starting and current waist and weight measurements",
      "Check step goal for the week",
      "Reflect on adherence to steps and food diary",
      "Plan adjustments for Week 4 based on this review"
    ],
    suggestionPools: {
      positive: [
        "Excellent tracking! You are building strong, consistent habits.",
        "Great job reviewing your week — awareness leads to better results."
      ],
      moderate: [
        "Good effort — small tweaks in tracking or steps can improve next week.",
        "Even partial adherence gives you a starting point to improve from."
      ],
      low: [
        "It’s okay — start fresh and focus on daily steps and food tracking next week.",
        "Small consistent actions can help you catch up and stay on track."
      ]
    }
  }
  ,
  {
    day: 16,
    title: "Basic Check-in - Day 16",
    description:
      "Daily check-in to monitor step activity and food diary adherence. Quick reflection to encourage consistency in reporting and tracking.",
    askRachel: true,
    questions: [
      {
        id: 1601,
        type: "single-choice",
        label: "Step Tracking",
        options: ["Sent steps", "Did not send steps"],
        suggestions: {
          "Sent steps": ["Thanks for letting us know! Keep stepping!"],
          "Did not send steps": [
            "We really need to hear from you! We feel like we are missing out! Please do send tomorrow — it will make us feel better, and women who haven't sent this and then do, report feeling better too. Talk with us tomorrow!"
          ]
        }
      },
      {
        id: 1602,
        type: "single-choice",
        label: "Food Diary",
        options: ["Sent food diary", "Did not send food diary"],
        suggestions: {
          "Sent food diary": ["GREAT! Talk to you tomorrow!"],
          "Did not send food diary": [
            "Please try to keep up with this important part of our program. Hope to hear from you tomorrow."
          ]
        }
      }
    ],
    checklist: [
      "Submit your steps report for today",
      "Update your food diary for today",
      "Reflect on any challenges preventing reporting",
      "Plan to maintain consistency tomorrow"
    ],
    suggestionPools: {
      positive: [
        "Excellent consistency — you are keeping your tracking on point!",
        "Great job staying on top of daily reporting!"
      ],
      moderate: [
        "Good effort — even missing one day, you can get back on track tomorrow.",
        "Try to maintain one habit at a time to improve adherence."
      ],
      low: [
        "It's okay — focus on submitting both steps and food diary tomorrow.",
        "Small steps lead to long-term habit formation — keep trying!"
      ]
    }
  }
  ,
  {
    day: 17,
    title: "Weekly Food Focus & Portion Control - Day 17",
    description:
      "Focus on healthy eating by staying away from the Five Food Felons and practicing portion control strategies for balanced meals.",
    educationalContent:
      "Avoiding the 5 food felons is great, but portion control is equally important. Using smaller plates and being mindful of serving sizes can help you feel satisfied while eating less. Follow portion control strategies and refer to the portion size guide for common foods.",
    askRachel: true,
    questions: [
      {
        id: 1701,
        type: "single-choice",
        label: "Did you stay away from the Five Food Felons today?",
        options: ["Yes", "No"],
        suggestions: {
          Yes: [
            "FANTASTIC JOB. We know this is tough to do but you did it!",
            "YEAH! YOU are such a strong woman!",
            "GREAT! Can't wait to hear back from you tomorrow!"
          ],
          No: [
            "OK, keep trying, we know it is tough, let us know again tomorrow.",
            "There is nothing you cannot do...try again tomorrow!",
            "Try just a little harder...you can do it tomorrow...we know you can!"
          ]
        }
      }
    ],
    portionControl: {
      strategies: [
        "Use a 9\", luncheon or salad plate for all meals",
        "Don't keep platters of food on the table",
        "Ask for half portions when you eat out and have the other half boxed to take home",
        "Share your order with a companion",
        "Eat a healthy appetizer and soup or salad instead of an entrée"
      ],
      sizeGuide: {
        "Brown rice or whole wheat pasta": "1/2 cup (size of a baseball)",
        "Avocado": "1/4 section",
        "Chicken": "size of the palm of your hand or deck of cards",
        "Fish": "4 oz",
        "Beans": "1/2 cup",
        "Baked sweet potato": "size of a computer mouse",
        "Cheese (low or non-fat)": "four dice",
        "Almonds": "1 ounce (about 23 kernels)",
        "Peanut butter": "2 tablespoons (golf ball size)",
        "Oil": "poker chip size (use spray oils instead of liquid, use olive or canola oil instead of butter)"
      }
    },
    checklist: [
      "Track adherence to avoiding the Five Food Felons",
      "Use portion control strategies for all meals",
      "Refer to the portion size guide when planning meals",
      "Reflect on how portion control affects satiety and hunger",
      "Plan improvements for next week"
    ],
    suggestionPools: {
      positive: [
        "Excellent awareness of your food choices and portion sizes!",
        "Great job applying the strategies — your mind and body benefit from this practice."
      ],
      moderate: [
        "Good effort — focus on using at least one portion control strategy consistently.",
        "Even small improvements in portion control can add up over time."
      ],
      low: [
        "It's okay — pick one portion control tip to start with tomorrow and build from there.",
        "Awareness is the first step; try tracking portions to improve gradually."
      ]
    }
  }
  ,
  {
    day: 18,
    title: "Weekly Mood Check & Stress Management - Day 18",
    description:
      "Weekly mood check and stress management techniques. Includes diaphragmatic breathing exercises and use of inspiratory resistance training device to strengthen the diaphragm and reduce stress.",
    educationalContent:
      "Stress management is key for menopausal well-being. Daily practice of diaphragmatic breathing and inspiratory resistance training can improve mood, resilience, and overall health. Commit to 10 breaths in the morning and 10 in the evening for best results.",
    askRachel: true,
    questions: [
      {
        id: 1801,
        type: "single-choice",
        label: "How do you feel today?",
        options: ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        suggestions: {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Let us know how you are doing tomorrow. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy. Click here for some positive funny videos."
          ],
          "C. I do not feel great today": [
            "We would like to give you instructions on breathing exercises you can use anytime during the day when you want to feel a little more relaxed.",
            "Diaphragmatic Breathing Exercise: Place a finger on your belly button, inhale deeply through your nose, hold, inhale again, then exhale. Observe the belly movement.",
            "Inspiratory Resistance Training Device: Consider purchasing one to strengthen the diaphragm. Use 10 breaths in the morning and 10 in the evening."
          ]
        }
      },
      {
        id: 1802,
        type: "yes-no",
        label: "Do you think you can get one of the inspiratory resistance devices?",
        suggestions: {
          Yes: ["Great! This will help strengthen your diaphragm and improve stress management."],
          No: ["No worries, try diaphragmatic breathing without a device; it’s still very effective."]
        }
      },
      {
        id: 1803,
        type: "yes-no",
        label: "Can you commit to 10 deep breaths in the morning and 10 before bed using the device (or without if unavailable)?",
        suggestions: {
          Yes: ["Excellent! Consistent practice will help you feel calmer and stronger."],
          No: ["Try to start with just a few breaths each session and gradually increase to 10. Consistency matters more than quantity initially."]
        }
      }
    ],
    checklist: [
      "Perform diaphragmatic breathing daily",
      "Use inspiratory resistance device twice daily if available",
      "Track how you feel before and after the breathing exercises",
      "Practice additional stress management activities as needed",
      "Reflect on mood improvements at the end of the week"
    ],
    suggestionPools: {
      positive: [
        "Fantastic! You are taking steps to manage stress effectively.",
        "Great job committing to daily breathing practice!"
      ],
      moderate: [
        "Good effort — even partial practice helps build awareness and calm.",
        "Try to gradually increase consistency to maximize benefits."
      ],
      low: [
        "It’s okay — start small with a few breaths daily and build up to full practice.",
        "Awareness and intention are the first steps; keep trying!"
      ]
    }
  }
  ,
  {
    day: 19,
    title: "Hot Flash Management & Weight Loss - Day 19",
    description: "Manage hot flashes and focus on weight loss through steps and food.",
    askRachel: true,
    educationalContent: "Most women will experience hot flashes during menopause. The hypothalamus controls temperature regulation, which is why your chest and face may suddenly feel hot. Weight loss can help reduce hot flashes, so continue focusing on food and steps.",
    questions: [
      {
        id: 1901,
        type: "single-choice",
        label: "Are hot flashes driving you crazy today?",
        options: ["Yes, they are driving me crazy!", "Yes, but they are tolerable.", "No"],
        responses: {
          "Yes, they are driving me crazy!": [
            "Let's review possible treatment options with your doctor.",
            "Remember, keeping active and following your nutrition plan can help."
          ],
          "Yes, but they are tolerable.": [
            "Keep staying active and monitoring your diet.",
            "Try to get a good night's sleep and limit caffeine/alcohol."
          ],
          "No": [
            "That is great! Stay active and keep sending us your steps.",
            "You can focus on your diet and steps!"
          ]
        }
      }
    ],
    checklist: [
      "Track your hot flashes today",
      "Stay active and meet your step goal",
      "Monitor your diet and avoid triggers",
      "Note any changes in symptoms for next check-in"
    ]
  },

  {
    day: 20,
    title: "Weekly Bone Health Focus - Day 20",
    description: "Focus on bone health with supplements, strength training, and potential bone density testing.",
    askRachel: true,
    educationalContent: "Maintaining bone health is crucial during menopause. Ensure sufficient calcium, vitamin D2/3 with K2, and magnesium. Weight-bearing exercises like jumping and strength training help maintain bone mass. Bone density tests are important for monitoring changes.",
    questions: [
      {
        id: 2001,
        type: "single-choice",
        label: "Calcium 1,200 mg today (half from supplements)?",
        options: ["Yes", "Probably, at least got 600 mg from supplement", "No"]
      },
      {
        id: 2002,
        type: "single-choice",
        label: "Vitamin D2/3 with K2 1,000 units today?",
        options: ["Yes", "No"]
      },
      {
        id: 2003,
        type: "single-choice",
        label: "Strength Training today?",
        options: ["Yes", "No"]
      }
    ],
    checklist: [
      "Take daily calcium and vitamin D2/3 with K2",
      "Complete strength training exercises",
      "Perform 20 jumps morning and night on a hard surface (if cleared by your doctor)",
      "Track steps and other exercise",
      "Consider scheduling or reviewing results of a bone density test if applicable"
    ],
    strengthTrainingExercises: [
      "Getting out of a chair without using your hands",
      "Wall pushups graduating to chair push-ups",
      "Lunges with weights (once mastered without weights)",
      "Wall squats with weights (once mastered without weights)",
      "Bent over back rows with weights"
    ]
  },
  {
    "day": 21,
    "title": "Third Weekly Measurements - Day 21",
    "description": "This week, focus on tracking your weight, waist, steps, and meals to notice trends and stay consistent.",
    "educationalContent": "Tracking progress helps maintain motivation. Even small changes can be significant over time!",
    "askRachel": true,
    "questions": [
      {
        "id": 2101,
        "type": "group",
        "label": "Weekly Data Collection",
        "fields": [
          { "type": "number", "label": "Weight (lbs or kg)" },
          { "type": "number", "label": "Waist Measurement (inches or cm)" }
        ],
        "suggestions": {
          "text": [
            "Tracking your measurements weekly helps you see progress and make adjustments as needed.",
            "Even small improvements count — consistency matters most!"
          ]
        }
      },
      {
        "id": 2102,
        "type": "group",
        "label": "Physical Activity Summary",
        "fields": [
          { "type": "number", "label": "Steps" },
          { "type": "text", "label": "Other Exercise (include resistance exercises and cardio that makes you sweat)" }
        ],
        "suggestions": {
          "text": [
            "Regular movement improves energy and mood.",
            "Try to include both strength and cardio exercises each week."
          ]
        }
      },
      {
        "id": 2103,
        "type": "checkbox-group",
        "label": "Food Log for the Day",
        "options": [
          "7:30 a.m. - List breakfast foods",
          "10:00 a.m. - List snacks",
          "12:30 p.m. - List lunch foods",
          "3:00 p.m. - List snacks",
          "6:00 p.m. - List dinner foods",
          "7:30 p.m. - List snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ],
        "suggestions": [
          "Keep a consistent eating schedule to support digestion and energy balance.",
          "Notice if late-night snacking affects your sleep or next-day energy."
        ]
      },
      {
        "id": 2104,
        "type": "single-choice",
        "label": "Daily Adherence Check",
        "options": [
          "Sending steps daily and meeting target",
          "Sending steps daily but not meeting target",
          "Not sending steps",
          "Sending food diary daily",
          "Not sending food diary daily"
        ],
        "suggestions": {
          "Sending steps daily and meeting target": [
            "Excellent work — consistency pays off! Keep it up and celebrate your effort."
          ],
          "Sending steps daily but not meeting target": [
            "You're doing great by staying accountable. Try to add a few more minutes of activity each day!"
          ],
          "Not sending steps": [
            "Start small — even tracking once a day helps you build the habit. You’ve got this!"
          ],
          "Sending food diary daily": [
            "Wonderful! Keeping a food log helps you understand what fuels you best."
          ],
          "Not sending food diary daily": [
            "Try logging just one meal a day to start — it helps increase awareness and progress over time."
          ]
        }
      },
      {
        "id": 2105,
        "type": "scale",
        "label": "How do you feel today? (1 = not great, 10 = great)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": [
            "Take a short walk or stretch break — small actions can boost your mood.",
            "Listen to music or call a friend to lift your energy today."
          ],
          "midRange": [
            "You're doing well — keep your routines consistent and focus on hydration and rest."
          ],
          "highRange": [
            "Keep up the positive momentum! Celebrate how good you’re feeling.",
            "Share your energy — positivity is contagious!"
          ]
        }
      },
      {
        "id": 2106,
        "type": "checkbox",
        "label": "Did you eat mindfully today?",
        "suggestions": {
          "checked": [
            "Mindful eating supports digestion and helps you recognize fullness cues."
          ],
          "unchecked": [
            "Try one mindful meal tomorrow — pause, chew slowly, and enjoy the flavors."
          ]
        }
      }
    ],
    "checklist": [
      "Drink at least 8 glasses of water",
      "Complete daily steps or movement goal",
      "Log all meals and snacks",
      "Eat at least 3 servings of vegetables",
      "Take a short stretching or walk break",
      "Practice mindful eating at one meal",
      "Reflect on weekly measurements and progress"
    ]
  }
  
  ,

  {
    "day": 22,
    "title": "Fourth Week Review - Day 22",
    "description": "Let's review your weekly data and reflect on your progress.",
    "educationalContent": "Looking back at your measurements, steps, and food diary helps you stay motivated and adjust your habits for better results.",
    "askRachel": true,
    "questions": [
      {
        "id": 2201,
        "type": "group",
        "label": "Weekly Data Summary",
        "fields": [
          { "type": "number", "label": "Starting Waist Measurement (inches or cm)" },
          { "type": "number", "label": "Current Waist Measurement (inches or cm)" },
          { "type": "number", "label": "Starting Weight (lbs or kg)" },
          { "type": "number", "label": "Current Weight (lbs or kg)" },
          { "type": "number", "label": "Step Goal" }
        ],
        "suggestions": {
          "text": [
            "Tracking progress helps you see patterns and adjust your habits for better results.",
            "Even small improvements over weeks are meaningful!"
          ]
        }
      },
      {
        "id": 2202,
        "type": "single-choice",
        "label": "Daily Adherence Check",
        "options": [
          "Sending steps daily and meeting target",
          "Sending steps daily but not meeting target",
          "Not sending steps",
          "Sending food diary daily",
          "Not sending food diary daily"
        ],
        "suggestions": {
          "Sending steps daily and meeting target": [
            "Great job! Your motivation is contagious!!"
          ],
          "Sending steps daily but not meeting target": [
            "Keep working at it! Stop and think why you may not be reaching your goal and tell us why...we may be able to help you get there!"
          ],
          "Not sending steps": [
            "Let us know how we can help you...we really want you to succeed! If you report to us, we can help figure out how to get you to start stepping to your goal!"
          ],
          "Sending food diary daily": [
            "Look back at the types of foods you were eating 3 weeks ago and see if your diet has changed... Great to see you keeping up with writing it all down!"
          ],
          "Not sending food diary daily": [
            "We really need to hear from you! We know it takes time to write all your food choices but this exercise in controlling inflammatory foods is worth it! Please keep us in the loop!"
          ]
        }
      },
      {
        "id": 2203,
        "type": "scale",
        "label": "How do you feel about your progress this week? (1 = not great, 10 = excellent)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": [
            "It's okay to have ups and downs. Reflect on what was challenging and plan a small improvement for next week."
          ],
          "midRange": [
            "You're doing well — stay consistent and focus on small wins."
          ],
          "highRange": [
            "Fantastic! Celebrate your progress and keep building on it!"
          ]
        }
      },
      {
        "id": 2204,
        "type": "checkbox",
        "label": "Did you follow your exercise plan this week?",
        "suggestions": {
          "checked": ["Great! Following your plan supports long-term results."],
          "unchecked": ["Try to include at least 2–3 sessions next week to stay on track."]
        }
      },
      {
        "id": 2205,
        "type": "checkbox",
        "label": "Did you maintain your food diary this week?",
        "suggestions": {
          "checked": ["Excellent! Consistent food tracking increases awareness and accountability."],
          "unchecked": ["Even logging a few days can help — start small next week."]
        }
      },
      {
        "id": 2206,
        "type": "text",
        "label": "Any challenges you faced this week?",
        "suggestions": ["Share anything that made sticking to your goals difficult."]
      },
      {
        "id": 2207,
        "type": "text",
        "label": "Any wins or achievements this week?",
        "suggestions": ["Celebrate your wins, no matter how small — it helps maintain motivation."]
      },
      {
        "id": 2208,
        "type": "yes-no",
        "label": "Are you ready to set goals for the next week?",
        "suggestions": {
          "yes": ["Great! Setting clear goals keeps momentum going."],
          "no": ["Take a moment to reflect. It's okay — you can start next week."]
        }
      }
    ],
    "checklist": [
      "Review starting and current measurements and reflect on changes",
      "Check weekly step goals and physical activity consistency",
      "Review your food diary and identify patterns or improvements",
      "Celebrate at least one win or achievement from this week",
      "Identify one challenge to address next week",
      "Plan next week’s goals and schedule",
      "Prepare for upcoming exercise or nutrition adjustments"
    ]
  }
  
  ,
  {
    "day": 23,
    "title": "Basic Check-in - Day 23",
    "description": "A quick check-in to see how you did today with steps and food diary.",
    "educationalContent": "Daily tracking helps you stay consistent and accountable, even with small actions.",
    "askRachel": true,
    "questions": [
      {
        "id": 2301,
        "type": "single-choice",
        "label": "Step Check-in",
        "options": [
          "Sent steps",
          "Did not send steps"
        ],
        "suggestions": {
          "Sent steps": ["Thanks for letting us know! Keep stepping!"],
          "Did not send steps": ["We really need to hear from you! We feel like we are missing out! Please do better tomorrow."]
        }
      },
      {
        "id": 2302,
        "type": "single-choice",
        "label": "Food Diary Check-in",
        "options": [
          "Sent food diary",
          "Did not send food diary"
        ],
        "suggestions": {
          "Sent food diary": ["GREAT! Talk to you tomorrow!"],
          "Did not send food diary": ["Please try to keep up with this important part of our program. Hope to hear from you tomorrow."]
        }
      },
      {
        "id": 2303,
        "type": "scale",
        "label": "How do you feel today? (1 = not great, 10 = great)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["It's okay to have off days. Small actions tomorrow can make a difference."],
          "midRange": ["You're doing well — keep your routine consistent."],
          "highRange": ["Awesome! Keep up the great energy!"]
        }
      },
      {
        "id": 2304,
        "type": "checkbox",
        "label": "Did you engage in any other physical activity today?",
        "suggestions": {
          "checked": ["Great! Extra movement boosts health and energy."],
          "unchecked": ["Try to add at least a short walk or stretch tomorrow."]
        }
      },
      {
        "id": 2305,
        "type": "text",
        "label": "Any challenges you faced today?",
        "suggestions": ["Share anything that made tracking steps or food diary difficult."]
      },
      {
        "id": 2306,
        "type": "text",
        "label": "Any wins or achievements today?",
        "suggestions": ["Celebrate your wins, no matter how small!"]
      },
      {
        "id": 2307,
        "type": "yes-no",
        "label": "Are you ready to plan for tomorrow?",
        "suggestions": {
          "yes": ["Great! Setting intentions keeps momentum going."],
          "no": ["That's okay! Reflect and try again tomorrow."]
        }
      },
      {
        "id": 2308,
        "type": "group",
        "label": "Today's Summary",
        "fields": [
          { "type": "number", "label": "Steps taken today" },
          { "type": "number", "label": "Minutes of other exercise" }
        ],
        "suggestions": {
          "text": ["Recording your steps and exercise helps track consistency and improvements over time."]
        }
      }
    ],
    "checklist": [
      "Drink at least 8 glasses of water",
      "Complete your step goal for today",
      "Log all meals and snacks in your food diary",
      "Engage in at least 10 minutes of other physical activity",
      "Practice mindful eating at one meal",
      "Reflect on any challenges and wins from today",
      "Plan one small goal for tomorrow"
    ]
  }
  
  ,
  {
    "day": 24,
    "title": "Sodium & Restaurant Eating - Day 24",
    "description": "Today we focus on sodium intake and eating out habits, including portion sizes and avoiding overly salted foods.",
    "educationalContent": "Reducing sodium improves heart health, lowers risk of stroke, helps with menopause symptoms, and improves overall well-being. Be mindful when eating out — sodium is often hidden in restaurant foods.",
    "askRachel": true,
    "questions": [
      {
        "id": 2401,
        "type": "yes-no",
        "label": "Did you stay away from the Five Food Felons today?",
        "suggestions": {
          "yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          "no": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      },
      {
        "id": 2402,
        "type": "single-choice",
        "label": "Do you watch your salt/sodium intake or avoid sodium as much as possible?",
        "options": [
          "Yes, I watch my sodium intake",
          "No, I don’t pay attention to sodium"
        ],
        "suggestions": {
          "Yes, I watch my sodium intake": [
            "Excellent! Being mindful of sodium helps your heart and overall health."
          ],
          "No, I don’t pay attention to sodium": [
            "Try small steps tomorrow — even reducing one high-sodium food can help!"
          ]
        }
      },
      {
        "id": 2403,
        "type": "group",
        "label": "Sodium Facts & Recommendations",
        "fields": [
          { "type": "text", "label": "Recommended maximum daily intake (mg)" },
          { "type": "text", "label": "Average American intake (mg)" },
          { "type": "text", "label": "Sodium in one slice of pizza (mg)" }
        ],
        "suggestions": {
          "text": [
            "Remember: the goal is 2,300mg daily max.",
            "Eating out can easily exceed your sodium limits — be mindful of portion sizes!"
          ]
        }
      },
      {
        "id": 2404,
        "type": "checkbox-group",
        "label": "Key Benefits of Reducing Sodium (select all that apply)",
        "options": [
          "Decreases risk of stroke and heart disease",
          "Decreases risk of hip fracture",
          "Reduces dementia risk",
          "Helps with menopause symptoms",
          "Supports better cardiovascular health"
        ],
        "suggestions": [
          "Even modest reductions in sodium intake can have significant health benefits."
        ]
      },
      {
        "id": 2405,
        "type": "checkbox-group",
        "label": "Sodium Reduction Recommendations (select all you plan to try)",
        "options": [
          "Ditch overly-salted foods like chips, canned soups, and frozen meals",
          "Use herbs, spices, and hot sauces instead of salt",
          "Consider potassium chloride salt substitutes (e.g., LoSalt)",
          "Cook fresh foods at home when possible"
        ],
        "suggestions": [
          "Small changes in your cooking and eating habits can make a big difference!"
        ]
      },
      {
        "id": 2406,
        "type": "text",
        "label": "Share any strategies you use when eating at restaurants to reduce sodium",
        "suggestions": [
          "Being mindful of sodium while eating out helps maintain your health goals."
        ]
      },
      {
        "id": 2407,
        "type": "scale",
        "label": "How confident are you in controlling your sodium intake this week? (1 = not confident, 10 = very confident)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Take small steps — start by reducing one high-sodium food today."],
          "midRange": ["You're doing well! Keep making gradual improvements."],
          "highRange": ["Great confidence! Keep it up and share tips with others."]
        }
      },
      {
        "id": 2408,
        "type": "checkbox",
        "label": "Did you notice any swelling in hands or feet after salty meals?",
        "suggestions": {
          "checked": ["Pay attention to these signs — they indicate you may need to reduce sodium."],
          "unchecked": ["Excellent! Keep tracking your body's reactions to sodium."]
        }
      }
    ],
    "checklist": [
      "Avoid the Five Food Felons today",
      "Track sodium content of meals and snacks",
      "Choose low-sodium options when eating out",
      "Use herbs and spices instead of added salt",
      "Cook fresh foods at home when possible",
      "Monitor for swelling in hands or feet after meals",
      "Reflect on strategies to reduce sodium for tomorrow"
    ]
  }
  
  ,
  {
    "day": 25,
    "title": "Enhanced Mood Check - Day 25",
    "description": "A daily check-in focusing on stress management, mood, and how your eating habits may affect your emotions.",
    "educationalContent": "Managing stress and tracking your mood helps maintain mental health and overall well-being. Small daily practices like quiet time or meditation can make a big difference.",
    "askRachel": true,
    "questions": [
      {
        "id": 2501,
        "type": "checkbox",
        "label": "Did you engage in any of the following stress management activities today?",
        "options": [
          "15 minutes of quiet reflection time",
          "Formal meditation or breathing exercises"
        ],
        "suggestions": {
          "checked": ["GREAT JOB for proactively managing your mood!"],
          "unchecked": ["Please schedule to take time out for yourself in the next weeks."]
        }
      },
      {
        "id": 2502,
        "type": "single-choice",
        "label": "How do you feel today?",
        "options": [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        "suggestions": {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."
          ],
          "C. I do not feel great today": [
            "Consider using stress management techniques such as breathing exercises or diaphragmatic training. We’re here to support you!"
          ]
        }
      },
      {
        "id": 2503,
        "type": "text",
        "label": "Think about how your eating has changed this week. Is it affecting your mood?",
        "suggestions": ["Reflect on your diet and mood — even small changes can impact your energy and emotions."]
      },
      {
        "id": 2504,
        "type": "scale",
        "label": "On a scale of 1–10, how stressed do you feel today? (1 = very low, 10 = very high)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["You're managing stress well today — keep up the good work!"],
          "midRange": ["Notice triggers and try a short relaxation break."],
          "highRange": ["Take a pause, practice breathing, or meditation to lower stress."]
        }
      },
      {
        "id": 2505,
        "type": "yes-no",
        "label": "Did you take any intentional break for yourself today?",
        "suggestions": {
          "yes": ["Excellent! Prioritizing yourself improves mood and productivity."],
          "no": ["Try to schedule at least 10–15 minutes tomorrow for yourself."]
        }
      },
      {
        "id": 2506,
        "type": "group",
        "label": "Stress Management Summary",
        "fields": [
          { "type": "number", "label": "Minutes spent in quiet reflection or meditation" },
          { "type": "text", "label": "Type of breathing or relaxation exercises done" }
        ],
        "suggestions": {
          "text": ["Recording your stress management activities helps you notice patterns and improvements over time."]
        }
      },
      {
        "id": 2507,
        "type": "checkbox-group",
        "label": "Which activities help improve your mood? (select all that apply)",
        "options": [
          "Walking or light exercise",
          "Listening to music",
          "Talking to a friend or family member",
          "Watching a comedy or something fun",
          "Meditation or breathing exercises"
        ],
        "suggestions": ["Identifying helpful activities makes it easier to repeat them daily."]
      },
      {
        "id": 2508,
        "type": "checkbox",
        "label": "Did you notice any improvement in mood after these activities today?",
        "suggestions": {
          "checked": ["Great! Positive actions reinforce mood improvements."],
          "unchecked": ["Try another activity tomorrow to see what works best for you."]
        }
      }
    ],
    "checklist": [
      "Take 10–15 minutes for quiet reflection or meditation",
      "Engage in at least one stress-relieving activity (walk, music, laugh, or breathing exercises)",
      "Monitor how eating habits affect your mood today",
      "Notice stress levels and triggers",
      "Take intentional breaks to recharge",
      "Reflect on any improvements or changes in mood",
      "Plan one small positive activity for tomorrow"
    ]
  }
  
  ,
  {
    "day": 26,
    "title": "Hot Flash Management Strategies - Day 26",
    "description": "Focus on managing hot flashes, improving sleep, and using stress management techniques.",
    "educationalContent": "Proper sleep, layering clothes, and diaphragmatic breathing can help you manage hot flashes and stress.",
    "askRachel": true,
    "questions": [
      {
        "id": 2601,
        "type": "single-choice",
        "label": "Are hot flashes affecting you today?",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A. Yes, they are driving me crazy!": [
            "Think about when the hot flashes are bothering you most. Are they keeping you up at night? Or worse during the day?"
          ],
          "B. Yes, but they are tolerable.": ["Keep stepping and eating right! You may just sail through this!"],
          "C. No": ["You lucky woman!"]
        }
      },
      {
        "id": 2602,
        "type": "text",
        "label": "Any strategies you used to manage hot flashes today?",
        "suggestions": ["Share methods like dressing in layers or pacing activities to help manage symptoms."]
      },
      {
        "id": 2603,
        "type": "checkbox-group",
        "label": "Sleep Tips Followed Today",
        "options": [
          "Got 7 hours of sleep",
          "Avoided caffeine after 3pm",
          "Did not watch TV in bedroom",
          "Did not work in bed",
          "Wind-down for 15 minutes before bedtime"
        ],
        "suggestions": {
          "text": ["Good sleep habits help manage hot flashes and overall energy."]
        }
      },
      {
        "id": 2604,
        "type": "checkbox",
        "label": "Did you perform diaphragmatic breathing today?",
        "suggestions": {
          "checked": ["Excellent! This helps reduce stress and hot flash impact."],
          "unchecked": ["Try including a short breathing session tomorrow."]
        }
      },
      {
        "id": 2605,
        "type": "scale",
        "label": "How comfortable did you feel managing hot flashes today? (1 = very uncomfortable, 10 = very comfortable)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Consider using layering or relaxation techniques next time."],
          "midRange": ["You're doing well! Keep practicing techniques consistently."],
          "highRange": ["Great job! Continue these strategies to stay comfortable."]
        }
      },
      {
        "id": 2606,
        "type": "yes-no",
        "label": "Did hot flashes disrupt your sleep last night?",
        "suggestions": {
          "yes": ["Try adjusting your sleep environment or bedtime routine."],
          "no": ["Excellent! Keep following your sleep tips."]
        }
      },
      {
        "id": 2607,
        "type": "text",
        "label": "Any observations or notes about hot flashes today?",
        "suggestions": ["Write down triggers, timing, and effective coping methods."]
      },
      {
        "id": 2608,
        "type": "checkbox-group",
        "label": "Other stress management activities you did today (select all that apply)",
        "options": [
          "Walking or light exercise",
          "Meditation",
          "Deep breathing",
          "Quiet reflection",
          "Talking to a friend/family"
        ],
        "suggestions": ["Identifying helpful activities makes it easier to repeat them daily."]
      }
    ],
    "checklist": [
      "Layer clothing to help cool off during hot flashes",
      "Avoid caffeine or alcohol in the afternoon/evening",
      "Practice diaphragmatic or deep breathing at least once",
      "Follow at least one sleep hygiene tip (no TV/phone in bed, wind down early, etc.)",
      "Stay hydrated throughout the day",
      "Track any hot flash triggers (foods, temperature, stress)",
      "Engage in one relaxation activity such as meditation, walking, or reflection",
      "Keep your bedroom cool and comfortable for better sleep",
      "Reflect on what helped most today and plan to repeat it tomorrow"
    ]
  }
  
  ,
  {
    "day": 27,
    "title": "Bone Health Maintenance - Day 27",
    "description": "Focus on calcium, vitamin D, and strength training to maintain bone health.",
    "educationalContent": "Regular calcium, vitamin D, and strength training help maintain bone density and reduce risk of osteoporosis.",
    "askRachel": true,
    "questions": [
      {
        "id": 2701,
        "type": "single-choice",
        "label": "Calcium intake today (1,200 mg target, at least half from supplements)?",
        "options": ["A. Yes", "B. Probably (at least 600 mg from supplement)", "C. No"],
        "suggestions": {
          "A. Yes": ["GREAT JOB!"],
          "B. Probably": ["Look at foods high in calcium and consider adding one serving."],
          "C. No": ["Look at foods high in calcium and see where you may add a serving."]
        }
      },
      {
        "id": 2702,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A. Yes": ["Excellent! Vitamin D supports calcium absorption."],
          "B. No": ["Try to include vitamin D next time for better bone health."]
        }
      },
      {
        "id": 2703,
        "type": "single-choice",
        "label": "Strength training today?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A. Yes": ["Great! Strength training supports bone and muscle health."],
          "B. No": ["Try at least one session tomorrow or later this week."]
        }
      },
      {
        "id": 2704,
        "type": "text",
        "label": "Do you want the calcium food list emailed or read to you?",
        "suggestions": ["This helps you plan your meals to meet calcium goals."]
      },
      {
        "id": 2705,
        "type": "scale",
        "label": "How confident are you in maintaining bone health habits this week? (1=not confident, 10=very confident)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Try adding small habits daily to improve confidence."],
          "midRange": ["Keep building consistency in supplements and strength training."],
          "highRange": ["Excellent! Continue these habits for long-term bone health."]
        }
      },
      {
        "id": 2706,
        "type": "group",
        "label": "Bone Health Tracking",
        "fields": [
          { "type": "number", "label": "Calcium intake today (mg)" },
          { "type": "number", "label": "Vitamin D units today" },
          { "type": "number", "label": "Minutes of strength training" }
        ],
        "suggestions": {
          "text": ["Tracking these numbers helps monitor adherence and improvements over time."]
        }
      },
      {
        "id": 2707,
        "type": "checkbox-group",
        "label": "Calcium-Rich Foods Consumed Today (select all that apply)",
        "options": [
          "Dairy products",
          "Vegetables",
          "Protein-rich foods",
          "Grains",
          "Nuts and seeds"
        ],
        "suggestions": ["Including a variety of calcium-rich foods supports bone health."]
      },
      {
        "id": 2708,
        "type": "checkbox",
        "label": "Did you take any other bone-supportive actions today?",
        "suggestions": {
          "checked": ["Excellent! Additional habits reinforce bone health."],
          "unchecked": ["Consider adding at least one supportive action tomorrow."]
        }
      }
    ]
  }
  ,
  {
    "day": 28,
    "title": "Fourth Weekly Measurements",
    "description": "Record your weight, waist, steps, and other exercises to track your monthly progress.",
    "educationalContent": "Comparing your measurements and activity over the weeks helps you see trends, adjust routines, and celebrate improvements.",
    "askRachel": true,
    "questions": [
      {
        "id": 2801,
        "type": "group",
        "label": "Weekly Data Collection",
        "fields": [
          { "type": "number", "label": "Weight (lbs or kg)" },
          { "type": "number", "label": "Waist Measurement (inches or cm)" }
        ],
        "suggestions": {
          "text": [
            "Tracking your measurements weekly helps notice trends over time.",
            "Even small changes are meaningful; consistency is key!"
          ]
        }
      },
      {
        "id": 2802,
        "type": "group",
        "label": "Physical Activity Summary",
        "fields": [
          { "type": "number", "label": "Steps" },
          { "type": "text", "label": "Other Exercise (resistance and cardio)" }
        ],
        "suggestions": {
          "text": [
            "Regular movement improves energy and mood.",
            "Try to include both strength and cardio exercises each week."
          ]
        }
      },
      {
        "id": 2803,
        "type": "checkbox-group",
        "label": "Food Log for the Day",
        "options": [
          "7:30 a.m. - List breakfast foods",
          "10:00 a.m. - List snacks",
          "12:30 p.m. - List lunch foods",
          "3:00 p.m. - List snacks",
          "6:00 p.m. - List dinner foods",
          "7:30 p.m. - List snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ],
        "suggestions": [
          "Keep a consistent eating schedule to support digestion and energy balance.",
          "Notice if late-night snacking affects your sleep or next-day energy."
        ]
      },
      {
        "id": 2804,
        "type": "scale",
        "label": "How do you feel today? (1 = not great, 10 = great)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Take a short walk or stretch — small actions can boost your mood."],
          "midRange": ["You're doing well — stay consistent and focus on hydration and rest."],
          "highRange": ["Keep up the positive momentum! Celebrate your good feeling!"]
        }
      },
      {
        "id": 2805,
        "type": "checkbox",
        "label": "Did you eat mindfully today?",
        "suggestions": {
          "checked": ["Mindful eating supports digestion and fullness cues."],
          "unchecked": ["Try one mindful meal tomorrow — pause, chew slowly, and enjoy the flavors."]
        }
      },
      {
        "id": 2806,
        "type": "text",
        "label": "Notes or reflections about this week's progress",
        "suggestions": ["Reflecting helps you identify successes and areas for improvement."]
      },
      {
        "id": 2807,
        "type": "yes-no",
        "label": "Do you feel motivated to continue improving next week?",
        "suggestions": {
          "yes": ["Excellent! Keep your momentum going!"],
          "no": ["Take a moment to reflect — motivation can grow again with small steps."]
        }
      },
      {
        "id": 2808,
        "type": "single-choice",
        "label": "Do you want a summary of your absolute and percentage change this week?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": ["We will calculate and share your progress for better insight."],
          "No": ["No problem — you can check your progress anytime."]
        }
      }
    ]
  }
  ,
  {
    "day": 29,
    "title": "Fifth Week Review & Energy Check",
    "description": "Review your weekly data and reflect on your energy levels as you enter Week 5.",
    "educationalContent": "Small changes like new foods or new walking routes can help maintain energy levels and keep routines fresh.",
    "askRachel": true,
    "questions": [
      {
        "id": 2901,
        "type": "group",
        "label": "Weekly Data Review",
        "fields": [
          { "type": "number", "label": "Starting Waist Measurement (inches or cm)" },
          { "type": "number", "label": "Current Waist Measurement (inches or cm)" },
          { "type": "number", "label": "Starting Weight (lbs or kg)" },
          { "type": "number", "label": "Current Weight (lbs or kg)" },
          { "type": "number", "label": "Step Goal" }
        ],
        "suggestions": {
          "text": ["Comparing weekly data helps see improvements and adjust habits for better results."]
        }
      },
      {
        "id": 2902,
        "type": "single-choice",
        "label": "Step Tracking Today",
        "options": ["Sent steps today and prior day", "Did not send steps"],
        "suggestions": {
          "Sent steps today and prior day": ["Thanks for sending your steps in. Keep it up!"],
          "Did not send steps": ["Steps are important! Please send them daily to stay on track."]
        }
      },
      {
        "id": 2903,
        "type": "scale",
        "label": "How is your energy today? (1 = very low, 10 = very high)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Try a new healthy food or new walking route to boost energy."],
          "midRange": ["Keep routines consistent and add small changes for energy."],
          "highRange": ["Excellent! Keep up your good energy and try sharing it with others."]
        }
      },
      {
        "id": 2904,
        "type": "text",
        "label": "Any changes you plan to add to your daily routine this week to maintain energy?",
        "suggestions": ["Even small changes can help maintain high energy levels."]
      },
      {
        "id": 2905,
        "type": "yes-no",
        "label": "Do you feel different after completing 4 weeks of the program?",
        "suggestions": {
          "yes": ["Fantastic! Reflect on what worked best for you."],
          "no": ["Try a new habit this week to see if it changes your experience."]
        }
      },
      {
        "id": 2906,
        "type": "checkbox",
        "label": "Did you engage in any additional healthy activities today?",
        "suggestions": {
          "checked": ["Great! Extra healthy actions reinforce progress."],
          "unchecked": ["Consider adding at least one small activity tomorrow."]
        }
      },
      {
        "id": 2907,
        "type": "text",
        "label": "Notes or reflections about your energy this week",
        "suggestions": ["Jot down observations to help plan next week effectively."]
      },
      {
        "id": 2908,
        "type": "checkbox-group",
        "label": "Energy Boost Activities Tried (select all that apply)",
        "options": [
          "New healthy food",
          "New walking route",
          "Exercise break",
          "Social activity",
          "Other small change"
        ],
        "suggestions": ["Trying different activities helps maintain high energy levels."]
      }
    ]
  }
  ,
  {
    "day": 30,
    "title": "Basic Food Check",
    "description": "Check in on your food reporting habits to maintain accountability.",
    "educationalContent": "Consistent food reporting helps increase awareness of your intake and supports long-term progress.",
    "askRachel": true,
    "questions": [
      {
        "id": 3001,
        "type": "single-choice",
        "label": "Did you report your food today?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": ["Great reporting! Talk to us again tomorrow!"],
          "No": ["We know it takes time, but think of this as premium self-care. Try to record as much as possible."]
        }
      },
      {
        "id": 3002,
        "type": "checkbox-group",
        "label": "Meals Reported Today (select all that apply)",
        "options": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snack",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snack",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snack"
        ],
        "suggestions": [
          "Recording all meals/snacks improves awareness of eating habits."
        ]
      },
      {
        "id": 3003,
        "type": "text",
        "label": "Any notes about your food today?",
        "suggestions": ["Include anything noteworthy about choices, portions, or cravings."]
      },
      {
        "id": 3004,
        "type": "scale",
        "label": "How mindful were you of your eating today? (1 = not mindful, 10 = very mindful)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Try to slow down and focus on flavors and fullness next time."],
          "midRange": ["Good! Continue being mindful and notice hunger cues."],
          "highRange": ["Excellent! Keep practicing mindful eating habits."]
        }
      },
      {
        "id": 3005,
        "type": "yes-no",
        "label": "Did you feel satisfied with your food choices today?",
        "suggestions": {
          "yes": ["Great! Awareness helps reinforce healthy habits."],
          "no": ["Reflect on what you could adjust tomorrow for better satisfaction."]
        }
      },
      {
        "id": 3006,
        "type": "checkbox",
        "label": "Did you include any new healthy foods today?",
        "suggestions": {
          "checked": ["Awesome! Trying new foods keeps your diet varied and healthy."],
          "unchecked": ["Consider adding at least one new healthy food tomorrow."]
        }
      },
      {
        "id": 3007,
        "type": "group",
        "label": "Food Intake Summary",
        "fields": [
          { "type": "number", "label": "Calories consumed (approx.)" },
          { "type": "number", "label": "Glasses of water consumed" }
        ],
        "suggestions": ["Tracking numbers helps maintain awareness and adjust habits."]
      },
      {
        "id": 3008,
        "type": "text",
        "label": "Reflections on this week's eating habits",
        "suggestions": ["Write down successes, challenges, and what you want to focus on next week."]
      }
    ]
  }
  ,
  {
    "day": 31,
    "title": "Weekly Food Review & Sugar Education",
    "description": "Check adherence to the Five Food Felons and review sugar intake education.",
    "educationalContent": "Simple sugars are common in many foods like soda and processed snacks. Reducing these helps maintain energy and health.",
    "askRachel": true,
    "questions": [
      {
        "id": 3101,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons today?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          "No": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      },
      {
        "id": 3102,
        "type": "checkbox-group",
        "label": "Which Food Felons are most difficult for you to avoid?",
        "options": [
          "Fried foods",
          "Red or processed red meats",
          "Stripped carbs",
          "Added syrups",
          "Simple sugars"
        ],
        "suggestions": ["Identify challenging felons to target for better control."]
      },
      {
        "id": 3103,
        "type": "text",
        "label": "Any observations about sugar or felon foods today?",
        "suggestions": ["Record triggers, cravings, and strategies that helped."]
      },
      {
        "id": 3104,
        "type": "yes-no",
        "label": "Did you replace sugary drinks with water, tea, or black coffee?",
        "suggestions": {
          "yes": ["Great job reducing unnecessary sugar intake!"],
          "no": ["Try at least one sugar-free beverage tomorrow."]
        }
      },
      {
        "id": 3105,
        "type": "scale",
        "label": "How challenging was avoiding the food felons today? (1 = very easy, 10 = very difficult)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Excellent! Keep building healthy habits."],
          "midRange": ["Good! Note which felons were tricky and try a strategy next time."],
          "highRange": ["Keep trying! Consider small substitutions and plan ahead."]
        }
      },
      {
        "id": 3106,
        "type": "text",
        "label": "Notes on strategies that helped you avoid felons",
        "suggestions": ["Document any approaches that worked so you can repeat them."]
      },
      {
        "id": 3107,
        "type": "checkbox",
        "label": "Did you prepare any meals at home to avoid felons?",
        "suggestions": {
          "checked": ["Excellent! Home cooking reduces felon exposure."],
          "unchecked": ["Try preparing at least one meal at home tomorrow."]
        }
      },
      {
        "id": 3108,
        "type": "group",
        "label": "Daily Meal Summary",
        "fields": [
          { "type": "text", "label": "Breakfast foods" },
          { "type": "text", "label": "Snacks" },
          { "type": "text", "label": "Lunch foods" },
          { "type": "text", "label": "Dinner foods" }
        ],
        "suggestions": ["Logging meals helps maintain awareness and reduce felon intake."]
      }
    ]
  }
  ,
  {
    "day": 32,
    "title": "Monthly Mood & Exercise Assessment",
    "description": "Reflect on the impact of exercise and eating on your mood and use stress management techniques.",
    "educationalContent": "Exercise and proper nutrition positively affect mood. Daily reflection and breathing exercises support emotional well-being.",
    "askRachel": true,
    "questions": [
      {
        "id": 3201,
        "type": "single-choice",
        "label": "Daily Mood Choice",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        "suggestions": {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."
          ],
          "C. I do not feel great today": ["Offer comprehensive stress management program with diaphragmatic breathing training."]
        }
      },
      {
        "id": 3202,
        "type": "checkbox",
        "label": "Did you take 15 minutes of quiet reflection today?",
        "suggestions": {
          "checked": ["GREAT JOB for pro-actively managing your mood!"],
          "unchecked": ["Please schedule time out for yourself in the next weeks."]
        }
      },
      {
        "id": 3203,
        "type": "checkbox",
        "label": "Did you do formal meditation or breathing exercises today?",
        "suggestions": {
          "checked": ["Excellent! Mindful breathing reduces stress and improves mood."],
          "unchecked": ["Try adding 5–10 minutes of meditation tomorrow."]
        }
      },
      {
        "id": 3204,
        "type": "group",
        "label": "Exercise & Mood Reflection",
        "fields": [
          { "type": "text", "label": "How has your exercise changed this week?" },
          { "type": "text", "label": "How has your eating changed this week?" }
        ],
        "suggestions": ["Reflect on how these changes affected your mood and energy."]
      },
      {
        "id": 3205,
        "type": "checkbox",
        "label": "Did you complete the full diaphragmatic breathing routine today?",
        "suggestions": {
          "checked": ["Excellent! This supports stress management."],
          "unchecked": ["Consider completing the full diaphragmatic routine tomorrow."]
        }
      },
      {
        "id": 3206,
        "type": "text",
        "label": "Notes on mood, energy, or reflections",
        "suggestions": ["Recording observations can help identify patterns and improvements."]
      },
      {
        "id": 3207,
        "type": "scale",
        "label": "How effective was stress management for your mood today? (1 = not effective, 10 = very effective)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Try adjusting timing or type of breathing/meditation next time."],
          "midRange": ["Good! Keep practicing daily for stronger effects."],
          "highRange": ["Excellent! Maintain your stress management routine."]
        }
      },
      {
        "id": 3208,
        "type": "yes-no",
        "label": "Do you feel your mood improved due to exercise or eating changes this week?",
        "suggestions": {
          "yes": ["Great! Keep up these healthy habits."],
          "no": ["Try minor adjustments and continue reflection to see improvements."]
        }
      }
    ]
  }
  ,
  {
    "day": 33,
    "title": "Monthly Menopause Symptoms & New Topic",
    "description": "Assess hot flashes, sleep, vaginal dryness, and mental health this month.",
    "educationalContent": "Tracking symptoms and mood helps tailor menopause management and identify areas for lifestyle improvements.",
    "askRachel": true,
    "questions": [
      {
        "id": 3301,
        "type": "single-choice",
        "label": "Hot Flash Assessment",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A. Yes, they are driving me crazy!": [
            "Think about when hot flashes bother you most. Are they keeping you up at night? Track patterns."
          ],
          "B. Yes, but they are tolerable.": ["Keep stepping and eating right! You may just sail through this."],
          "C. No": ["You lucky woman! Keep monitoring symptoms."]
        }
      },
      {
        "id": 3302,
        "type": "yes-no",
        "label": "Did you follow sleep tips from Day 11 (7 hours, no caffeine after 3pm, wind-down routine, no TV/work in bed)?",
        "suggestions": {
          "yes": ["Excellent! Sleep supports hot flash management and overall health."],
          "no": ["Try incorporating these habits to improve sleep quality."]
        }
      },
      {
        "id": 3303,
        "type": "text",
        "label": "Notes on hot flash patterns or sleep disturbances",
        "suggestions": ["Document times, triggers, and what helps reduce severity."]
      },
      {
        "id": 3304,
        "type": "single-choice",
        "label": "Vaginal Dryness Management",
        "options": [
          "Used lubricant or non-hormonal moisturizer",
          "Used nothing today",
          "Discussed options with physician"
        ],
        "suggestions": {
          "Used lubricant or non-hormonal moisturizer": ["Great! Comfort and symptom management are important."],
          "Used nothing today": ["Consider trying lubricants or moisturizers to reduce discomfort."],
          "Discussed options with physician": ["Excellent! Medical guidance ensures safe and effective management."]
        }
      },
      {
        "id": 3305,
        "type": "checkbox-group",
        "label": "Monthly Mental Health Check: Have you experienced any of the following?",
        "options": [
          "Lost interest or pleasure in normal activities",
          "Feeling down, blue, depressed, or low",
          "Low energy, mood swings, irritability, or poor concentration",
          "Excessive worry about health, finances, family, etc.",
          "Felt nervous/anxious or physical anxiety symptoms",
          "Would like to moderate or eliminate alcohol or cannabis"
        ],
        "suggestions": ["If yes to any, plan to address in future coaching sessions."]
      },
      {
        "id": 3306,
        "type": "checkbox",
        "label": "Did you perform any stress management exercises today?",
        "suggestions": {
          "checked": ["Excellent! These support mood and mental health."],
          "unchecked": ["Try deep breathing or relaxation exercises for 10–15 minutes."]
        }
      },
      {
        "id": 3307,
        "type": "scale",
        "label": "How severe were menopause-related symptoms this month? (1 = very mild, 10 = severe)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Symptoms are mild; continue current strategies."],
          "midRange": ["Moderate symptoms; consider small adjustments in routine or diet."],
          "highRange": ["Severe symptoms; review management strategies and consult healthcare provider if needed."]
        }
      },
      {
        "id": 3308,
        "type": "text",
        "label": "Additional notes or reflections on this month's symptoms",
        "suggestions": ["Document observations to help guide next month’s strategies."]
      }
    ]
  }
  ,
  {
    "day": 34,
    "title": "Weekly Bone Health & Vitamin D Focus",
    "description": "Review calcium, vitamin D, and strength training habits for bone health.",
    "educationalContent": "Calcium, vitamin D, magnesium, and vitamin K2 are crucial for bone health. Strength training further supports bone density.",
    "askRachel": true,
    "questions": [
      {
        "id": 3401,
        "type": "single-choice",
        "label": "Calcium Intake Today (1,200 mg, half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"],
        "suggestions": {
          "A. Yes": ["GREAT JOB! Keep supporting bone health."],
          "B. Probably, at least got 600 mg": ["Consider adding more calcium-rich foods to reach 1,200 mg."],
          "C. No": ["Check the list of calcium-rich foods and add servings this week."]
        }
      },
      {
        "id": 3402,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 intake today (1,000 units)?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A. Yes": ["Great! Vitamin D supports calcium absorption and bone health."],
          "B. No": ["Review vitamin D sources or consider supplements if needed."]
        }
      },
      {
        "id": 3403,
        "type": "single-choice",
        "label": "Strength Training Today?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A. Yes": ["Excellent! Strength training is important for bone maintenance."],
          "B. No": ["Try at least one session this week to support bone health."]
        }
      },
      {
        "id": 3404,
        "type": "text",
        "label": "Notes or reflections on bone health or exercise",
        "suggestions": ["Include any difficulties, successes, or adjustments needed."]
      },
      {
        "id": 3405,
        "type": "checkbox",
        "label": "Did you include any vitamin D-rich foods today?",
        "suggestions": {
          "checked": ["Great! Keep including foods like oily fish, fortified milk, or sun exposure."],
          "unchecked": ["Try adding at least one vitamin D-rich food tomorrow."]
        }
      },
      {
        "id": 3406,
        "type": "checkbox-group",
        "label": "Magnesium & Vitamin K2 Food Sources Included Today",
        "options": [
          "Pumpkin seeds",
          "Chia seeds",
          "Almonds",
          "Spinach",
          "Cashews",
          "Green leafy vegetables"
        ],
        "suggestions": ["These nutrients support bone strength along with calcium and vitamin D."]
      },
      {
        "id": 3407,
        "type": "scale",
        "label": "How confident are you in your bone health habits today? (1 = not confident, 10 = very confident)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Consider scheduling supplements, strength training, or diet changes."],
          "midRange": ["Good! Keep building consistency."],
          "highRange": ["Excellent! Continue these healthy routines."]
        }
      },
      {
        "id": 3408,
        "type": "text",
        "label": "Any questions or reflections on vitamin D, calcium, or bone health?",
        "suggestions": ["Document anything to discuss with your healthcare provider."]
      }
    ]
  }
  ,
  {
    "day": 35,
    "title": "Fifth Weekly Measurements",
    "description": "Complete weekly measurements and summarize your progress after 5 weeks.",
    "educationalContent": "Measuring weight, waist, steps, and exercises allows tracking progress and celebrating milestones in the program.",
    "askRachel": true,
    "questions": [
      {
        "id": 3501,
        "type": "group",
        "label": "Weekly Data Collection",
        "fields": [
          { "type": "number", "label": "Weight (lbs or kg)" },
          { "type": "number", "label": "Waist Measurement (inches or cm)" }
        ],
        "suggestions": {
          "text": [
            "Compare to previous weeks to see absolute and percentage changes.",
            "Tracking helps celebrate progress and maintain motivation."
          ]
        }
      },
      {
        "id": 3502,
        "type": "group",
        "label": "Physical Activity Summary",
        "fields": [
          { "type": "number", "label": "Steps" },
          { "type": "text", "label": "Other Exercise (resistance & cardio)" }
        ],
        "suggestions": {
          "text": ["Regular activity helps maintain progress and energy levels."]
        }
      },
      {
        "id": 3503,
        "type": "checkbox-group",
        "label": "Food Log for the Day",
        "options": [
          "7:30 a.m. - List breakfast foods",
          "10:00 a.m. - List snacks",
          "12:30 p.m. - List lunch foods",
          "3:00 p.m. - List snacks",
          "6:00 p.m. - List dinner foods",
          "7:30 p.m. - List snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ],
        "suggestions": ["Tracking helps maintain awareness of dietary habits."]
      },
      {
        "id": 3504,
        "type": "scale",
        "label": "How do you feel today? (1 = not great, 10 = great)",
        "min": 1,
        "max": 10,
        "suggestions": {
          "lowRange": ["Take small steps to boost mood and motivation."],
          "midRange": ["Good! Reflect on what went well and what could improve."],
          "highRange": ["Excellent! Celebrate your progress this week!"]
        }
      },
      {
        "id": 3505,
        "type": "checkbox",
        "label": "Did you eat mindfully today?",
        "suggestions": {
          "checked": ["Mindful eating supports digestion and overall awareness."],
          "unchecked": ["Try mindful eating for at least one meal tomorrow."]
        }
      },
      {
        "id": 3506,
        "type": "yes-no",
        "label": "Do you feel proud of your progress over the past 5 weeks?",
        "suggestions": {
          "yes": ["Congratulations! You’ve established strong healthy habits."],
          "no": ["Reflect on small wins; progress is cumulative."]
        }
      },
      {
        "id": 3507,
        "type": "text",
        "label": "Notes or reflections on completing 5 weeks of the program",
        "suggestions": ["Document achievements, challenges, and next steps for ongoing success."]
      },
      {
        "id": 3508,
        "type": "single-choice",
        "label": "Would you like a summary of your weight and waist progress for 5 weeks?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": ["We will calculate absolute and percentage changes and provide a detailed summary."],
          "No": ["No problem — you can review your measurements anytime."]
        }
      }
    ]
  }
  ,
  {
    "day": 36,
    "title": "Weekly Review",
    "description": "Review waist, weight, steps, and energy after completing week 5.",
    "educationalContent": "Assessing weekly progress helps you plan new strategies and maintain motivation.",
    "askRachel": true,
    "questions": [
      {
        "id": 3601,
        "type": "group",
        "label": "Weekly Data Collection",
        "fields": [
          { "type": "number", "label": "Waist Measurement (inches or cm)" },
          { "type": "number", "label": "Weight (lbs or kg)" },
          { "type": "number", "label": "Step Goal" }
        ],
        "suggestions": {
          "text": [
            "Compare to prior week to evaluate progress.",
            "Consider new small changes to keep energy and motivation high."
          ]
        }
      },
      {
        "id": 3602,
        "type": "checkbox",
        "label": "Sent steps today and prior day?",
        "suggestions": {
          "checked": ["Thanks for sending your steps in. Keep it up!"],
          "unchecked": ["We need daily step reporting to support your program. Try to send steps tomorrow."]
        }
      },
      {
        "id": 3603,
        "type": "text",
        "label": "Notes on energy and motivation this week",
        "suggestions": ["Reflect on what felt different or improved over the week."]
      },
      {
        "id": 3604,
        "type": "yes-no",
        "label": "Are you feeling any different after 5 weeks?",
        "suggestions": {
          "yes": ["Great! Reflect on what changed and keep building on it."],
          "no": ["Consider adding a new healthy habit this week to boost energy."]
        }
      },
      {
        "id": 3605,
        "type": "number",
        "label": "Steps taken today",
        "suggestions": ["Keep tracking your daily steps for consistency."]
      },
      {
        "id": 3606,
        "type": "text",
        "label": "Reflection on adding new healthy activities this week",
        "suggestions": ["Try a new route for walking, new food, or other small positive change."]
      },
      {
        "id": 3607,
        "type": "scale",
        "label": "How would you rate your overall energy today? (1 = very low, 10 = very high)",
        "min": 1,
        "max": 10
      },
      {
        "id": 3608,
        "type": "single-choice",
        "label": "Would you like guidance for next week’s energy improvement?",
        "options": ["Yes", "No"]
      }
    ]
  }
  ,
  {
    "day": 37,
    "title": "Sixth Week Check-in",
    "description": "Daily check-in for food and steps reporting.",
    "educationalContent": "Consistent reporting supports accountability and program success.",
    "askRachel": true,
    "questions": [
      {
        "id": 3701,
        "type": "checkbox",
        "label": "Did you report food today?",
        "suggestions": {
          "checked": ["Great reporting! Talk to us again tomorrow!"],
          "unchecked": ["Please try to write down at least most of what you ate."]
        }
      },
      {
        "id": 3702,
        "type": "checkbox",
        "label": "Did you send steps today?",
        "suggestions": {
          "checked": ["Keep going! Your body thanks you!"],
          "unchecked": ["We need to hear from you every step of the way. Try to send your steps tomorrow!"]
        }
      },
      {
        "id": 3703,
        "type": "text",
        "label": "Reflection or notes on today's check-in",
        "suggestions": ["Document challenges or successes for the day."]
      },
      {
        "id": 3704,
        "type": "scale",
        "label": "Mood rating today (1 = low, 10 = high)",
        "min": 1,
        "max": 10
      },
      {
        "id": 3705,
        "type": "text",
        "label": "Additional comments or thoughts for the coach"
      },
      {
        "id": 3706,
        "type": "single-choice",
        "label": "Do you feel consistent with your program goals today?",
        "options": ["Yes", "No"]
      },
      {
        "id": 3707,
        "type": "yes-no",
        "label": "Did you follow any stress management exercises today?",
        "suggestions": {
          "yes": ["Great! Stress management supports mood and health."],
          "no": ["Consider 10–15 minutes of deep breathing or meditation."]
        }
      },
      {
        "id": 3708,
        "type": "group",
        "label": "Steps & Food Summary",
        "fields": [
          { "type": "number", "label": "Steps Today" },
          { "type": "text", "label": "Food Notes or Summary" }
        ]
      }
    ]
  }
  ,
  {
    "day": 38,
    "title": "Weekly Food Questions",
    "description": "Check adherence to Five Food Felons and provide education.",
    "educationalContent": "Avoiding the Five Food Felons helps control sugar, processed foods, and inflammatory foods.",
    "askRachel": true,
    "questions": [
      {
        "id": 3801,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons today?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": ["BRAVO! Keep doing a great job!"],
          "No": ["Keep trying. You are human! Try again tomorrow."]
        }
      },
      {
        "id": 3802,
        "type": "text",
        "label": "Which Food Felon was most difficult to avoid today?",
        "suggestions": ["Reflect on triggers and plan strategies for next time."]
      },
      {
        "id": 3803,
        "type": "text",
        "label": "Food Felon education notes",
        "suggestions": [
          "Remember #5: fried foods, #4: red/processed meats, #3: stripped carbs, #2: added syrups, #1: simple sugars",
          "One can of soda = almost 3 days of recommended sugar intake. Opt for water or black tea/coffee."
        ]
      },
      {
        "id": 3804,
        "type": "checkbox",
        "label": "Did you include any non-felon healthy foods today?",
        "suggestions": ["Excellent! Include more nutrient-rich foods regularly."]
      },
      {
        "id": 3805,
        "type": "scale",
        "label": "How easy was it to avoid the Food Felons today? (1 = very hard, 10 = very easy)",
        "min": 1,
        "max": 10
      },
      {
        "id": 3806,
        "type": "yes-no",
        "label": "Did you plan your meals today to avoid felons?",
        "suggestions": {
          "yes": ["Planning ahead helps avoid unhealthy choices."],
          "no": ["Try planning meals tomorrow to make it easier."]
        }
      },
      {
        "id": 3807,
        "type": "text",
        "label": "Notes or reflections for next week’s meals"
      },
      {
        "id": 3808,
        "type": "group",
        "label": "Food Log Template",
        "fields": [
          { "type": "text", "label": "7:30 a.m. Breakfast" },
          { "type": "text", "label": "10:00 a.m. Snack" },
          { "type": "text", "label": "12:30 p.m. Lunch" },
          { "type": "text", "label": "3:00 p.m. Snack" },
          { "type": "text", "label": "6:00 p.m. Dinner" },
          { "type": "text", "label": "7:30 p.m. Snack" }
        ]
      }
    ]
  }
  ,
  {
    "day": 39,
    "title": "Monthly Mood & Exercise Assessment",
    "description": "Reflect on exercise, eating, and mood over the past month.",
    "educationalContent": "Exercise and proper eating can boost mood. Stress management techniques support mental health.",
    "askRachel": true,
    "questions": [
      {
        "id": 3901,
        "type": "text",
        "label": "How has your exercise changed this week? Is it affecting your mood?",
        "suggestions": ["Reflect on changes in energy, motivation, and mood."]
      },
      {
        "id": 3902,
        "type": "text",
        "label": "How has your eating changed this week? Is it affecting your mood?",
        "suggestions": ["Notice patterns and improvements for mood support."]
      },
      {
        "id": 3903,
        "type": "checkbox",
        "label": "Did you take 15 minutes of quiet reflection today?",
        "suggestions": {
          "checked": ["Great job! Reflection supports mood and awareness."],
          "unchecked": ["Try scheduling 15 minutes for quiet reflection."]
        }
      },
      {
        "id": 3904,
        "type": "checkbox",
        "label": "Did you do formal meditation or breathing exercises today?",
        "suggestions": {
          "checked": ["Excellent work on proactive stress management!"],
          "unchecked": ["Consider doing a short breathing or meditation exercise today."]
        }
      },
      {
        "id": 3905,
        "type": "single-choice",
        "label": "Mood today",
        "options": ["A. I feel great", "B. I feel ok", "C. I do not feel great"],
        "suggestions": {
          "A": [
            "Keep feeling great! List 5 things you are happy about and check daily.",
            "We feel great when you do! Keep smiling!"
          ],
          "B": [
            "Add an extra 5–30 minutes for something you love. Practice breathing exercises.",
            "Try to get an extra laugh in tomorrow."
          ],
          "C": [
            "Mood fluctuates with hormone levels. Consider adding 10 minutes extra activity today.",
            "Refer to our stress management and breathing exercises program."
          ]
        }
      },
      {
        "id": 3906,
        "type": "scale",
        "label": "Rate your overall energy today (1 = low, 10 = high)",
        "min": 1,
        "max": 10
      },
      {
        "id": 3907,
        "type": "text",
        "label": "Reflection notes on stress management and mood"
      },
      {
        "id": 3908,
        "type": "group",
        "label": "Steps & Exercise Summary",
        "fields": [
          { "type": "number", "label": "Steps Today" },
          { "type": "text", "label": "Other Exercise (resistance or cardio)" }
        ]
      }
    ]
  }
  ,
  {
    "day": 40,
    "title": "Weekly Menopause Symptoms",
    "description": "Assess hot flashes, vaginal dryness, and other menopause-related symptoms. Include sleep and hormone education.",
    "educationalContent": "Tracking menopause symptoms helps manage discomfort and identify when to seek medical advice.",
    "askRachel": true,
    "questions": [
      {
        "id": 4001,
        "type": "single-choice",
        "label": "Hot Flash Assessment",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A": ["Identify when hot flashes are worst. Adjust sleep routine and clothing layers."],
          "B": ["Keep stepping and eating right; symptoms are tolerable."],
          "C": ["You are fortunate! Continue healthy habits."]
        }
      },
      {
        "id": 4002,
        "type": "group",
        "label": "Sleep Tips Review",
        "fields": [
          { "type": "checkbox", "label": "Get 7 hours of sleep nightly" },
          { "type": "checkbox", "label": "Avoid caffeine after 3pm" },
          { "type": "checkbox", "label": "Do not watch TV in bedroom" },
          { "type": "checkbox", "label": "Do not work in bed" },
          { "type": "checkbox", "label": "Wind down for at least 15 minutes before bed" }
        ]
      },
      {
        "id": 4003,
        "type": "single-choice",
        "label": "Vaginal Dryness Management",
        "options": ["Used lubricant or moisturizer today", "Did not use any"],
        "suggestions": {
          "Used lubricant or moisturizer today": ["Great! These small steps improve comfort."],
          "Did not use any": ["Consider lubricants or non-hormonal moisturizers. Consult your physician for DHEA options."]
        }
      },
      {
        "id": 4004,
        "type": "yes-no",
        "label": "Did you follow diaphragmatic breathing exercises for stress management?",
        "suggestions": {
          "yes": ["Excellent! Breathing exercises reduce stress and improve mood."],
          "no": ["Try 10–15 minutes of diaphragmatic breathing today."]
        }
      },
      {
        "id": 4005,
        "type": "text",
        "label": "Notes on other menopause symptoms (fatigue, mood, thyroid check suggestions)"
      },
      {
        "id": 4006,
        "type": "checkbox",
        "label": "Did you monitor your thyroid or discuss hormone levels with your physician?",
        "suggestions": ["Important for understanding fatigue, weight changes, and overall energy."]
      },
      {
        "id": 4007,
        "type": "scale",
        "label": "Overall symptom discomfort today (1 = none, 10 = severe)",
        "min": 1,
        "max": 10
      },
      {
        "id": 4008,
        "type": "text",
        "label": "Reflection notes on symptom management and daily routines"
      }
    ]
  }
  ,

  {
    "day": 41,
    "title": "Weekly Bone Health Reporting",
    "description": "Check calcium, vitamin D, and strength training to maintain bone health.",
    "educationalContent": "With stepping and getting calcium and Vitamin D, you do a great service to your bones. If your Vitamin D level is low, follow up with your doctor.",
    "askRachel": true,
    "questions": [
      {
        "id": 4101,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least 600 mg from supplement", "C. No"],
        "suggestions": {
          "A": ["Great job! Keep it up!"],
          "B": ["Consider adding more calcium-rich foods."],
          "C": ["Look at the list of calcium-rich foods to meet your needs."]
        }
      },
      {
        "id": 4102,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A": ["Great job! Keep supporting your bones."],
          "B": ["Look at the list of Vitamin D-rich foods and consider a supplement if needed."]
        }
      },
      {
        "id": 4103,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A": ["Excellent! Strength training supports bone density."],
          "B": ["Try to include some resistance exercises this week."]
        }
      },
      {
        "id": 4104,
        "type": "text",
        "label": "Notes on bone health or supplement follow-up"
      }
    ]
  }
  ,
  {
    "day": 42,
    "title": "Sixth Weekly Measurements",
    "description": "Track your weight, waist, steps, and exercise for week 6.",
    "questions": [
      {
        "id": 4201,
        "type": "number",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 4202,
        "type": "number",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 4203,
        "type": "number",
        "label": "Steps today"
      },
      {
        "id": 4204,
        "type": "text",
        "label": "Other Exercise (resistance or cardio)"
      },
      {
        "id": 4205,
        "type": "group",
        "label": "Food Log",
        "fields": [
          { "type": "text", "label": "7:30 a.m. - Breakfast" },
          { "type": "text", "label": "10:00 a.m. - Snack" },
          { "type": "text", "label": "12:30 p.m. - Lunch" },
          { "type": "text", "label": "3:00 p.m. - Snack" },
          { "type": "text", "label": "6:00 p.m. - Dinner" },
          { "type": "text", "label": "7:30 p.m. - Snack" }
        ]
      }
    ]
  }
  ,
  {
    "day": 43,
    "title": "Weekly Review",
    "description": "Review week 6 progress and energy levels.",
    "questions": [
      {
        "id": 4301,
        "type": "number",
        "label": "Waist Measurement Start"
      },
      {
        "id": 4302,
        "type": "number",
        "label": "Waist Measurement Now"
      },
      {
        "id": 4303,
        "type": "number",
        "label": "Weight Start"
      },
      {
        "id": 4304,
        "type": "number",
        "label": "Weight Now"
      },
      {
        "id": 4305,
        "type": "number",
        "label": "Step Goal"
      },
      {
        "id": 4306,
        "type": "text",
        "label": "Reflection notes on energy and exercise changes"
      }
    ]
  }

  ,
  {
    "day": 44,
    "title": "Seventh Week Check-in",
    "questions": [
      {
        "id": 4401,
        "type": "text",
        "label": "Food reporting notes",
        "suggestions": {
          "reported": ["You are awesome! Keep going!!"],
          "notReported": ["Try to log at least one meal per day to get back on track."]
        }
      },
      {
        "id": 4402,
        "type": "text",
        "label": "Step reporting notes",
        "suggestions": {
          "metGoal": ["You are awesome! Keep going!!"],
          "underGoal": ["Try to increase your steps by 10% this week. Don't stop communicating with us!"]
        }
      }
    ]
  }
  ,
  {
    "day": 45,
    "title": "Weekly Food Assessment",
    "questions": [
      {
        "id": 4501,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": ["Bravo! You are doing great! Reflect why you feel so good and write it down."],
          "No": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      }
    ]
  }
  ,
  {
    "day": 46,
    "title": "Monthly Mood & Exercise Assessment",
    "questions": [
      {
        "id": 4601,
        "type": "text",
        "label": "How has your exercise changed this week? Is it affecting your mood?"
      },
      {
        "id": 4602,
        "type": "text",
        "label": "How has your eating changed this week? Is it affecting your mood?"
      },
      {
        "id": 4603,
        "type": "checkbox",
        "label": "Did you take 15 minutes of quiet reflection today?"
      },
      {
        "id": 4604,
        "type": "checkbox",
        "label": "Did you do formal meditation or breathing exercises today?"
      },
      {
        "id": 4605,
        "type": "single-choice",
        "label": "Mood today",
        "options": ["A. I feel great", "B. I feel ok", "C. I do not feel great"],
        "suggestions": {
          "A": ["Keep feeling great! Reflect daily on 5 things you are happy about."],
          "B": ["Add 5 minutes for something you love. Practice breathing exercises."],
          "C": ["Mood may fluctuate with hormones. Use stress management and diaphragmatic breathing program."]
        }
      },
      {
        "id": 4606,
        "type": "text",
        "label": "Reflection notes on stress management and mood"
      }
    ]
  }
  ,
  {
    "day": 47,
    "title": "Weekly Menopause Symptoms",
    "questions": [
      {
        "id": 4701,
        "type": "single-choice",
        "label": "Hot Flash Assessment",
        "options": ["A. Yes, they are driving me crazy!", "B. Yes, tolerable", "C. No"],
        "suggestions": {
          "A": ["Adjust sleep routine, use layers, follow stress management tips."],
          "B": ["Keep stepping and eating right. Practice breathing exercises."],
          "C": ["You are lucky! Continue healthy habits."]
        }
      },
      {
        "id": 4702,
        "type": "single-choice",
        "label": "Vaginal dryness management",
        "options": ["Used lubricant or moisturizer", "Did not use"],
        "suggestions": {
          "Used lubricant or moisturizer": ["Good! These small steps improve comfort."],
          "Did not use": ["Consider lubricants or vaginal estrogen therapy; discuss with your doctor."]
        }
      },
      {
        "id": 4703,
        "type": "checkbox",
        "label": "Followed diaphragmatic breathing exercises?"
      }
    ]
  }
  ,
  {
    "day": 48,
    "title": "Weekly Bone Health Reporting",
    "description": "Check calcium, vitamin D, and strength training to maintain bone health.",
    "questions": [
      {
        "id": 4801,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least 600 mg from supplement", "C. No"],
        "suggestions": {
          "A": ["Great job! Keep supporting your bones."],
          "B": ["Try adding more calcium-rich foods this week."],
          "C": ["Look at calcium-rich foods list and see where you can add more."]
        }
      },
      {
        "id": 4802,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A": ["Great job! Keep supporting your bones."],
          "B": ["Look at Vitamin D sources and consider supplementing if needed."]
        }
      },
      {
        "id": 4803,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"],
        "suggestions": {
          "A": ["Excellent! Strength training supports bone density."],
          "B": ["Try to include some resistance exercises this week."]
        }
      },
      {
        "id": 4804,
        "type": "text",
        "label": "Notes on bone health or supplement follow-up"
      }
    ]
  }
  ,
  {
    "day": 49,
    "title": "Seventh Weekly Measurements",
    "description": "Track weight, waist, steps, and other exercise for week 7.",
    "questions": [
      {
        "id": 4901,
        "type": "number",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 4902,
        "type": "number",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 4903,
        "type": "number",
        "label": "Steps today"
      },
      {
        "id": 4904,
        "type": "text",
        "label": "Other Exercise (resistance or cardio)"
      },
      {
        "id": 4905,
        "type": "group",
        "label": "Food Log",
        "fields": [
          { "type": "text", "label": "7:30 a.m. - Breakfast" },
          { "type": "text", "label": "10:00 a.m. - Snack" },
          { "type": "text", "label": "12:30 p.m. - Lunch" },
          { "type": "text", "label": "3:00 p.m. - Snack" },
          { "type": "text", "label": "6:00 p.m. - Dinner" },
          { "type": "text", "label": "7:30 p.m. - Snack" }
        ]
      }
    ]
  }
  ,
  {
    "day": 50,
    "title": "Eighth Week Review",
    "description": "Review week 8 progress and celebrate completion of 7 weeks of the program.",
    "questions": [
      {
        "id": 5001,
        "type": "number",
        "label": "Waist Measurement Start"
      },
      {
        "id": 5002,
        "type": "number",
        "label": "Waist Measurement Now"
      },
      {
        "id": 5003,
        "type": "number",
        "label": "Weight Start"
      },
      {
        "id": 5004,
        "type": "number",
        "label": "Weight Now"
      },
      {
        "id": 5005,
        "type": "number",
        "label": "Step Goal"
      },
      {
        "id": 5006,
        "type": "text",
        "label": "Reflection notes on energy, exercise, and progress this week"
      },
      {
        "id": 5007,
        "type": "text",
        "label": "Step Tracking Response",
        "suggestions": {
          "metGoal": ["Fabulous work! Keep at it and talk to us tomorrow!"],
          "notMetGoal": ["Tell yourself you can do it! Think about why you didn’t reach your goal and plan a way to improve."]
        }
      }
    ]
  }
  ,
  {
    "day": 51,
    "title": "Ninth Week Check-in",
    "description": "Check food reporting and step activity progress for week 9.",
    "responses": {
      "foodReported": "Thank you for keeping up with your food reporting! Talk to us again tomorrow!",
      "foodNotReported": "We know it takes time to do this but it is so important! Try to close the kitchen about 3 hours before bedtime!",
      "stepsMetGoal": "Bravo! You are motivating people around you without even knowing it!",
      "stepsNotMetGoal": "Keep working at it! You may reach your step goal by the end of the week!",
      "stepsNotSent": "We miss hearing from you! Let us know how you are doing. You can get back on track as soon as ready!"
    }
  }
  ,
  {
    "day": 52,
    "title": "Weekly Food Questions",
    "questions": [
      {
        "id": 5201,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": ["You are doing so great! Keep staying strong!"],
          "No": ["Think about which felons you really crave and substitute a healthy option. Example: plain yogurt with fresh fruit instead of sugary yogurt."]
        }
      }
    ],
    "education": {
      "foodFelons": [
        "#5 Fried foods",
        "#4 Red/processed red meats",
        "#3 Stripped carbs",
        "#2 Added syrups (corn syrup, honey, agave, maple)",
        "#1 Simple sugars"
      ],
      "tip": "Added syrups quickly turn to simple sugars in the body. Typical breakfast syrup servings exceed daily safe sugar intake. Consider portioning or storing for later."
    }
  }
  ,
  {
    "day": 53,
    "title": "Weekly Mood and Exercise Assessment",
    "questions": [
      {
        "id": 5301,
        "type": "text",
        "label": "How has your exercise this week affected your mood?"
      },
      {
        "id": 5302,
        "type": "text",
        "label": "How has your eating this week affected your mood?"
      },
      {
        "id": 5303,
        "type": "single-choice",
        "label": "15 minutes of quiet reflection today?",
        "options": ["Yes", "No"]
      },
      {
        "id": 5304,
        "type": "single-choice",
        "label": "Formal meditation or breathing exercises today?",
        "options": ["Yes", "No"]
      },
      {
        "id": 5305,
        "type": "single-choice",
        "label": "Daily Mood Check",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"]
      }
    ],
    "stressManagement": {
      "yes": "GREAT JOB! Take 15 min to be present, savor senses, and reflect on a positive event.",
      "no": "Please schedule some 'You time' this week."
    },
    "diaphragmaticBreathing": {
      "steps": [
        "Position finger on belly button",
        "Inhale deeply through nose",
        "Hold breath, then take another breath on top",
        "Exhale fully",
        "Observe belly button movement",
        "Optional: Use inspiratory resistance device 10x morning/evening"
      ]
    }
  }
  ,
  {
    "day": 54,
    "title": "Monthly & Weekly Menopause Assessment",
    "questions": [
      { "id": 5401, "type": "single-choice", "label": "Lost interest or pleasure in normal activities?", "options": ["Yes", "No"] },
      { "id": 5402, "type": "single-choice", "label": "Feeling down, depressed, or low?", "options": ["Yes", "No"] },
      { "id": 5403, "type": "single-choice", "label": "Periods of low energy, mood swings, loss of concentration?", "options": ["Yes", "No"] },
      { "id": 5404, "type": "single-choice", "label": "Excessive worry?", "options": ["Yes", "No"] },
      { "id": 5405, "type": "single-choice", "label": "Felt very nervous, anxious, or physical symptoms?", "options": ["Yes", "No"] },
      { "id": 5406, "type": "single-choice", "label": "Would like to moderate/eliminate alcohol or cannabis?", "options": ["Yes", "No"] },
      { "id": 5407, "type": "single-choice", "label": "Hot flashes?", "options": ["A. Yes, driving me crazy", "B. Yes, tolerable", "C. No"] }
    ],
    "education": {
      "hormoneTherapy": {
        "question": "Do you want to review the data on hormone therapy?",
        "options": ["A. Yes", "B. Maybe", "C. No"],
        "summary": "Benefits may exceed risk in first 10 years after menopause, but always check with your doctor."
      }
    }
  }
  ,
  {
    "day": 55,
    "title": "Weekly Bone Health Assessment",
    "questions": [
      { "id": 5501, "type": "single-choice", "label": "Calcium 1,200 mg today?", "options": ["A. Yes", "B. Probably, at least 600 mg", "C. No"] },
      { "id": 5502, "type": "single-choice", "label": "Vitamin D2/3 with K2 1,000 units today?", "options": ["A. Yes", "B. No"] },
      { "id": 5503, "type": "single-choice", "label": "Strength Training today?", "options": ["A. Yes", "B. No"] },
      { "id": 5504, "type": "text", "label": "Notes on flexibility or bone exercises" }
    ],
    "tip": "Flexibility and Tai Chi can help strengthen bones and reduce fall risk."
  }
  ,
  {
    "day": 56,
    "title": "Weekly Measurements",
    "questions": [
      { "id": 5601, "type": "number", "label": "Weight (lbs/kg)" },
      { "id": 5602, "type": "number", "label": "Waist Measurement (inches/cm)" },
      { "id": 5603, "type": "number", "label": "Steps today" },
      { "id": 5604, "type": "text", "label": "Other Exercise" },
      {
        "id": 5605,
        "type": "group",
        "label": "Food Log",
        "fields": [
          { "type": "text", "label": "7:30 a.m. - Breakfast" },
          { "type": "text", "label": "10:00 a.m. - Snack" },
          { "type": "text", "label": "12:30 p.m. - Lunch" },
          { "type": "text", "label": "3:00 p.m. - Snack" },
          { "type": "text", "label": "6:00 p.m. - Dinner" },
          { "type": "text", "label": "7:30 p.m. - Snack" }
        ]
      }
    ]
  }
  ,
  {
    "day": 57,
    "title": "Ninth Week Review",
    "questions": [
      { "id": 5701, "type": "number", "label": "Waist Start" },
      { "id": 5702, "type": "number", "label": "Waist Now" },
      { "id": 5703, "type": "number", "label": "Weight Start" },
      { "id": 5704, "type": "number", "label": "Weight Now" },
      { "id": 5705, "type": "number", "label": "Step Goal" },
      { "id": 5706, "type": "text", "label": "Reflection on energy, exercise, and routine changes" }
    ],
    "tip": "Try a new healthy food or walking route to keep energy up. Suggest walking with a friend instead of lunch."
  }
  ,
  {
    "day": 58,
    "title": "Tenth Week Check-in",
    "responses": {
      "foodReported": "Great reporting! Talk to us again tomorrow!",
      "foodNotReported": "Write down most of what you eat today; it's premium self-care.",
      "stepsNotSent": "Let us know how active you were yesterday; include all movement minutes.",
      "stepsMetGoal": "Way to go! Keep stepping and track progress: weight and waist changes.",
      "stepsUnderGoal": "Keep stepping! A few more and you'll reach your goal."
    }
  }
  ,
  {
    "day": 59,
    "title": "Weekly Food Questions",
    "questions": [
      {
        "id": 5901,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "suggestions": {
          "Yes": ["BRAVO! Keep doing great!"],
          "No": ["Keep trying. We know you are human!"]
        }
      }
    ],
    "education": {
      "foodFelons": [
        "#5 Fried foods",
        "#4 Red/processed meats",
        "#3 Stripped/simple carbs (enriched white flour, semolina, etc.)",
        "#2 Added syrups",
        "#1 Simple sugars"
      ],
      "tip": "Mix whole wheat and enriched flour 50/50 to ease transition."
    }
  }
  ,
  {
    "day": 60,
    "title": "Weekly Mood Assessment",
    "questions": [
      {
        "id": 6001,
        "type": "single-choice",
        "label": "Daily Mood Check",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"]
      }
    ],
    "responses": {
      "A": "Keep smiling! Appreciate positive events; write down 5 things that make you happy.",
      "B": "Recall last week's positive events. Write 2 more from this week; practice a breathing exercise.",
      "C": "Focus on improving tomorrow; practice diaphragmatic breathing."
    },
    "diaphragmaticBreathing": {
      "steps": [
        "Position finger on belly button",
        "Inhale deeply through nose",
        "Hold breath and take another breath on top",
        "Exhale fully",
        "Observe belly movement",
        "Use inspiratory resistance device if available"
      ],
      "link": "[stressfreenow link to purchase device]"
    }
  }
  ,
  {
    "day": 61,
    "title": "Weekly Menopause Symptoms",
    "description": "Assess hot flashes, sleep quality, and daily steps to manage menopause symptoms.",
    "educationalContent": "Track hot flashes, improve sleep, and gradually increase steps to 10,000/day.",
    "askRachel": true,
    "questions": [
      {
        "id": 6101,
        "type": "single-choice",
        "label": "Are hot flashes affecting you today?",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A. Yes, they are driving me crazy!": [
            "Think about when the hot flashes are bothering you most. Are they keeping you up at night or worse during the day?"
          ],
          "B. Yes, but they are tolerable.": [
            "Keep stepping and eating right! You may just sail through this!"
          ],
          "C. No": [
            "You lucky woman! Keep maintaining your healthy habits."
          ]
        }
      },
      {
        "id": 6102,
        "type": "scale",
        "label": "How many steps did you take today?",
        "min": 0,
        "max": 25000,
        "suggestions": {
          "lowRange": [
            "Try to do at least the minimum steps for this week to build up safely."
          ],
          "midRange": [
            "Good progress! Keep adding small steps each day."
          ],
          "highRange": [
            "Fantastic! You are exceeding the daily step goals safely."
          ]
        }
      }
    ]
  },
  {
    "day": 62,
    "title": "Weekly Bone Health Reporting",
    "description": "Check your calcium, vitamin D, and strength training activities.",
    "educationalContent": "Calcium, vitamin D3, K2, magnesium, and strength training keep bones strong.",
    "askRachel": true,
    "questions": [
      {
        "id": 6201,
        "type": "single-choice",
        "label": "Did you take 1,200 mg calcium today (half from supplements)?",
        "options": [
          "A. Yes",
          "B. Probably, at least 600 mg from supplements",
          "C. No"
        ],
        "suggestions": {
          "A. Yes": [
            "We are proud of you! Thank you for keeping your bones strong."
          ],
          "B. Probably, at least 600 mg from supplements": [
            "Good effort, try to get full 1,200 mg if possible."
          ],
          "C. No": [
            "Your bones need calcium. Try to include supplements or calcium-rich foods!"
          ]
        }
      },
      {
        "id": 6202,
        "type": "yes-no",
        "label": "Did you take Vitamin D2/3 with K2 (1,000 units) today?",
        "suggestions": {
          "yes": [
            "Great! Vitamin D and K2 are important for bone health."
          ],
          "no": [
            "Try to include vitamin D/K2 to support strong bones."
          ]
        }
      },
      {
        "id": 6203,
        "type": "yes-no",
        "label": "Did you perform any strength training today?",
        "suggestions": {
          "yes": [
            "WONDERFUL JOB! Keep up your strength training routine."
          ],
          "no": [
            "Try to incorporate some strength exercises this week, even at home!"
          ]
        }
      }
    ]
  },
  {
    "day": 63,
    "title": "Weekly Measurements",
    "description": "Track your weight, waist, steps, and other exercises.",
    "educationalContent": "Tracking measurements helps monitor progress over time.",
    "askRachel": true,
    "questions": [
      {
        "id": 6301,
        "type": "number",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 6302,
        "type": "number",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 6303,
        "type": "number",
        "label": "Steps today"
      },
      {
        "id": 6304,
        "type": "text",
        "label": "Other exercise (include resistance exercises and cardio)"
      },
      {
        "id": 6305,
        "type": "checkbox-group",
        "label": "Food Log for the Day",
        "options": [
          "7:30 a.m. - Breakfast foods",
          "10:00 a.m. - Morning snack",
          "12:30 p.m. - Lunch foods",
          "3:00 p.m. - Afternoon snack",
          "6:00 p.m. - Dinner foods",
          "7:30 p.m. - Evening snack",
          "7:35 p.m. - Kitchen closed for the night"
        ]
      }
    ]
  },
  {
    "day": 64,
    "title": "Tenth Week Review",
    "description": "Review weekly data for weight, waist, and steps.",
    "educationalContent": "Look how far you have come in 9 weeks! Keep adjusting habits to maintain energy and health.",
    "askRachel": true,
    "questions": [
      {
        "id": 6401,
        "type": "number",
        "label": "Starting waist measurement (inches or cm)"
      },
      {
        "id": 6402,
        "type": "number",
        "label": "Current waist measurement (inches or cm)"
      },
      {
        "id": 6403,
        "type": "number",
        "label": "Starting weight (lbs or kg)"
      },
      {
        "id": 6404,
        "type": "number",
        "label": "Current weight (lbs or kg)"
      },
      {
        "id": 6405,
        "type": "number",
        "label": "Step goal for this week"
      },
      {
        "id": 6406,
        "type": "single-choice",
        "label": "Did you send your steps for today and prior day?",
        "options": [
          "Yes, both days",
          "Yes, one of the two days",
          "No, neither day"
        ],
        "suggestions": {
          "Yes, both days": [
            "Great job! Keep sending your steps every day."
          ],
          "Yes, one of the two days": [
            "Good, but try to send steps daily."
          ],
          "No, neither day": [
            "We need your steps daily! Keep consistent."
          ]
        }
      }
    ]
  },
  {
    "day": 65,
    "title": "Weekly Food Questions",
    "description": "Track food and non-sitting time to maintain motivation.",
    "educationalContent": "Logging food is premium self-care. Stay consistent for better choices.",
    "askRachel": true,
    "questions": [
      {
        "id": 6501,
        "type": "single-choice",
        "label": "Did you report your steps today?",
        "options": [
          "Yes",
          "No"
        ],
        "suggestions": {
          "Yes": [
            "Way to stay focused! Keep that motivation up!"
          ],
          "No": [
            "We get lonely when we do not hear from you. Report NST or steps tomorrow!"
          ]
        }
      },
      {
        "id": 6502,
        "type": "single-choice",
        "label": "Did you report your food today?",
        "options": [
          "Yes",
          "No"
        ],
        "suggestions": {
          "Yes": [
            "Great food reporting! Talk to us again tomorrow."
          ],
          "No": [
            "Try to write down most of your food. It's premium self-care!"
          ]
        }
      }
    ]
  },
  {
    "day": 66,
    "title": "Weekly Food Review",
    "description": "Check your adherence to avoiding the Five Food Felons.",
    "educationalContent": "Knowing the Food Felons and avoiding them helps improve health.",
    "askRachel": true,
    "questions": [
      {
        "id": 6601,
        "type": "yes-no",
        "label": "Did you stay away from the Five Food Felons today?",
        "suggestions": {
          "yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          "no": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      },
      {
        "id": 6602,
        "type": "text",
        "label": "Which Food Felon is most difficult for you to avoid?",
        "suggestions": [
          "Think about triggers and situations that make you choose these foods."
        ]
      }
    ]
  },
  {
    "day": 67,
    "title": "Weekly Mood & Exercise Assessment",
    "description": "Assess your mood and introduce diaphragmatic breathing and inspiratory resistance training.",
    "educationalContent": "Mood tracking and breathing exercises improve stress management and well-being.",
    "askRachel": true,
    "questions": [
      {
        "id": 6701,
        "type": "single-choice",
        "label": "How do you feel today?",
        "options": [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        "suggestions": {
          "A. I feel great today!": [
            "We feel great when you do! Keep smiling!"
          ],
          "B. I feel ok today.": [
            "Try writing 2 positive events from this week."
          ],
          "C. I do not feel great today": [
            "Focus on improving tomorrow and practice a breathing exercise."
          ]
        }
      },
      {
        "id": 6702,
        "type": "yes-no",
        "label": "Do you think you can get an inspiratory resistance training device?",
        "suggestions": {
          "yes": [
            "Great! This will help strengthen your diaphragm."
          ],
          "no": [
            "Consider using diaphragmatic breathing without the device as a starting point."
          ]
        }
      },
      {
        "id": 6703,
        "type": "yes-no",
        "label": "Do you think you can practice deep breathing 10 times in the morning and 10 times in the evening daily?",
        "suggestions": {
          "yes": [
            "Excellent! Daily practice helps calm the mind and strengthen the diaphragm."
          ],
          "no": [
            "Try at least a few breaths each day and gradually build up."
          ]
        }
      }
    ]
  },
  {
    "day": 68,
    "title": "Weekly Menopause Symptoms",
    "description": "Assess hot flashes, sleep quality, and steps.",
    "educationalContent": "Tracking hot flashes and steps helps manage symptoms and overall health.",
    "askRachel": true,
    "questions": [
      {
        "id": 6801,
        "type": "single-choice",
        "label": "Are hot flashes affecting you today?",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A. Yes, they are driving me crazy!": [
            "Think about when the hot flashes are bothering you most, day or night."
          ],
          "B. Yes, but they are tolerable.": [
            "Keep stepping and eating right!"
          ],
          "C. No": [
            "You lucky woman! Keep maintaining your healthy habits."
          ]
        }
      },
      {
        "id": 6802,
        "type": "scale",
        "label": "How many steps did you take today?",
        "min": 0,
        "max": 25000,
        "suggestions": {
          "lowRange": [
            "Try to meet this week's minimum step goal safely."
          ],
          "midRange": [
            "Good progress! Keep adding small steps."
          ],
          "highRange": [
            "Fantastic! You're exceeding the step goal safely."
          ]
        }
      }
    ]
  },
  {
    "day": 69,
    "title": "Weekly Bone Health Reporting",
    "description": "Check your calcium, vitamin D, and strength training activities.",
    "educationalContent": "Calcium, vitamin D3, K2, magnesium, and strength training keep bones strong.",
    "askRachel": true,
    "questions": [
      {
        "id": 6901,
        "type": "single-choice",
        "label": "Did you take 1,200 mg calcium today (half from supplements)?",
        "options": [
          "A. Yes",
          "B. Probably, at least 600 mg from supplements",
          "C. No"
        ],
        "suggestions": {
          "A. Yes": [
            "We are proud of you! Thank you for keeping your bones strong."
          ],
          "B. Probably, at least 600 mg from supplements": [
            "Good effort, try to get full 1,200 mg if possible."
          ],
          "C. No": [
            "Your bones need calcium. Try to include supplements or calcium-rich foods!"
          ]
        }
      },
      {
        "id": 6902,
        "type": "yes-no",
        "label": "Did you take Vitamin D2/3 with K2 (1,000 units) today?",
        "suggestions": {
          "yes": [
            "Great! Vitamin D and K2 are important for bone health."
          ],
          "no": [
            "Try to include vitamin D/K2 to support strong bones."
          ]
        }
      },
      {
        "id": 6903,
        "type": "yes-no",
        "label": "Did you perform any strength training today?",
        "suggestions": {
          "yes": [
            "WONDERFUL JOB! Keep up your strength training routine."
          ],
          "no": [
            "Try to incorporate some strength exercises this week, even at home!"
          ]
        }
      }
    ]
  },
  {
    "day": 70,
    "title": "Weekly Measurements",
    "description": "Track your weight, waist, steps, and other exercises.",
    "educationalContent": "Tracking measurements helps monitor progress over time.",
    "askRachel": true,
    "questions": [
      {
        "id": 7001,
        "type": "number",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 7002,
        "type": "number",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 7003,
        "type": "number",
        "label": "Steps today"
      },
      {
        "id": 7004,
        "type": "text",
        "label": "Other exercise (include resistance exercises and cardio)"
      },
      {
        "id": 7005,
        "type": "checkbox-group",
        "label": "Food Log for the Day",
        "options": [
          "7:30 a.m. - Breakfast foods",
          "10:00 a.m. - Morning snack",
          "12:30 p.m. - Lunch foods",
          "3:00 p.m. - Afternoon snack",
          "6:00 p.m. - Dinner foods",
          "7:30 p.m. - Evening snack",
          "7:35 p.m. - Kitchen closed for the night"
        ]
      }
    ]
  },

  {
    "day": 71,
    "title": "Eleventh Week Review",
    "description": "Review your progress over the past 10 weeks for weight, waist, and steps.",
    "educationalContent": "Reflect on changes and continue building healthy routines.",
    "askRachel": true,
    "questions": [
      {
        "id": 7101,
        "type": "number",
        "label": "Starting waist measurement (inches or cm)"
      },
      {
        "id": 7102,
        "type": "number",
        "label": "Current waist measurement (inches or cm)"
      },
      {
        "id": 7103,
        "type": "number",
        "label": "Starting weight (lbs or kg)"
      },
      {
        "id": 7104,
        "type": "number",
        "label": "Current weight (lbs or kg)"
      },
      {
        "id": 7105,
        "type": "number",
        "label": "Step goal for this week"
      }
    ]
  },
  {
    "day": 72,
    "title": "Weekly Food & Step Questions",
    "description": "Check if you reported steps and food for the week.",
    "educationalContent": "Reporting daily steps and food helps maintain motivation and accountability.",
    "askRachel": true,
    "questions": [
      {
        "id": 7201,
        "type": "yes-no",
        "label": "Did you report your steps today?",
        "suggestions": {
          "yes": [
            "Way to stay focused! Keep that motivation up!"
          ],
          "no": [
            "We need daily steps! Report NST (non-sitting time) tomorrow."
          ]
        }
      },
      {
        "id": 7202,
        "type": "yes-no",
        "label": "Did you report your food today?",
        "suggestions": {
          "yes": [
            "Great food reporting! Talk to us again tomorrow."
          ],
          "no": [
            "Try to write down most of what you eat—it’s premium self-care!"
          ]
        }
      }
    ]
  },
  {
    "day": 73,
    "title": "Weekly Food Review",
    "description": "Check adherence to avoiding the Five Food Felons.",
    "educationalContent": "Avoiding Food Felons helps with overall health and weight management.",
    "askRachel": true,
    "questions": [
      {
        "id": 7301,
        "type": "yes-no",
        "label": "Did you stay away from the Five Food Felons today?",
        "suggestions": {
          "yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          "no": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      },
      {
        "id": 7302,
        "type": "text",
        "label": "Which Food Felon is most difficult for you to avoid?",
        "suggestions": [
          "Think about triggers and situations that make you choose these foods."
        ]
      }
    ]
  },
  {
    "day": 74,
    "title": "Monthly Mood & Exercise Assessment",
    "description": "Track how exercise and eating habits affect your mood. Include stress management.",
    "educationalContent": "Mood tracking and stress management techniques improve well-being.",
    "askRachel": true,
    "questions": [
      {
        "id": 7401,
        "type": "single-choice",
        "label": "How do you feel today?",
        "options": [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        "suggestions": {
          "A. I feel great today!": [
            "Keep feeling great! Tell us one reason why.",
            "We feel great when you do! Tell us one reason why. Love it! Keep smiling!",
            "We are happy when you are happy. Tell us one reason why. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "Keep stepping and eating right. Practice a breathing exercise for 60 seconds."
          ],
          "C. I do not feel great today": [
            "Complete diaphragmatic breathing exercises today and consider inspiratory resistance training."
          ]
        }
      },
      {
        "id": 7402,
        "type": "yes-no",
        "label": "Did you take 15 minutes of quiet reflection today?",
        "suggestions": {
          "yes": [
            "GREAT JOB for pro-actively managing your mood!"
          ],
          "no": [
            "Please schedule time out for yourself this week."
          ]
        }
      },
      {
        "id": 7403,
        "type": "yes-no",
        "label": "Did you do formal meditation or breathing exercises today?",
        "suggestions": {
          "yes": [
            "GREAT JOB for pro-actively managing your mood!"
          ],
          "no": [
            "Please schedule time out for yourself this week."
          ]
        }
      }
    ]
  },
  {
    "day": 75,
    "title": "Weekly Menopause Symptoms",
    "description": "Assess hot flashes, vaginal dryness, sleep, and food reporting.",
    "educationalContent": "Tracking symptoms and following sleep, food, and exercise recommendations helps manage menopause.",
    "askRachel": true,
    "questions": [
      {
        "id": 7501,
        "type": "single-choice",
        "label": "Are hot flashes affecting you today?",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A. Yes, they are driving me crazy!": [
            "Some women may experience palpitations during a hot flash—if outside hot flash episodes, consult your physician.",
            "Think about when hot flashes are bothering you most, day or night."
          ],
          "B. Yes, but they are tolerable.": [
            "Keep stepping and eating right! Your positive outlook helps keep symptoms under control!"
          ],
          "C. No": [
            "Keep stepping and eating right! Your positive outlook helps keep symptoms under control!"
          ]
        }
      },
      {
        "id": 7502,
        "type": "checkbox-group",
        "label": "Sleep Tips Followed Today",
        "options": [
          "Avoid caffeine after 3pm",
          "Do not watch TV in bedroom",
          "Do not work in bed",
          "Wind-down for 15 minutes before bedtime"
        ],
        "suggestions": {
          "text": [
            "Good sleep habits help manage hot flashes and overall well-being."
          ]
        }
      },
      {
        "id": 7503,
        "type": "yes-no",
        "label": "Did you report your food today?",
        "suggestions": {
          "yes": [
            "Great reporting! Talk to us again tomorrow!"
          ],
          "no": [
            "Write down most of your food today—premium self-care!"
          ]
        }
      },
      {
        "id": 7504,
        "type": "text",
        "label": "Any observations or notes about vaginal dryness or related symptoms?",
        "suggestions": [
          "Include triggers, interventions like lubricants or moisturizers, and any physician guidance."
        ]
      }
    ]
  },
  {
    "day": 76,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D, and strength training for bone health.",
    "educationalContent": "Getting enough calcium, vitamin D3, magnesium, and vitamin K2 helps keep your bones strong. Strength training complements bone health.",
    "askRachel": true,
    "questions": [
      {
        "id": 7601,
        "type": "single-choice",
        "label": "Calcium intake today (1,200 mg, half from supplements)?",
        "options": [
          "A. Yes",
          "B. Probably, at least got 600 mg from supplement",
          "C. No"
        ],
        "suggestions": {
          "A": [
            "We are so proud of you! Thank you for the calcium!"
          ],
          "B": [
            "We are so proud of you! Thank you for the calcium!"
          ],
          "C": [
            "Your bones need to stay strong! Try to get that calcium and other nutrients!"
          ]
        }
      },
      {
        "id": 7602,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": [
          "A. Yes",
          "B. No"
        ],
        "suggestions": {
          "A": [
            "Great job keeping your bones strong!"
          ],
          "B": [
            "Your bones need to stay strong! Try to get vitamin D3 and K2."
          ]
        }
      },
      {
        "id": 7603,
        "type": "yes-no",
        "label": "Did you perform strength training today?",
        "suggestions": {
          "yes": [
            "WONDERFUL JOB! You are strong!"
          ],
          "no": [
            "Try to get some strength work into your routine. Flexibility matters too."
          ]
        }
      },
      {
        "id": 7604,
        "type": "text",
        "label": "Notes or observations about steps or step goal",
        "suggestions": [
          "Reflect on your step goal and any obstacles today."
        ]
      }
    ]
  },
  {
    "day": 77,
    "title": "Weekly Measurements",
    "description": "Track weekly weight, waist, steps, and exercise.",
    "educationalContent": "Monitoring your measurements helps track progress and adjust your plan.",
    "askRachel": true,
    "questions": [
      {
        "id": 7701,
        "type": "number",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 7702,
        "type": "number",
        "label": "Waist measurement (inches or cm)"
      },
      {
        "id": 7703,
        "type": "number",
        "label": "Steps this week"
      },
      {
        "id": 7704,
        "type": "text",
        "label": "Other exercise performed"
      },
      {
        "id": 7705,
        "type": "text",
        "label": "Food log for the day",
        "template": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snack",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snack",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snack",
          "7:35 p.m. - Kitchen is closed"
        ]
      }
    ]
  },
  {
    "day": 78,
    "title": "Twelfth Week Review",
    "description": "Review progress over the past 11 weeks for waist, weight, and steps.",
    "educationalContent": "Reflect on changes and celebrate your successes. Continue to improve your daily routine with small healthy changes.",
    "askRachel": true,
    "questions": [
      {
        "id": 7801,
        "type": "number",
        "label": "Starting waist measurement (inches or cm)"
      },
      {
        "id": 7802,
        "type": "number",
        "label": "Current waist measurement (inches or cm)"
      },
      {
        "id": 7803,
        "type": "number",
        "label": "Starting weight (lbs or kg)"
      },
      {
        "id": 7804,
        "type": "number",
        "label": "Current weight (lbs or kg)"
      },
      {
        "id": 7805,
        "type": "number",
        "label": "Step goal for this week"
      },
      {
        "id": 7806,
        "type": "yes-no",
        "label": "Did you report your steps today?",
        "suggestions": {
          "yes": [
            "Great! Keep going!"
          ],
          "no": [
            "We are sad we didn’t hear from you. Report your steps tomorrow."
          ]
        }
      }
    ]
  },
  {
    "day": 80,
    "title": "Weekly Food Review",
    "description": "Check adherence to avoiding the Five Food Felons and read about plant-based meat alternatives.",
    "educationalContent": "Avoid highly-processed foods and red or processed meats for better mood, heart, and gut health.",
    "askRachel": true,
    "questions": [
      {
        "id": 8001,
        "type": "yes-no",
        "label": "Did you stay away from the Five Food Felons today?",
        "suggestions": {
          "yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          "no": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      },
      {
        "id": 8002,
        "type": "text",
        "label": "Observations about plant-based meat alternatives or other foods",
        "suggestions": [
          "Consider how processed meat alternatives may affect mood, inflammation, and gut health.",
          "Explore healthier options like unprocessed fruits, vegetables, whole grains, and fish or lean meats."
        ]
      }
    ]
  },
  {
    "day": 81,
    "title": "Weekly Mood & Exercise Assessment",
    "description": "Check mood, stress management, and reflection on exercise and eating.",
    "educationalContent": "Exercise often improves mood. Quiet reflection and diaphragmatic breathing strengthen mental health.",
    "askRachel": true,
    "questions": [
      {
        "id": 8101,
        "type": "single-choice",
        "label": "Daily Mood Check",
        "options": [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        "suggestions": {
          "A": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B": [
            "Keep stepping and eating right. Practice a breathing exercise."
          ],
          "C": [
            "Offer comprehensive stress management program with diaphragmatic breathing."
          ]
        }
      },
      {
        "id": 8102,
        "type": "yes-no",
        "label": "Did you take 15 minutes of quiet reflection time?",
        "suggestions": {
          "yes": [
            "GREAT JOB for pro-actively managing your mood!"
          ],
          "no": [
            "Please schedule time out for yourself in the next weeks."
          ]
        }
      },
      {
        "id": 8103,
        "type": "yes-no",
        "label": "Did you perform formal meditation or breathing exercises?",
        "suggestions": {
          "yes": [
            "GREAT JOB for pro-actively managing your mood!"
          ],
          "no": [
            "Please schedule time out for yourself in the next weeks."
          ]
        }
      },
      {
        "id": 8104,
        "type": "text",
        "label": "Notes on diaphragmatic breathing or reflections",
        "suggestions": [
          "21. Position finger on belly button",
          "22. Inhale deeply through nose, hold, then add another breath",
          "23. Observe belly button movement outward",
          "24. Consider inspiratory resistance device",
          "25. Use device 10 times morning and evening"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 82,
    "title": "Monthly Menopause Assessment",
    "description": "Track mood, energy, and hot flashes over the past month.",
    "educationalContent": "Monitoring mood, energy, and hot flashes helps identify patterns and plan interventions.",
    "askRachel": true,
    "questions": [
      {
        "id": 8201,
        "type": "yes-no",
        "label": "Lost interest or pleasure in usual activities?"
      },
      {
        "id": 8202,
        "type": "yes-no",
        "label": "Feeling down, blue, depressed or low?"
      },
      {
        "id": 8203,
        "type": "yes-no",
        "label": "Periods of low energy, mood swings, irritability, or loss of concentration?"
      },
      {
        "id": 8204,
        "type": "yes-no",
        "label": "Excessive worry about issues (health, finances, family, etc.)?"
      },
      {
        "id": 8205,
        "type": "yes-no",
        "label": "Felt very nervous or anxious or had sudden physical symptoms?"
      },
      {
        "id": 8206,
        "type": "yes-no",
        "label": "Would you like to moderate or eliminate alcohol or cannabis?"
      },
      {
        "id": 8207,
        "type": "single-choice",
        "label": "Hot Flashes",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A": [
            "Talk to your doctor about non-hormonal treatments. Consider acupuncture. Flaxseed not effective."
          ],
          "B": [
            "We want you to get from OK to great! Keep stepping and eating right. Add extra relaxation or laughter."
          ],
          "C": [
            "You lucky woman! No action needed."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 83,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D, K2, and strength training for bone health.",
    "educationalContent": "Vitamin K2 is important for bone and possibly cardiovascular health. Best sources: green leafy vegetables. Consult your doctor if on blood thinners.",
    "askRachel": true,
    "questions": [
      {
        "id": 8301,
        "type": "single-choice",
        "label": "Calcium intake today (1,200 mg, half from supplements)?",
        "options": [
          "A. Yes",
          "B. Probably, at least 600 mg from supplement",
          "C. No"
        ]
      },
      {
        "id": 8302,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": [
          "A. Yes",
          "B. No"
        ]
      },
      {
        "id": 8303,
        "type": "yes-no",
        "label": "Did you perform strength training today?"
      }
    ],
    "checklist": true
  },
  {
    "day": 84,
    "title": "Weekly Measurements",
    "description": "Track weekly weight, waist, steps, exercise, and food log.",
    "educationalContent": "Tracking your measurements helps monitor progress and adjust your routine.",
    "askRachel": true,
    "questions": [
      {
        "id": 8401,
        "type": "number",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 8402,
        "type": "number",
        "label": "Waist measurement (inches or cm)"
      },
      {
        "id": 8403,
        "type": "number",
        "label": "Steps this week"
      },
      {
        "id": 8404,
        "type": "text",
        "label": "Other exercise performed"
      },
      {
        "id": 8405,
        "type": "text",
        "label": "Food log for the day",
        "template": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snack",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snack",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snack",
          "7:35 p.m. - Kitchen is closed"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 85,
    "title": "Thirteenth Week Review",
    "description": "Review weekly progress in waist, weight, and steps.",
    "educationalContent": "Celebrate your successes and continue improving your routine with small changes.",
    "askRachel": true,
    "questions": [
      {
        "id": 8501,
        "type": "number",
        "label": "Starting waist measurement (inches or cm)"
      },
      {
        "id": 8502,
        "type": "number",
        "label": "Current waist measurement (inches or cm)"
      },
      {
        "id": 8503,
        "type": "number",
        "label": "Starting weight (lbs or kg)"
      },
      {
        "id": 8504,
        "type": "number",
        "label": "Current weight (lbs or kg)"
      },
      {
        "id": 8505,
        "type": "number",
        "label": "Step goal for this week"
      },
      {
        "id": 8506,
        "type": "yes-no",
        "label": "Did you report your steps today?"
      }
    ],
    "checklist": true
  },
  {
    "day": 86,
    "title": "Weekly Food & Step Questions",
    "description": "Track steps, non-sitting time, and food intake.",
    "educationalContent": "Every step counts! Non-sitting time can be converted to steps. Tracking food helps awareness of intake.",
    "askRachel": true,
    "questions": [
      {
        "id": 8601,
        "type": "yes-no",
        "label": "Did you report your steps today?",
        "suggestions": {
          "yes": [
            "Way to stay focused! Keep that motivation up!"
          ],
          "no": [
            "We get lonely when we don't hear from you. Report your non-sitting time tomorrow!"
          ]
        }
      },
      {
        "id": 8602,
        "type": "single-choice",
        "label": "Did you reach your step goal?",
        "options": [
          "Yes",
          "No"
        ],
        "suggestions": {
          "yes": [
            "You are getting stronger every day!!",
            "Fabulous job! We love your dedication!!"
          ],
          "no": [
            "We still believe in you! If you need to cut back for a day or two, that's ok, but get back on track!",
            "Remember, you can still report your non-sitting time. Moderate intensity = 100 steps/min, leisurely = 50 steps/min."
          ]
        }
      },
      {
        "id": 8603,
        "type": "yes-no",
        "label": "Did you report your food today?",
        "suggestions": {
          "yes": [
            "Thank you! Doesn't it feel good to know exactly what you're putting in your body?"
          ],
          "no": [
            "We hope you are at least staying away from the five food felons. Report tomorrow.",
            "Think of food logging as premium self-care! Record most of it even if not everything."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 87,
    "title": "Weekly Food Review",
    "description": "Assess adherence to the Five Food Felons and learn about dietary fiber.",
    "educationalContent": "High fiber diet reduces risk of chronic disease, improves satiety, and promotes digestive health.",
    "askRachel": true,
    "questions": [
      {
        "id": 8701,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": [
          "Yes",
          "No"
        ],
        "suggestions": {
          "yes": [
            "Wonderful job! Your body is thanking you!"
          ],
          "no": [
            "Think about why this is getting tough. Can you substitute a high fiber food for a felon?"
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 88,
    "title": "Weekly Mood Assessment",
    "description": "Reflect on exercise, eating, and stress management for mood control.",
    "educationalContent": "Exercise and proper nutrition improve mood. Breathing exercises reduce stress.",
    "askRachel": true,
    "questions": [
      {
        "id": 8801,
        "type": "single-choice",
        "label": "Daily Mood Check",
        "options": [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        "suggestions": {
          "A": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B": [
            "Keep stepping and eating right. Add extra relaxation or laughter."
          ],
          "C": [
            "Offer comprehensive stress management program with diaphragmatic breathing."
          ]
        }
      },
      {
        "id": 8802,
        "type": "yes-no",
        "label": "Did you take 15 minutes of quiet reflection?",
        "suggestions": {
          "yes": [
            "GREAT JOB for pro-actively managing your mood!"
          ],
          "no": [
            "Please schedule time out for yourself in the next weeks."
          ]
        }
      },
      {
        "id": 8803,
        "type": "yes-no",
        "label": "Did you do formal meditation or breathing exercises?",
        "suggestions": {
          "yes": [
            "GREAT JOB for pro-actively managing your mood!"
          ],
          "no": [
            "Please schedule time out for yourself in the next weeks."
          ]
        }
      },
      {
        "id": 8804,
        "type": "text",
        "label": "Diaphragmatic Breathing Steps",
        "suggestions": [
          "26. Position finger on belly button",
          "27. Inhale deeply through nose, hold, then add another breath",
          "28. Observe belly button movement outward",
          "29. Consider inspiratory resistance device",
          "30. Use device 10 times morning and evening"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 89,
    "title": "Weekly Menopause Symptom Reporting",
    "description": "Track hot flashes, sleep, and overall wellbeing.",
    "educationalContent": "Better sleep and consistent stepping/food choices help manage hot flashes.",
    "askRachel": true,
    "questions": [
      {
        "id": 8901,
        "type": "single-choice",
        "label": "Hot Flashes",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A": [
            "Think about when flashes bother you most. Discuss non-hormonal treatments or acupuncture with your doctor. Try sleeping tips."
          ],
          "B": [
            "Keep stepping and eating right. You may sail through this!"
          ],
          "C": [
            "You lucky woman! No action needed."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 90,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D3/K2, strength training, and dietary sources.",
    "educationalContent": "Vitamin D is difficult to get from diet alone. Magnesium and Vitamin K2 are important for bone health. Sun exposure can help Vitamin D3 synthesis.",
    "askRachel": true,
    "questions": [
      {
        "id": 9001,
        "type": "single-choice",
        "label": "Calcium intake today (1,200 mg, half from supplements)?",
        "options": [
          "A. Yes",
          "B. Probably, at least 600 mg from supplement",
          "C. No"
        ]
      },
      {
        "id": 9002,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": [
          "A. Yes",
          "B. No"
        ]
      },
      {
        "id": 9003,
        "type": "yes-no",
        "label": "Did you perform strength training today?"
      },
      {
        "id": 9004,
        "type": "text",
        "label": "Dietary sources for Vitamin D3, K2, and Magnesium",
        "suggestions": [
          "Fatty fish, fortified milk, fortified plant milks, fortified cereals",
          "Pumpkin seeds, chia seeds, almonds, spinach, cashews, peanuts, soy milk, black beans, yogurt, oatmeal, kidney beans, banana, salmon, milk, avocado",
          "Sun exposure 10–20 minutes/day helps Vitamin D synthesis, adjust for skin tone and season"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 91,
    "title": "Weekly Measurements",
    "description": "Track weight, waist, steps, and food intake for the week.",
    "educationalContent": "Monitoring weekly measurements helps track progress and adjust diet/exercise accordingly.",
    "askRachel": true,
    "questions": [
      {
        "id": 9101,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 9102,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 9103,
        "type": "text",
        "label": "Steps for the week"
      },
      {
        "id": 9104,
        "type": "text",
        "label": "Other Exercise (resistance/cardio that makes you sweat)"
      },
      {
        "id": 9105,
        "type": "text",
        "label": "Food Log",
        "suggestions": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 92,
    "title": "Fourteenth Week Review",
    "description": "Review progress after 13 weeks and reflect on changes.",
    "educationalContent": "Small changes in activity or diet can increase energy and help continue progress.",
    "askRachel": true,
    "questions": [
      {
        "id": 9201,
        "type": "yes-no",
        "label": "Are you feeling any different this week?"
      },
      {
        "id": 9202,
        "type": "text",
        "label": "Weekly Measurements Review",
        "suggestions": [
          "Waist started at ___ inches, now ___ inches",
          "Weight started at ___ lbs/kg, now ___ lbs/kg",
          "Step goal: 10,000 or 10% higher than week 4"
        ]
      },
      {
        "id": 9203,
        "type": "text",
        "label": "Step Reporting Feedback",
        "suggestions": [
          "If sent steps both days: Thanks for sending your steps daily!",
          "If sent steps only one day: Keep sending your steps daily!",
          "If no steps sent: We need your steps daily. You can order a pedometer if needed."
        ]
      },
      {
        "id": 9204,
        "type": "text",
        "label": "Weight/Waist Change Feedback",
        "suggestions": [
          "If decrease: Congratulations! Your weight is XX lbs less, waist XX inches smaller.",
          "If no decrease: Be proud of your effort. Think about adjusting routine or diet to progress."
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 93,
    "title": "Weekly Exercise Assessment",
    "description": "Track steps and reinforce benefits of activity for diabetes prevention and overall health.",
    "educationalContent": "Increasing steps can help prevent diabetes, especially after age 45. Daily activity is key for overall wellness.",
    "askRachel": true,
    "questions": [
      {
        "id": 9301,
        "type": "text",
        "label": "Step Reporting Feedback",
        "suggestions": [
          "If steps sent both days: Thanks, keep it up!",
          "If steps sent one day: Keep sending your steps daily!",
          "If no steps sent: Steps are essential for health. Consider ordering a pedometer."
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 94,
    "title": "Weekly Food Review",
    "description": "Assess adherence to the Five Food Felons and educate about their effects during menopause.",
    "educationalContent": "Avoiding fried foods and other felons reduces inflammation and heart disease risk. LDL cholesterol may rise during menopause, so monitoring diet is important.",
    "askRachel": true,
    "questions": [
      {
        "id": 9401,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": [
          "Yes",
          "No"
        ],
        "suggestions": {
          "yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep it up!"
          ],
          "no": [
            "You will feel better if you stay away from these felons!",
            "Keep trying. We know you are human.",
            "Try again tomorrow!"
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 95,
    "title": "Monthly Mood Assessment",
    "description": "Track mood and recognize signs that may relate to sleep issues.",
    "educationalContent": "Mood problems can relate to sleep issues. Sleep apnea may affect sleep quality and should be discussed with a doctor if suspected.",
    "askRachel": true,
    "questions": [
      {
        "id": 9501,
        "type": "single-choice",
        "label": "Daily Mood Check",
        "options": [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        "suggestions": {
          "A": [
            "Terrific! We love being on this journey with you!"
          ],
          "B": [
            "Mood may relate to sleep issues. Monitor for snoring or abnormal breathing."
          ],
          "C": [
            "Mood may relate to sleep issues. Discuss possible sleep apnea with your doctor."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 96,
    "title": "Weekly Menopause Reporting",
    "description": "Track hot flashes, sleep, and stress management for overall well-being.",
    "educationalContent": "Daily stepping and food choices can improve mood and manage menopause symptoms. Sleep is critical for mood and overall health.",
    "askRachel": true,
    "questions": [
      {
        "id": 9601,
        "type": "single-choice",
        "label": "Hot Flashes",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A": [
            "Think about when hot flashes are bothering you most. Are they worse at night or day?",
            "Sleep tips: get 7 hours/night, avoid caffeine after 3pm, no TV/work in bed, wind-down 15 min before bed."
          ],
          "B": [
            "Keep stepping and eating right. Practice breathing exercises.",
            "Add an extra 5 minutes of relaxation time.",
            "Get an extra laugh in tomorrow. Watch comedy or call a friend."
          ],
          "C": [
            "Monitor any anxiety or mood symptoms. Discuss with your doctor if needed.",
            "Offer full stress management program including diaphragmatic breathing."
          ]
        },
        "breathingExercise": {
          "steps": [
            "Place a finger on your belly button.",
            "Inhale deeply through your nose, hold, then take another breath on top and exhale.",
            "Observe belly button movement (should move outward).",
            "Optional: use inspiratory resistance device $19.95, 10 times morning and evening."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 97,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D3/K2 intake, and strength training.",
    "educationalContent": "Maintaining bone health with supplements, diet, and weight-bearing exercises reduces fracture risk. Prevent falls by keeping your home safe and staying active.",
    "askRachel": true,
    "questions": [
      {
        "id": 9701,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": [
          "A. Yes",
          "B. Probably, at least 600 mg from supplement",
          "C. No"
        ]
      },
      {
        "id": 9702,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": [
          "A. Yes",
          "B. No"
        ]
      },
      {
        "id": 9703,
        "type": "single-choice",
        "label": "Strength Training Today?",
        "options": [
          "A. Yes"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 98,
    "title": "Weekly Measurements",
    "description": "Record weekly weight, waist, physical activity, and food intake.",
    "educationalContent": "Monitoring weight and waist along with activity helps track progress and adjust lifestyle for optimal health.",
    "askRachel": true,
    "questions": [
      {
        "id": 9801,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 9802,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 9803,
        "type": "text",
        "label": "Steps for the week"
      },
      {
        "id": 9804,
        "type": "text",
        "label": "Other Exercise (resistance/cardio that makes you sweat)"
      },
      {
        "id": 9805,
        "type": "text",
        "label": "Food Log",
        "suggestions": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 99,
    "title": "Fifteenth Week Review",
    "description": "Reflect on weekly data and consider new routines or foods to boost energy.",
    "educationalContent": "Small changes, like trying a new healthy food or route for walking, can sustain energy and progress.",
    "askRachel": true,
    "questions": [
      {
        "id": 9901,
        "type": "yes-no",
        "label": "Are you feeling any different this week?"
      },
      {
        "id": 9902,
        "type": "text",
        "label": "Weekly Measurements Review",
        "suggestions": [
          "Waist started at ___ inches, now ___ inches",
          "Weight started at ___ lbs/kg, now ___ lbs/kg",
          "Step goal: 10,000 or 10% higher than week 4"
        ]
      },
      {
        "id": 9903,
        "type": "text",
        "label": "Step Reporting Feedback",
        "suggestions": [
          "Steps sent both days: Thanks for sending steps daily!",
          "Steps sent one day: Keep sending steps daily!",
          "No steps sent: We need your steps daily. Keep persevering."
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 100,
    "title": "Food Check-in",
    "description": "Track daily food intake and assess difficulty avoiding Food Felons.",
    "educationalContent": "Reporting food is premium self-care. Writing down most meals helps awareness and adherence to healthy eating.",
    "askRachel": true,
    "questions": [
      {
        "id": 10001,
        "type": "text",
        "label": "Food Reporting Feedback",
        "suggestions": [
          "If reporting food: Great reporting! Talk to us again tomorrow!",
          "If not reporting food: Try to write down most of what you eat, and think which Food Felon is hardest to avoid."
        ]
      }
    ],
    "checklist": true
  },
  {
    day: 101,
    title: "Weekly Food Review - Day 101",
    description: `This week’s focus is on your food choices! Today, we want to reflect on whether you’ve been staying away from the **Five Food Felons** — those sneaky troublemakers that can impact your health and inflammation levels.\n\nRemember, avoiding these can help you feel better, improve your energy, and reduce inflammation:\n• #5 Fried foods\n• #4 Red or processed red meats (yes, pork counts!)\n• #3 Stripped carbs\n• #2 Added syrups\n• #1 Simple sugars\n\nStaying away from red and processed meats is like staying away from rat poison — they can change your gut bacteria, increase LDL (bad cholesterol), and cause inflammation.\n\nWhen LDL and inflammation both go up, your risk of heart disease, stroke, dementia, and overall inflammation increases. Let’s keep working to stay felon-free!`,
    askRachel: false,
    questions: [
      {
        id: 10101,
        type: "yes-no",
        label: "Did you stay away from the Five Food Felons today?",
        suggestions: {
          Yes: [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          No: [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      }
    ],
    checklist: [
      "Review your food choices for the day",
      "Avoid the Five Food Felons",
      "Reflect on how you feel after making healthy choices"
    ]
  },
  {
    day: 102,
    title: "Weekly Mood Assessment - Day 102",
    description: "Exercise and mood are closely connected. Many times, when you start taking care of yourself through better eating and regular exercise, your mood improves. Exercise can be a useful tool to help manage your mood.\nReflect on your week:\n• How has your exercise changed this week? Is it affecting your mood?\n• How has your eating changed this week? Is it affecting your mood?",
    askRachel: false,
    questions: [
      {
        id: 10201,
        type: "yes-no",
        label: "Did you take 15 minutes of quiet reflection time today?",
        suggestions: {
          Yes: ["GREAT JOB for proactively managing your mood!"],
          No: ["Please schedule time out for yourself in the next week."]
        }
      },
      {
        id: 10202,
        type: "yes-no",
        label: "Did you practice formal meditation or breathing exercises today?",
        suggestions: {
          Yes: ["GREAT JOB for proactively managing your mood!"],
          No: ["Please schedule time out for yourself in the next week."]
        }
      },
      {
        id: 10203,
        type: "single-choice",
        label: "How do you feel today?",
        options: [
          "A. I feel great today!",
          "B. I feel ok today.",
          "C. I do not feel great today"
        ],
        suggestions: {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."
          ],
          "C. I do not feel great today": [
            "Try the comprehensive stress management program with diaphragmatic breathing training."
          ]
        }
      },
      {
        id: 10204,
        type: "group",
        label: "Diaphragmatic Breathing Exercise",
        fields: [
          { type: "text", label: "Positioning: Place a finger on your belly button." },
          { type: "text", label: "Breathing: Inhale deeply through your nose, hold that breath, then take another breath on top of it. Let it out." },
          { type: "text", label: "Observation: Which way did your belly button move? It should move outward when using your diaphragm." },
          { type: "text", label: "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm." },
          { type: "text", label: "Routine: Use device 10 times morning and 10 times evening before bed." }
        ]
      }
    ],
    checklist: [
      "Reflect on how exercise has affected your mood this week",
      "Reflect on how eating has affected your mood this week",
      "Take 15 minutes of quiet reflection",
      "Practice meditation or breathing exercises",
      "Track your daily mood",
      "Complete diaphragmatic breathing exercises if needed"
    ]
  },
  {
    day: 103,
    title: "Weekly Menopause Reporting - Day 103",
    description: "Your daily stepping and food choices should make you feel better overall. Today, let's check your Hot Flashes and how they impact your day.",
    askRachel: false,
    questions: [
      {
        id: 10301,
        type: "single-choice",
        label: "Are you having hot flashes?",
        options: [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        suggestions: {
          "A. Yes, they are driving me crazy!": [
            "Think about when the hot flashes are bothering you most. Are they keeping you up at night? Or are the symptoms worse during the day?",
            "Eating well, sleeping well, and exercising daily are the first steps to keeping your menopausal mood in check.",
            "Practice double breathe breathing as you get in bed and with every hot flash. Schedule a meeting with your doctor to discuss hormone replacement."
          ],
          "B. Yes, but they are tolerable.": [
            "We want you to get from OK to great! Keep stepping and eating right. Let us know how you are doing tomorrow. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy. Check our recommended free positive comedy list online."
          ],
          "C. No": [
            "You lucky woman! Keep up your healthy habits!"
          ]
        }
      },
      {
        id: 10302,
        type: "group",
        label: "Diaphragmatic Breathing Exercise",
        fields: [
          { type: "text", label: "Positioning: Place a finger on your belly button." },
          { type: "text", label: "Breathing: Inhale deeply through your nose, hold that breath, then take another breath on top of it. Let it out." },
          { type: "text", label: "Observation: Which way did your belly button move? It should move outward when using your diaphragm." },
          { type: "text", label: "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm." },
          { type: "text", label: "Routine: Use device 10 times morning and 10 times evening before bed." }
        ]
      }
    ],
    checklist: [
      "Report hot flash severity",
      "Practice diaphragmatic breathing exercises",
      "Maintain stepping and food logging habits"
    ]
  },
  {
    day: 104,
    title: "Weekly Bone Health Reporting - Day 104",
    description: "Let's review your bone health and supplementation for this week. Calcium, Vitamin D, and K2 are essential along with strength training.",
    askRachel: false,
    questions: [
      {
        id: 10401,
        type: "single-choice",
        label: "Calcium intake today (1,200 mg, half from supplements)?",
        options: ["A. Yes", "B. Probably, at least 600 mg from supplement", "C. No"],
        suggestions: {
          "A. Yes": ["Great job! Keep maintaining your calcium intake."],
          "B. Probably, at least 600 mg from supplement": ["Good effort! Aim for the full daily requirement next week."],
          "C. No": ["Try adding calcium-rich foods or supplements to meet your daily goal."]
        }
      },
      {
        id: 10402,
        type: "single-choice",
        label: "Vitamin D2/3 with K2 intake today (1,000 units)?",
        options: ["A. Yes", "B. No"],
        suggestions: {
          "A. Yes": ["Great job! Vitamin D supports bone health and immunity."],
          "B. No": ["Look at dietary sources and supplements to ensure adequate Vitamin D intake."]
        }
      },
      {
        id: 10403,
        type: "yes-no",
        label: "Did you perform strength training today?",
        suggestions: {
          Yes: ["Excellent! Strength training helps preserve bone mass and muscle strength."],
          No: ["Try adding a strength exercise this week to support your bone health."]
        }
      },
      {
        id: 10404,
        type: "text",
        label: "Step Tracking / Physical Activity Notes",
        suggestions: [
          "If sent steps and achieved goal: 'Keep going, strong woman! Yeah! Keep stepping!'",
          "If not meeting goal: Report minutes or steps of any activity tomorrow. Even small movement counts."
        ]
      }
    ],
    checklist: [
      "Track calcium, vitamin D2/3, and K2 intake",
      "Perform strength training",
      "Log steps and physical activity"
    ]
  },
  {
    day: 105,
    title: "Weekly Measurements - Day 105",
    description: "It's time to track your weekly data including weight, waist, steps, and food intake.",
    askRachel: false,
    questions: [
      {
        id: 10501,
        type: "group",
        label: "Weekly Data Collection",
        fields: [
          { type: "number", label: "Weight (lbs or kg)" },
          { type: "number", label: "Waist Measurement (inches or cm)" }
        ],
        suggestions: {
          text: ["Tracking weekly measurements helps you notice trends over time.", "Celebrate improvements, no matter how small."]
        }
      },
      {
        id: 10502,
        type: "group",
        label: "Physical Activity Summary",
        fields: [
          { type: "number", label: "Steps" },
          { type: "text", label: "Other Exercise (resistance, cardio, etc.)" }
        ]
      },
      {
        id: 10503,
        type: "checkbox-group",
        label: "Food Log Template",
        options: [
          "7:30 a.m. - Breakfast foods",
          "10:00 a.m. - Morning snack",
          "12:30 p.m. - Lunch foods",
          "3:00 p.m. - Afternoon snack",
          "6:00 p.m. - Dinner foods",
          "7:30 p.m. - Evening snack",
          "7:35 p.m. - Kitchen closed for the night"
        ]
      }
    ],
    checklist: [
      "Track weight and waist measurements",
      "Log steps and exercise",
      "Complete daily food log"
    ]
  },
  {
    day: 106,
    title: "Sixteenth Week Review - Day 106",
    description: "Let's reflect on your progress in week 16 of the program and plan small changes to boost energy and consistency.",
    askRachel: false,
    questions: [
      {
        id: 10601,
        type: "yes-no",
        label: "Are you feeling any different this week?",
        suggestions: {
          Yes: ["Bravo! Thrilled with your progress! Keep going!"],
          No: ["Stay strong! Small changes this week may boost your energy and motivation."]
        }
      },
      {
        id: 10602,
        type: "text",
        label: "Weekly Progress Review",
        suggestions: [
          "Record waist measurement change: start vs. current",
          "Record weight change: start vs. current",
          "Reflect on step goal: are you reaching it?"
        ]
      },
      {
        id: 10603,
        type: "text",
        label: "Notes / Next Steps",
        suggestions: [
          "Try a new healthy food or new walking route to keep energy up.",
          "If weight loss achieved, celebrate the difference in pounds and inches.",
          "If at goal weight but no improvement, keep stepping!",
          "If measures worsened, stay motivated and continue daily steps."
        ]
      }
    ],
    checklist: [
      "Reflect on weekly measurements and step goals",
      "Record progress and changes",
      "Plan small improvements for next week"
    ]
  },
  {
    day: 107,
    title: "Weekly Food & Step Questions - Day 107",
    description: "Let's review your steps and food intake for the week.",
    askRachel: false,
    questions: [
      {
        id: 10701,
        type: "text",
        label: "Step Goal Status",
        suggestions: [
          "If reaching step goal: 'Keep stepping! You are getting stronger every day!!', 'Fabulous job! We love your dedication!!'",
          "If NOT reaching goal: 'We still believe in you! If you need a day off, that's okay, but get back on track by the end of the week!'",
          "Remember, any movement counts! Moderate exercise: 100 steps/minute, Leisurely pace: 50 steps/minute."
        ]
      },
      {
        id: 10702,
        type: "text",
        label: "Food Reporting Status",
        suggestions: [
          "If reporting food: 'Thank you for reporting your food intake! It feels good to know EXACTLY what you are putting into your body.'",
          "If not reporting: 'We hope you are staying away from the Five Food Felons! Try to write down most of your intake tomorrow.'"
        ]
      }
    ],
    checklist: [
      "Report steps and movement",
      "Report food intake or track at least most meals"
    ]
  },
   {
    day: 108,
    title: "Weekly Food Review - Day 108",
    description: "Focus on avoiding the Five Food Felons and increasing fiber intake.",
    askRachel: false,
    questions: [
      {
        id: 10801,
        type: "single-choice",
        label: "Did you stay away from the Five Food Felons today?",
        options: ["Yes", "No"],
        suggestions: {
          Yes: ["Wonderful job! Your body is thanking you!"],
          No: ["Think about why this is getting tough. Can you substitute a high-fiber food for a felon?"]
        }
      },
      {
        id: 10802,
        type: "text",
        label: "Dietary Fiber Reflection",
        suggestions: [
          "Fiber helps digestion, satiety, and long-term health.",
          "Good sources include wheat bran, whole grains, nuts, seeds, beans, legumes, vegetables, and fruit skins.",
          "Aim for 25–35 grams of fiber daily for optimal benefits."
        ]
      }
    ],
    checklist: [
      "Stay away from the Five Food Felons",
      "Include high-fiber foods daily"
    ]
  },
  {
    day: 109,
    title: "Weekly Mood Assessment - Day 109",
    description: "Exercise and eating well can improve your mood. Reflect on your habits this week.",
    askRachel: false,
    questions: [
      {
        id: 10901,
        type: "yes-no",
        label: "Did you take 15 minutes for quiet reflection today?",
        suggestions: {
          Yes: ["GREAT JOB for pro-actively managing your mood!"],
          No: ["Please schedule time out for yourself this week."]
        }
      },
      {
        id: 10902,
        type: "yes-no",
        label: "Did you do formal meditation or breathing exercises today?",
        suggestions: {
          Yes: ["Excellent! You are managing stress effectively."],
          No: ["Try scheduling a short breathing or meditation session today."]
        }
      },
      {
        id: 10903,
        type: "single-choice",
        label: "How do you feel today?",
        options: ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        suggestions: {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."
          ],
          "C. I do not feel great today": [
            "Let's do diaphragmatic breathing to help reduce stress and improve mood."
          ]
        }
      },
      {
        id: 10904,
        type: "group",
        label: "Diaphragmatic Breathing Exercise",
        fields: [
          { type: "text", label: "Positioning: Place a finger on your belly button." },
          { type: "text", label: "Breathing: Inhale deeply through your nose, hold that breath, then take another breath on top of it. Let it out." },
          { type: "text", label: "Observation: Which way did your belly button move? It should move outward when using your diaphragm." },
          { type: "text", label: "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm." },
          { type: "text", label: "Routine: Use device 10 times morning and 10 times evening before bed." }
        ]
      }
    ],
    checklist: [
      "Reflect on exercise and eating habits",
      "Do stress management exercises",
      "Track mood daily"
    ]
  }, 
  {
    day: 110,
    title: "Weekly Menopause Reporting - Day 110",
    description: "Check-in on hot flashes and sleep quality this week.",
    askRachel: false,
    questions: [
      {
        id: 11001,
        type: "single-choice",
        label: "Are you having hot flashes?",
        options: ["A. Yes, they are driving me crazy!", "B. Yes, but they are tolerable.", "C. No"],
        suggestions: {
          "A. Yes, they are driving me crazy!": [
            "Think about when hot flashes are worst: night or day.",
            "Eating well, sleeping well, and exercising daily are key to mood control."
          ],
          "B. Yes, but they are tolerable.": [
            "Keep stepping and eating right! Practice breathing exercises and add 5 minutes relaxation.",
            "Try an extra laugh tomorrow. Call a friend or watch a comedy."
          ],
          "C. No": ["You lucky woman! Keep up your healthy habits!"]
        }
      },
      {
        id: 11002,
        type: "text",
        label: "Sleep Tips for Hot Flashes",
        suggestions: [
          "Avoid caffeine after 3pm each day",
          "Do not watch TV in your bedroom",
          "Do not work in your bed",
          "Wind down for at least 15 minutes before bedtime",
          "Dress in layers to manage daytime hot flashes"
        ]
      },
      {
        id: 11003,
        type: "group",
        label: "Diaphragmatic Breathing Exercise",
        fields: [
          { type: "text", label: "Positioning: Place a finger on your belly button." },
          { type: "text", label: "Breathing: Inhale deeply through your nose, hold that breath, then take another breath on top of it. Let it out." },
          { type: "text", label: "Observation: Which way did your belly button move? It should move outward when using your diaphragm." },
          { type: "text", label: "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm." },
          { type: "text", label: "Routine: Use device 10 times morning and 10 times evening before bed." }
        ]
      }
    ],
    checklist: [
      "Report hot flash frequency and severity",
      "Follow sleep hygiene tips",
      "Practice diaphragmatic breathing"
    ]
  },





  {
    "day": 111,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, Vitamin D/K2 intake, and strength training. Learn about Vitamin D3.",
    "askRachel": true,
    "questions": [
      {
        "id": 11101,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"]
      },
      {
        "id": 11102,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"]
      },
      {
        "id": 11103,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"]
      }
    ],
    "educationalContent": "Vitamin D3 is hard to obtain from diet alone. Oily fish contains Vitamin D3 but usually not enough. Sunlight exposure may help, but supplementation is often needed. Darker skin reduces Vitamin D3 synthesis; less than 30 min twice a week may give some benefit. Avoid long unprotected sun exposure due to skin cancer risk."
  },
  {
    "day": 112,
    "title": "Weekly Measurements",
    "description": "Collect weekly weight, waist, steps, exercise, and food log.",
    "askRachel": true,
    "questions": [
      {
        "id": 11201,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 11202,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 11203,
        "type": "text",
        "label": "Physical Activity Summary (Steps and Other Exercise)"
      },
      {
        "id": 11204,
        "type": "food-log",
        "label": "Food Log Template",
        "times": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      },
      {
        "id": 11205,
        "type": "note",
        "label": "Note",
        "text": "Calculate absolute and percentage change in weight/waist measurements at Week 4 and report to the patient."
      }
    ]
  },
  {
    "day": 113,
    "title": "Seventeenth Week Review",
    "description": "Review weekly data and reflect on progress and energy.",
    "askRachel": true,
    "questions": [
      {
        "id": 11301,
        "type": "single-choice",
        "label": "Are you feeling any different?",
        "options": ["Yes", "No"]
      },
      {
        "id": 11302,
        "type": "text",
        "label": "Weekly Review",
        "text": "Your waist measurement started at ___ inches and now is ___ inches. Your weight started at ___ pounds/kg and now is ___ pounds/kg. Step goal is ___ (10,000 or 10% higher than week 4)."
      },
      {
        "id": 11303,
        "type": "reflection",
        "label": "Try a small change to increase energy this week. Suggest a new healthy food or walking route."
      },
      {
        "id": 11304,
        "type": "note",
        "label": "Weight Loss or Improvement",
        "text": "If weight loss: report pounds lost and inches reduced. If no improvement or worsening, encourage continuation and progress tracking."
      },
      {
        "id": 11305,
        "type": "steps-reminder",
        "label": "Step reporting reminder",
        "text": "If sent steps today and prior day: Thanks! Keep it up. If only one day sent: Reminder to send daily steps. If none sent: Request daily steps and suggest pedometer app."
      }
    ]
  },
  {
    "day": 114,
    "title": "Weekly Step Questions",
    "description": "Encourage stepping to support health during menopause transition.",
    "askRachel": true,
    "questions": [
      {
        "id": 11401,
        "type": "text",
        "label": "Message about stepping benefits",
        "text": "Increasing stepping can prevent heart disease, stroke, cancer, dementia, and type 2 diabetes. Stepping more is key to feeling better."
      },
      {
        "id": 11402,
        "type": "steps-reminder",
        "label": "Step reporting reminder",
        "text": "If sent steps today and prior day: Thanks! Keep it up. If only one day sent: Reminder to send daily steps. If none sent: Request daily steps and suggest pedometer app."
      },
      {
        "id": 11403,
        "type": "reference",
        "label": "Reference",
        "text": "Association of change in daily step count over five years with insulin sensitivity and adiposity: population based cohort study, T Dwyer et al BMJ 2010;341:c7249"
      }
    ]
  },
  {
    "day": 115,
    "title": "Weekly Food Review",
    "description": "Report food intake and check avoidance of Five Food Felons.",
    "askRachel": true,
    "questions": [
      {
        "id": 11501,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": ["BRAVO! You are doing great!", "We knew we could count on you!", "You make our lives so easy! Keep doing a great job!"],
          "No": ["You will feel better if you stay away from these felons!!", "Keep trying. We know you are human!", "We know you can do it! Try again tomorrow!"]
        }
      }
    ],
    "educationalContent": "Food Felons: #5 fried foods, #4 red/processed red meats, #3 stripped carbs, #2 added syrups, #1 simple sugars. Avoiding fried foods reduces inflammation and lowers risk of heart disease and stroke. Check cholesterol annually."
  },
  {
    "day": 116,
    "title": "Weekly Mood Assessment",
    "description": "Reflect on exercise and eating changes and their impact on mood. Daily mood check.",
    "askRachel": true,
    "questions": [
      {
        "id": 11601,
        "type": "reflection",
        "label": "Think about how your exercise has changed this week. Is it affecting your mood?"
      },
      {
        "id": 11602,
        "type": "reflection",
        "label": "Think about how your eating has changed this week. Is it affecting your mood?"
      },
      {
        "id": 11603,
        "type": "single-choice",
        "label": "Daily Mood",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"]
      },
      {
        "id": 11604,
        "type": "mood-response",
        "label": "Mood Responses",
        "responses": {
          "A": ["Terrific! We love to be on this journey with you!"],
          "B": ["Mood may be related to sleep problems. Consider avoiding alcohol/caffeine at night and doing meditation/exercises."],
          "C": ["Mood may be related to sleep problems. Consider avoiding alcohol/caffeine at night and doing meditation/exercises."]
        }
      },
      {
        "id": 11605,
        "type": "exercise",
        "label": "Complete Diaphragmatic Breathing Exercise",
        "steps": [
          "Positioning: Place a finger on your belly button.",
          "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
          "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
          "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
          "Routine: Use device 10 times morning and 10 times evening before bed."
        ]
      }
    ]
  },
  {
    "day": 117,
    "title": "Weekly Menopause Reporting",
    "description": "Check hot flashes and provide stress/sleep management tips.",
    "askRachel": true,
    "questions": [
      {
        "id": 11701,
        "type": "single-choice",
        "label": "Are you having hot flashes?",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ]
      },
      {
        "id": 11702,
        "type": "response-guidance",
        "label": "Responses & Tips",
        "responses": {
          "A": "Think about when hot flashes bother you most. Ensure sleep hygiene. Discuss with your doctor.",
          "B": "Practice breathing exercises, add 5 min relaxation, get a laugh, use online comedy links for mood improvement.",
          "C": "Review somatic anxiety symptoms. Talk to your doctor if needed to ensure mood symptoms are addressed."
        }
      },
      {
        "id": 11703,
        "type": "exercise",
        "label": "Complete Diaphragmatic Breathing Exercise",
        "steps": [
          "Positioning: Place a finger on your belly button.",
          "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
          "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
          "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
          "Routine: Use device 10 times morning and 10 times evening before bed."
        ]
      }
    ]
  },
  {
    "day": 118,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D/K2, strength training. Discuss bone preservation.",
    "askRachel": true,
    "questions": [
      {
        "id": 11801,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"]
      },
      {
        "id": 11802,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"]
      },
      {
        "id": 11803,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"]
      }
    ],
    "educationalContent": "HRT (if prescribed) helps bones. Ensure calcium, vitamin D3, magnesium, vitamin K2, and weight-bearing exercise to prevent bone loss. Balance exercise tip: practice balance facing a corner for 1 min on each leg daily."
  },
  {
    "day": 119,
    "title": "Weekly Measurements",
    "description": "Collect weekly weight, waist, steps, exercise, and food log.",
    "askRachel": true,
    "questions": [
      {
        "id": 11901,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 11902,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 11903,
        "type": "text",
        "label": "Physical Activity Summary (Steps and Other Exercise)"
      },
      {
        "id": 11904,
        "type": "food-log",
        "label": "Food Log Template",
        "times": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      },
      {
        "id": 11905,
        "type": "note",
        "label": "Note",
        "text": "Calculate absolute and percentage change in weight/waist measurements at Week 4 and report to the patient."
      }
    ]
  },
  {
    "day": 120,
    "title": "Eighteenth Week Review",
    "description": "Review weekly data and reflect on progress and energy. Introduce a new habit or routine.",
    "askRachel": true,
    "questions": [
      {
        "id": 12001,
        "type": "single-choice",
        "label": "Are you feeling any different?",
        "options": ["Yes", "No"]
      },
      {
        "id": 12002,
        "type": "text",
        "label": "Weekly Review",
        "text": "Your waist measurement started at ___ inches and now is ___ inches. Your weight started at ___ pounds/kg and now is ___ pounds/kg. Step goal is ___ (10,000 or 10% higher than week 4)."
      },
      {
        "id": 12003,
        "type": "reflection",
        "label": "Try a small change to increase energy this week. Suggest a new healthy food or walking route."
      },
      {
        "id": 12004,
        "type": "note",
        "label": "Weight Loss or Improvement",
        "text": "If weight loss: report pounds lost and inches reduced. If no improvement or worsening, encourage continuation and progress tracking."
      },
      {
        "id": 12005,
        "type": "steps-reminder",
        "label": "Step reporting reminder",
        "text": "If sent steps today and prior day: Thanks! Keep it up. If only one day sent: Reminder to send daily steps. If none sent: Request daily steps and suggest pedometer app."
      }
    ]
  }
  ,

  {
    "day": 121,
    "title": "Weekly Food Review",
    "description": "Check your adherence to the Five Food Felons and understand their impact on health.",
    "askRachel": true,
    "questions": [
      {
        "id": 12101,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"]
      }
    ],
    "responses": {
      "Yes": ["Great reporting! Talk to us again tomorrow!"],
      "No": ["We know it takes some time to write all this down, but think of it as premium self-care! If you cannot remember everything you eat in one day, at least write down most of it and send it along!! Think about which of the food felons is most difficult for you to avoid."]
    },
    "educationalContent": "Food Felons:\n#5 Fried foods\n#4 Red or processed red meats (e.g., pork)\n#3 Stripped carbs\n#2 Added syrups\n#1 Simple sugars\nRed/processed meats increase inflammation and LDL cholesterol, raising risk for heart disease, stroke, dementia, and systemic inflammation."
  },
  {
    "day": 123,
    "title": "Weekly Mood Assessment",
    "description": "Assess mood, exercise, and eating. Provide stress management tips.",
    "askRachel": true,
    "questions": [
      {
        "id": 12301,
        "type": "reflection",
        "label": "Think about how your exercise has changed this week. Is it affecting your mood?"
      },
      {
        "id": 12302,
        "type": "reflection",
        "label": "Think about how your eating has changed this week. Is it affecting your mood?"
      },
      {
        "id": 12303,
        "type": "single-choice",
        "label": "Daily Mood",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"]
      },
      {
        "id": 12304,
        "type": "mood-response",
        "label": "Mood Responses & Stress Management",
        "responses": {
          "A": ["Keep feeling great! Way to go!", "We feel great when you do! Keep smiling!", "We are happy when you are happy. Thanks for making our day!"],
          "B": ["We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": ["Offer comprehensive stress management program with diaphragmatic breathing training."]
        }
      },
      {
        "id": 12305,
        "type": "exercise",
        "label": "Complete Diaphragmatic Breathing Exercise",
        "steps": [
          "Positioning: Place a finger on your belly button.",
          "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
          "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
          "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
          "Routine: Use device 10 times morning and 10 times evening before bed."
        ]
      }
    ]
  },
  {
    "day": 124,
    "title": "Weekly Menopause Reporting",
    "description": "Assess hot flashes and provide stress/sleep management tips.",
    "askRachel": true,
    "questions": [
      {
        "id": 12401,
        "type": "single-choice",
        "label": "Are you having hot flashes?",
        "options": ["A. Yes, they are driving me crazy!", "B. Yes, but they are tolerable.", "C. No"]
      },
      {
        "id": 12402,
        "type": "response-guidance",
        "label": "Responses & Tips",
        "responses": {
          "A": "Think about when hot flashes bother you most. Ensure sleep hygiene. Practice double-breathe breathing in bed and with every hot flash. Schedule a meeting with your doctor to discuss hormone replacement.",
          "B": "Practice breathing exercises, add 5 min relaxation, get a laugh, use online comedy links for mood improvement.",
          "C": "You lucky woman!"
        }
      },
      {
        "id": 12403,
        "type": "exercise",
        "label": "Complete Diaphragmatic Breathing Exercise",
        "steps": [
          "Positioning: Place a finger on your belly button.",
          "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
          "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
          "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
          "Routine: Use device 10 times morning and 10 times evening before bed."
        ]
      }
    ]
  },
  {
    "day": 125,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D/K2, strength training, and magnesium intake for bone preservation.",
    "askRachel": true,
    "questions": [
      {
        "id": 12501,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"]
      },
      {
        "id": 12502,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"]
      },
      {
        "id": 12503,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"]
      }
    ],
    "educationalContent": "Ensure adequate magnesium intake to help preserve bone mass. Dietary sources include pumpkin seeds, chia seeds, almonds, spinach, cashews, peanuts, shredded wheat, soymilk, black beans, edamame, peanut butter, baked potato, brown rice, yogurt, oatmeal, kidney beans, banana, salmon, milk, halibut, raisins, whole wheat bread, avocado. DV for magnesium is 420 mg for adults."
  }
  ,

  {
    "day": 126,
    "title": "Weekly Measurements",
    "description": "Collect weekly weight, waist, steps, exercise, and food log data.",
    "askRachel": true,
    "questions": [
      {
        "id": 12601,
        "type": "numeric-entry",
        "label": "Weight",
        "unit": "lbs or kg"
      },
      {
        "id": 12602,
        "type": "numeric-entry",
        "label": "Waist Measurement",
        "unit": "inches or cm"
      },
      {
        "id": 12603,
        "type": "numeric-entry",
        "label": "Steps",
        "unit": "steps"
      },
      {
        "id": 12604,
        "type": "text",
        "label": "Other Exercise",
        "placeholder": "Include resistance exercises and cardio that makes you sweat"
      },
      {
        "id": 12605,
        "type": "food-log",
        "label": "Food Log Template",
        "entries": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snack",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snack",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snack",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      }
    ],
    "note": "Calculate absolute and percentage change in weight/waist measurements at Week 4 and report to the patient."
  },
  {
    "day": 127,
    "title": "Nineteenth Week Review",
    "description": "Review weekly measurements, energy, and progress. Provide guidance for weight, waist, and step goals.",
    "askRachel": true,
    "questions": [
      {
        "id": 12701,
        "type": "review-data",
        "label": "Weekly Data",
        "fields": ["Waist Measurement", "Weight", "Step Goal"]
      }
    ],
    "responses": {
      "StableOrImprovedAndAtStepGoal": "Great work! Keep doing what you have been doing!",
      "StableOrImprovedAndNotAtStepGoal": "You have obviously been taking care of yourself. Just think how great you may feel if you get closer to your daily step goal. Remember that the added exercise can help you feel stronger, control your blood sugars, or prevent diabetes. Add an extra 10 minutes of activity this week.",
      "IncreasedAndAtStepGoal": "You are doing great with stepping. Keep working on your food choices and remember portion control tips.",
      "IncreasedAndNotAtStepGoal": "Keep working on making your food choices as healthy as possible. Try a bit harder this week to get closer to your step goal. Can you get to (STEP GOAL minus 2000) tomorrow?"
    }
  },
  {
    "day": 128,
    "title": "Weekly Food Review",
    "description": "Track whether food was reported and provide encouragement.",
    "askRachel": true,
    "responses": {
      "ReportingFood": "Great reporting! Talk to us again tomorrow!",
      "NotReportingFood": "We know it takes some time to write all this down, but think of it as premium self-care! If you cannot remember everything you eat in one day, at least write down most of it and send it along!!"
    }
  },
  {
    "day": 129,
    "title": "Monthly Mood Assessment",
    "description": "Assess exercise, eating, stress, and mood. Provide stress management guidance.",
    "askRachel": true,
    "questions": [
      {
        "id": 12901,
        "type": "reflection",
        "label": "Think about how your exercise has changed this week. Is it affecting your mood?"
      },
      {
        "id": 12902,
        "type": "reflection",
        "label": "Think about how your eating has changed this week. Is it affecting your mood?"
      },
      {
        "id": 12903,
        "type": "single-choice",
        "label": "Daily Mood",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"]
      },
      {
        "id": 12904,
        "type": "mood-response",
        "label": "Mood Responses & Stress Management",
        "responses": {
          "A": ["Keep feeling great! Way to go!", "We feel great when you do! Keep smiling!", "We are happy when you are happy. Thanks for making our day!"],
          "B": ["We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": ["We want you to get from OK to great! Keep stepping and eating right. Let us know how you are doing tomorrow.", "Offer comprehensive stress management program with diaphragmatic breathing training."]
        }
      },
      {
        "id": 12905,
        "type": "exercise",
        "label": "Complete Diaphragmatic Breathing Exercise",
        "steps": [
          "Positioning: Place a finger on your belly button.",
          "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
          "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
          "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
          "Routine: Use device 10 times morning and 10 times evening before bed."
        ]
      }
    ]
  },
  {
    "day": 130,
    "title": "Weekly Menopause Reporting",
    "description": "Assess hot flashes and provide stress management and breathing guidance.",
    "askRachel": true,
    "questions": [
      {
        "id": 13001,
        "type": "single-choice",
        "label": "Are you having hot flashes?",
        "options": ["A. Yes, they are driving me crazy!", "B. Yes, but they are tolerable.", "C. No"]
      },
      {
        "id": 13002,
        "type": "single-choice",
        "label": "Responses & Tips",
        "responses": {
          "A": "Think about when hot flashes bother you most. Ensure sleep hygiene. Try to let yourself wind-down for at least 15 minutes before bedtime.",
          "B": "Practice breathing exercises, add 5 min relaxation, get a laugh, use online comedy links for mood improvement.",
          "C": "You lucky woman!"
        }
      },
      {
        "id": 13003,
        "type": "single-choice",
        "label": "Complete Diaphragmatic Breathing Exercise",
        "steps": [
          "Positioning: Place a finger on your belly button.",
          "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
          "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
          "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
          "Routine: Use device 10 times morning and 10 times evening before bed."
        ]
      }
    ]
  },
  {
    day: 131,
    title: "Weekly Bone Health Focus - Day 131",
    description: "Check your calcium, vitamin D2/3 with K2 intake and strength training for bone health.",
    askRachel: true,
    educationalContent: "Vitamin K2 is best obtained from green, leafy vegetables. If you are taking blood thinners (like warfarin), talk to your doctor before adjusting Vitamin K intake. Consistent calcium, vitamin D, and strength training are key for bone health.",
    questions: [
      {
        id: 13101,
        type: "single-choice",
        label: "Calcium 1,200 mg today (half from supplements)?",
        options: ["Yes", "Probably, at least got 600 mg from supplement", "No"]
      },
      {
        id: 13102,
        type: "single-choice",
        label: "Vitamin D2/3 with K2 1,000 units today?",
        options: ["Yes", "No"],
        responses: {
          "Yes": ["Great job!"],
          "No": ["Look at the list and see if you may be able to add some Vitamin D to your diet this week!"]
        }
      },
      {
        id: 13103,
        type: "single-choice",
        label: "Strength Training today?",
        options: ["Yes", "No"]
      }
    ],
    checklist: [
      "Track calcium intake",
      "Take vitamin D2/3 with K2",
      "Perform strength training exercises",
      "Include green leafy vegetables for Vitamin K2 (if not on blood thinners, or after consulting your doctor)"
    ]
  },
  {
    day: 132,
    title: "Weekly Measurements",
    description: "Track your weight, waist, physical activity, and food intake for the week. Record everything accurately.",
    askRachel: true,
    educationalContent: "Accurate tracking helps you see trends in body composition. Record weight and waist measurements, steps, and other exercises consistently. Remember to log all meals and snacks.",
    questions: [
      {
        id: 13201,
        type: "text",
        label: "Weight (lbs or kg)"
      },
      {
        id: 13202,
        type: "text",
        label: "Waist Measurement (inches or cm)"
      },
      {
        id: 13203,
        type: "text",
        label: "Steps taken this week"
      },
      {
        id: 13204,
        type: "text",
        label: "Other Exercise (include resistance exercises and cardio that makes you sweat)"
      },
      {
        id: 13205,
        type: "text",
        label: "7:30 a.m. - Breakfast foods"
      },
      {
        id: 13206,
        type: "text",
        label: "10:00 a.m. - Morning snack"
      },
      {
        id: 13207,
        type: "text",
        label: "12:30 p.m. - Lunch foods"
      },
      {
        id: 13208,
        type: "text",
        label: "3:00 p.m. - Afternoon snack"
      },
      {
        id: 13209,
        type: "text",
        label: "6:00 p.m. - Dinner foods"
      },
      {
        id: 13210,
        type: "text",
        label: "7:30 p.m. - Evening snack"
      },
      {
        id: 13211,
        type: "text",
        label: "7:35 p.m. - Kitchen closed for the night"
      }
    ],
    checklist: [
      "Record weight and waist measurements accurately.",
      "Log all steps and physical activity for the week.",
      "Track all meals and snacks in the food log.",
      "Ensure the kitchen is closed on time to avoid late-night snacking.",
      "At Week 4, calculate absolute and percentage change in weight and waist measurements.",
      "Report changes and progress to the patient clearly."
    ],
    notes: [
      "Encourage consistency and note any deviations in physical activity or diet."
    ]
  },
  

  {
    day: 133,
    title: "Twentieth Week Review - Day 133",
    description: "Review weekly progress including waist, weight, and step goals. Focus on adding new habits to maintain energy.",
    askRachel: true,
    educationalContent: "This is the week to assess your progress and consider adding new habits. Small changes in food or walking routines can help maintain energy levels and engagement.",
    questions: [
      {
        id: 13301,
        type: "text",
        label: "Your waist measurement started at ___ inches and now is ___ inches"
      },
      {
        id: 13302,
        type: "text",
        label: "Your weight started at ___ pounds/kg and now is ___ pounds/kg"
      },
      {
        id: 13303,
        type: "text",
        label: "Your step goal is ___ (10,000 or 10% higher than week 4)"
      }
    ],
    checklist: [
      "Review weekly waist and weight measurements",
      "Compare steps to your step goal",
      "Add a new healthy food or walking route to your routine",
      "Send steps daily (even if only one day recorded so far, encourage daily reporting)"
    ],
    stepResponses: {
      "sent both days": ["Thanks for sending your steps in. I need them every day, so keep it up."],
      "sent one day only": ["Hey! Do you think we can succeed in your plan without you? This plan is about your health and your life! I need your steps daily. If you don't have a pedometer on your phone, you can order one at the app store. Now send me your steps for yesterday."]
    }
  },
  {
    day: 134,
    title: "Weekly Food Review - Day 134",
    description: "Check in on your weekly food reporting habits.",
    askRachel: true,
    educationalContent: "Recording your food intake is an important part of self-care. Even if you can't remember everything, try to log as much as possible—it helps you stay aware and make better choices.",
    questions: [
      {
        id: 13401,
        type: "single-choice",
        label: "Did you report your food this week?",
        options: ["Yes", "No"],
        responses: {
          "Yes": ["Great reporting! Talk to us again tomorrow!"],
          "No": ["We know it takes some time to write all this down, but think of it as premium self-care! If you cannot remember everything you eat one day, at least write down most of it and send it along!!"]
        }
      }
    ],
    checklist: [
      "Report your food daily if possible",
      "Write down most of what you eat even if you forget small items",
      "Send your food log to the team"
    ]
  },
  {
    day: 135,
    title: "Weekly Food Review - Day 135",
    description: "Focus on staying away from the Five Food Felons and reviewing their impact on your diet.",
    askRachel: true,
    educationalContent: "The Five Food Felons are: 1. Simple sugars, 2. Added syrups, 3. Stripped carbs, 4. Red or processed red meats, 5. Fried foods. These foods can spike blood sugar and affect protein function, so try to minimize them, especially during quick snacks or when hungry.",
    questions: [
      {
        id: 13501,
        type: "single-choice",
        label: "Did you stay away from the Five Food Felons?",
        options: ["Yes", "No"],
        responses: {
          "Yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          "No": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      }
    ],
    checklist: [
      "Stay away from simple sugars",
      "Avoid added syrups",
      "Limit stripped carbs",
      "Minimize red or processed red meats",
      "Avoid fried foods",
      "Be mindful of food choices when hungry or needing a quick snack"
    ]
  },
  {
    day: 136,
    title: "Weekly Mood Assessment - Day 136",
    description: "Reflect on your mood and stress management practices this week.",
    askRachel: true,
    educationalContent: "Exercise and healthy eating can improve your mood. Stress management techniques such as quiet reflection, meditation, and diaphragmatic breathing strengthen your resilience.",
    questions: [
      {
        id: 13601,
        type: "text",
        label: "Think about how your exercise has changed this week. Is it affecting your mood?",
        options: []
      },
      {
        id: 13602,
        type: "text",
        label: "Think about how your eating has changed this week. Is it affecting your mood?",
        options: []
      },
      {
        id: 13603,
        type: "single-choice",
        label: "15 minutes of quiet reflection time today?",
        options: ["Yes", "No"],
        responses: {
          "Yes": ["GREAT JOB for pro-actively managing your mood!"],
          "No": ["Please schedule to take time out for You in the next weeks."]
        }
      },
      {
        id: 13604,
        type: "single-choice",
        label: "Formal meditation or breathing exercises today?",
        options: ["Yes", "No"],
        responses: {
          "Yes": ["GREAT JOB for pro-actively managing your mood!"],
          "No": ["Please schedule to take time out for You in the next weeks."]
        }
      },
      {
        id: 13605,
        type: "single-choice",
        label: "How do you feel today?",
        options: ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        responses: {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."
          ],
          "C. I do not feel great today": [
            "We want you to get from OK to great! Keep stepping and eating right. Let us know how you are doing tomorrow.",
            "Consider reviewing the diaphragmatic breathing exercises and stress management program."
          ]
        }
      }
    ],
    checklist: [
      "Take 15 minutes for quiet reflection",
      "Do formal meditation or breathing exercises",
      "Practice diaphragmatic breathing using your finger on the belly button",
      "Consider using an inspiratory resistance trainer 10x morning and evening"
    ]
  },

  {
    day: 137,
    title: "Monthly Menopause Reporting - Day 137",
    description: "Reflect on mood, energy, anxiety, and substance use over the past month.",
    askRachel: true,
    educationalContent: "Monthly check-ins help track mood changes, energy levels, and lifestyle impacts. If you notice any issues, you can plan interventions or review stress management strategies.",
    questions: [
      {
        id: 13701,
        type: "single-choice",
        label: "Lost interest or pleasure in any activities you normally enjoy?",
        options: ["Yes", "No"]
      },
      {
        id: 13702,
        type: "single-choice",
        label: "Feeling down, blue, depressed or low?",
        options: ["Yes", "No"]
      },
      {
        id: 13703,
        type: "single-choice",
        label: "Periods of low energy, mood swings, irritability and/or loss of concentration?",
        options: ["Yes", "No"]
      },
      {
        id: 13704,
        type: "single-choice",
        label: "Excessive worry about a number of issues (ex. health, finances, family, etc.)?",
        options: ["Yes", "No"]
      },
      {
        id: 13705,
        type: "single-choice",
        label: "Felt very nervous or anxious or experienced physical symptoms suddenly?",
        options: ["Yes", "No"]
      },
      {
        id: 13706,
        type: "single-choice",
        label: "Would you like to moderate or eliminate alcohol or cannabis?",
        options: ["Yes", "No"]
      }
    ],
    checklist: [
      "Review responses to mood and anxiety questions",
      "If YES to any question, consider revisiting stress management program",
      "Plan for lifestyle interventions or coaching as needed"
    ]
  },

  {
    day: 138,
    title: "Weekly Bone Health Reporting - Day 138",
    description: "Track calcium, vitamin D2/3 with K2 intake, and strength training for bone health.",
    askRachel: true,
    educationalContent: "Vitamin K2 from leafy greens and Vitamin D3 from foods or supplements are essential for bone health. Sunlight exposure can also help Vitamin D synthesis, but supplementation is often needed. Discuss with your doctor if you are on blood thinners.",
    questions: [
      {
        id: 13801,
        type: "single-choice",
        label: "Calcium 1,200 mg today (half from supplements)?",
        options: ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"]
      },
      {
        id: 13802,
        type: "single-choice",
        label: "Vitamin D2/3 with K2 1,000 units today?",
        options: ["A. Yes", "B. No"],
        responses: {
          "A. Yes": ["Great job!"],
          "B. No": ["Look at the list and see if you may be able to add some Vitamin D to your diet this week!"]
        }
      },
      {
        id: 13803,
        type: "single-choice",
        label: "Strength Training today?",
        options: ["A. Yes", "B. No"]
      }
    ],
    checklist: [
      "Ensure calcium intake (diet + supplements) totals 1,200 mg",
      "Check Vitamin D2/3 with K2 intake or supplement",
      "Perform strength training exercises: chair-ups, wall pushups, lunges, wall squats, bent-over rows",
      "Consider sun exposure 10-20 minutes per day for Vitamin D",
      "Discuss Vitamin K2 intake with doctor if taking blood thinners"
    ]
  },
  {
    day: 139,
    title: "Weekly Measurements - Day 139",
    description: "Record your weight, waist measurement, physical activity, and food log for the week.",
    askRachel: true,
    educationalContent: "Tracking your weekly measurements helps monitor progress and adjust your health plan. Regular logging of weight, waist, steps, and exercise can reveal trends over time.",
    questions: [
      {
        id: 13901,
        type: "input",
        label: "Weight",
        placeholder: "___ lbs or ___ kg"
      },
      {
        id: 13902,
        type: "input",
        label: "Waist Measurement",
        placeholder: "___ inches or ___ cm"
      },
      {
        id: 13903,
        type: "input",
        label: "Steps this week",
        placeholder: "xx,xxx"
      },
      {
        id: 13904,
        type: "input",
        label: "Other Exercise",
        placeholder: "Include resistance exercises and cardio that makes you sweat"
      },
      {
        id: 13905,
        type: "log",
        label: "Food Log",
        placeholder: "Record foods for each meal and snack"
      }
    ],
    checklist: [
      "Record weight and waist measurement",
      "Log daily steps and other exercises",
      "Track all meals and snacks using food log template",
      "Calculate absolute and percentage changes from prior week"
    ]
  },
  {
    day: 140,
    title: "Twenty-first Week Review - Day 140",
    description: "Review your weekly measurements, steps, and new habit implementation.",
    askRachel: true,
    educationalContent: "Weekly reviews help you identify progress, maintain motivation, and introduce small changes to keep energy and engagement high.",
    questions: [
      {
        id: 14001,
        type: "review",
        label: "Waist measurement comparison",
        placeholder: "Your waist measurement started at ___ inches and now is ___ inches"
      },
      {
        id: 14002,
        type: "review",
        label: "Weight comparison",
        placeholder: "Your weight started at ___ pounds/kg and now is ___ pounds/kg"
      },
      {
        id: 14003,
        type: "single-choice",
        label: "Step goal performance",
        options: [
          "Sent steps today and prior day",
          "Sent steps on either today or prior day but NOT BOTH"
        ],
        responses: {
          "Sent steps today and prior day": ["Thanks for sending your steps in. I need them every day, so keep it up."],
          "Sent steps on either today or prior day but NOT BOTH": [
            "Hey! Do you think we can succeed in your plan without you? This plan is about your health and your life! I need your steps daily. If you don't have a pedometer on your phone, you can order one at the app store. Now send me your steps for yesterday."
          ]
        }
      },
      {
        id: 14004,
        type: "reflection",
        label: "New habit or routine added this week?",
        options: []
      }
    ],
    checklist: [
      "Compare waist and weight from previous week",
      "Check if step goal was met daily",
      "Introduce a new healthy habit or small change in routine",
      "Maintain motivation and track progress consistently"
    ]
  },
  {
    day: 141,
    title: "Weekly Food Review - Day 141",
    description: "Review your food tracking for the week and reflect on reporting consistency.",
    askRachel: true,
    educationalContent: "Keeping a food diary helps you become aware of eating habits and makes it easier to manage portion sizes and avoid the Five Food Felons.",
    questions: [
      {
        id: 14101,
        type: "single-choice",
        label: "Did you report your food today?",
        options: ["Yes", "No"],
        responses: {
          "Yes": ["Great reporting! Talk to us again tomorrow!"],
          "No": [
            "We know it takes some time to write all this down, but think of it as premium self-care!",
            "If you cannot remember everything you eat one day, at least write down most of it and send it along!"
          ]
        }
      }
    ],
    checklist: [
      "Log all meals and snacks for the day",
      "Ensure all drinks and condiments are included",
      "Reflect on patterns and food choices",
      "Send your food log to the team"
    ],
    suggestions: [
      "Use a notebook, phone app, or template to track your food consistently",
      "Focus on accuracy over perfection",
      "Remember, regular logging helps you spot trends and make better food choices"
    ]
  },
  {
    day: 142,
    title: "Weekly Food Focus & Five Food Felons - Day 142",
    description: "Focus on staying away from the Five Food Felons and reflect on your choices.",
    askRachel: true,
    educationalContent: "Avoiding the Five Food Felons is key to maintaining stable blood sugar and overall health. These include simple sugars, added syrups, stripped carbs, red or processed meats, and fried foods. One 12 oz can of regular soda contains almost as much sugar as most people should consume in 3 days!",
    questions: [
      {
        id: 14201,
        type: "single-choice",
        label: "Did you stay away from the Five Food Felons today?",
        options: ["Yes", "No"],
        responses: {
          "Yes": [
            "BRAVO! You are doing great!",
            "We knew we could count on you!",
            "You make our lives so easy! Keep doing a great job!"
          ],
          "No": [
            "You will feel better if you stay away from these felons!!",
            "Keep trying. We know you are human!",
            "We know you can do it! Try again tomorrow!"
          ]
        }
      }
    ],
    checklist: [
      "Avoid simple sugars (e.g., soda, candy)",
      "Avoid added syrups",
      "Avoid stripped carbohydrates",
      "Avoid red or processed meats",
      "Avoid fried foods",
      "Reflect on which food felon is most difficult to avoid and strategize for next time"
    ],
    suggestions: [
      "When thirsty, drink water, tea, or black coffee instead of soda",
      "Plan healthy snacks ahead of time to prevent reaching for food felons",
      "Keep track of small wins and challenges each day"
    ]
  },
  {
    day: 143,
    title: "Weekly Mood Assessment - Day 143",
    description: "Reflect on your mood, exercise, and eating habits this week. Practice stress management techniques as needed.",
    askRachel: true,
    educationalContent: "Exercise and healthy eating can positively impact your mood. Regular stress management practices, like quiet reflection and diaphragmatic breathing, are key tools to maintain emotional balance.",
    questions: [
      {
        id: 14301,
        type: "single-choice",
        label: "Think about how your exercise has changed this week. Is it affecting your mood?",
        options: ["Yes", "No"]
      },
      {
        id: 14302,
        type: "single-choice",
        label: "Think about how your eating has changed this week. Is it affecting your mood?",
        options: ["Yes", "No"]
      },
      {
        id: 14303,
        type: "single-choice",
        label: "Did you take 15 minutes for quiet reflection this week?",
        options: ["Yes", "No"],
        responses: {
          "Yes": ["GREAT JOB for pro-actively managing your mood!"],
          "No": ["Please schedule to take time out for yourself in the next weeks."]
        }
      },
      {
        id: 14304,
        type: "single-choice",
        label: "Did you practice formal meditation or breathing exercises this week?",
        options: ["Yes", "No"],
        responses: {
          "Yes": ["GREAT JOB for pro-actively managing your mood!"],
          "No": ["Please schedule to take time out for yourself in the next weeks."]
        }
      },
      {
        id: 14305,
        type: "single-choice",
        label: "How do you feel today?",
        options: ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        responses: {
          "A. I feel great today!": [
            "Keep feeling great! Way to go!",
            "We feel great when you do! Keep smiling!",
            "We are happy when you are happy. Thanks for making our day!"
          ],
          "B. I feel ok today.": [
            "We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.",
            "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.",
            "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."
          ],
          "C. I do not feel great today": [
            "We want you to get from OK to great! Keep stepping and eating right. Let us know how you are doing tomorrow.",
            "Consider practicing the comprehensive stress management program with diaphragmatic breathing."
          ]
        }
      }
    ],
    checklist: [
      "Reflect on changes in exercise and eating habits and their impact on mood",
      "Schedule 15 minutes of quiet reflection time",
      "Practice formal meditation or breathing exercises",
      "Use diaphragmatic breathing exercises if feeling low"
    ],
   
    suggestions: [
      "Practice deep breathing exercises daily, even without the device",
      "Incorporate small laughter breaks or enjoyable activities to improve mood",
      "Keep a brief journal of mood changes and triggers"
    ]
  },  
  {
    "day": 151,
    "title": "Weekly Menopause Reporting",
    "description": "Track hot flashes, sleep, stress management, and vaginal dryness.",
    "educationalContent": "Daily stepping and food choices help improve overall well-being. Sleep, exercise, and stress management are crucial during menopause.",
    "askRachel": true,
    "questions": [
      {
        "id": 15101,
        "type": "single-choice",
        "label": "Hot Flashes",
        "options": [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        "suggestions": {
          "A": [
            "Think about when hot flashes are worse: night or day?",
            "Sleep tips: 7 hours/night, avoid caffeine after 3pm, no work/TV in bed, wind-down 15 min before bed."
          ],
          "B": [
            "Keep stepping and eating right.",
            "Add an extra 5 minutes of relaxation time.",
            "Get an extra laugh in tomorrow. Watch comedy or call a friend."
          ],
          "C": [
            "Monitor any symptoms like vaginal dryness and discuss with your doctor if needed."
          ]
        },
        "breathingExercise": {
          "steps": [
            "Place a finger on your belly button.",
            "Inhale deeply through your nose, hold, then take another breath on top and exhale.",
            "Observe belly button movement (should move outward).",
            "Optional: use inspiratory resistance device $19.95, 10 times morning and evening."
          ]
        },
        "additionalTopic": {
          "label": "Vaginal Dryness",
          "suggestions": [
            "Use lubricants before intercourse.",
            "Consider non-hormonal vaginal moisturizers.",
            "Discuss DHEA suppositories or hormone therapy with your doctor."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 152,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D3/K2 intake, and strength training.",
    "educationalContent": "Maintaining bone health with diet, supplements, and weight-bearing exercises reduces fracture risk.",
    "askRachel": true,
    "questions": [
      {
        "id": 15201,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least 600 mg from supplement", "C. No"]
      },
      {
        "id": 15202,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "responses": {
          "A": "Great Job!",
          "B": "Look at the list of foods and see if you may be able to add some Vitamin D to your diet this week!"
        }
      },
      {
        "id": 15203,
        "type": "single-choice",
        "label": "Strength Training Today?",
        "options": ["A. Yes", "B. No"]
      }
    ],
    "checklist": true
  },
  {
    day: 144,
    title: "Weekly Menopause Reporting - Day 144",
    description: "Track hot flashes, sleep, and stress management to improve menopausal symptoms and overall well-being.",
    askRachel: true,
    educationalContent: "Eating well, exercising, and sleeping sufficiently are key first steps to manage menopausal symptoms. Stress management, including diaphragmatic breathing, can help with mood and hot flash control.",
    questions: [
      {
        id: 14401,
        type: "single-choice",
        label: "Are you experiencing hot flashes?",
        options: [
          "A. Yes, they are driving me crazy!",
          "B. Yes, but they are tolerable.",
          "C. No"
        ],
        responses: {
          "A. Yes, they are driving me crazy!": [
            "Think about when the hot flashes are bothering you most: night or day.",
            "Ensure you are sleeping well. Aim for 7 hours of sleep each night.",
            "Avoid working or checking emails/texts in bed to improve sleep."
          ],
          "B. Yes, but they are tolerable.": [
            "Keep stepping and eating right. Let us know how you are doing tomorrow.",
            "Add an extra 5 minutes of relaxation time or laughter breaks.",
            "Practice a breathing exercise."
          ],
          "C. No": [
            "Lucky you! Keep monitoring symptoms and maintaining healthy routines."
          ]
        }
      },
      {
        id: 14402,
        type: "informational",
        label: "Vaginal dryness management",
        content: [
          "Use lubricants before intercourse to make relations more comfortable.",
          "Non-hormonal vaginal moisturizers can also help.",
          "DHEA suppositories may have long-term benefits – discuss with your physician.",
          "Consider discussing hormone therapy with your doctor."
        ]
      },
      {
        id: 14403,
        type: "checkbox-group",
        label: "Diaphragmatic Breathing Exercise",
        steps: [
          "Positioning: Place a finger on your belly button.",
          "Breathing: Inhale deeply through your nose, hold that breath, and take another breath on top. Exhale slowly.",
          "Observation: Your belly button should move outward when using your diaphragm.",
          "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
          "Routine: Use the device 10 times in the morning and 10 times in the evening before bed."
        ]
      }
    ],
    checklist: [
      "Track hot flashes and note severity.",
      "Ensure 7 hours of sleep nightly.",
      "Practice diaphragmatic breathing exercises.",
      "Consider strategies for vaginal dryness as needed."
    ],
    suggestions: [
      "Maintain a balanced diet and regular exercise to help manage menopausal symptoms.",
      "Schedule regular sleep routines.",
      "Use stress management techniques daily."
    ]
  },
  {
    day: 145,
    title: "Weekly Bone Health Reporting - Day 145",
    description: "Track calcium, vitamin D, and strength training to support bone health.",
    askRachel: true,
    educationalContent: "Maintaining sufficient calcium, vitamin D, and magnesium intake, along with strength training, supports bone density and reduces osteoporosis risk.",
    questions: [
      {
        id: 14501,
        type: "single-choice",
        label: "Calcium 1,200 mg today (half from supplements)?",
        options: ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"],
        responses: {
          "A. Yes": ["Great job! Keep up your calcium intake."],
          "B. Probably, at least got 600 mg from supplement": ["Good effort. Try to reach full recommended intake if possible."],
          "C. No": ["Try to include calcium-rich foods or supplements to meet daily requirements."]
        }
      },
      {
        id: 14502,
        type: "single-choice",
        label: "Vitamin D2/3 with K2 1,000 units today?",
        options: ["A. Yes", "B. No"],
        responses: {
          "A. Yes": ["Great job! Vitamin D supports calcium absorption and bone health."],
          "B. No": ["Check the list of Vitamin D sources and try to include them in your diet this week."]
        }
      },
      {
        id: 14503,
        type: "single-choice",
        label: "Strength Training today?",
        options: ["A. Yes", "B. No"],
        responses: {
          "A. Yes": ["Excellent! Strength training supports bone density."],
          "B. No": ["Incorporate strength exercises like squats, lunges, or push-ups to maintain bone health."]
        }
      },
      {
        id: 14504,
        type: "text",
        label: "Magnesium Intake",
        content: [
          "Ensure adequate magnesium intake for bone health.",
          "Dietary sources include pumpkin seeds, chia seeds, almonds, spinach, cashews, peanuts, shredded wheat, soymilk, black beans, edamame, peanut butter, baked potatoes, brown rice, yogurt, oatmeal, kidney beans, banana, salmon, milk, halibut, raisins, whole wheat bread, avocado.",
          "Daily Value (DV) for magnesium: 420 mg for adults and children age 4+.",
          "Focus on foods providing ≥20% DV for high magnesium content."
        ]
      }
    ],
    checklist: [
      "Track calcium intake (diet + supplements).",
      "Track vitamin D2/3 with K2 intake.",
      "Complete strength training exercises.",
      "Ensure adequate magnesium intake via diet or supplements."
    ],
    suggestions: [
      "Combine dietary intake with supplements if needed to meet calcium, vitamin D, and magnesium requirements.",
      "Incorporate daily strength exercises to support bone health.",
      "Monitor progress weekly and adjust diet/exercise as necessary."
    ]
  },
  {
    day: 146,
    title: "Weekly Measurements - Day 146",
    description: "Record your weight, waist, steps, and food log for weekly tracking.",
    askRachel: true,
    educationalContent: "Tracking measurements helps you monitor progress and understand changes in body composition. Accurate recording allows for proper feedback and recommendations.",
    checklist: [
      "Record weight (lbs or kg)",
      "Record waist measurement (inches or cm)",
      "Track daily steps and other exercises (resistance or cardio)",
      "Log all meals and snacks",
      "Calculate absolute and percentage change in weight and waist compared to Week 4"
    ],
    questions: [
      {
        id: 14601,
        type: "number",
        label: "Enter your current weight (lbs or kg)"
      },
      {
        id: 14602,
        type: "number",
        label: "Enter your current waist measurement (inches or cm)"
      },
      {
        id: 14603,
        type: "number",
        label: "Enter your steps for this week"
      },
      {
        id: 14604,
        type: "text",
        label: "Log your meals and snacks (7:30 a.m. - Breakfast, 10:00 a.m. - Snack, etc.)"
      }
    ],
    suggestions: [
      "Review daily activity and food logs to identify trends or areas for improvement."
    ]
  },
  {
    day: 147,
    title: "Twenty-second Week Review - Day 147",
    description: "Review weekly measurements, steps, and overall progress to adjust your habits and set new goals.",
    askRachel: true,
    checklist: [
      "Compare current waist measurement with starting measurement",
      "Compare current weight with starting weight",
      "Assess if step goal was met (10,000 steps or 10% higher than Week 4)",
      "Reflect on energy levels",
      "Consider adding a new healthy food or changing your walking route"
    ],
    questions: [
      {
        id: 14701,
        type: "single-choice",
        label: "Did you meet your step goal today?",
        options: ["Yes", "No"]
      },
      {
        id: 14702,
        type: "single-choice",
        label: "Did you meet your step goal yesterday?",
        options: ["Yes", "No"]
      },
      {
        id: 14703,
        type: "text",
        label: "Any changes you want to make this week to improve energy or measurements?"
      }
    ],
    responses: {
      "Steps sent both today and prior day": [
        "Thanks for sending your steps in. Keep it up, daily tracking is important!"
      ],
      "Steps sent on either today or prior day but NOT both": [
        "Hey! Do you think we can succeed in your plan without you? I need your steps daily.",
        "If you don't have a pedometer on your phone, you can order one at the app store.",
        "Please send your steps for yesterday."
      ]
    },
    suggestions: [
      "Try a new healthy food or take a new route while walking to keep energy levels high.",
      "Consider inviting a friend for a walk instead of lunch to stay active.",
      "Adjust your weekly goals based on your measurements and energy levels."
    ]
  },
  {
    "day": 153,
    "title": "Weekly Measurements",
    "description": "Record weekly weight, waist, physical activity, and food intake.",
    "educationalContent": "Tracking weight, waist, and activity allows you to monitor progress and adjust lifestyle for optimal health.",
    "askRachel": true,
    "questions": [
      {
        "id": 15301,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 15302,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 15303,
        "type": "text",
        "label": "Steps for the week"
      },
      {
        "id": 15304,
        "type": "text",
        "label": "Other Exercise (resistance/cardio that makes you sweat)"
      },
      {
        "id": 15305,
        "type": "text",
        "label": "Food Log",
        "suggestions": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 154,
    "title": "Twenty-third Week Review",
    "description": "Reflect on weekly data and consider new routines or foods to boost energy.",
    "educationalContent": "Small changes, like trying a new healthy food or a new walking route, can help sustain energy and progress.",
    "askRachel": true,
    "questions": [
      {
        "id": 15401,
        "type": "text",
        "label": "Weekly Measurements Review",
        "suggestions": [
          "Waist started at ___ inches, now ___ inches",
          "Weight started at ___ lbs/kg, now ___ lbs/kg",
          "Step goal: 10,000 or 10% higher than week 4"
        ]
      },
      {
        "id": 15402,
        "type": "text",
        "label": "Step Reporting Feedback",
        "suggestions": [
          "Steps sent both days: Thanks for sending steps daily!",
          "Steps sent one day: Keep sending steps daily!",
          "No steps sent: We need your steps daily. Keep persevering. If you don’t have a pedometer, order one from the app store."
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 155,
    "title": "Weekly Food Reporting",
    "description": "Track daily food intake and assess adherence to healthy eating.",
    "educationalContent": "Writing down most of what you eat is premium self-care and helps awareness.",
    "askRachel": true,
    "questions": [
      {
        "id": 15501,
        "type": "text",
        "label": "Food Reporting Feedback",
        "suggestions": [
          "If reporting food: Great reporting! Talk to us again tomorrow!",
          "If not reporting food: Try to write down most of what you eat, and think which Food Felon is hardest to avoid."
        ]
      }
    ],
    "checklist": true
  }
  ,
  {
    "day": 156,
    "title": "Weekly Food Review",
    "description": "Track adherence to the Five Food Felons and understand the impact of red/processed meats and plant-based meat alternatives.",
    "educationalContent": "Avoiding red and processed meats reduces inflammation, LDL cholesterol, heart disease, stroke, and depression risk. Highly-processed plant-based meats may increase inflammation but have less impact than real meat. Opt for unprocessed fruits, vegetables, and whole grains.",
    "askRachel": true,
    "questions": [
      {
        "id": 15601,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": ["BRAVO! You are doing great!", "We knew we could count on you!", "You make our lives so easy! Keep doing a great job!"],
          "No": ["You will feel better if you stay away from these felons!!", "Keep trying. We know you are human!", "We know you can do it! Try again tomorrow!"]
        }
      }
    ],
    "checklist": true,
    "resources": [
      "https://en.wikipedia.org/wiki/Vegetarian_Meat_(band)",
      "https://en.wikipedia.org/wiki/Meat_alternative",
      "https://iadns.onlinelibrary.wiley.com/doi/10.1002/fft2.532",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC8836046/",
      "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/217001"
    ]
  },
  {
    "day": 157,
    "title": "Weekly Mood Assessment",
    "description": "Reflect on the impact of exercise, diet, and stress management on mood.",
    "educationalContent": "Exercise, healthy eating, and stress management practices like meditation and diaphragmatic breathing improve mood.",
    "askRachel": true,
    "questions": [
      {
        "id": 15701,
        "type": "reflection",
        "label": "Think about how your exercise and eating habits this week affected your mood."
      },
      {
        "id": 15702,
        "type": "single-choice",
        "label": "15 minutes of quiet reflection time today?",
        "options": ["Yes", "No"]
      },
      {
        "id": 15703,
        "type": "single-choice",
        "label": "Formal meditation or breathing exercises today?",
        "options": ["Yes", "No"]
      },
      {
        "id": 15704,
        "type": "single-choice",
        "label": "Daily Mood",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        "responses": {
          "A": ["Keep feeling great! Way to go!", "We feel great when you do! Keep smiling!", "We are happy when you are happy. Thanks for making our day!"],
          "B": ["Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": ["Offer comprehensive stress management program with diaphragmatic breathing training."]
        },
        "breathingExercise": {
          "steps": [
            "Place a finger on your belly button.",
            "Inhale deeply through your nose, hold that breath, then take another breath on top and exhale.",
            "Observe belly button movement (should move outward).",
            "Optional: use inspiratory resistance device $19.95, 10 times morning and evening."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 158,
    "title": "Weekly Menopause Reporting",
    "description": "Track hot flashes, sleep, stress management, and menopausal well-being.",
    "educationalContent": "Sleep, diet, and exercise are key to managing hot flashes and maintaining mood during menopause.",
    "askRachel": true,
    "questions": [
      {
        "id": 15801,
        "type": "single-choice",
        "label": "Hot Flashes",
        "options": ["A. Yes, they are driving me crazy!", "B. Yes, but they are tolerable.", "C. No"],
        "suggestions": {
          "A": ["Track timing of hot flashes (day/night).", "Sleep tip: 7 hours/night, avoid work/email/text in bed."],
          "B": ["Keep stepping and eating right.", "Add 5 minutes of relaxation.", "Get an extra laugh tomorrow."],
          "C": ["Bravo! You have done it right!"]
        },
        "breathingExercise": {
          "steps": [
            "Place a finger on your belly button.",
            "Inhale deeply through your nose, hold, then take another breath on top and exhale.",
            "Observe belly button movement (should move outward).",
            "Optional: use inspiratory resistance device $19.95, 10 times morning and evening."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 159,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, vitamin D3/K2, magnesium, and strength training for bone health.",
    "educationalContent": "Vitamin D3 is difficult to obtain from diet alone; supplements and sunlight help. Magnesium and K2 also help preserve bone mass.",
    "askRachel": true,
    "questions": [
      {
        "id": 15901,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least 600 mg from supplement", "C. No"]
      },
      {
        "id": 15902,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "responses": {
          "A": "Great Job!",
          "B": "Look at the list of Vitamin D foods and see if you can add some to your diet this week."
        }
      },
      {
        "id": 15903,
        "type": "single-choice",
        "label": "Strength Training Today?",
        "options": ["A. Yes", "B. No"]
      },
      {
        "id": 15904,
        "type": "text",
        "label": "Vitamin D and Magnesium Education",
        "content": "Vitamin D sources include cod liver oil, salmon, trout, fortified milk/milk alternatives, fortified cereal, and sun exposure. Magnesium sources include pumpkin seeds, chia seeds, almonds, spinach, cashews, peanuts, black beans, edamame, yogurt, oats, and whole grains."
      }
    ],
    "checklist": true
  },
  {
    "day": 160,
    "title": "Weekly Measurements",
    "description": "Record weekly weight, waist, physical activity, and food intake.",
    "educationalContent": "Tracking weight, waist, and activity allows monitoring progress and adjusting lifestyle for optimal health.",
    "askRachel": true,
    "questions": [
      {
        "id": 16001,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 16002,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 16003,
        "type": "text",
        "label": "Steps for the week"
      },
      {
        "id": 16004,
        "type": "text",
        "label": "Other Exercise (resistance/cardio that makes you sweat)"
      },
      {
        "id": 16005,
        "type": "text",
        "label": "Food Log",
        "suggestions": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 161,
    "title": "Twenty-fourth Week Review",
    "description": "Review weekly waist, weight, and step progress. Celebrate program milestones.",
    "educationalContent": "You have finished 23 weeks of the program! Be proud of your healthful choices and the progress you have made.",
    "askRachel": true,
    "questions": [
      {
        "id": 16101,
        "type": "text",
        "label": "Waist measurement started and current"
      },
      {
        "id": 16102,
        "type": "text",
        "label": "Weight started and current"
      },
      {
        "id": 16103,
        "type": "text",
        "label": "Step goal this week"
      },
      {
        "id": 16104,
        "type": "single-choice",
        "label": "Steps sent today and prior day?",
        "options": ["Yes, both days", "Yes, one day", "No days"],
        "responses": {
          "Yes, both days": "Thanks for sending your steps in. Keep it up!",
          "Yes, one day": "Hey! This plan is about your health and your life! Send me your steps for yesterday."
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 162,
    "title": "Weekly Food Reporting",
    "description": "Report your daily food intake to track adherence and self-care.",
    "askRachel": true,
    "questions": [
      {
        "id": 16201,
        "type": "single-choice",
        "label": "Did you report your food today?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "Great reporting! Talk to us again tomorrow!",
          "No": "We know it takes some time, but think of it as premium self-care! Write down most of what you eat and send it along."
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 163,
    "title": "Weekly Food Review",
    "description": "Assess adherence to the Five Food Felons and the benefits of dietary fiber.",
    "educationalContent": "Eating more fiber (30-35g/day) promotes digestive health, reduces risk of colorectal cancer and cardiovascular disease, and helps with satiety and weight management.",
    "askRachel": true,
    "questions": [
      {
        "id": 16301,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": ["BRAVO! You are doing great!", "We knew we could count on you!", "You make our lives so easy! Keep doing a great job!"],
          "No": ["You will feel better if you stay away from these felons!!", "Keep trying. We know you are human!", "We know you can do it! Try again tomorrow!"]
        }
      },
      {
        "id": 16302,
        "type": "text",
        "label": "Fiber Education",
        "content": "Fiber is indigestible carbohydrate from plant cells. Higher fiber intake (25-35g/day) is linked to lower all-cause mortality, reduced CVD and colorectal cancer risk. Insoluble fiber sources include whole grains, wheat bran, nuts, seeds, beans, legumes, and vegetables like cauliflower, green beans, and sweet potatoes."
      }
    ],
    "checklist": true
  },
  {
    "day": 164,
    "title": "Monthly Mood Assessment",
    "description": "Reflect on exercise, diet, and stress management to assess mood.",
    "educationalContent": "Exercise and healthy eating improve mood. Stress management via quiet reflection or breathing exercises is key.",
    "askRachel": true,
    "questions": [
      {
        "id": 16401,
        "type": "reflection",
        "label": "Think about how your exercise and eating habits this week affected your mood."
      },
      {
        "id": 16402,
        "type": "single-choice",
        "label": "15 minutes of quiet reflection today?",
        "options": ["Yes", "No"]
      },
      {
        "id": 16403,
        "type": "single-choice",
        "label": "Formal meditation or breathing exercises today?",
        "options": ["Yes", "No"]
      },
      {
        "id": 16404,
        "type": "single-choice",
        "label": "Daily Mood",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        "responses": {
          "A": ["Keep feeling great! Way to go!", "We feel great when you do! Keep smiling!", "We are happy when you are happy. Thanks for making our day!"],
          "B": ["Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": ["Offer comprehensive stress management program with diaphragmatic breathing training."]
        },
        "breathingExercise": {
          "steps": [
            "Place a finger on your belly button.",
            "Inhale deeply through your nose, hold, then take another breath on top and exhale.",
            "Observe belly button movement (should move outward).",
            "Optional: use inspiratory resistance device $19.95, 10 times morning and evening."
          ]
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 165,
    "title": "Monthly Menopause Assessment",
    "description": "Assess symptoms over the past month and manage hot flashes.",
    "educationalContent": "Monitor mood, energy, anxiety, alcohol/cannabis use, and hot flashes. Non-hormonal treatments and acupuncture may help. Flaxseed is not effective for hot flashes.",
    "askRachel": true,
    "questions": [
      {
        "id": 16501,
        "type": "multi-choice",
        "label": "Over the past month, have you experienced any of the following?",
        "options": [
          "Lost interest or pleasure in activities normally enjoyed",
          "Feeling down, blue, depressed, or low",
          "Periods of low energy, mood swings, irritability, and/or loss of concentration",
          "Excessive worry about multiple issues (health, finances, family)",
          "Felt very nervous or anxious or experienced physical symptoms",
          "Would you like to moderate or eliminate alcohol or cannabis"
        ]
      },
      {
        "id": 16502,
        "type": "single-choice",
        "label": "Hot Flashes",
        "options": ["A. Yes, they are driving me crazy!", "B. Yes, but they are tolerable.", "C. No"],
        "responses": {
          "A": "Discuss non-hormonal treatments with your doctor. Consider antidepressants or acupuncture. Flaxseed is not effective.",
          "B": ["Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": "You lucky woman!"
        }
      }
    ],
    "checklist": true
  }
  ,
  {
    "day": 166,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, Vitamin D/K2 intake, and strength training. Learn about magnesium for bone health.",
    "educationalContent": "Magnesium is important for bone health. Dietary sources include pumpkin seeds, chia seeds, almonds, spinach, cashews, peanuts, shredded wheat cereal, soymilk, black beans, edamame, peanut butter, baked potato, brown rice, yogurt, oatmeal, kidney beans, banana, salmon, milk, halibut, raisins, bread, avocado. DV = 420 mg.",
    "askRachel": true,
    "questions": [
      {
        "id": 16601,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"]
      },
      {
        "id": 16602,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "responses": {
          "A": "Great Job!",
          "B": "Look at the list and see if you may be able to add some Vitamin D to your diet this week!"
        }
      },
      {
        "id": 16603,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"]
      }
    ],
    "checklist": true
  },
  {
    "day": 167,
    "title": "Weekly Measurements",
    "description": "Collect weight, waist, steps, exercise, and food log for the week.",
    "askRachel": true,
    "questions": [
      {
        "id": 16701,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 16702,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 16703,
        "type": "text",
        "label": "Physical Activity Summary (Steps and Other Exercise)"
      },
      {
        "id": 16704,
        "type": "food-log",
        "label": "Food Log Template",
        "times": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 168,
    "title": "Twenty-fifth Week Review",
    "description": "Review weekly waist, weight, and step progress. Celebrate program milestone.",
    "educationalContent": "You have finished 24 weeks! Only 2 weeks to go until graduation. Celebrate your progress and consider sharing your knowledge.",
    "askRachel": true,
    "questions": [
      {
        "id": 16801,
        "type": "text",
        "label": "Waist measurement started and current"
      },
      {
        "id": 16802,
        "type": "text",
        "label": "Weight started and current"
      },
      {
        "id": 16803,
        "type": "text",
        "label": "Step goal this week"
      },
      {
        "id": 16804,
        "type": "single-choice",
        "label": "Steps sent today and prior day?",
        "options": ["Yes, both days", "Yes, one day", "No days"],
        "responses": {
          "Yes, both days": "Thanks for sending your steps in. Keep it up!",
          "Yes, one day": "Hey! This plan is about your health and your life! Send me your steps for yesterday."
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 169,
    "title": "Weekly Food Reporting",
    "description": "Report your daily food intake to track adherence and self-care.",
    "askRachel": true,
    "questions": [
      {
        "id": 16901,
        "type": "single-choice",
        "label": "Did you report your food today?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "Great reporting! Talk to us again tomorrow!",
          "No": "We know it takes some time, but think of it as premium self-care! Write down most of what you eat and send it along."
        }
      }
    ],
    "checklist": true
  },
  {
    "day": 170,
    "title": "Weekly Food Review",
    "description": "Assess adherence to the Five Food Felons and educate about simple sugars.",
    "educationalContent": "Simple sugars are highly concentrated in soda. A 12 oz can contains as much sugar as most people should consume in 3 days. Sip water, tea, or black coffee instead to protect protein function and blood sugar levels.",
    "askRachel": true,
    "questions": [
      {
        "id": 17001,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": ["BRAVO! You are doing great!", "We knew we could count on you!", "You make our lives so easy! Keep doing a great job!"],
          "No": ["You will feel better if you stay away from these felons!!", "Keep trying. We know you are human!", "We know you can do it! Try again tomorrow!"]
        }
      }
    ],
    "checklist": true
  }
  ,
  {
    "day": 171,
    "title": "Weekly Mood Assessment",
    "description": "Track exercise and eating impact on mood. Assess stress management activities.",
    "educationalContent": "Exercise and healthy eating can positively affect mood. Consider 15 minutes of quiet reflection or formal meditation/breathing exercises.",
    "askRachel": true,
    "questions": [
      {
        "id": 17101,
        "type": "reflection",
        "label": "Think about how your exercise has changed this week. Is it affecting your mood?"
      },
      {
        "id": 17102,
        "type": "reflection",
        "label": "Think about how your eating has changed this week. Is it affecting your mood?"
      },
      {
        "id": 17103,
        "type": "single-choice",
        "label": "15 minutes of quiet reflection time?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "GREAT JOB for pro-actively managing your mood!",
          "No": "Please schedule to take time out for You in the next weeks."
        }
      },
      {
        "id": 17104,
        "type": "single-choice",
        "label": "Formal meditation or breathing exercises?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "GREAT JOB for pro-actively managing your mood!",
          "No": "Please schedule to take time out for You in the next weeks."
        }
      },
      {
        "id": 17105,
        "type": "single-choice",
        "label": "How do you feel today?",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        "responses": {
          "A": ["Keep feeling great! Way to go!", "We feel great when you do! Keep smiling!", "We are happy when you are happy. Thanks for making our day!"],
          "B": ["We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": "Offer comprehensive stress management program with diaphragmatic breathing training. Complete exercises 71–75 as instructed."
        }
      }
    ]
  },
  {
    "day": 172,
    "title": "Weekly Menopause Reporting",
    "description": "Assess hot flashes and provide stress management guidance.",
    "askRachel": true,
    "questions": [
      {
        "id": 17201,
        "type": "single-choice",
        "label": "Are you having hot flashes?",
        "options": ["A. Yes, they are driving me crazy!", "B. Yes, but they are tolerable.", "C. No"],
        "responses": {
          "A": "Consider non-hormonal treatments or acupuncture with your doctor. Flaxseed is likely not effective.",
          "B": ["We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": "You lucky woman!"
        },
        "diaphragmaticBreathing": {
          "steps": [
            "46. Positioning: Place a finger on your belly button.",
            "47. Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
            "48. Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
            "49. Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
            "50. Routine: Use device 10 times morning and 10 times evening before bed."
          ]
        }
      }
    ]
  },
  {
    "day": 173,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, Vitamin D/K2 intake, and strength training. Learn about Vitamin K2 sources.",
    "educationalContent": "Vitamin K2 sources include green leafy vegetables. Discuss intake with your doctor if on blood thinners like warfarin.",
    "askRachel": true,
    "questions": [
      {
        "id": 17301,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"]
      },
      {
        "id": 17302,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "responses": {
          "A": "Great Job!",
          "B": "Look at the list and see if you may be able to add some Vitamin D to your diet this week!"
        }
      },
      {
        "id": 17303,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"]
      }
    ],
    "checklist": true
  },
  {
    "day": 174,
    "title": "Weekly Measurements",
    "description": "Collect weight, waist, steps, exercise, and food log for the week.",
    "askRachel": true,
    "questions": [
      {
        "id": 17401,
        "type": "text",
        "label": "Weight (lbs or kg)"
      },
      {
        "id": 17402,
        "type": "text",
        "label": "Waist Measurement (inches or cm)"
      },
      {
        "id": 17403,
        "type": "text",
        "label": "Physical Activity Summary (Steps and Other Exercise)"
      },
      {
        "id": 17404,
        "type": "food-log",
        "label": "Food Log Template",
        "times": [
          "7:30 a.m. - Breakfast",
          "10:00 a.m. - Snacks",
          "12:30 p.m. - Lunch",
          "3:00 p.m. - Snacks",
          "6:00 p.m. - Dinner",
          "7:30 p.m. - Snacks",
          "7:35 p.m. - Kitchen is closed for the night"
        ]
      }
    ],
    "checklist": true
  },
  {
    "day": 175,
    "title": "Twenty-sixth Week Review",
    "description": "Review weekly waist, weight, and step progress. Celebrate program milestone.",
    "educationalContent": "You have finished 25 weeks! If you are not feeling any better, contact your doctor. Referral to a specialist is available.",
    "askRachel": true,
    "questions": [
      {
        "id": 17501,
        "type": "text",
        "label": "Waist measurement started and current"
      },
      {
        "id": 17502,
        "type": "text",
        "label": "Weight started and current"
      },
      {
        "id": 17503,
        "type": "text",
        "label": "Step goal this week"
      },
      {
        "id": 17504,
        "type": "single-choice",
        "label": "Steps sent today and prior day?",
        "options": ["Yes, both days", "Yes, one day", "No days"],
        "responses": {
          "Yes, both days": "Thanks for sending your steps in. Keep it up!",
          "Yes, one day": "Hey! This plan is about your health and your life! Send me your steps for yesterday."
        }
      }
    ],
    "checklist": true
  }
  ,
  {
    "day": 176,
    "title": "Weekly Food Reporting",
    "description": "Track your daily food reporting.",
    "askRachel": true,
    "questions": [
      {
        "id": 17601,
        "type": "single-choice",
        "label": "Did you report your food today?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "Great reporting! Talk to us again tomorrow!",
          "No": "We know it takes some time to write all this down, but think of it as premium self-care! At least write down most of it and send it along!"
        }
      }
    ]
  },
  {
    "day": 177,
    "title": "Weekly Food Reporting & Food Felons",
    "description": "Track your food intake and staying away from the Five Food Felons.",
    "askRachel": true,
    "questions": [
      {
        "id": 17701,
        "type": "single-choice",
        "label": "Did you report your food today?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "Great reporting! Talk to us again tomorrow!",
          "No": "We know it takes some time to write all this down, but think of it as premium self-care! At least write down most of it and send it along!"
        }
      },
      {
        "id": 17702,
        "type": "single-choice",
        "label": "Did you stay away from the Five Food Felons?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": ["BRAVO! You are doing great!", "We knew we could count on you!", "You make our lives so easy! Keep doing a great job!"],
          "No": ["You will feel better if you stay away from these felons!!", "Keep trying. We know you are human!", "We know you can do it! Try again tomorrow!"]
        },
        "educationalContent": "Food Felons: #5 fried foods, #4 red/processed meats, #3 stripped carbs, #2 added syrups, #1 simple sugars. YOUR CHOICES COUNT!"
      }
    ]
  },
  {
    "day": 178,
    "title": "Weekly Mood Assessment",
    "description": "Assess your mood and exercise impact. Complete stress management activities.",
    "askRachel": true,
    "questions": [
      {
        "id": 17801,
        "type": "reflection",
        "label": "Think about how your exercise has changed this week. Is it affecting your mood?"
      },
      {
        "id": 17802,
        "type": "reflection",
        "label": "Think about how your eating has changed this week. Is it affecting your mood?"
      },
      {
        "id": 17803,
        "type": "single-choice",
        "label": "15 minutes of quiet reflection time?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "GREAT JOB for pro-actively managing your mood!",
          "No": "Please schedule to take time out for You in the next weeks."
        }
      },
      {
        "id": 17804,
        "type": "single-choice",
        "label": "Formal meditation or breathing exercises?",
        "options": ["Yes", "No"],
        "responses": {
          "Yes": "GREAT JOB for pro-actively managing your mood!",
          "No": "Please schedule to take time out for You in the next weeks."
        }
      },
      {
        "id": 17805,
        "type": "single-choice",
        "label": "How do you feel today?",
        "options": ["A. I feel great today!", "B. I feel ok today.", "C. I do not feel great today"],
        "responses": {
          "A": ["Keep feeling great! Way to go!", "We feel great when you do! Keep smiling!", "We are happy when you are happy. Thanks for making our day!"],
          "B": ["We want you to get from OK to great! Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time. Let us know how you feel tomorrow.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": "Offer comprehensive stress management program with diaphragmatic breathing training. Complete exercises as instructed."
        },
        "diaphragmaticBreathing": {
          "steps": [
            "Positioning: Place a finger on your belly button.",
            "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
            "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
            "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
            "Routine: Use device 10 times morning and 10 times evening before bed."
          ]
        }
      }
    ]
  },
  {
    "day": 179,
    "title": "Weekly Menopause Reporting",
    "description": "Assess hot flashes and provide stress management guidance.",
    "askRachel": true,
    "questions": [
      {
        "id": 17901,
        "type": "single-choice",
        "label": "Are you having hot flashes?",
        "options": ["A. Yes, they are driving me crazy!", "B. Yes, but they are tolerable.", "C. No"],
        "responses": {
          "A": "OK - time to talk to your doctor! Do you want us to refer you to a specialist?",
          "B": ["Keep stepping and eating right. Practice a breathing exercise.", "Add an extra 5 minutes of relaxation time.", "Try to get an extra laugh in tomorrow. Call a friend or watch a comedy."],
          "C": "Congrats! If you haven’t yet done a stress management program, refer to program."
        },
        "diaphragmaticBreathing": {
          "steps": [
            "Positioning: Place a finger on your belly button.",
            "Breathing: Inhale deeply through your nose, hold that breath, and then take another breath on top of it. Let it out.",
            "Observation: Which way did your belly button move? It should move outward when using your diaphragm.",
            "Equipment: Consider purchasing an inspiratory resistance training device ($19.95 on Amazon) to strengthen your diaphragm.",
            "Routine: Use device 10 times morning and 10 times evening before bed."
          ]
        }
      }
    ]
  },
  {
    "day": 180,
    "title": "Weekly Bone Health Reporting",
    "description": "Track calcium, Vitamin D/K2 intake, and strength training. Learn about Vitamin D3 and magnesium for bone health.",
    "askRachel": true,
    "questions": [
      {
        "id": 18001,
        "type": "single-choice",
        "label": "Calcium 1,200 mg today (half from supplements)?",
        "options": ["A. Yes", "B. Probably, at least got 600 mg from supplement", "C. No"]
      },
      {
        "id": 18002,
        "type": "single-choice",
        "label": "Vitamin D2/3 with K2 1,000 units today?",
        "options": ["A. Yes", "B. No"],
        "responses": {
          "A": "Great Job!",
          "B": "Look at the list and see if you may be able to add some Vitamin D to your diet this week!"
        }
      },
      {
        "id": 18003,
        "type": "single-choice",
        "label": "Strength Training today?",
        "options": ["A. Yes", "B. No"]
      }
    ],
    "educationalContent": "Vitamin D3 is hard to obtain from diet alone. Oily fish, sunlight exposure, magnesium, and Vitamin K2 are important for bone health. Extra supplementation may be needed, especially in winter or with limited sun exposure."
  },

];

export default programDays;
