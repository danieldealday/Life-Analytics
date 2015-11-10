var Graph = React.createClass({
  getInitialState: function() {
    return {
      r1: false,
      r2: false,
      r3: false,
      r4: false,
      r5: false,
      g1: false,
      g2: false,
      g3: false,
      g4: false,
      g5: false,
      b1: false,
      b2: false,
      b3: false,
      b4: false,
      b5: false,
      rCount: 0,
      gCount: 0,
      bCount: 0
    }
  },
  updateGraph: function(input) {
    if (input == 'r') {
      console.log(this.state.rCount);
      if (this.state.rCount > 5) {
        var holderObj = {};
        for (var i = 0; i < 5; i++){
          var place = 'r'+ (i + 1);
          holderObj[place] = false;
        holderObj.rCount = 0;
        this.setState(holderObj);
        }
      } else {
        var holderObj = {};
        for (var i = 0; i < this.state.rCount + 1; i++){
          var place = 'r'+ (i + 1);
          holderObj[place] = true;
        }
        holderObj.rCount = ++this.state.rCount;
        this.setState(holderObj);
      }
  }
  if (input == 'b') {
    console.log(this.state.rCount);
    if (this.state.bCount > 5) {
      var holderObj = {};
      for (var i = 0; i < 5; i++){
        var place = 'b'+ (i + 1);
        holderObj[place] = false;
      holderObj.bCount = 0;
      this.setState(holderObj);
      }
    } else {
      var holderObj = {};
      for (var i = 0; i < this.state.bCount + 1; i++){
        var place = 'b'+ (i + 1);
        holderObj[place] = true;
      }
      holderObj.bCount = ++this.state.bCount;
      this.setState(holderObj);
    }
}
​
if (input == 'g') {
  console.log(this.state.rCount);
  if (this.state.gCount > 5) {
    var holderObj = {};
    for (var i = 0; i < 5; i++){
      var place = 'g'+ (i + 1);
      holderObj[place] = false;
    holderObj.gCount = 0;
    this.setState(holderObj);
    }
  } else {
    var holderObj = {};
    for (var i = 0; i < this.state.gCount + 1; i++){
      var place = 'g'+ (i + 1);
      holderObj[place] = true;
    }
    holderObj.gCount = ++this.state.gCount;
    this.setState(holderObj);
  }
}
  },
  render: function () {
    var style1 = {
      position: 'absolute',
      float:'left',
      display: 'block',
      'zIndex': 1,
    };
​
    var style2 = {
      position: 'absolute',
      'zIndex': 2
    };
​
    var stuffs = [];
    var valuesArr = ['r1','r2','r3','r4','r5','g1','g2','g3','g4','g5','b1','b2','b3','b4','b5'];
​
    for (var i = 0; i < 15; i++) {
      var fileName = './images/stat-' + valuesArr[i][0] + '-' + valuesArr[i][1] + '.png';
      if (this.state[valuesArr[i]] === true) {
        stuffs.push(<img onClick={this.updateGraph} id={valuesArr[i]} src={fileName} style={style1}/>);
      }
    }
​
    return (
    <div>
    <button onClick={this.updateGraph.bind(this,'r')}>Update Red</button><button onClick={this.updateGraph.bind(this,'g')}>Update Green</button><button onClick={this.updateGraph.bind(this,'b')}>Update Blue</button>
    <div className="graph">
      <p className='heading'>FINANCIAL</p>
      <div>
        <img src="./images/graph-blank.png" alt="" style={style2}/>
        {stuffs}
      </div>
    </div>
  </div>
    )
  }
});
module.exports = Graph;

