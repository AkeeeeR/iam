import React, { Component } from 'react';
import HeaderCarousel from './HeaderCarousel.jsx';

class Header extends Component {
  render() {
    return (
      <div className="logo">
        <HeaderCarousel/>
        <div class="my-navbar">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li class="brand-li">AMstudio</li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="bg-nav"></div>
        </div>
      </div>
    );
  }
}

export default Header;