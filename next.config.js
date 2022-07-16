const withLess = require('next-with-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/styles/variables.less'),
    'utf8'
  )
);

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
      localIdentName: '[path]___[local]___[hash:base64:5]',
    },
  },
  reactStrictMode: true,
})
