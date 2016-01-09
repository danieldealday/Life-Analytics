var React = require('react');
var ReactDOM = require('react-dom');

var LoginForm = React.createClass({
  render: function() {
    return (
      <div>
        <div id="login" className={(this.props.loginStatus) ? 'tab active':'tab'}>
          <h1>Welcome Back!</h1>
            <form action="/" method="post">
              <div className="field-wrap">
                <input
                  ref="email"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email Address" />
              </div>
              <div className="field-wrap">
                <input
                  ref="password"
                  type="password"
                  required
                  autoComplete="off"
                  placeholder="Password" />
              </div>
              <p className="forgot">
                <a href="#">
                  Forgot Password?
                </a>
              </p>
              <button className="button button-block" onClick={this.props.findUser}>
                Log In
              </button>
            </form>
        </div>
      </div>
    )
  }
});

module.exports = LoginForm;
