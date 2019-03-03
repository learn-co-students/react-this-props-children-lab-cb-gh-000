// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecorations extends React.Component {

  render() {
    let theme = this.props.theme;
    const childrenWithClass = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: theme
      });
    });

    return (
      <div className="themed-decor">
        {childrenWithClass}
      </div>
    );
  }

}

export default ThemedDecorations;
