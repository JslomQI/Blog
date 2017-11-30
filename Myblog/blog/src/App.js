import React, { Component } from 'react';
import logo from './logo.svg';
import Lheader from './_home/Lheader.js';
import Lfooter from './_home/Lfooter.js';
import Lbanner from './_home/Lbanner.js';
import Lcontent from './_home/Lcontent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<Lheader></Lheader>
      	<Lbanner></Lbanner>
      	<Lcontent></Lcontent>
      	<Lfooter></Lfooter>
      </div>
    );
  }
}

export default App;
