import React, {Component} from 'react';
import MainCountLine from '../../../mainCountLine'

import './index.css'
class HomeCart extends Component {
  render () {
    const {items} = this.props
    if(!items) return ''
    const {itemList} = items
    if(!itemList) return ''
    return (
      <div className="home-cart">
        <MainCountLine />
        <div className="home-cart-header">{items.name}好物</div>
        <div className="home-cart-conent">
          {
            itemList.map((item,index)=>(
              <div className="cart" key={index}>
                <img className="cartImg" src={item.primaryPicUrl} alt="" />
                <div className="cartIntro">{item.simpleDesc}</div>
                <span className="sp1">{item.name}</span>
                <span className="sp2">￥{item.retailPrice}</span>
              </div>
            ))
          }
        <div className="cart2">
          <div className="cart2-box">
            <span>更多居家好物</span>
            <img src={require("./images/gsmove.png")} alt="" />
          </div>
        </div>
      </div>
  </div>
    )
  }
}

export default HomeCart;