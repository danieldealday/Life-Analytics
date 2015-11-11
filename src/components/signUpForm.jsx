var React = require('react');
var ReactDOM = require('react-dom');

var SignUpForm = React.createClass({
  render: function() {
    console.log('this is signup form');
    return (
        <div id="signup" className={(this.props.signUpStatus) ? 'tab active':'tab'}>
          <h1>Sign Up for Free</h1>
          <form>
            <div className="top-row">
              <div className="field-wrap">
                <input ref='firstName' type="text" required autoComplete="off" placeholder="First Name"/>
              </div>
              <div className="field-wrap">
                <input ref='lastName' type="text" required autoComplete="off" placeholder="Last Name"/>
              </div>
            </div>
            <div className="field-wrap">
              <input ref='email' type="email" required autoComplete="off" placeholder="Email Address"/>
            </div>
            <div className="field-wrap">
              <input ref='password' type="password"  required autoComplete="off" placeholder="Set A Password"/>
            </div>
            <button type="submit" onClick={this.props.createUser} className="button button-block" >Get Started</button>
            </form>
        </div>
    )
  }
});
module.exports = SignUpForm;