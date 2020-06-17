"use strict";

import { arrayUtilities } from "necessary";

export const { first, second, third, last, concat, forwardsSome, backwardsSome } = arrayUtilities;

export function even(array) { return array.filter((entry, index) => isEven(index)); }

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
