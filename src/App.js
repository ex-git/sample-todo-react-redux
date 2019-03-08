import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Tobuy from './components/tobuy'
import AddItem from './components/addItem'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <AddItem addItem={this.addItem} />
        <Switch>
          <Route exact path="/" render={()=> <Tobuy toggleComplete={this.toggleComplete} deleteItem={this.deleteItem} />} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default connect()(App);
