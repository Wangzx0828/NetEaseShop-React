import React, {Component} from 'react';
import './index.css'
import GoodHeader from '../good-header'

class Person extends Component {
  render () {
    return (
      <div id="Person">
        <GoodHeader />
        <div className="Person-wrap">
          <img className="Person-conent-logo" src={require("./images/logo.png")} alt="" />
            <div className="Person-conent" >
              <div className="Person-conent-btn1"><i className="iconfont icon-shouji" ></i>手机号码登录</div>
              <div className="Person-conent-btn2"><i className="iconfont icon-youxiang" ></i>邮箱账号登录</div>
              <div className="Person-conent-sp1">手机号快速注册<i className="iconfont icon-jiantouyou"></i></div>
            </div>
          <div className="Person-footer">
            <span><i className="iconfont icon-weixin"></i>微信</span>|
            <span><i className="iconfont icon-QQ"></i>QQ</span>|
            <span><i className="iconfont icon-weibo"></i>微博</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Person;