import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.css'

class GoodHeader extends Component {
  render () {
    return (
      <div className="goodheader">
        <Link to="/home"><i className="iconfont icon-shouye2"></i></Link>
        <img className="yanxuanImg" src={require("./images/yanxuan.png")} alt="" />
        <div className="header-right">
          <Link to="/goods"><img className="searchImg" src={require("./images/search2-2fb94833aa.png")} alt="" /></Link>
          <Link to="shopcart"><div className="shopImg"></div></Link>
        </div>
      </div>
    )
  }
}

export default GoodHeader;