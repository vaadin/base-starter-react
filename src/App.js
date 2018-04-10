import React, { Component } from "react";

import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: "React App"};
    this.clicked = this.clicked.bind(this);
    this.textField = React.createRef();
  }

  clicked() {
    this.setState({greeting: this.textField.current.value})
  }

  render() {
    return (
      <div className="App">
        <vaadin-text-field ref={this.textField} placeholder="Type Something"></vaadin-text-field>
        <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
        <h2>Hello {this.state.greeting}!</h2>
      </div>
    );
  }
}

export default App;
