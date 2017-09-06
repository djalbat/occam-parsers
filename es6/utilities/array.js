'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function keepFirst(array) { return keepNth(array, 0); }

function keepSecond(array) { return keepNth(array, 1); }

function keepLast(array) { return keepNth(array, -1); }

function discardFirst(array) { return discardNth(array, 0); }

function discardSecond(array) { return discardNth(array, 1); }

function discardLast(array) { return discardNth(array, -1); }

function discardLastThenFirst(array) { return discardNth(discardNth(array, -1), 0); }

function discardFourthThenSecond(array) { return discardNth(discardNth(array, 3), 1); }

function discardFifthThenSecond(array) { return discardNth(discardNth(array, 4), 1); }

function discardOdd(array) { return array.filter(function(entry, index) { return isEven(index); }); }

module.exports = Object.assign(arrayUtilities, {
  keepFirst: keepFirst,
  keepSecond: keepSecond,
  keepLast: keepLast,
  discardFirst: discardFirst,
  discardSecond: discardSecond,
  discardLast: discardLast,
  discardLastThenFirst: discardLastThenFirst,
  discardFourthThenSecond: discardFourthThenSecond,
  discardFifthThenSecond: discardFifthThenSecond,
  discardOdd: discardOdd
});

function keepNth(array, n) {
  array = array.slice();

  return array.splice(n, 1);
}

function discardNth(array, n) {
  array = array.slice();

  array.splice(n, 1);

  return array;
}

function isEven(index) {
  const even = (Math.floor(index/2) === index/2);

  return even;
}
