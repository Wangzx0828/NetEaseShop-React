import React, {Component} from 'react';
import './index.css'

class GoodsLook extends Component {
  render () {
    const {lookMsg} = this.props
    if(!lookMsg) return ''
    return (
      <div className="goods-look" >
        <div className="goods-look-header">严选LOOK</div>
        <div className="goods-look-center">
          <img className="goods-look-img" src={lookMsg.picUrl} alt="" />
          <div className="goods-look-conent">
            <img src={lookMsg.avatar} alt="" />
            <span>a*****0</span>
          </div>
          <div className="goods-look-text">{lookMsg.content}</div>
        </div>
      </div>
    )
  }
}

export default GoodsLook;