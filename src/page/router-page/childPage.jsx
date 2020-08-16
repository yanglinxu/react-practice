import React, { Component } from 'react'



// 如果组件没有自己的状态或者要调用的方法  不需要显式声明constructor
export default class childPage extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "yanglinxu" }
  }
  // 通过class fields语法处理好函数内部this指向问题
  handleChick = (val) => {
    console.log(this.state, val);
  }
  render() {
    console.log(this.props);
    return (
      // 通过显示绑定  为函数传递参数  事件参数e会作为函数的第二个参数
      <div onClick={this.handleChick.bind(this, 'haha')}>
        我是嵌套路由的组件呦～
      </div>
    )
  }
}
