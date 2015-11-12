var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');



var Dashboard = React.createClass({
  componentWillReceiveProps: function() {
    var streak = this.props.streak;
    console.log(streak);
    function init() {
        var c = document.getElementById('draw');
        return c.getContext('2d');
    }

    function clear(ctx) {
        ctx.clearRect(0, 0, 800, 800);
    }
    function PercentAnimation(ctx, percent) {
        this.ctx = ctx;
        this.speed = 4;
        this.x = 400;
        this.y = 400;
        this.radius = 200;

        this.setPercent = function(percent) {
            this.degrees = 360 * (percent / 100);
            this._animationOffset = this.degrees;
            this.percent = percent;
        };

        // Part of initialization
        this.setPercent(percent);

        this.startAnimation = function() {
            var self = this;
            clear(this.ctx);
            this._interval = setInterval(function() {
                self.drawAnimation();
            }, 10);
        };

        this.drawArc = function() {
            var startDegrees = -140;
            var endDegrees = startDegrees + this.degrees - this._animationOffset;
            // Degrees to radians
            var startAngle = startDegrees / 180 * Math.PI;
            var endAngle = endDegrees / 180 * Math.PI;
            // Draw arc
            this.setLineStyles();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
            ctx.stroke();
            this.drawText();
        };

        this.setLineStyles = function() {
            ctx.strokeStyle = 'rgb(26, 177, 136)';
            ctx.lineWidth = 10;
        };

        this.drawAnimation = function() {
            if (this._animationOffset < 0) {
                this._animationOffset = 0;
            }
            clear(this.ctx);
            this.drawArc();
            this._animationOffset -= this.speed;
            if (this._animationOffset < 0) {
                clearInterval(this._interval);
            }
        };

        this.drawText = function() {
            ctx.fillStyle = "#ddd";
            ctx.font = "bold 32px Titillium Web";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillText(' ' + this.percent + '%', this.x, this.y);
        };

    }

    /**
     * Test PercentageAnimation
     */
    $(document).ready(function() {
        var ctx = init();
        var percentage = streak * 4;
        var anim = new PercentAnimation(ctx, percentage);
        anim.startAnimation();

        // $('#test-form').submit(function(e) {
        //     e.preventDefault();
        //     var percent = Math.floor(Math.random() * 101);
        //     anim.setPercent(percent);
        //     anim.startAnimation();
        // });
    });

  },
  componentDidMount: function() {
    var streak = this.props.streak;
    console.log(streak);
    function init() {
        var c = document.getElementById('draw');
        return c.getContext('2d');
    }

    function clear(ctx) {
        ctx.clearRect(0, 0, 800, 800);
    }
    function PercentAnimation(ctx, percent) {
        this.ctx = ctx;
        this.speed = 4;
        this.x = 400;
        this.y = 400;
        this.radius = 200;

        this.setPercent = function(percent) {
            this.degrees = 360 * (percent / 100);
            this._animationOffset = this.degrees;
            this.percent = percent;
        };

        // Part of initialization
        this.setPercent(percent);

        this.startAnimation = function() {
            var self = this;
            clear(this.ctx);
            this._interval = setInterval(function() {
                self.drawAnimation();
            }, 10);
        };

        this.drawArc = function() {
            var startDegrees = -140;
            var endDegrees = startDegrees + this.degrees - this._animationOffset;
            // Degrees to radians
            var startAngle = startDegrees / 180 * Math.PI;
            var endAngle = endDegrees / 180 * Math.PI;
            // Draw arc
            this.setLineStyles();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
            ctx.stroke();
            this.drawText();
        };

        this.setLineStyles = function() {
            ctx.strokeStyle = 'rgb(26, 177, 136)';
            ctx.lineWidth = 10;
        };

        this.drawAnimation = function() {
            if (this._animationOffset < 0) {
                this._animationOffset = 0;
            }
            clear(this.ctx);
            this.drawArc();
            this._animationOffset -= this.speed;
            if (this._animationOffset < 0) {
                clearInterval(this._interval);
            }
        };

        this.drawText = function() {
            ctx.fillStyle = "#ddd";
            ctx.font = "bold 32px Titillium Web";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillText(' ' + this.percent + '%', this.x, this.y);
        };

    }

    /**
     * Test PercentageAnimation
     */
    $(document).ready(function() {
        var ctx = init();
        var percentage = streak * 4;
        var anim = new PercentAnimation(ctx, percentage);
        anim.startAnimation();

        // $('#test-form').submit(function(e) {
        //     e.preventDefault();
        //     var percent = Math.floor(Math.random() * 101);
        //     anim.setPercent(percent);
        //     anim.startAnimation();
        // });
    });
  },
  render: function() {
    console.log("inside Dashboard ", this.props.goal);
    console.log("inside Dashboard ", this.props.streak);
    return(
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
        <p className='heading'> Welcome to your Dashboard.</p>

              <div className="button-container">
                <button className="button button-block" id='no-btn' onClick={this.props.resetStreak}>No</button>
                <button className="button button-block" id='yes-btn' onClick={this.props.increaseStreak}>Yes</button>
              </div>
              <div className="large-graph">
                <p className='heading'>Your current goal is: {this.props.goal}</p>
                <div className="percentage">
                  <canvas id="draw" height="800" width="800"></canvas>
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
