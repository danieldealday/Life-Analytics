var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Questionnaire = require('./components/questionnaire.jsx');
var SignInPage = require('./components/signInPage.jsx');
var LoginForm = require('./components/logInForm.jsx');
var SignUpForm = require('./components/signUpForm.jsx');
var Dashboard = require('./components/dashboard.jsx');
// var Graph = require('./../client/components/graph.jsx')

console.log('app.jsx is working!');

var Page = React.createClass({
	getInitialState: function(){
		return {
			signUpStatus: true,
      loginStatus: false,
			questionnaireStatus: false,
			dashboardStatus: false,
			emailAddress: '',
      goal: '',
      streak: 0
		};
	},
	//Show Log In Form
  clickLoginButton: function(event) {
    event.preventDefault();
    console.log('clicked login button');
    this.setState({
      signUpStatus: false,
      loginStatus: true
    });
  },
  //Show Sign Up Form
  clickSignUpButton: function(event) {
    event.preventDefault();
    console.log('clicked signup button');
    this.setState({
    	signUpStatus: true,
    	loginStatus: false});
  },
  //Fuction passed down to Sign Up Form
  createUser: function(event) {
    event.preventDefault();
    console.log('inside user created');
  	var firstName = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.firstName).value;
  	var lastName = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.lastName).value;
  	var email = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.email).value;
    this.setState({
      emailAddress: ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.email).value
    });
  	var password = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.password).value;
  	var userObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
  	};

			$.ajax({
	      url: 'http://localhost:3000/create',
	      method: 'POST',
	      contentType: 'application/json',
	      data: JSON.stringify(userObject),
	      success: function(res){
	        console.log('User Created!');
					console.log(userObject);
					this.setState({signUpStatus: false, loginStatus: false, questionnaireStatus: true, email: email});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.log(err);
					this.setState({signUpStatus: true, loginStatus: false, questionnaireStatus: false, email: ''});
	      }
	    });

  },

	findUser: function(event) {
    event.preventDefault();

    var email = ReactDOM.findDOMNode(this.refs.form.refs.login.refs.email).value
    this.setState({
      emailAddress: email
    });
    var password = ReactDOM.findDOMNode(this.refs.form.refs.login.refs.password).value
    var userObject = {
      email: email,
      password: password
    };
    console.log(userObject);
    console.log('inside find user');

    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userObject),
      success: function(res){
        console.log('login works');
        console.log(res)
        this.setState({
          signUpStatus: false,
          loginStatus: false,
          questionnaireStatus: false,
          dashboardStatus: true,
          goal: res.goal,
          streak: res.streak
        });
      }.bind(this),
      error: function(xhr, status, error) {
        alert("Invalid email and/or password. Please try again.");

      }
    }); // closes ajax
  },

	gotQuestion: function(event) {
		event.preventDefault();
		var goal = ReactDOM.findDOMNode(this.refs.question.refs.goal).value;
		var userObject = {
			email: this.state.email,
			goal: goal,
			streak: 0
		};
		$.ajax({
			url: 'http://localhost:3000/postQuestion',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(userObject),
			success: function(res){
				console.log('questionnaire works');
        console.log("this is in the gotQuestion", goal);
				// console.log(JSON.parse(res));
				this.setState({
          signUpStatus: false,
          loginStatus: false,
          questionnaireStatus: false,
          dashboardStatus: true,
          goal: goal
        });
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
			}
		});
	},
  resetStreak: function(event) {
    event.preventDefault();
    userObject = {
      email: this.state.emailAddress,
      streak: 0
    };
    $.ajax({
      url: 'http://localhost:3000/updateStreak',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userObject),
      success: function(res) {
        console.log('reset streak success');
        console.log('increaseStreak ',res);
				this.setState({streak: 0});
      }.bind(this),
      error: function(xhr, status, err) {
       console.log(err);
      }
    });
  },

  increaseStreak: function(event) {
    event.preventDefault();
    var newStreak = this.state.streak + 1;
    userObject = {
      email: this.state.emailAddress,
      streak: newStreak
    }
    $.ajax({
      url: 'http://localhost:3000/updateStreak',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userObject),
      success: function(res) {
        console.log('increase streak success');
        console.log('increaseStreak ',res);
				this.setState({streak: newStreak});
      }.bind(this),
      error: function(xhr, status, err) {
       console.log(err);
      }
    });
  },


	render: function(){
		if(!this.state.dashboardStatus && !this.state.questionnaireStatus) {
      return(
				<div>
					<SignInPage ref="form" findUser={this.findUser} emailAddress={this.state.emailAddress} signUpStatus={this.state.signUpStatus} loginStatus={this.state.loginStatus} clickLoginButton={this.clickLoginButton} clickSignUpButton={this.clickSignUpButton} createUser={this.createUser} />
				</div>
			)
		}
		else if(this.state.questionnaireStatus) {
			console.log('insideeeee questions');
			return(
        <div>
					<Questionnaire ref="question" emailAddress={this.state.emailAddress} gotQuestion={this.gotQuestion} />
				</div>
        )
		}
		else if(this.state.dashboardStatus) {
			return(
				<div>
					<Dashboard goal={this.state.goal} streak={this.state.streak} emailAddress={this.state.emailAddress} resetStreak={this.resetStreak} increaseStreak={this.increaseStreak} />
				</div>
			)
		}
	}


});


ReactDOM.render(<Page />, document.getElementById('container'));
