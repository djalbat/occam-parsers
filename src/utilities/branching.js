"use strict";

export function cut(...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  return (...forwardArguments) => {
    forwardArguments.pop(); ///

    return forward(...forwardArguments, back);
  };
}

export function some(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index) {
    if (index === length) {
      return back();
    }

    const element = array[index];

    return callback(
      element,
      ...initialArguments,
      forward,
      (exception) => {
        if (exception) {
          return back(exception);
        }

        return next(index + 1);
      },
      index
    );
  }

  const index = 0;

  return next(index);
}

export function every(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}
