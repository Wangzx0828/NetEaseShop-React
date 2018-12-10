import React, {Component} from 'react';
import './index.css'

class GoodsMore extends Component {
  render () {
    const {moreMsg} = this.props
    if(!moreMsg) return ''
    return (
      <div className="goods-more">
        <div className="goods-more-header">
          <span className="goods-more-header-title">更多精彩</span>
        </div>
        {
          moreMsg.map((item,index)=>(
            <div className="goods-more-cart" key={index}>
              <img src={item.itemPicUrl} alt="" />
              <span>{item.title}</span>
            </div>
          ))
        }
    </div>
    )
  }
}

export default GoodsMore;