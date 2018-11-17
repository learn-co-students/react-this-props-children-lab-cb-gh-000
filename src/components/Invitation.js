import React, { Component } from 'react';

export default class Invitation extends Component {
  render () {
    return (
      <div classNam="invitation">
        <h1>You've been invited!</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
