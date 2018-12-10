import {connect} from 'react-redux';

import Classify from '../components/classify'
import {getClassify} from '../redux/actions'

export default connect(
  state => ({classify:state.classify}),
  {getClassify}
)(Classify)