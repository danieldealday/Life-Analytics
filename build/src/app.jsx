var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

console.log('app.jsx is working!');

var Life = React.createClass({
  render: function () {
    return <div>THIS IS THE LIFE DIV</div>
  }
});

var SignInPage = React.createClass({
  getInitialState: function () {
    return {
      signUpStatus: true,
      loginStatus: false
    }
  },
  clickLoginButton: function(event) {
    event.preventDefault();
    console.log('clicked login button');
    this.setState({signUpStatus: false, loginStatus: true});
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
    var signUp = <SignUpForm signUpStatus={this.state.signUpStatus} createUser = {this.createUser}/>;
    var login = <LoginForm loginStatus={this.state.loginStatus} createUser = {this.createUser}/>;

    console.log(signUp);

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
});

var LoginForm = React.createClass({
  render: function() {
    return (
      <div>
        <div id="login" className={(this.props.loginStatus) ? 'tab active':'tab'}>
          <h1>Welcome Back!</h1>
          <form action="/" method="post">
            <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email"required autoComplete="off"/>
          </div>
          <div className="field-wrap">
            <label>
              Password<span className="req">*</span>
            </label>
            <input type="password" required autoComplete="off"/>
          </div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          <button className="button button-block">Log In</button>
        </form>
        </div>
      </div>
    )
  }
});

var SignUpForm = React.createClass({
  render: function() {
    console.log('this is signup form');
    return (
        <div id="signup" className={(this.props.signUpStatus) ? 'tab active':'tab'}>
          <h1>Sign Up for Free</h1>
          <form action="/" method="post">
            <div className="top-row">
              <div className="field-wrap">
                <label>
                  First Name<span className="req">*</span>
                </label>
                <input type="text" name='firstName' required autoComplete="off" />
              </div>
              <div className="field-wrap">
                <label>
                  Last Name<span className="req">*</span>
                </label>
                <input type="text" name='lastName' required autoComplete="off" />
              </div>
            </div>
            <div className="field-wrap">
              <label>
                Email Address<span className="req">*</span>
              </label>
              <input type="email" name='emailAddress' required autoComplete="off" />
            </div>
            <div className="field-wrap">
              <label>
                Set A Password<span className="req">*</span>
              </label>
              <input type="password" name='password' required autoComplete="off" />
            </div>
            <button type="submit" onClick={this.createUser} className="button button-block">Get Started</button>
            </form>
        </div>
    )
  }
});

ReactDOM.render(<SignInPage />, document.getElementById('SignUp'));
