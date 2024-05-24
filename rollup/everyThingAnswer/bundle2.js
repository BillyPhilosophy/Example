'use strict';

var _ = require('lodash');

var index = 42;

function main () {
  console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
  console.log('the answer is ' + index);
}

module.exports = main;
