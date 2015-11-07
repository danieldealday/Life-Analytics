db.createCollection('User', {
  firstName: {type: String, unique: true},
  lastName: {type: String, unique: true},
  email: {type: String, unique: true},
  password: {type: String, unique: true},
  applicationData: {
    personalData: {
      habits: {type: Array},
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: null
    },
    professionalData: {
      habits: {type: Array},
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: null
    },
    financialData: {
      habits: {type: Array},
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: null
  }
})
