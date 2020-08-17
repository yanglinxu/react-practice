import React, { Component } from 'react'
// 高阶函数hoc本质是装饰器模式在组件中的运用

export default function (Comp) {
  return class extends Component {
    componentDidMount() {
      console.log(this.props, "包装的函数中调用")
    }
    render() {
      return (
        <div>
          <Comp {...this.props}></Comp>
        </div>
      )
    }
  }
}
