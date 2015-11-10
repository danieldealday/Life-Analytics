var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Questionnaire = require('./../components/questionnaire');
var LogInForm = require('./../components/logInForm');
var SignInPage = require('./../components/signInPage');
var SignUpForm = require('./../components/signUpForm');
var Graph = require('./../components/graph')

console.log('app.jsx is working!');

// var ImportantForm = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <div className="form-body">
//           <CategoriesButtons/>
//           <QForm submit={this.props.submit}/>
//         </div>
//       </div>
//     )
//   }
// });

// var BetterForm = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <div className="form-body">
//           <CategoriesButtons/>
//           <QForm submit={this.props.submit}/>
//         </div>
//       </div>
//     )
//   }
// });

// var HabitsForm = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <div className="form-body">
//           <CategoriesButtons/>
//           <div className="tab-content">
//             <div>
//               <h1></h1>
//               <form action="/" method="post">
//                 <div className="field-wrap">
//                   <input type="text" className="habits" placeholder="FINANCIAL habits..."></input>
//                   <input type="text" className="habits" placeholder="PERSONAL habits..."></input>
//                   <input type="text" className="habits" placeholder="PROFESSIONAL habits..."></input>
//                   <input type="text" className="habits" placeholder="FINANCIAL habits..."></input>
//                   <input type="text" className="habits" placeholder="PERSONAL habits..."></input>
//                   <input type="text" className="habits" placeholder="PROFESSIONAL habits..."></input>
//                   <input type="text" className="habits" placeholder="FINANCIAL habits..."></input>
//                   <input type="text" className="habits" placeholder="PERSONAL habits..."></input>
//                   <input type="text" className="habits" placeholder="PROFESSIONAL habits..."></input>
//                 </div><br></br>
//                 <button className="next-button next-button-block" onClick={this.props.submit}>next</button>
//               </form>
//             </div>
//               <div className="clear"></div>
//               <div className="clear"></div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// });

// var CategoriesButtons = React.createClass({
//     render: function () {
//       var newButtons = {
//         notSelected: '',
//         financial: <button onClick={this.selectRank} id="rank1"  draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">FINANCIAL</button>,
//         personal: <button onClick={this.selectRank} id="rank1"  draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PERSONAL</button>,
//         professional: <button onClick={this.selectRank} id="rank1"  draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PROFESSIONAL</button>
//       };
//       return (
//         <div>
//           <button id="financial" onClick={this.selectArea} draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">FINANCIAL</button>
//           <button id="personal" onClick={this.selectArea} draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PERSONAL</button>
//           <button id="professional" onClick={this.selectArea} draggable="true" ondragstart={this.dragInitialize} className="button-imp button-imp-block">PROFESSIONAL</button>
//         </div>
//       )
//     }
// });

// var QForm =React.createClass({
//   render: function () {
//     return (
//       <div>
//         <div className="tab-content">
//           <div>
//             <h1></h1>
//             <form action="/" method="post">
//               <div className="field-wrap">
//                 <div id="rank1" className="dropped" ondrop={this.dropComplete} ondragover={this.allowDropStatus}>
//                 </div>
//               </div>
//               <div className="field-wrap">
//                 <div id="rank2" className="dropped" ondrop={this.dropComplete} ondragover={this.allowDropStatus}>
//                 </div>
//               </div>
//               <div className="field-wrap">
//                 <div id="rank3" className="dropped" ondrop={this.dropComplete} ondragover={this.allowDropStatus}>
//                 </div>
//               </div>
//               <button className="next-button next-button-block" onClick={this.props.submit}>next</button>
//             </form>
//           </div>
//           <div className="clear"></div>
//           <div className="clear"></div>
//         </div>
//       </div>
//     )
//   }
// });


ReactDOM.render(<SignInPage />, document.getElementById('SignUp'));
