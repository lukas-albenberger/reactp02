import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar'
import { Home } from './Home'
import { ToDo } from './ToDo'
import { Weather } from './Weather'
import { NoMatch } from './NoMatch'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={ToDo} />
        <Route path="/weather" component={Weather} />
        <Route component={NoMatch} />
      </Switch>  
      </Router>
    </React.Fragment>
  );
}

export default App
