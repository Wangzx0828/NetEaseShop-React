import ajax from './ajax'

export const reqDatahome = () => ajax('/homedata')
export const reqDatanav = () => ajax('/navdata')
export const reqDatatopic = () => ajax('/topicdata')
