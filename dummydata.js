db.User.insert({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    password: 'codesmith',
    applicationData: {
      personalData: {
        habit: [
          {
            habit_text: 'Exercise regularly',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          },
          {
            habit_text: 'Eat healthy',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          },
          {
            habit_text: 'Spend time with family and friends',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          }
        ],
        cumulative: 7,
        weeklyTotal: 7,
        weeklyContribution: 5,
        bonus: 0
      },
      professionalData: {
        habit: [
          {
            habit_text: 'Mentor new employee',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          },
          {
            habit_text: 'Work on side project',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          },
          {
            habit_text: 'Networked on break',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          }
        ],
        cumulative: 7,
        weeklyTotal: 7,
        weeklyContribution: 5,
        bonus: 1.2
      },
      financialData: {
        habit: [
          {
            habit_text: 'Did not eat out',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          },
          {
            habit_text: 'Stayed within daily budget',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          },
          {
            habit_text: 'Stack paper',
            created: "Fri Nov 06 2015 17:23:02 GMT-0800 (PST)",
            record: [
              {"Fri Nov 06 2015 17:26:02 GMT-0800 (PST)": true},
              {"Fri Nov 06 2015 17:27:51 GMT-0800 (PST)": false}
            ]
          }
        ],
        cumulative: 2,
        weeklyTotal: 2,
        weeklyContribution: 2,
        bonus: 1.1
      }
    }
  })
