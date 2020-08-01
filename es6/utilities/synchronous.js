"use strict";

export function whilst(callback) {
  for(let count = 0; count < Infinity; count++) {
    const terminate = callback(count);

    if (terminate) {
      return;
    }
  }
}
