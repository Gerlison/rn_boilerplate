[![npm (scoped)](https://img.shields.io/npm/v/@gerlison/rn-boilerplate?style=social)](https://www.npmjs.com/package/@gerlison/rn-boilerplate)
[![GitHub](https://img.shields.io/github/license/Gerlison/rn_boilerplate?style=social)](https://github.com/Gerlison/rn_boilerplate/blob/master/LICENSE)

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
  - When working on large projects, the way it was configured on the initial stage can take you to a big headache. To avoid that, I decided to develop my own folder structure based on my experience with other project structures.
  - As you can see in the tree below, I chose to have a **modules** folder. This folder would be responsible for the features. So let`s supose you have an _authentication_ feature. It'd be one of the folders inside modules.

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
│             └───slices/
│             └───sagas/
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
│    └───slices/
│    └───sagas/
│    │   index.js
```

- Easy modules import with babel-module-resolver preconfigured
  - To avoid pain of having large absolute pathes on multiple imports, I've implemented the babel-module-resolver.
  - With that, you can import your files using the alias `@modules/`, `@core/`, etc.
- Redux ready to go.
  - Redux is explained by it self.
  - Here I've implemented it following a little modified duck pattern. The difference in this template, is that each feature have it's own slices and sagas. You can see that in the tree above.
- Theme provider integrated with styled-components, for easy theme management
  - An amazing tool that gives to your component so much more intuitivity. It has also the power of letting you manage theme colors shared in the entire app. Making it easier to use the colors without import any files.
  - You can customize it to share whatever you want. But be careful to not overload.
- Configured Reactotron with Redux integration
  - One of the pains when working with react-native is debug API requests and redux store. To help with that, the template comes with **reactotron**. You just need to have it installed on your computer.
- A set of npm scripts to make your life easier
  - `android` -> run for android
  - `ios` -> run for ios
  - `start` -> starts the JsBundler
  - `cleanModules` -> delete and reinstall all libraries
  - `cleanWatchman` -> clear watchman cache
  - `cleanAndroidCache` -> clear gradlew cache
  - `clearAndroid` -> run android with all cache cleaned and reinstalled libs
  - `clearIos` -> run ios with all cache cleaned and reinstalled libs and pods
  - `test` -> run jest
  - `lint` -> run eslint
  - `linkDevice` -> run reverse adb on both ports, 8081 and 9090

## Built with

- [React-Native](https://facebook.github.io/react-native/) - Build the native app using JavaScript and React
- [React-Navigation](https://reactnavigation.org/docs/en/getting-started.html) - Router
- [Redux-Toolkit](https://redux-toolkit.js.org/) - React State Manager
- [Redux-Saga](https://redux-saga.js.org/) - Saga middleware for Redux.
- [Axios](https://github.com/axios/axios) - HTTP Client
- [ESlint](https://eslint.org/) - Linter
- [Styled-Components](https://www.styled-components.com/) - Styles
- [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) - Icons
- [Reactotron](https://github.com/infinitered/reactotron) Tool for inspecting your React JS and React Native apps.

## Author

I don't have a lot of things to tell about myself. If you're curious about who I am, why don't you checkout my [Linkedin](https://www.linkedin.com/in/francisco-gerlison-223791152/) and we can have a cup of coffe?

You can also check my [github](https://github.com/Gerlison/) profile

It will be a pleasure to exchange an idea with you :)
