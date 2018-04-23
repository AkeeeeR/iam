import React, { Component } from 'react';
import logo from './logo.svg';
import './css/app.min.css';
import './css/content.min.css';
import './css/header.min.css';
import './css/mail.min.css';
import './css/portfolio.min.css';
import './css/services.min.css';
import './css/team.min.css';

import Header from './Components/Header.jsx';
import Content from './Components/Content.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Team from './Components/Team.jsx';
import Services from './Components/Services.jsx';
import MyFancyComponent from './Components/Maps.jsx';
import Mail from './Components/Mail.jsx';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="header">
          <Header />
        </div>
        <div id="content">
          <Content />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="maps">
          <MyFancyComponent />
          <Mail/>
        </div>
      </div>
    );
  }
}

export default App;
