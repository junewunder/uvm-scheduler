import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { LocaleProvider } from 'antd';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './App'
import StateManager from './StateManager'
import './index.css'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './state/reducers'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

const store = createStore(combineReducers(reducers))

store.subscribe(() => console.log('CHANGE STATE:', store.getState()))

ReactDOM.render(
  <LocaleProvider locale={ enUS }>
    <Provider store={ store }>
      <StateManager>
        <App />
      </StateManager>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
)
registerServiceWorker()
