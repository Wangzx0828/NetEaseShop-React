import React, {Component} from 'react';
import BScroll from 'better-scroll'
import './index.css'

class HomeHeader extends Component {
  constructor(){
    super()
    this.state={
      index:0
    }
  }
  componentDidUpdate(){
    new BScroll('.listDiv',{
      scrollX:true
    })
  }
  render () {
    const {headerMsg} = this.props
    if(!headerMsg) return ''
    return (
      <div className="headerNav">
        <div className="headerTop">
          <img className="logoImg" src={require("../images/nav/yanxuan.png")} alt=""/>
            <div className="inputText">
              <img src={require("../images/nav/search2-2fb94833aa.png")} alt="" />
                <span>搜索商品，共11666款好物</span>
            </div>
            <div className="loginBtn">登录</div>
        </div>
        <div className="headerBottom">
          <div className="listDiv">
            <ul className="navList">
              {
                headerMsg.map((item,index)=>(
                  <li onClick={()=>this.setState({index})} className={this.state.index === index ? "line navBtn" : "navBtn" } key={index}>
                    {item.name}
                  </li>
                ))
              }
          </ul>
          </div>
        {/*<div className="listTable">*/}
          {/*<div className="listTable-all">全部频道</div>*/}
          {/*<ul className="listTable-list">*/}
            {/*<li className="listTable-li"*/}
              {/*v-for="(item,index) in homedata.cateList" key="index">*/}
            {/*/!*{{item.name}}*!/*/}
            {/*</li>*/}
          {/*</ul>*/}
        {/*</div>*/}
      <div className="jiantou" ><img  src={require("../images/nav/jiantou.png")} alt="" /></div>
    </div>
    </div>
    )
  }
}

export default HomeHeader;