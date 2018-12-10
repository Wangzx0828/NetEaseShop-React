import React, {Component} from 'react';
import Swiper from 'swiper'

import './index.css'
class HomeTopicList extends Component {
  componentDidUpdate(){
    new Swiper ('.swiper-container2',{
      slidesPerView: 1.2,
      slidesOffsetAfter:14,
      spaceBetween: 10
    })
  }
  render () {
    const {topiclistMsg} = this.props
    if(!topiclistMsg) return ''
    return (
      <div className="home-topicList">
        <div className="home-topicList-header">
          <span>专题精选</span>
          <img src={require("./images/jiantouyou.png")} alt="" />
        </div>
        <div className="swiper-window">
          <div className="swiper-container2">
            <div className="swiper-wrapper">
              {
                topiclistMsg.map((item,index)=>(
                <div className="swiper-slide" key={index}>
                  <div className="swiper-box">
                    <img className="swiperImg" src={item.itemPicUrl} alt="" />
                    <span className="sp1">{item.title}<span className="sp2">{item.priceInfo}元</span></span>
                    <span className="sp3">{item.subtitle}</span>
                  </div>
                </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default HomeTopicList;