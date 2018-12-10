import React, {Component} from 'react';
import HomeHeader from './home-header'
import HomeConent from './home-conent'

import './index.css'
class Home extends Component {
  componentDidMount(){
    this.props.getHomedata()
  }
  render () {
    const {home} = this.props
    if(!home) return ''
    return (
      <div id="Home">
        <HomeHeader headerMsg = {home.cateList}/>
        <HomeConent conentMsg = {home}/>
      </div>
    )
  }
}

export default Home;