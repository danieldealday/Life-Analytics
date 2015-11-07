var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var RankForm = React.createClass({
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
        <p class='heading'> Now, which of these areas do you want to improve the most?</p>

        <div class="form-body">
          <button id="financial" draggable="true" ondragstart={this.state.dragInitialize} class="button-imp button-imp-block">FINANCIAL</button>
          <button id="personal" draggable="true" ondragstart={this.state.dragInitialize} class="button-imp button-imp-block">PERSONAL</button>
          <button id="professional" draggable="true" ondragstart={this.state.dragInitialize} class="button-imp button-imp-block">PROFESSIONAL</button>

          <div class="tab-content">
            <div id="signup">
              <h1></h1>
              <form action="/" method="post">
                <div class="field-wrap">
                  <div id="rank1" class="dropped" ondrop={this.state.dropComplete} ondragover={this.state.allowDropStatus}>

                  </div>
                </div>

                <div class="field-wrap">
                  <div id="rank2" class="dropped" ondrop={this.state.dropComplete} ondragover={this.state.allowDropStatus}>

                  </div>
                </div>

                <div class="field-wrap">
                  <div id="rank3" class="dropped" ondrop={this.state.dropComplete} ondragover={this.state.allowDropStatus}>
                  </div>
                </div>
                <button class="next-button next-button-block" onClick={this.submitForm}>next</button>

              </form>
            </div>
            <div class="clear"></div>
              <button class="next-button next-button-block">next</button>
              <div class="clear"></div>
            </div>
          </div>
          <button type="submit" class="next">NEXT</button>
        </div>
    )
  }
});

ReactDOM.render(<RankForm />, document.getElementById('improvement'));
