import React, { Component } from 'react'
import { testContext } from './context'

export default class child extends Component {
  render() {
    return (
      <div>
        我是中间组件
        <Button></Button>
      </div>
    )
  }
}


class Button extends Component {
  // 3 --当使用第2第3种方法时  必须通过contextType赋值
  static contextType = testContext;
  render() {
    return (
      // 1
      // <testContext.Consumer>
      //   {value => <button>{value}</button>}
      // </testContext.Consumer>

      // 当使用第2和第3中方法时  必须通过this.context取值
      <button>{this.context}</button>

    )
  }
}
// 2 --当使用第2第3种方法时  必须通过contextType赋值
// Button.contextType = testContext;
