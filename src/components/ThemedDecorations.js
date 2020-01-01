import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: 'heaven'
      });
    });
    return (
      <div>{children}</div>
    );
  }
}

export default ThemedDecorations
