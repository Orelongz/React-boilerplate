import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ShowInput from './ShowInput.jsx';
import ReadInput from './ReadInput.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Pelumi',
      message: 'read message'
    };
  }

  handleSubmit(name, message) {
    this.setState({
      name: name,
      message: message
    })
  }

  render() {
    return (
      <div>
        <ShowInput name={this.state.name} message={this.state.message} />
        <ReadInput onNewInput={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}
