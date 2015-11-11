var React = require('react');
var ReactDOM = require('react-dom');

var Questionnaire = React.createClass({

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
