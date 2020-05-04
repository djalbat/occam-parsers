"use strict";

import { arrayUtilities } from "necessary";

export const { first, second, third, last, concat, forwardsSome, backwardsSome } = arrayUtilities;

export function even(array) { return array.filter((entry, index) => isEven(index)); }

export function allButFirst(array) { return discardNth(array, 0); }

export function allButFirstAndLast(array) { return discardNth(discardNth(array, -1), 0); }

function discardNth(array, n) {
  array = array.slice();  ///

  array.splice(n, 1);

  return array;
}

function isEven(index) {
  const even = (Math.floor(index/2) === index/2);

  return even;
}
