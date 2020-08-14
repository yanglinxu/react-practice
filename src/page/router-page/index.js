import React, { Component } from 'react'
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import childPage from "./childPage";
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

function Home({ match }) {
  return (
    <>
      <h1>我是home路由组件</h1>
      <Route path={match.url + "/child"} name="123" component={childPage}></Route>
      {/* 跳转路由 */}
      <Link to="/">跳转标签</Link>
      <Index text={match}></Index>
      {/* Redirect一旦渲染  页面强制执行跳转 */}
      {/* <Redirect to="/"></Redirect> */}
    </>
  )

}

function Index(props) {
  console.log(props)
  return <h1>我是Index组件</h1>
}


// 路由组件的props默认是{history, location, match}三个参数
// 非路由组件的props取决于父组件传入什么（也可以将路由参传入）