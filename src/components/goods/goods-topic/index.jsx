import React, {Component} from 'react';
import Swiper from 'swiper'
import './index.css'

class GoodsTopic extends Component {
  componentDidUpdate(){
    new Swiper ('.swiper-container5',{
      slidesPerView: 1.15,
      slidesOffsetAfter:14,
      spaceBetween: 10
    })
  }
  render () {
    const {topicMsg} = this.props;
    if(!topicMsg) return ''
    return (
      <div className="goods-topic">
        <div className="goods-topic-header">十点一刻</div>
        <div className="swiper-container5">
          <div className="swiper-wrapper">
            {
              topicMsg.map((item,index)=>(
                <div className="swiper-slide" key={index}>
                  <div className="swiper-cartbox">
                    <img className="goodscartImg" src={require('./images/qipao.png')} alt=""/>
                    <div className="goodscartText">
                      <span className="goodscartText-sp1">— 今日话题 —</span>
                      <div className="goodscartDay">
                        <span className="goodscartDaysp1">{item.title}</span>
                        <span className="goodscartDaysp2">{item.desc}</span>
                      </div>
                      <span className="goodscartText-sp2">{item.participantNum}人参与话题</span>
                    </div>
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

export default GoodsTopic;