// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedParty extends React.Component {
  render() {
    // eslint-disable-next-line
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return(
      <div className="themed-party">
        {childrenWithExtraProp}
      </div>
    );
  }
}
