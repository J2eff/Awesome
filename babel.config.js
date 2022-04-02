module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
          '@screens': './src/screens',
          '@navigator': './src/navigator',
          '@utils': './src/utils'
        },
        extensions: [".js"],
      },
    ],
  ],
};
