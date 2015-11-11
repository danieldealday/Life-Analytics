var React = require('react');
var ReactDOM = require('react-dom');

var Dashboard = React.createClass({
  render: function() {
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
              <div className="large-graph">
                <img src="./images/Flat-Radial-Graph-Free-PSD.png" alt="" />
              </div>

              <div className="clear"></div>

              <div className="circle circle--mojito">
                <div className="circle__content">
                  <h3 className="circle__content__headline">2</h3>
                  <p></p>
                </div>
              </div>

              <div className="circle circle--mojito">
                <div className="circle__content">
                  <h3 className="circle__content__headline">6</h3>
                  <p></p>
                </div>
              </div>

              <div className="circle circle--mojito">
                <div className="circle__content">
                  <h3 className="circle__content__headline">6</h3>
                  <p></p>
                </div>
              </div>
              <div className="tab-content">
                <div id="signup">
                  <h1></h1>
                  <form action="/" method="post">

                  </form>
                </div>
                <div className="clear"></div>
                  <div className="clear"></div>
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
      </div>
          )
  }
});

module.exports = Dashboard;
  //
  // <div>
  //
  //   <header>
  //     <nav id='nav'>
  //       <h2 className="logo">LIFE ANALYTICS</h2>
  //
  //       <div className="space"></div>
  //
  //       <ul>
  //         <a className="selected" href="#"><li className="active">HOME</li></a>
  //         <a href="#"><li>ABOUT</li></a>
  //         <a href="#"><li>HABITS</li></a>
  //         <a href="#"><li>CONTACT</li></a>
  //       </ul>
  //     </nav>
  //   </header>
  //
  //   <p className='heading'> Welcome to your Dashboard.</p>
  //
  //   <div className="form-body">
  //
  //     <div className="large-graph">
  //       <img src="./images/Flat-Radial-Graph-Free-PSD.png" alt="" />
  //     </div>
  //
  //     <div className="graph">
  //       <p className='heading'>PROFESSIONAL</p>
  //       <img src="./images/graph-blank.png" alt="" />
  //     </div>
  //
  //     <div className="graph">
  //       <p className='heading'>FINANCIAL</p>
  //       <img src="./images/graph-full.png" alt="" />
  //     </div>
  //
  //     <div className="graph-right">
  //       <p className='heading'>PERSONAL</p>
  //       <img src="./images/graph-ok.png" alt="" />
  //     </div>
  //
  //     <div className="clear"></div>
  //
  //     <div className="circle circle--mojito">
  //       <div className="circle__content">
  //         <h3 className="circle__content__headline">2</h3>
  //         <p></p>
  //       </div>
  //     </div>
  //
  //     <div className="circle circle--mojito">
  //       <div className="circle__content">
  //         <h3 className="circle__content__headline">6</h3>
  //         <p></p>
  //       </div>
  //     </div>
  //
  //     <div className="circle circle--mojito">
  //       <div className="circle__content">
  //         <h3 className="circle__content__headline">6</h3>
  //         <p></p>
  //       </div>
  //     </div>
  //
  //       <div className="tab-content">
  //         <div id="signup">
  //           <h1></h1>
  //           <form action="/" method="post">
  //
  //
  //
  //           </form>
  //         </div>
  //         <div className="clear"></div>
  //           <div className="clear"></div>
  //         </div>
  //       </div>
  //   </div>
  //
  //   <footer>
  //       <nav id='footer'>
  //         <h2 className="logo-foot">LIFE ANALYTICS</h2>
  //         <div className="space"></div>
  //         <ul>
  //           <a className="selected" href="#"><li className="active">HOME</li></a>
  //           <a href="#"><li>ABOUT</li></a>
  //           <a href="#"><li>HABITS</li></a>
  //           <a href="#"><li>CONTACT</li></a>
  //         </ul>
  //       </nav>
  //   </footer>
  //   <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  //   <script src="js/index.js"></script>
  // </div>
