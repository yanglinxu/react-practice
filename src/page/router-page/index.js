import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';
export default class index extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/indexPage'>
          <Home></Home>
        </Route>
        {/* <Route path='/indexPage' component={indexPage}>
      </Route> */}
      </HashRouter>
    )
  }
}

function Home() {
  return <h1>我是标题</h1>
}
