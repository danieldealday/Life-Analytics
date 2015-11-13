var $ = require('jquery');

module.exports = {
	init: function() {
        var c = document.getElementById('draw');
        return c.getContext('2d');
    },
    init2: function() {
        var c = document.getElementById('draw2');
        return c.getContext('2d');
    },

   
    PercentAnimation: function(ctx, percent) {
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
        	function clear(ctx) {
        		ctx.clearRect(0, 0, 800, 800);
    		}
            var self = this;
            clear(this.ctx);
            this._interval = setInterval(function() {
                self.drawAnimation();
            }, 10);
        }.bind(this);

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
        	function clear(ctx) {
		        ctx.clearRect(0, 0, 800, 800);
		    }
            if (this._animationOffset < 0) {
                this._animationOffset = 0;
            }
            clear(this.ctx);
            this.drawArc();
            this._animationOffset -= this.speed;
            if (this._animationOffset < 0) {
                clearInterval(this._interval);
            }
        }.bind(this);

        this.drawText = function() {
            ctx.fillStyle = "#ddd";
            ctx.font = "bold 32px Titillium Web";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillText(' ' + this.percent + '%', this.x, this.y);
        };

    },

    PercentAnimation2: function(ctx, percent) {
        this.ctx = ctx;
        this.speed = 4;
        this.x = 500;
        this.y = 500;
        this.radius = 250;

        this.setPercent = function(percent) {
            this.degrees = 360 * (percent / 100);
            this._animationOffset = this.degrees;
            this.percent = percent;
        };

        // Part of initialization
        this.setPercent(percent);

        this.startAnimation = function() {
        	function clear(ctx) {
		        ctx.clearRect(0, 0, 800, 800);
		    }
            var self = this;
            clear(this.ctx);
            this._interval = setInterval(function() {
                self.drawAnimation();
            }, 10);
        };

        this.drawArc = function() {
            var startDegrees = 40;
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
            ctx.strokeStyle = 'rgb(255, 255, 0)';
            ctx.lineWidth = 10;
        };

        this.drawAnimation = function() {
        	function clear(ctx) {
		        ctx.clearRect(0, 0, 800, 800);
		    }
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
            ctx.fillText(' ', this.x, this.y);
        };

    }
};