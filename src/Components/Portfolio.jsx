import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
    <div id="portfolio-main">
    <p className="portfolio-p"><h1>Portfolio</h1><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla id metus et vehicula. Suspendisse potenti.</p>
      <div className="container portfolio-container">
          <div className="row portfolio-row">
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
          </div>
          <div className="row portfolio-row">
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
              <div className="col-sm-3 scale-view"><div id="portfolio-block-style"></div></div>
          </div>
      </div>
    </div>
    );
  }
}

export default Portfolio;