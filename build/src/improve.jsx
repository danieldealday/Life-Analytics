var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var RankForm = React.createClass({
  getInitialState: function () {
    return {

    };
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
  submitForm: function () {
    var rank1 = document.getElementById('rank1').value;
    var rank2 = document.getElementById('rank2').value;
    var rank3 = document.getElementById('rank3').value;
  },
  render: function () {
    return (
      <div>
        <p className='heading'> Now, which of these areas do you want to improve the most?</p>

        <div className="form-body">
          <button id="financial" draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">FINANCIAL</button>
          <button id="personal" draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PERSONAL</button>
          <button id="professional" draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PROFESSIONAL</button>

          <div className="tab-content">
            <div id="signup">
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
                <button className="next-button next-button-block" onClick={this.submitForm}>next</button>

              </form>
            </div>
              <div className="clear"></div>
              <div className="clear"></div>
            </div>
          </div>
          <button type="submit" className="next">NEXT</button>
        </div>
    )
  }
});
ReactDOM.render(<RankForm />, document.getElementById('improvement'));
