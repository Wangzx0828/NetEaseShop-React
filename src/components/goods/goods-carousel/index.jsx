import React, {Component} from 'react';
import './index.css'
import Swiper from 'swiper'

class GoodsCarousel extends Component {
  componentDidUpdate(){
    new Swiper('.swiper-container3', {
      slidesPerView: 1.15,
      centeredSlides: true,
      loop: true,
      spaceBetween: 20,
      autoplay: true
    });
  }
  
  render () {
    const {msg} = this.props
    if(!msg) return ''
    return (
      <div className="goods-carousel">
            <div className="swiper-container3" >
              <div className="swiper-wrapper">
                {
                  msg.map((item,index)=>(
                    <div className="swiper-slide" key={index}>
                      <div className="swiper-cart">
                        <img src={item.picUrl} alt="" />
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

export default GoodsCarousel;