var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var circle = require('./circle.js');



var Dashboard = React.createClass({
  componentWillReceiveProps: function(nextProps) {
    var streak = nextProps.streak;

    $(document).ready(function() {

        if(streak > 25) {
          var ctx = circle.init();
          var percentage = streak * 4;
          var anim = new circle.PercentAnimation(ctx, percentage);
          anim.startAnimation();

          var ctx2 = circle.init2();
          var percentage2 = streak * 4 - 100;
          var anim2 = new circle.PercentAnimation2(ctx2, percentage2);
          anim2.startAnimation();
        }
        else {
          var ctx = circle.init();
          var percentage = streak * 4;
          var anim = new circle.PercentAnimation(ctx, percentage);
          anim.startAnimation();
          var ctx2 = circle.init2();
          var percentage2 = 0;
          var anim2 = new circle.PercentAnimation2(ctx2, percentage2);
          anim2.startAnimation();
        }
    });

  },
  componentDidMount: function() {
    var streak = this.props.streak;

    $(document).ready(function() {

        if(streak > 25) {
          var ctx = circle.init();
          var percentage = streak * 4;
          var anim = new circle.PercentAnimation(ctx, percentage);
          anim.startAnimation();

          var ctx2 = circle.init2();
          var percentage2 = streak * 4 - 100;
          var anim2 = new circle.PercentAnimation2(ctx2, percentage2);
          anim2.startAnimation();
        }
        else {
          var ctx = circle.init();
          var percentage = streak * 4;
          var anim = new circle.PercentAnimation(ctx, percentage);
          anim.startAnimation();
          var ctx2 = circle.init2();
          var percentage2 = 0;
          var anim2 = new circle.PercentAnimation2(ctx2, percentage2);
          anim2.startAnimation();
        }
    });
  },
  render: function() {
    console.log("inside Dashboard ", this.props.goal);
    console.log("inside Dashboard ", this.props.streak);
    return (
      <div id="dashboard">
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
        <p className='heading'>
          Did You Achieve Your Goal Today?
        </p>
        <div className="button-container">
          <button className="button button-block" id='no-btn' onClick={this.props.resetStreak}>No</button>
          <button className="button button-block" id='yes-btn' onClick={this.props.increaseStreak}>Yes</button>
        </div>
        <div className="large-graph">
          <p className='heading'>
            Your current goal for 25 days: {this.props.goal}
          </p>
          <p className='heading'>
            Streak: {this.props.streak}
          </p>
          <div className="percentage">
            <canvas id="draw" height="800" width="800" />
          </div>
          <div className="percentage2">
            <canvas id="draw2" height="800" width="800" />
          </div>
        </div>
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
        <script src="js/circle.js"></script>
      </div>
    )
  }
});

module.exports = Dashboard;
