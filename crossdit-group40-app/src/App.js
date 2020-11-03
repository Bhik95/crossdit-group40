import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Introduction from './components/pages/Introduction'

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <div className="container">
            <Introduction/>
          </div>
        </div>
    );
  }
}

export default App;
