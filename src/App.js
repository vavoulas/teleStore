import React, { Component } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Pnf from './components/Pnf'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route  component={Pnf}></Route>




        </Switch>
        
        
        
        
      </React.Fragment>
    )
  }
}

export default App
