const path = require('path');

export default {
  plugins: [
    [
      'award-plugin-webpack-include',
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
