'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function even(array) { return array.filter(function(entry, index) { return isEven(index); }); }

function allButFirst(array) { return discardNth(array, 0); }

function allButFirstAndLast(array) { return discardNth(discardNth(array, -1), 0); }

module.exports = Object.assign(arrayUtilities, {
  even,
  allButFirst,
  allButFirstAndLast
});

function discardNth(array, n) {
  array = array.slice();  ///

  array.splice(n, 1);

  return array;
}

function isEven(index) {
  const even = (Math.floor(index/2) === index/2);

  return even;
}
