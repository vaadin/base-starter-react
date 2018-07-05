import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  clickHandler() {
    document.querySelector('vaadin-dialog').opened = false;
  }

  render() {
    return (
      <div>
        <p> The value of the text-field is {this.props.value} </p>
        <vaadin-button onClick={() => this.clickHandler()}>Close</vaadin-button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: "React App"};
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    const text = this.refs.text.value;
    this.setState({greeting: text});
    this.refs.dialog.renderer = function(content) {
      content = window.document.createElement('div');
      ReactDOM.render(<Content value={text} />, content);
      return content;
    }
    this.refs.dialog.opened = true;
  }

  render() {
    return (
      <div className="App">
        <vaadin-text-field ref="text" placeholder="Type Something"></vaadin-text-field>
        <vaadin-dialog ref="dialog"></vaadin-dialog>
        <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
        <h2>Hello {this.state.greeting}!</h2>
      </div>
    );
  }
}

export default App;
