# Base Starter for Vaadin components with React

## Prerequisites
First [install yarn](https://yarnpkg.com/docs/install).

## Running the application

You can run the application by issuing the following commands at the root of the project in your terminal window:
``` bash
$ yarn install
$ yarn start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Find information on how to perform common tasks in [this guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Recreating this project from scratch

Execute the following commands:
``` bash
$ yarn global add create-react-app

$ create-react-app hello-react
$ cd hello-react

$ yarn install

$ yarn add @polymer/polymer
$ yarn add @vaadin/vaadin-button
$ yarn add @vaadin/vaadin-text-field
$ yarn add @webcomponents/webcomponentsjs
```

Open `src/index.js`.

In the `import` section before the app importing, add:

``` typescript
import '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js';
```

Open `src/App.js`.

In the `import` section, add:

``` typescript
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
```

Define a constructor with a simple property:

```javascript
constructor(props) {
  super(props);
  this.state = {greeting: "React App"};
  this.clicked = this.clicked.bind(this);
  this.textField = React.createRef();
}
```

Replace all the HTML in the `return` of `render` method with:

```html
<div>
  <vaadin-text-field ref={this.textField} placeholder="Type Something"></vaadin-text-field>
  <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
  <h2>Hello {this.state.greeting}!</h2>
</div>
```

Define the click event

```javascript
clicked() {
  this.setState({greeting: this.textField.current.value})
}
```

Run the app with `yarn start`
