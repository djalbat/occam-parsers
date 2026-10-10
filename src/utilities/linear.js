"use strict";

export function some(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  let success = false,
      finalArguments;

  for (let index = 0; index < length; index++) {
    const element = array[index];

    callback(element, ...initialArguments, (...callbackArguments) => {
      callbackArguments.pop();

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

export function every(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  let success = true,
      nextArguments = initialArguments, ///
      finalArguments;

  for (let index = 0; index < length; index++) {
    const element = array[index];

    callback(element, ...nextArguments, (...callbackArguments) => {
      callbackArguments.pop();

      nextArguments = callbackArguments;  ///
    }, () => {
      success = false;
    });

    if (!success) {
      break;
    }
  }

  if (!success) {
    return back();
  }

  finalArguments = nextArguments; //

  return forward(...finalArguments, back);
}

export function repeatedly(element, limit, strict, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  let count = 0,
      success = true,
      nextArguments = initialArguments, ///
      finalArguments;

  while (count < limit) {
    callback(element, ...nextArguments, (...callbackArguments) => {
      callbackArguments.pop();

      nextArguments = callbackArguments;  ///
    }, () => {
      success = false;
    });

    if (!success) {
      break;
    }

    count++;
  }

  const initial = (count === 0);

  if (strict && initial) {
    return back();
  }

  finalArguments = nextArguments; //

  return forward(...finalArguments, back);
}

export function trampoline(callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  let nextCut = null;

  callback(...initialArguments, forward, bounceBack);

  while (nextCut) {
    const cut = nextCut; ///

    nextCut = null;

    const cutArguments = cut.getArguments(),
          forward = cutArguments.pop();

    forward(...cutArguments, bounceBack);
  }

  function bounceBack(cut) {
    if (!cut) {
      return back();
    }

    nextCut = cut; ///
  }
}
