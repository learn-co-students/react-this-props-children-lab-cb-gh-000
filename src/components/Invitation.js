import React from 'react';

export default class Invitation extends React.Component {
  render() {
    const title = "You\'ve been invited!";
    return(
      <div>
        <h1>{title}</h1>
        {this.props.children}
      </div>
    );
  }
}
