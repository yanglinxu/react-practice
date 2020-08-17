import React, { Component } from 'react'

export default class comp extends Component {
  render() {
    console.log(this.props, "组件中调用的～～～～")
    return (
      <div>
        啦啦啦啦啦我是被hoc包裹的组件呀
      </div>
    )
  }
}
