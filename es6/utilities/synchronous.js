"use strict";

export function whilst(callback) {
  for(;;) {
    const terminate = callback();

    if (terminate) {
      return;
    }
  }
}
