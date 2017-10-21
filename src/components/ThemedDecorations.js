import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithclassName = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div> 
      );
    });
    return(
      <div>
        {childrenWithclassName}
        </div>
    );
  }
}
