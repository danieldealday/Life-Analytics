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
			dashboardStatus: false,
		}
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
    console.log('inside user created')
  	var firstName = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.firstName).value
  	var lastName = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.lastName).value
  	var email = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.email).value
  	var password = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.password).value
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
				this.setState({signUpStatus: false, loginStatus: false, dashboardStatus: true});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });

 		event.preventDefault();

  },

	render: function(){
		if(this.state.dashboardStatus === false) {
			return(
				<div>
					<SignInPage ref="form" signUpStatus={this.state.signUpStatus} loginStatus={this.state.loginStatus} clickLoginButton={this.clickLoginButton} clickSignUpButton={this.clickSignUpButton} createUser={this.createUser} />
				</div>
			)
		}
		if(this.state.dashboardStatus === true) {
			console.log("INSIDE EHRERERR");
			return(
				<div>
					<Dashboard />
				</div>
			)
		}
	}


});


ReactDOM.render(<Page />, document.getElementById('container'));
