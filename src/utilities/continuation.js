"use strict";

export function cut(...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  return (...forwardArguments) => {
    forwardArguments.pop(); ///

    return forward(...forwardArguments, back);
  };
}

export function one(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, count, ...nextArguments) {
    if (index === length) {
      if (count === 0) {
        return back();
      }

      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...initialArguments,
      (...forwardArguments) => {
        if (count === 1) {
          return back();
        }

        forwardArguments.pop(); ///

        return next(index + 1, count + 1, ...forwardArguments);
      },
      (exception) => {
        if (exception) {
          return back(exception);
        }

        return next(index + 1, count, ...nextArguments);
      },
      index
    );
  }

  const index = 0,
        count = 0;

  return next(index, count);
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

export function each(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, count, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      if (count === 0) {
        return back();
      }

      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, count + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0,
        count = 0;

  return next(index, count, ...initialArguments, back);
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

export function isolate(callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  return callback(...initialArguments, (...callbackArguments) => {
    const back = callbackArguments.pop();

    return forward(...initialArguments, back);
  }, back);
}
