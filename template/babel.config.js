module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          '~icons': './src/assets/icons',
          '~fonts': './src/assets/fonts',
          '~images': './src/assets/images',
          '~shared': './src/shared',
        },
      },
    ],
  ],
};
