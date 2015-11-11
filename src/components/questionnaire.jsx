var React = require('react');
var ReactDOM = require('react-dom');

var Questionnaire = React.createClass({
  // getInitialState: function () {
  //   return ({
  //     header: 'Now, which of these areas do you want to improve the most?',
  //     important: false,
  //     better: false,
  //     habits: false,
  //     rank1: 'notSelected',
  //     rank2: 'notSelected',
  //     rank3: 'notSelected',
  //     currentSelectedArea: null,
  //     currentSelectedRank: null,
  //     // currentForm: <ImportantForm submit={this.submitForm}/>
  //   });
  // },
  //
  // allowDropStatus: function (event) {
  //   event.preventDefault();
  // 	return false;
  // },
  // dragInitialize: function (event) {
  //   event.dataTransfer.effectAllowed='move';
  //   event.dataTransfer.setData("Text", event.target.getAttribute('id'));
  //   return true;
  // },
  // dropComplete: function (event) {
  //   event.preventDefault();
  //   var src = event.dataTransfer.getData("Text");
  //   event.target.appendChild(document.getElementById(src));
  //   event.stopPropagation();
  //   return false;
  // },
  // submitForm: function (event) {
  //   event.preventDefault();
  //   if (this.state.important === false) {
  //     this.setState({
  //       header: 'Which of these would you like to be awesome at?',
  //       important: true,
  //       currentForm: <BetterForm submit={this.submitForm}/>
  //     });
  //   }
  //   if (this.state.important === true && this.state.better === false) {
  //     this.setState({
  //       header: "That's a great place to start! Let's pick on a few things to work on.",
  //       better: true,
  //       currentForm: <HabitsForm submit={this.submitForm}/>
  //     });
  //   }
  // },
  render: function () {
    return (
      <div>

        <header>
          <nav id='nav'>
            <h2 className="logo">QUESTIONNAIRE</h2>

            <div className="space"></div>

            <ul>
              <a className="selected" href="#"><li className="active">HOME</li></a>
              <a href="#"><li>ABOUT</li></a>
              <a href="#"><li>HABITS</li></a>
              <a href="#"><li>CONTACT</li></a>
            </ul>
          </nav>
        </header>

        <p className='heading'>What do you want to make a habit?</p>
        <input id="question"></input>
        <button className="button button-block" onClick={this.props.findUser}>Submit</button>

        <footer>
            <nav id='footer'>
              <h2 className="logo-foot">LIFE ANALYTICS</h2>
              <div className="space"></div>
              <ul>
                <a className="selected" href="#"><li className="active">HOME</li></a>
                <a href="#"><li>ABOUT</li></a>
                <a href="#"><li>HABITS</li></a>
                <a href="#"><li>CONTACT</li></a>
              </ul>
            </nav>
        </footer>

      </div>
    )
  }
});
module.exports = Questionnaire;
