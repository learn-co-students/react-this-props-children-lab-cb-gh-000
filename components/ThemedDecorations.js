import React from 'react';
import ReactDOM from 'react-dom';

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithDiv =
    React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    })

    return (
      <div className="themed_decorations">
        {childrenWithDiv}
      </div>
    )
  }
}

module.exports = ThemedDecorations
