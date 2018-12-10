import React, {Component} from 'react';
import './index.css'
import BScroll from 'better-scroll'
import ClassifyRight from './classify-right'

class Classify extends Component {
  constructor(){
    super()
    this.state={
      currentIndex:0
    }
  }
  componentDidMount() {
    this.props.getClassify()
    new BScroll('.classify-left-wrap',{
      click:true
    })
  }
  render () {
    const {classify} = this.props
    const classObj = classify[this.state.currentIndex]
    return (
      <div id="classify">
        <div className="classify-header">
          <div className="classify-header-search">
            <img src={require("./images/search2-2fb94833aa.png")} alt=""/>
              <span>搜索商品，共9723款好物</span>
          </div>
        </div>
        <div className="classify-conent">
          <div className="classify-left">
            <div className="classify-left-wrap">
              <ul className="classify-left-list">
                {
                  classify.map((item,index)=><li
                    onClick={()=>(this.setState({currentIndex:index}))}
                    className={this.state.currentIndex === index ? "lired classify-left-li" : "classify-left-li" }
                    key={index}
                  >{item.name}</li>)
                }
              </ul>
            </div>
        </div>
          <ClassifyRight msg={classObj}/>
        </div>
      </div>
    )
  }
}

export default Classify;