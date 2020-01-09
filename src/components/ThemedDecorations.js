// Code ThemedDecoration Component Here
import React from 'react';
export default class ThemedDecoration extends React.Component{
  render(){
    const passThis=this.props.theme
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className : passThis
      });
    });
    return(
        <div>
          {childrenWithExtraProp}
        </div>
    )
  }
}
