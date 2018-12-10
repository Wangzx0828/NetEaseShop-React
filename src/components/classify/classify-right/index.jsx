import React, {Component} from 'react';
import './index.css'
import BScroll from "better-scroll";

class ClassifyRight extends Component {
  componentDidUpdate(){
    new BScroll('.bscrollwrap',{
      click:true
    })
  }
  render () {
    const {msg} = this.props
    if(!msg) return ''
    return (
      <div className="bscrollwrap">
        <div className="classify-right">
          <img className="classify-right-img" src={msg.bannerUrl} alt="" />
          <div className="classify-right-conent">
            <div className="classify-right-header">{msg.name}分类</div>
            <ul className="classify-right-list">
              {
                msg.subCateList.map((item,index)=>(
                  <li className="classify-right-li" key={index}>
                    <img className="classify-right-li-img" src={item.wapBannerUrl} alt="" />
                    <span className="classify-right-li-sp">{item.name}</span>
                  </li>
                  ))
                }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ClassifyRight;