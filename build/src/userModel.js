var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  firstName: {type: String, unique: true},
  lastName: {type: String, unique: true},
  email: {type: String, unique: true},
  password: {type: String, unique: true},
  applicationData: {
    personalData: {
      habit: {
        value1: {type: String, unique: true},
        value2: {type: String, unique: true},
        value3: {type: String, unique: true}
      },
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: null
    },
    professionalData: {
      habit: {
        value1: {type: String, unique: true},
        value2: {type: String, unique: true},
        value3: {type: String, unique: true}
      },
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: null
    },
    financialData: {
      habit: {
        value1: {type: String, unique: true},
        value2: {type: String, unique: true},
        value3: {type: String, unique: true}
      },
      cumulative: {type: Number},
      weeklyTotal: {type: Number},
      weeklyContribution: {type: Number},
      bonus: null
    }
  }
});

module.exports = mongoose.model('User', taskSchema);
