
import { render } from 'react-dom'
import React from 'react'


import './style/common.scss'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import carTest from './reducers'

import App from './App'
import { AppContainer } from 'react-hot-loader'

function reducers() {

}

let store = createStore(reducers);

const renderCom = Component => {
  render(
  <AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
  )
}

renderCom(App)

if (module.hot) {
  module.hot.accept('./App', () => { renderCom(App) })
}

