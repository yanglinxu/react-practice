import React, { Component } from 'react'
import Child from './child'
import { testContext } from './context'

export default class index extends Component {
  render() {
    return (
      <testContext.Provider value="test">
        <Child {...this.props}></Child>
      </testContext.Provider>
    )
  }
}

