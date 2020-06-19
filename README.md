<img alt="React Library Boilerplate" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-library-boilerplate)

[![No configuration & easy to create react library component with boilerplate](https://img.shields.io/badge/-No%20configuration%20%26%20easy%20to%20create%20react%20library%20component%20with%20boilerplate-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-library-boilerplate)

![Platform - Web](https://img.shields.io/badge/platform-web-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Library Boilerplate"
        src="assets/Screenshots/react-library-boilerplate.png" />
</p>

# Usage

```sh
git clone git@github.com:WrathChaos/react-library-boilerplate.git my-react-component
```

Simply run the command and clone the project with your component name

### Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

```sh
rm -rf .git README.md
npm install OR yarn
npm start
```

### Run the component with storyboard

After you've done with your component, simply change these things with your own component name.

#### rollup.config.js

Change the 'ReactComponent' with your component name

```js
input: "src/ReactComponent",
```

#### package.json

Change the 'ReactComponent' with your component name

```js
"main": "lib/ReactComponent.js",
"module": "lib/ReactComponent.es.js",
```

#### index.stories.js

You need to import and write your own example storybook

```js
import { storiesOf } from "@storybook/react";
import React from "react";
import ReactComponent from "../lib/ReactComponent.es";

const ReactComponentContainer = () => (
  <div>
    <ReactComponent title="Bad Deadpool... Good Deadpool!" />
  </div>
);
storiesOf("ReactComponent", module).add("ReactComponent", () => (
  <ReactComponentContainer />
));
```

### How to create/build the my own component?

Simply run the command and it will clean & rollup & preparing the storybook. Simply creating the lib and dist files.
You will serve this lib file on npm or any register.

```sh
    npm run build
```

## What's Included

- Rollup and Babel system for bundling the library in ES5 & ES6
- Awesome testing example tool: **Storybook**
- Prettier, ESLint and Stylelint for code formatting/linting
- SASS support

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Library Boilerplate is available under the MIT license. See the LICENSE file for more info.
