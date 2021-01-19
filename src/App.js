import React, { Component } from 'react';
import Recipi from './components/Recipi';
import {Provider} from './context';
import Payment from './components/Payment';
import './App.css';
import Success from './components/Success';
import Failure from './components/Failure';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';

class App extends Component{
  render(){
    return(
      <Provider>
        <Router>
        <Switch>
          <Route exact path='/' component={Recipi}/>
          <Route exact path='/payment/:amount' component={Payment}/>
          <Route exact path='/failure' component={Failure}/>
          <Route exact path='/success' component={Success}/>
          <Route component={NotFound}/>
        </Switch>
        </Router>
      </Provider>
    )
  };
}

export default App;
