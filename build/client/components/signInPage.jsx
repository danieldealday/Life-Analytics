
var SignInPage = React.createClass({
  getInitialState: function () {
    return {
      signUpStatus: true,
      loginStatus: false,
      demo: false
    }
  },
  demoSignIn: function (event) {
    event.preventDefault();
    this.setState({
      demo: true
    });
  },
  clickLoginButton: function(event) {
    event.preventDefault();
    console.log('clicked login button');
    this.setState({
      signUpStatus: false,
      loginStatus: true
    });
  },
  clickSignUpButton: function(event) {
    event.preventDefault();
    console.log('clicked signup button');
    this.setState({signUpStatus: true, loginStatus: false});
  },
  createUser: function(event) {
    event.preventDefault();
    console.log('User Created!');
  },
  render: function() {
    var signUp = <SignUpForm signUpStatus={this.state.signUpStatus} createUser = {this.createUser} demos={this.demoSignIn}/>;
    var login = <LoginForm loginStatus={this.state.loginStatus} createUser = {this.createUser} demos={this.demoSignIn}/>;

    console.log(signUp);

    if(this.state.demo === false) {
      return (
        <div>
          <div className="form">
            <ul className="tab-group">
              <li onClick={this.clickSignUpButton} className={(this.state.signUpStatus) ? 'tab active':'tab'}><a href="#signup">Sign Up</a></li>
              <li onClick={this.clickLoginButton} className={(this.state.loginStatus) ? 'tab active':'tab'}><a href="#login">Log In</a></li>
            </ul>
            <div className="tab-content">
            <SignUpForm signUpStatus={this.state.signUpStatus} createUser = {this.createUser} />
            </div>
            {(this.state.signUpStatus) ? signUp:login}
            <script src="js/index.js"></script>
        </div>

      </div>
      )
    }
    // else if (this.state.demo === true) {
    //   return (
    //     <div>
    //       <Questionnaire />
    //     </div>
    //   )
    // }

  }
});

module.exports = SignInPage;