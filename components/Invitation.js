import React from 'react';
import ReactDOM from 'react-dom';

class Invitation extends React.Component {
  render () {
    return (
      <div className="Invitation">
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}
module.exports = Invitation
