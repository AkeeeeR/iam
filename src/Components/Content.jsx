import React, { Component } from 'react';
import MyCarousel from './MyCarousel.jsx';

class Content extends Component {
  render() {
    return (
    <div id="content-main">
        <div id="content-container" className="container">
            <div className="row content-row">
              <div className="col-sm-6 con-scale-view"><div id="left-block"><MyCarousel/></div></div>
              <div className="col-sm-6 con-scale-view"><div id="right-block"></div></div>
            </div>
        </div>
    </div>
    );
  }
}

export default Content;
