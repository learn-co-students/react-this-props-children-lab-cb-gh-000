import React from 'react';

export default class ThemedDecorations extends React.Component{
  render(){
    const classChildren = React.Children.map(this.props.children, (child, index) => {
      return (
        <div className={`${this.props.theme}`}>{child}</div>
      );
    });
    return (
      <div>{classChildren}</div>
    );
  }
}
