import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'


import Main from './components/main'
import store from './redux/store'

import './static/image/favicon.ico'
import './static/css/react.css'
import './static/iconfont/iconfont.css'

import './mock/mockServer'
import 'swiper/dist/css/swiper.min.css'

ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route component={Main}></Route>
        </Switch>
      </HashRouter>
    </Provider>
  ), document.getElementById('root'));
