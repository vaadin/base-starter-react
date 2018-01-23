# Skeleton Starter for Vaadin Elements and React

## Prerequisites
First [install npm](https://docs.npmjs.com/getting-started/installing-node).
Then install Bower:
``` bash
$ npm install -g bower
```

## Running the application

You can run the application by issuing the following commands at the root of the project in your terminal window:
``` bash
$ npm install
$ bower install
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
$ bower init

# Keep everything default
$ cat > .bowerrc
{"directory": "public/bower_components"}
ctrl+D

$ bower install --save Polymer/polymer
$ bower install --save vaadin
```

Add `/public/bower_components` to the dependencies section of `.gitignore` to avoid pushing dependencies to version control.

Open `public/index.html`
	In the `<head>` section, add:
```html
<script src="%PUBLIC_URL%/bower_components/webcomponentsjs/webcomponents-loader.js"></script>
<link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-valo-theme/vaadin-button.html">
<link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-button/vaadin-button.html">
<link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-valo-theme/vaadin-text-field.html">
<link rel="import" href="%PUBLIC_URL%/bower_components/vaadin-text-field/vaadin-text-field.html">
```

Open `src/App.js` and in the `class`..
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