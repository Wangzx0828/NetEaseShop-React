import React, {Component} from 'react';
import MainCountLine from '../../../mainCountLine'

import './index.css'
class HomeCount extends Component {
  render () {
    const {countMsg} = this.props
    if(!countMsg) return ''
    return (
      <div className="mainCount">
        <div className="mainCount-activity">
          <MainCountLine />
          <div className="mainCount-activity-header">
            <span>品牌制造商直供</span>
            <img src={require("./images/jiantouyou.png")} alt="" />
          </div>
          {
            countMsg.map((item,index)=> index<4 &&(
              <div className="mainCount-card" key={index}>
                <img className="cartImg" src={item.picUrl} alt="" />
                <span className="sp1">{item.name}</span>
                <span className="sp2">{item.floorPrice}元起</span>
              </div>
            ))
          }
        </div>
    </div>
    )
  }
}

export default HomeCount;