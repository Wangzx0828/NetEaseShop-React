/*
*   reducers函数，根据之前的状态和action来产生新的状态
* */
import {combineReducers} from 'redux'

import {GET_CLASSIFY,GET_GOODS,ERR_MSG,GET_HOME} from './action-types'

const getClassify = []

function classify(preState= getClassify,action) {
  switch (action.type){
    case GET_CLASSIFY:
      return action.data
    case ERR_MSG:
      return action.data
    default:
      return preState
  }
}

const getgoods = []

function goods(preState= getgoods,action) {
  switch (action.type){
    case GET_GOODS:
      return action.data
    case ERR_MSG:
      return action.data
    default:
      return preState
  }
}

const gethome = []
function home(preState= gethome,action) {
  switch (action.type){
    case GET_HOME:
      return action.data
    case ERR_MSG:
      return action.data
    default:
      return preState
  }
}

export default combineReducers({
  classify,
  goods,
  home
})