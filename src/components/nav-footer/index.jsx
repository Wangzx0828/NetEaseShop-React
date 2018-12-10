import React, {Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom'

import './index.css'

class NavFooter extends Component {
  
  render () {
    return (
      <div id="footerNav">
        <ul className="footList">
          <li>
            <NavLink to="/home" activeStyle={{color:'#b5262d'}}>
              <div className={this.props.location.pathname==='/home'?"icondiv1 icondiv11":"icondiv1"}></div>
              <span>首页</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/goods" activeStyle={{color:'#b5262d'}}>
              <div className={this.props.location.pathname==='/goods'?"icondiv2 icondiv22":"icondiv2"}></div>
              <span>识物</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/classify" activeStyle={{color:'#b5262d'}}>
              <div className={this.props.location.pathname==='/classify'?"icondiv3 icondiv33":"icondiv3"}></div>
              <span>分类</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopcart" activeStyle={{color:'#b5262d'}}>
              <div className={this.props.location.pathname==='/shopcart'?"icondiv4 icondiv44":"icondiv4"}></div>
              <span>购物车</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/person" activeStyle={{color:'#b5262d'}}>
              <div className={this.props.location.pathname==='/person'?"icondiv5 icondiv55":"icondiv5"}></div>
              <span>个人</span>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(NavFooter);