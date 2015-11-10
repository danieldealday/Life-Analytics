var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

console.log('app.jsx is working!');

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
    else if (this.state.demo === true) {
      return (
        <div>
          <Questionnaire />
        </div>
      )
    }

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
              <input type="email" required autoComplete="off" placeholder="Email Address"/>
            </div>
          <div className="field-wrap">
            <input type="password" required autoComplete="off" placeholder="Password"/>
          </div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          <button className="button button-block" onClick={this.props.demos}>Log In</button>
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

var Questionnaire = React.createClass({
  getInitialState: function () {
    return ({
      header: 'Now, which of these areas do you want to improve the most?',
      important: false,
      better: false,
      habits: false,
      rank1: 'notSelected',
      rank2: 'notSelected',
      rank3: 'notSelected',
      currentSelectedArea: null,
      currentSelectedRank: null,
      currentForm: <ImportantForm submit={this.submitForm}/>
    });
  },

  allowDropStatus: function (event) {
    event.preventDefault();
  	return false;
  },
  dragInitialize: function (event) {
    event.dataTransfer.effectAllowed='move';
    event.dataTransfer.setData("Text", event.target.getAttribute('id'));
    return true;
  },
  dropComplete: function (event) {
    event.preventDefault();
    var src = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(src));
    event.stopPropagation();
    return false;
  },
  submitForm: function (event) {
    event.preventDefault();
    if (this.state.important === false) {
      this.setState({
        header: 'Which of these would you like to be awesome at?',
        important: true,
        currentForm: <BetterForm submit={this.submitForm}/>
      });
    }
    if (this.state.important === true && this.state.better === false) {
      this.setState({
        header: "That's a great place to start! Let's pick on a few things to work on.",
        better: true,
        currentForm: <HabitsForm submit={this.submitForm}/>
      });
    }
  },
  render: function () {
    return (
      <div>
        <p className='heading'>{this.state.header}</p>
        {this.state.currentForm}
      </div>
    )
  }
});

var ImportantForm = React.createClass({
  render: function () {
    return (
      <div>
        <div className="form-body">
          <CategoriesButtons/>
          <QForm submit={this.props.submit}/>
        </div>
      </div>
    )
  }
});

var BetterForm = React.createClass({
  render: function () {
    return (
      <div>
        <div className="form-body">
          <CategoriesButtons/>
          <QForm submit={this.props.submit}/>
        </div>
      </div>
    )
  }
});

var HabitsForm = React.createClass({
  render: function () {
    return (
      <div>
        <div className="form-body">
          <CategoriesButtons/>
          <div className="tab-content">
            <div>
              <h1></h1>
              <form action="/" method="post">
                <div className="field-wrap">
                  <input type="text" className="habits" placeholder="FINANCIAL habits..."></input>
                  <input type="text" className="habits" placeholder="PERSONAL habits..."></input>
                  <input type="text" className="habits" placeholder="PROFESSIONAL habits..."></input>
                  <input type="text" className="habits" placeholder="FINANCIAL habits..."></input>
                  <input type="text" className="habits" placeholder="PERSONAL habits..."></input>
                  <input type="text" className="habits" placeholder="PROFESSIONAL habits..."></input>
                  <input type="text" className="habits" placeholder="FINANCIAL habits..."></input>
                  <input type="text" className="habits" placeholder="PERSONAL habits..."></input>
                  <input type="text" className="habits" placeholder="PROFESSIONAL habits..."></input>
                </div><br></br>
                <button className="next-button next-button-block" onClick={this.props.submit}>next</button>
              </form>
            </div>
              <div className="clear"></div>
              <div className="clear"></div>
          </div>
        </div>
      </div>
    )
  }
});

var CategoriesButtons = React.createClass({
    render: function () {
      var newButtons = {
        notSelected: '',
        financial: <button onClick={this.selectRank} id="rank1"  draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">FINANCIAL</button>,
        personal: <button onClick={this.selectRank} id="rank1"  draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PERSONAL</button>,
        professional: <button onClick={this.selectRank} id="rank1"  draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PROFESSIONAL</button>
      };
      return (
        <div>
          <button id="financial" onClick={this.selectArea} draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">FINANCIAL</button>
          <button id="personal" onClick={this.selectArea} draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PERSONAL</button>
          <button id="professional" onClick={this.selectArea} draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PROFESSIONAL</button>
        </div>
      )
    }
});

var QForm =React.createClass({
  render: function () {
    return (
      <div>
        <div className="tab-content">
          <div>
            <h1></h1>
            <form action="/" method="post">
              <div className="field-wrap">
                <div id="rank1" className="dropped" ondrop={this.dropComplete} ondragover={this.allowDropStatus}>
                </div>
              </div>
              <div className="field-wrap">
                <div id="rank2" className="dropped" ondrop={this.dropComplete} ondragover={this.allowDropStatus}>
                </div>
              </div>
              <div className="field-wrap">
                <div id="rank3" className="dropped" ondrop={this.dropComplete} ondragover={this.allowDropStatus}>
                </div>
              </div>
              <button className="next-button next-button-block" onClick={this.props.submit}>next</button>
            </form>
          </div>
          <div className="clear"></div>
          <div className="clear"></div>
        </div>
      </div>
    )
  }
});



ReactDOM.render(<SignInPage />, document.getElementById('SignUp'));
