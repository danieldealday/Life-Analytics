var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var rankForm = React.createClass({
  allowDropStatus: function (event) {
    event.preventDefault();
  	return false;
  },
  dragInitialize: function (event) {
    event.dataTransfer.effectAllowed='move';
    event.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    return true;
  },
  dropComplete: function (event) {
    event.preventDefault();
    var src = ev.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(src));
    event.stopPropagation();
    return false;
  },
  render: function () {
      <div class="form-body">
        <button id="drag" draggable="true" ondragstart={this.state.dragInitialize} class="button-imp button-imp-block"/>FINANCIAL</button>
        <button id="drag" draggable="true" ondragstart={this.state.dragInitialize} class="button-imp button-imp-block"/>PERSONAL</button>
        <button id="drag" draggable="true" ondragstart={this.state.dragInitialize} class="button-imp button-imp-block"/>PROFESSIONAL</button>

        <div class="tab-content">
          <div id="signup">
            <h1></h1>
            <form action="/" method="post">
              <div class="field-wrap">
                <div class="dropped" ondrop={this.state.dropComplete} ondragover={this.state.allowDropStatus}>

                </div>
              </div>

              <div class="field-wrap">
                <div class="dropped" ondrop={this.state.dropComplete} ondragover={this.state.allowDropStatus}>

                </div>
              </div>

              <div class="field-wrap">
                <div class="dropped" ondrop={this.state.dropComplete} ondragover={this.state.allowDropStatus}>
                </div>
              </div>
              <button class="next-button next-button-block"/>next</button>

            </form>
          </div>
          <div class="clear"></div>
            <!-- <button class="next-button next-button-block"/>next</button> -->
            <div class="clear"></div>
          </div>
        </div><!-- tab-content -->
        <!-- <button type="submit" class="next"/>NEXT</button> -->
    </div> <!-- /form -->
  }
});

// <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
// <script src="js/index.js"></script>

ReactDOM.render(<SignInPage />, document.getElementById('SignUp'));
