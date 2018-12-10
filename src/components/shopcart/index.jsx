import React, {Component} from 'react';
import './index.css'

class Shopcart extends Component {
  render () {
    return (
      <div id="ShopCart">
        <div className="ShopCart-header">购物车</div>
        <div className="ShopCart-conent">
          <div className="ShopCart-top">
            <span><i className="iconfont icon-yuanquan"></i>30天无忧退货</span>
            <span><i className="iconfont icon-yuanquan"></i>48小时快速退款</span>
            <span><i className="iconfont icon-yuanquan"></i>满88元免邮费</span>
          </div>
          <div className="ShopCartImg">
            <img src={require("./images/cart.png")} alt="" />
              <span>去添加点什么吧</span>
          </div>
          <div className="ShopCartBtn">登录</div>
        </div>
      </div>
    )
  }
}

export default Shopcart;