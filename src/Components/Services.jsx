import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
    <div id="services-main">
    <p className="services-p"><h1>Our services</h1>Donec egestas in massa id pellentesque. Morbi dignissim lacus non vehicula pellentesque. 
    Sed quis condimentum est. Nulla vitae justo sit amet erat tincidunt rutrum eget at justo. Sed quis tellus tempor, suscipit est a, elementum mauris. 
    Quisque nec ipsum tempor, viverra massa vel, vehicula nunc.</p>
        <div className="container serv-scale">
          <div className="row services-row">
              <div className="col-sm-4"><div id="serv-block-style"></div></div>
              <div className="col-sm-4"><div id="serv-block-style"></div></div>
              <div className="col-sm-4"><div id="serv-block-style"></div></div>
          </div>
      </div>
    </div>
    );
  }
}

export default Services;