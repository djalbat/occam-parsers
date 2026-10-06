"use strict";

export function some(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  let success = false;

  let finalArguments;

  for (let index = 0; index < length; index++) {
    const element = array[index];

    callback(element, ...initialArguments, (...callbackArguments) => {
      finalArguments = callbackArguments; ///

      success = true;
    }, () => {
      ///
    });

    if (success) {
      break;
    }
  }

  if (!success) {
    return back();
  }

  return forward(...finalArguments, back);
}