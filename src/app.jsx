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
      emailAddress: ''
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
    console.log('inside user created');
  	var firstName = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.firstName).value;
  	var lastName = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.lastName).value;
  	var email = ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.email).value;
    this.setState({
      emailAddress: ReactDOM.findDOMNode(this.refs.form.refs.signUp.refs.email).value
    });

    console.log(email);
    console.log("createUser", this.state.emailAddress);



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

      // specify contentType, if not it's URLENCODED query string...
      success: function(res){
        console.log('User Created!');
				this.setState({signUpStatus: false, loginStatus: false, questionnaireStatus: true});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });

 		event.preventDefault();

  },

	findUser: function(event) {
    event.preventDefault();
    var email = ReactDOM.findDOMNode(this.refs.form.refs.login.refs.email).value
    this.setState({
      emailAddress: email
    });



    console.log("findUser", this.state.emailAddress);



    var password = ReactDOM.findDOMNode(this.refs.form.refs.login.refs.password).value
    var userObject = {
      email: email,
      password: password
    }
    console.log(userObject);
    console.log('inside find user')
    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userObject),
      success: function(res){
        console.log('login works');
        // console.log(JSON.parse(res));
        this.setState({ 
          signUpStatus: false,
          loginStatus: false,
          questionnaireStatus: false,
          dashboardStatus: true
        });
      }.bind(this),
      error: function(xhr, status, error) {
        alert("Invalid email and/or password. Please try again."); 
      }
    }); // closes ajax
  },

	render: function(){
		if(!this.state.dashboardStatus && !this.state.questionnaireStatus) {
      return(
				<div>
					<SignInPage ref="form" findUser={this.findUser} emailAddress={this.state.emailAddress} signUpStatus={this.state.signUpStatus} loginStatus={this.state.loginStatus} clickLoginButton={this.clickLoginButton} clickSignUpButton={this.clickSignUpButton} createUser={this.createUser} />
				</div>
			)
		}
		else if(!!this.state.questionnaireStatus) {
			console.log('insideeeee questions');
			return <div>
								<Questionnaire emailAddress={this.state.emailAddress} />
						 </div>
		}
		else if(!!this.state.dashboardStatus) {
			// console.log("INSIDE EHRERERR");
			return(
				<div>
					<Dashboard emailAddress={this.state.emailAddress} />
				</div>
			)
		}
	}


});


ReactDOM.render(<Page />, document.getElementById('container'));
