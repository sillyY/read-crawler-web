import React from "react"
import { Provider } from "react-redux"
import { HashRouter, Route, Redirect } from "react-router-dom"
import { Switch } from "react-router"
import { createGlobalStyle } from "styled-components"

import store from "./store/index"

// import Layout from "./containers/Layout"
// import Login from "./containers/Login"
// import Main from "./containers/Main"

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
			{/* <Layout>
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/login" />} />
					<Route
						exact
						path="/main"
						render={() => <Redirect to="/main/course" />}
					/>
					<Switch>
						<Route path="/main" component={Main} />
						<Route path="/login" component={Login} />
					</Switch>
				</Switch>
			</Layout> */}
		</HashRouter>
	</Provider>
)

export default App