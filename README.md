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

### Initialize using Create React App

```sh
$ yarn global add create-react-app

$ create-react-app hello-react
$ cd hello-react

$ yarn install
```

### Update browsers list

Vaadin components support modern browsers and IE11, so the `browserslist` section
in `package.json` should be updated to look like this:

```js
  "browserslist": [
    "last 2 versions",
    "not dead",
    "ie 11",
    "not op_mini all"
  ]
```

### Install dependencies

```sh
$ yarn add @vaadin/vaadin-button
$ yarn add @vaadin/vaadin-text-field
$ yarn add @webcomponents/webcomponentsjs
```

### Add Web Components polyfill

1. Install the utility to copy polyfills:

```sh
$ yarn add vendor-copy
```

2. Update `scripts` section in `package.json` and add the line:

```js
  "postinstall": "vendor-copy"
```

3. Add the following section to `package.json`:

```js
  "vendorCopy": [
    {
      "from": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
      "to": "public/vendor/custom-elements-es5-adapter.js"
    },
    {
      "from": "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
      "to": "public/vendor/webcomponents-bundle.js"
    }
  ],
```

4. Open `public/index.html` and add the following lines in the `<head>` section:
```html
  <script src="%PUBLIC_URL%/vendor/webcomponents-bundle.js"></script>
  <script>if (!window.customElements) { document.write('<!--'); }</script>
  <script src="%PUBLIC_URL%/vendor/custom-elements-es5-adapter.js"></script>
  <!--! DO NOT REMOVE THIS COMMENT, WE NEED ITS CLOSING MARKER -->
```

5. Make sure the scripts are copied:

```sh
$ yarn postinstall
```

### Add Web Components to the project

Open `src/App.js` and do the following modifications.

1. Import Vaadin components:

```js
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
```

2. Define a constructor for the App component:

```js
constructor(props) {
  super(props);
  this.state = {greeting: "React App"};
  this.clicked = this.clicked.bind(this);
  this.textField = React.createRef();
}
```

3. Update the `render` method of the App component to return HTML:

```html
<div className="App">
  <vaadin-text-field ref={this.textField} placeholder="Type Something"></vaadin-text-field>
  <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
  <h2>Hello {this.state.greeting}!</h2>
</div>
```

4. Define the click event handler

```js
clicked() {
  this.setState({greeting: this.textField.current.value})
}
```

## Starting the application

Run the app with `yarn start`
