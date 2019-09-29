import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import store from './store/index'

import Layout from './containers/Layout'

import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
	}
	li {
		list-style: none;
	}
  .tl{
    text-align: left !important;
  }
  .tc{
    text-align: center !important;
  }
  .tr{
    text-align: right !important;
  }
`

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <HashRouter>
      <Layout />
    </HashRouter>
  </Provider>
)

export default App
