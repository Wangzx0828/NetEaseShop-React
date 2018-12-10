import React, {Component} from 'react';
import BScroll from 'better-scroll'
import './index.css'

import HomeCarousel from './home-carousel'
import HomeCount from './home-count'
import HomeNew from './home-new'
import HomeLittlecarousel from './home-littlecarousel'
import HomeLimit from './home-limit'
import HomeTopicList from './home-topicList'
import HomeCart  from './home-cart'

import MainCountLine from '../../mainCountLine'


class HomeConent extends Component {
  componentDidUpdate(){
    new BScroll('.count-wrapper',{
      click:true
    })
  }
  render () {
    const {conentMsg} = this.props
    if(!conentMsg) return ''
    const {cateList} = conentMsg
    if(!cateList) return ''
    return (
      <div className="count-wrapper">
        <div className="content">
          <HomeCarousel carouselMsg={conentMsg.focusList}/>
          <div className="activity">
            <div>
              <img src={require("../images/icon/duihao.png")} alt="" />
                <span>网易自营品牌</span>
            </div>
            <div>
              <img src={require("../images/icon/duihao.png")} alt="" />
                <span>30天无忧退货</span>
            </div>
            <div>
              <img src={require("../images/icon/duihao.png")} alt="" />
                <span>48小时快速退款</span>
            </div>
          </div>
          <HomeCount countMsg={conentMsg.tagList}/>
          <MainCountLine />
          <HomeNew isShow={1}/>
          <HomeLittlecarousel isCss={1} littleMsg={conentMsg.newItemNewUserList}/>
          <MainCountLine />
          <HomeNew isShow={2}/>
          <HomeLittlecarousel isCss={2} littleMsg={conentMsg.popularItemList}/>
          <MainCountLine />
          <HomeLimit />
          <MainCountLine />
          <img className="moveImg" src={require("../images/icon/move.jpg")} alt="" />
          <MainCountLine />
          <HomeTopicList topiclistMsg={conentMsg.topicList}/>
          {
            cateList.map((item,index)=>index>0 && <HomeCart key={index} items={item}/>)
          }
          <MainCountLine />
          <div className="footer">
            <div className="footerBtn">
              <div className="btn">下载APP</div>
              <div className="btn">电脑版</div>
            </div>
            <div className="footerSpan">
              <span>网易公司版权所有 © 1997-2018</span>
              <br/>
                <br/>
                  <span>食品经营许可证: JY13301080111719</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeConent;