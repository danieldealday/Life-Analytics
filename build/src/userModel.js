var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  firstName: {type: String, unique: true},
  lastName: {type: String, unique: true},
  email: {type: String, unique: true},
  password: {type: String, unique: true},
  applicationData: {
    personalData: {
      habits: [],
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: undefined
    },
    professionalData: {
      habits: [],
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: undefined
    },
    financialData: {
      habits: [],
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: undefined
  }
});

module.exports = mongoose.model('User', taskSchema);
