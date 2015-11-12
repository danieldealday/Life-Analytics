var React = require('react');
var ReactDOM = require('react-dom');

var Questionnaire = React.createClass({

  render: function () {
    return (
      <div>

        <header>
          <nav id='nav'>
            <h2 className="logo">LIFE ANALYTICS</h2>

            <div className="space"></div>

            <ul>
              <a className="selected" href="#"><li className="active">HOME</li></a>
              <a href="#"><li>ABOUT</li></a>
              <a href="#"><li>HABITS</li></a>
              <a href="#"><li>CONTACT</li></a>
            </ul>
          </nav>
        </header>
        <div className="large-graph">
        <p className='heading'>What do you want to make a habit?</p>

          <form>
            <div className="field-wrap">
              <input ref="goal" id="question"></input>
            </div>
            <button className="button button-block" onClick={this.props.gotQuestion}>Submit</button>
          </form>

        </div>
        <footer>
            <nav id='footer'>
              <h2 className="logo-foot">LIFE ANALYTICS</h2>
              <div className="space"></div>
              <ul>
                <a classN   ame="selected" href="#"><li className="active">HOME</li></a>
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
