import React, {Component} from 'react';

import './index.css'
class HomeNew extends Component {
  render () {
    const {isShow} = this.props
    if(!isShow) return ''
    return (
      <div>
        <div className={isShow === 1 ?"newImg" : "newImg isShow"}>
          <span className={isShow === 1 ?"newSpan" : "newSpan isColor"} >{isShow === 1?'新品首发':'人气推荐，好物精选'}</span>
          <div className={isShow === 1 ? "lookAll" : "lookAll isBox"}>
            <span className={isShow === 1 ? "" : "isAll"}>查看全部</span>
            {
              isShow === 1 ?  <img  src={require("./images/jiantou.png")} alt="" /> :
                <img  className="isYou" src={require("./images/jiantou2.png")} alt="" />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default HomeNew;