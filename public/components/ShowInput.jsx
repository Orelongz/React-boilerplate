import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ShowInput extends Component {
  render() {
    let message = this.props.message;
    let name = this.props.name;
    return (
      <div>
        <h1>Hello there, {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
}
