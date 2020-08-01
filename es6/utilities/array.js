"use strict";

import { arrayUtilities } from "necessary";

export const { first, second, third, last, filter, forwardsSome, backwardsSome } = arrayUtilities;

export function even(array) { return array.filter((entry, index) => isEven(index)); }

export function push(array1, elementOrArray2) {
  const array2 = guaranteeArray(elementOrArray2);

  Array.prototype.push.apply(array1, array2);
}

export function unshift(array1, elementOrArray2) {
  const array2 = guaranteeArray(elementOrArray2);

  Array.prototype.unshift.apply(array1, array2);
}

export function concat(array1, ...elementOrArray2Array) {
  elementOrArray2Array.forEach((elementOrArray2) => {
    const array2 = guaranteeArray(elementOrArray2);

    Array.prototype.push.apply(array1, array2);
  });
}

export function allButFirst(array) {
  array = array.slice();  ///

  array.shift();

  return array;
}

export function allButFirstAndLast(array) {
  array = array.slice();  ///

  array.shift();

  array.pop();

  return array;
}

function isEven(index) {
  const even = (Math.floor(index/2) === index/2);

  return even;
}

function guaranteeArray(elementOrArray) {
  const array = (elementOrArray instanceof Array) ?
                   elementOrArray :
                   [ elementOrArray ];

  return array;
}