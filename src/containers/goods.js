import {connect} from 'react-redux';

import Goods from '../components/goods'
import {getGoodsData} from '../redux/actions'

export default connect(
  state => ({goods:state.goods}),
  {getGoodsData}
)(Goods)