//异步获取classify信息
import {reqDatanav,reqDatatopic,reqDatahome} from '../api/index';
import {GET_CLASSIFY,GET_GOODS,GET_HOME,ERR_MSG} from './action-types'

export const getNav = data => ({type:GET_CLASSIFY,data:data})
export const getGoods = data => ({type:GET_GOODS,data:data})
export const getHome = data => ({type:GET_HOME,data:data})
export const errMsg = msg => ({type:ERR_MSG,data:msg})

export const getClassify =()=>{
  return dispatch => {
    reqDatanav()
      .then(res=>{
        const result = res.data
        dispatch(getNav(result))
      })
      .catch(err=>{
        dispatch(errMsg('网络不稳定，请刷新重试'))
      })
  }
}
export const getGoodsData =()=>{
  return dispatch => {
    reqDatatopic()
      .then(res=>{
        const result = res.data
        dispatch(getGoods(result))
      })
      .catch(err=>{
        dispatch(errMsg('网络不稳定，请刷新重试'))
      })
  }
}
export const getHomedata =()=>{
  return dispatch => {
    reqDatahome()
      .then(res=>{
        const result = res.data
        dispatch(getHome(result))
      })
      .catch(err=>{
        dispatch(errMsg('网络不稳定，请刷新重试'))
      })
  }
}