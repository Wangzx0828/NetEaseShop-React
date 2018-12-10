import {connect} from 'react-redux';

import Home from '../components/home'
import {getHomedata} from '../redux/actions'

export default connect(
  state => ({home:state.home}),
  {getHomedata}
)(Home)