# Base Starter for Vaadin components with React

## Prerequisites
First [install npm](https://docs.npmjs.com/getting-started/installing-node).

## Running the application

You can run the application by issuing the following commands at the root of the project in your terminal window:
``` bash
$ npm install
$ npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Find information on how to perform common tasks in [this guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Recreating this project from scratch

Execute the following commands:
``` bash
$ npm install -g create-react-app

$ create-react-app hello-react
$ cd hello-react

$ npm install

$ npm install --save @polymer/polymer@next
$ npm install --save @vaadin/vaadin-button
$ npm install --save @vaadin/vaadin-text-field
$ npm i --save @webcomponents/webcomponentsjs@latest
```

Open `src/App.js`.

In the `import` section, add:

``` typescript
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
```

Define a constructor with a simple property:

```javascript
constructor(props) {
  super(props);
  this.state = {greeting: "React App"};
  this.clicked = this.clicked.bind(this);
}
```

Replace all the HTML in the `return` of `render` method with:

```html
<div>
  <vaadin-text-field ref="text" placeholder="Type Something"></vaadin-text-field>
  <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
  <h2>Hello {this.state.greeting}!</h2>
</div>
```

Define the click event

```javascript
clicked() {
  this.setState({greeting: this.refs.text.value})
}
```

Run the app with `npm start`
