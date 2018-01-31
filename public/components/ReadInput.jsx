import React, { Component } from 'react';

export default class ReadInput extends Component {

  onFormSubmit(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let message = this.refs.message.value;

    if (name.trim().length > 1 && message.trim().length > 1) {
      this.props.onNewInput(name, message);
    }
    this.refs.name.value = '';
    this.refs.name.focus();
    this.refs.message.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type='text' placeholder='enter your name' ref='name' /><br />
        <input type='text' placeholder='enter a message' ref='message' /><br />
        <button>Proceed</button>
      </form >
    );
  }
}