import React, { Component } from 'react'



// 如果组件没有自己的状态或者要调用的方法  不需要显式声明constructor
export default class childPage extends Component {
  render() {
    console.log(this.props.name);
    return (
      <div>
        我是嵌套路由的组件呦～
      </div>
    )
  }
}
