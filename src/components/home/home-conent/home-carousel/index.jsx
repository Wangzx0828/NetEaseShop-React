import React, {Component} from 'react';
import Swiper from 'swiper'
import './index.css'
class HomeCarousel extends Component {
  componentDidUpdate(){
    new Swiper ('.swiper-container1', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
  render () {
    const {carouselMsg} = this.props
    if(!carouselMsg) return ''

    return (
      <div className="swiper-container1">
        <div className="swiper-wrapper">
          {
            carouselMsg.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <img className="swiperImg" src={item.picUrl} alt=""/>
              </div>
            ))
          }
        </div>
        <div className="swiper-pagination"></div>
    </div>
    )
  }
}

export default HomeCarousel;