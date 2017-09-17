import React from 'react';

class ThemedDecoraction extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}> {child} </div>
      );
    });
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default ThemedDecoraction;
