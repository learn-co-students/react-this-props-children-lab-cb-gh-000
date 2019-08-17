// Code ThemedDecoration Component Here
import React, { Component } from "react";

export default class ThemedDecoration  extends  Component {
    render() {
    const ChildrenWithBonus = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className : this.props.theme
    }));
    return (

      <div>
        {ChildrenWithBonus}
      </div>
    )
  }
}
