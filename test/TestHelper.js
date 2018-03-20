const chai = require('chai');
global.expect = chai.expect;

require('babel-register')({
  babelrc: false,
  presets: [
    [
      'env',
      {
        'modules': 'commonjs',
        'targets': {'node': '8.9'}
      }
    ]
  ],
  plugins: ['transform-object-rest-spread']
});
