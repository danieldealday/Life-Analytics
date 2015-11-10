
var SignUpForm = React.createClass({
  render: function() {
    console.log('this is signup form');
    return (
        <div id="signup" className={(this.props.signUpStatus) ? 'tab active':'tab'}>
          <h1>Sign Up for Free</h1>
          <form action="/" method="post">
            <div className="top-row">
              <div className="field-wrap">
                <input type="text" name='firstName' required autoComplete="off" placeholder="First Name"/>
              </div>
              <div className="field-wrap">
                <input type="text" name='lastName' required autoComplete="off" placeholder="Last Name"/>
              </div>
            </div>
            <div className="field-wrap">
              <input type="email" name='emailAddress' required autoComplete="off" placeholder="Email Address"/>
            </div>
            <div className="field-wrap">
              <input type="password" name='password' required autoComplete="off" placeholder="Set A Password"/>
            </div>
            <button type="submit" onClick={this.props.demos} className="button button-block" >Get Started</button>
            </form>
        </div>
    )
  }
});
module.exports = SignUpForm;