// Code ThemedDecoration Component Here
import React, { Component } from "react";

export default class ThemedDecoration  extends  Component {
  render () {
    return (
      <div>
        {this.props.children}
        React.Children.map(this.props.children, child => {
          child.props.className
        }

        ))
      </div>
    )
  }
}
