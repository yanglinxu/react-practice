import React, { Component } from 'react'
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
export default class index extends Component {
  render() {
    return (
      <HashRouter>
        {/* 使用Switch意味着  当路由规则命中一个后 忽略其他所有
            所以通常路由规则长的放在上面  短的放在下面
        */}
        <Switch>
          <Route path='/indexPage' component={Home}></Route>
          <Route path='/' component={Index}></Route>
        </Switch>

      </HashRouter>
    )
  }
}

function Home() {
  return (
    <>
      <h1>我是标题</h1>
      {/* 跳转路由 */}
      <Link to="/">去ceshi</Link>
      {/* Redirect一旦渲染  页面强制执行跳转 */}
      {/* <Redirect to="/"></Redirect> */}
    </>
  )

}

function Index() {
  return <h1>ceshi </h1>
}
