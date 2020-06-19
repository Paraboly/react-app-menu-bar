<img alt="AppMenuBar" src="assets/logo.png" width="1050"/>

[![Beautiful & Easy to use AppMenuBar for React by Paraboly](https://img.shields.io/badge/-Beautiful%20%26%20Easy%20to%20use%20AppMenuBar%20for%20React%20by%20Paraboly-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-app-menu-bar)

![Platform - Web](https://img.shields.io/badge/platform-web-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React AppMenuBar"
        src="assets/Screenshots/react-app-menu-bar.png" />
</p>

<p align="center">
  <img alt="React AppMenuBar Default"
        src="assets/Screenshots/react-app-menu-bar-default.gif" />
  <img alt="React AppMenuBar Custom Usage"
        src="assets/Screenshots/react-app-menu-bar-usage.gif" />
</p>

# Install

```sh
npm i @paraboly/react-app-menu-bar
```

# Usage

Please check the storybook's example to get the usage of the library.
You can simply clone the project and `npm i && npm start` to check the how to use the library with alive example.

```js
import AppMenuBar, { AppButton } from "@paraboly/react-app-menu-bar";

<AppMenuBar title="Laboratory Apps">
  <AppButton
    text="Science"
    imageSource={scienceImageSource}
    onPress={() => {}}
  />
  <AppButton
    text="Research"
    imageSource={researchImageSource}
    onPress={() => {}}
  />
  <AppButton text="Flask" imageSource={flaskImageSource} onPress={() => {}} />
  <AppButton
    text="Laboratory"
    imageSource={laboratoryImageSource}
    onPress={() => {}}
  />
  <AppButton
    text="Experiments"
    imageSource={experimentsImageSource}
    onPress={() => {}}
  />
  <AppButton
    text="Micro Organism"
    imageSource={microorganismImageSource}
    onPress={() => {}}
  />
</AppMenuBar>;
```

## Author

FreakyCoder, kurayogun@gmail.com

## License

AppMenuBar is available under the MIT license. See the LICENSE file for more info.
