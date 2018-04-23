import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
    <div id="team-main">
    <p className="team-p"><h1>Our team</h1>Donec egestas in massa id pellentesque. Morbi dignissim lacus non vehicula pellentesque. 
    Sed quis condimentum est. Nulla vitae justo sit amet erat tincidunt rutrum eget at justo. </p>
        <div className="container serv-scale">
          <div className="row team-row">
              <div className="col-sm-4"><div id="block-style"></div></div>
              <div className="col-sm-4"><div id="block-style"></div></div>
              <div className="col-sm-4"><div id="block-style"></div></div>
          </div>
      </div>
    </div>
    );
  }
}

export default Team;