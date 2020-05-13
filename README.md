[![npm](https://img.shields.io/npm/v/@gerlison/rn-boilerplate)](https://www.npmjs.com/package/@gerlison/rn-boilerplate) [![License: MIT](https://img.shields.io/github/license/nd-02110114/goofi-mobile.svg)](https://opensource.org/licenses/MIT)

# REACT-NATIVE BOILERPLATE

A react-native template with essencial libraries, configurations and facilities for fresh projects.

## Motivation

I've created this template to facilitate the creation of fresh react-native projects.
Every time I need to create a project, I need to set a lot of repeatitive configuration, like setup for redux, installation of dependencies, folder structure (and how it sucks), babel module resolver and eslint. To resolve it all, I'm developing this project, with that things preconfigured.

## Installing / Getting started

> I'm considering that you have a fully configured [react-native environment](https://facebook.github.io/react-native/docs/getting-started).

To create a project with this template just run the following on your terminal:

```shell
$ npx @react-native-community/cli init [project_name] --template @gerlison/rn-boilerplate
```

or with react-native-cli if you prefer

```shell
$ npx react-native init [project_name] --template @gerlison/rn-boilerplate
```

That's all. Now you just need to install the dependendices and start coding. Follow next step for instructions.

### Initial Configuration

You've just created your project, now to install all dependencies it requires, run:

```shell
$ cd [project_name]/

// npm or yarn
$ [packagemanager] install
```

Ok, let's run the project

> For project runs properly, it needs an emulator or device connected.

```shell
$ yarn android

// or
$ yarn ios
```

## Features

What's all the bells and whistles this project can perform?

- Folder structure built to grow
- Easy modules import with babel-module-resolver preconfigured
- Redux ready to go.
- Theme provider integrated with styled-components, for easy theme management
- Configured Reactotron with Redux integration

#### Folder structure

```
src
│
└───assets
│   └───images/
│   └───icons/
│   └───fonts/
└───modules
│   └───ModuleName
│        └───services/
│             |   api.js
│        └───store/
│             └───ducks/
│             └───useCases/
│             │   index.js
│        └───components/
│        └───screens/
│        │   index.js
└───navigation
│    │   index.js
└───shared
│   └───core/
│   └───styles
│        │   colors.js
│        │   metrics.js
│        │   fonts.js
│   └───helpers/
│   └───services/
│        |   api.js
|        |   reactotron.js
└───store/
│    └───ducks/
│    └───useCases/
│    │   index.js
```

## Built with

- [React-Native](https://facebook.github.io/react-native/) - Build the native app using JavaScript and React
- [React-Navigation](https://reactnavigation.org/docs/en/getting-started.html) - Router
- [Redux](https://redux.js.org/) - React State Manager
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux.
- [Axios](https://github.com/axios/axios) - HTTP Client
- [ESlint](https://eslint.org/) - Linter
- [Styled-Components](https://www.styled-components.com/) - Styles
- [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) - Icons
- [Reactotron](https://github.com/infinitered/reactotron) Tool for inspecting your React JS and React Native apps.

## Author

I don't have a lot of things to tell about myself. If you're curious about who I am, why don't you checkout my [Linkedin](https://www.linkedin.com/in/francisco-gerlison-223791152/) and we can have a cup of coffe?

You can also email me in `franciscojerlison1@gmail.com`, or check my [github](https://github.com/Gerlison/) profile

It will be a pleasure to exchange an idea with you :)
