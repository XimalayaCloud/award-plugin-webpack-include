# award-plugin-webpack-include ∙ [![version](https://img.shields.io/npm/v/award-plugin-webpack-include.svg)](https://www.npmjs.com/package/award-plugin-webpack-include)

> 自定义控制解析`node_modules`中一些特殊的包，和webpack的include的逻辑一致

```js
// award.config.js
const path = require('path');

export default {
  plugins: [
    [
      'award-plugin-webpack-include',
      // include 支持函数、字符串、正则表达式、数组
      {
        // include: function (filepath) {
        //   return false;
        // }
        // include: path.join(__dirname, '..', '..', 'node_modules')
        // include: /node_modules/
        include: [
          function (filepath) {
            return false;
          },
          /test/,
          'test'
        ]
      }
    ]
  ]
};
```