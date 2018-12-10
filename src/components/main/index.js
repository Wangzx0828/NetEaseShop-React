import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import Classify from '../../containers/classify'
import Goods from '../../containers/goods'
import Home from '../../containers/home'
import Person from '../person'
import Shopcart from '../shopcart'
import NavFooter from '../nav-footer'

class Index extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/classify" component={Classify}></Route>
          <Route path="/goods" component={Goods}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path="/person" component={Person}></Route>
          <Route path="/shopcart" component={Shopcart}></Route>
          <Redirect from="/" to="/home" />
      </Switch>
        {this.props.location.pathname==='/person'?null:<NavFooter />}
      </div>
    )
  }
}

export default Index;