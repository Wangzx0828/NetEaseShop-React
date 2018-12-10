import React, {Component} from 'react';
import BScroll from 'better-scroll'

import './index.css'

class HomeLittlecarousel extends Component {
  componentDidUpdate(){
    new BScroll(`.newCarousel${this.props.isCss}`,{
      click:true,
      scrollX:true,
      eventPassthrough:'vertical'
    })
  }
  render () {
    const {littleMsg,isCss} =this.props
    if(!littleMsg) return ''
    return (
      <div className={isCss === 1 ? 'newCarousel newCarousel1' : 'newCarousel newCarousel2'}>
        <ul className="Carousellist">
          {
            littleMsg.map((item,index)=>(
              <li className="Carouselli" key={index}>
                <img className="carouselImg" src={item.listPicUrl} alt="" />
                <span className="sp1">{item.name}</span>
                <span className="sp2">{item.simpleDesc}</span>
                <span className="sp3">￥{item.retailPrice}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default HomeLittlecarousel;