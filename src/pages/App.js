import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Page/>
        </div>
      </Router>
    
    );
  }
}

export default App;
