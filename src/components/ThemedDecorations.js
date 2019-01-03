// Code ThemedDecoration Component Here


// Code Invitation Component Here

import React from 'react';

export default class ThemedDecoration extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="heaven">{child}</div>
      );
    });

    return (
      <div>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}
