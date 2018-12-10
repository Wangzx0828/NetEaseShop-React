import React, {Component} from 'react';
import './index.css'

class GoodsForyou extends Component {
  render () {
    const {foryouMsg} = this.props;
    if(!foryouMsg) return ''
    return (
      <div className="goods-foryou">
        <div className="foryou-top">
          <div className="foryou-top-header">{foryouMsg.name}</div>
          <div className="foryou-top-conent">
            <img src={foryouMsg.Item[0].picUrl} alt=""/>
              <div className="foryou-top-conent-txt">
                <span className="sp1">{foryouMsg.Item[0].title}<span
                  className="sp2">{foryouMsg.Item[0].priceInfo}元起</span></span>
                <span className="sp3">{foryouMsg.Item[0].subTitle}</span>
              </div>
          </div>
        </div>
        <div className="foryou-center">
          <div className="foryou-center-conent">
            <span className="csp1">{foryouMsg.Item[1].title}</span>
            <span className="csp2">{foryouMsg.Item[1].subTitle}</span>
          </div>
          <div className="foryou-center-img">
            <img src={foryouMsg.Item[1].picUrl} alt=""/>
              <div className="foryou-center-conent-span">
                {foryouMsg.Item[1].typeName}
              </div>
          </div>
        </div>
        <div className="foryou-center">
        <div className="foryou-center-conent">
          <span className="csp1">{foryouMsg.Item[2].title}</span>
          <span className="csp2">{foryouMsg.Item[2].subTitle}</span>
        </div>
        <div className="foryou-center-img">
          <img src={foryouMsg.Item[2].picUrl} alt=""/>
            <div className="foryou-center-conent-span">
              {foryouMsg.Item[2].typeName}
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default GoodsForyou;