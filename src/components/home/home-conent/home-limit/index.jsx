import React, {Component} from 'react';
import './index.css'

class HomeLimit extends Component {
  constructor(){
    super()
    this.state={
      hour:2,
      minute:0,
      second:0
    }
  }
  componentDidMount(){
    this.countDown = setInterval(()=>{
      if(this.state.hour === 2){
        this.setState({
          hour : 1 ,
          minute : 59 ,
          second : 60
        })
      }
      this.setState({
        second : this.state.second -1
      })
      if(this.state.second<0){
        this.setState({
          second : 59,
          minute : this.state.minute-1
        })
      }else if(this.state.minute<0){
        this.setState({
          minute : 59,
          hour : this.state.hour-1
        })
      }else if(this.state.hour<0){
        this.setState({
          hour : 0,
          minute : 0,
          second : 0
        })
        clearInterval(this.countDown)
      }
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.countDown)
  }
  render () {
    let {hour,minute,second} = this.state
    return (
      <div className="home-limit">
        <div className="home-limit-left">
          <span className="limit-name">严 选 限 时 购</span>
          <div className="limit-time">
            <div className="limit-black">0{hour}</div>
            :
            <div className="limit-black">{minute < 10 ? '0' + minute : minute}</div>:
            <div className="limit-black">{second < 10 ? '0' + second : second}</div>
          </div>
          <span className="limit-next">下一场 22:00 开始</span>
        </div>
        <div className="home-limit-right">
          <img src={require("./iamges/test2.png")} alt="" />
            <div className="orangeRound">
              <span>￥42</span>
              <span>￥49</span>
            </div>
        </div>
      </div>
    )
  }
}

export default HomeLimit;