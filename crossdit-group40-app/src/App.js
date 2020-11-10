import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import LoginPage from './components/pages/LoginPage'
import ChooseLanguagePage from './components/pages/ChooseLanguagePage'
import Introduction from './components/pages/Introduction'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route path="/language">
                <ChooseLanguagePage/>
              </Route>
              <Route path="/intro">
                <Introduction/>
              </Route>
              <Route path="/">
                <LoginPage/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
