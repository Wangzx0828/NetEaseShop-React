import React, {Component} from 'react';
import BScroll from 'better-scroll'

import GoodHeader from '../good-header'
import GoodsCarousel from './goods-carousel'
import GoodsLittleCarousel from './goods-littlecarousel'
import GoodsForyou from './goods-foryou'
import GoodsTopic from './goods-topic'
import GoodsLook from './goods-look'
import GoodsMore from './goods-more'

import MainCountLine from '../mainCountLine'

import './index.css'
class Goods extends Component {
  componentDidUpdate(){
    new BScroll ('.goodsCount',{
      bounce:false
    })
  }
  componentDidMount(){
    this.props.getGoodsData()
  }
  render () {
    const {goods} = this.props

    return (
      <div className="goods-box">
        <GoodHeader className="goodheader"/>
        <div className="goodsCount">
          <div className="goods-box-bscroll">
            <GoodsCarousel msg={goods.banner}/>
            <GoodsLittleCarousel littleMsg={goods.column}/>
            <MainCountLine />
            <GoodsForyou foryouMsg={goods.recommend}/>
            <MainCountLine />
            <GoodsTopic topicMsg={goods.tenfifteen}/>
            <MainCountLine />
            <GoodsForyou foryouMsg={goods.zhen}/>
            <MainCountLine />
            <GoodsLook lookMsg={goods.yxLook}/>
            <MainCountLine />
            <GoodsMore moreMsg={goods.yxWeek}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Goods;