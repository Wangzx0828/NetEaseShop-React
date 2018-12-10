import React, {Component} from 'react';
import Swiper from 'swiper'
import './index.css'

class GoodsLittleCarousel extends Component {
  componentDidUpdate(){
    new Swiper('.swiper-container4', {
      slidesPerView: 4,
      slidesOffsetBefore:10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  render () {
    const {littleMsg} = this.props;
    if(!littleMsg) return''

    return (
      <div className="goods-littlecarousel">
        <div className="swiper-container4">
          <div className="swiper-wrapper">
            {
              littleMsg.map((item,index)=>(
                <div className="swiper-slide" key={index}>
                  <div className="swiper-cart">
                    <img src={item.picUrl} alt=""/>
                    <span>{item.title}</span>
                    <span className="article">{item.articleCount}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default GoodsLittleCarousel;