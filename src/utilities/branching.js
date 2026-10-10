"use strict";

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
      (cut) => {
        if (cut) {
          return back(cut);
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
        const back = forwardArguments.pop();

        return next(index + 1, ...forwardArguments, back);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function repeatedly(element, limit, strict, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  function next(count, ...nextArguments) {
    const back = nextArguments.pop();

    if (count === limit) {
      return forward(...nextArguments, back);
    }

    const initial = (count === 0);

    return callback(
      element,
      ...nextArguments,
      (...forwardArgumemts) => {
        const back = forwardArgumemts.pop();

        return next(count + 1, ...forwardArgumemts, back);
      },
      (cut) => {
        if (cut) {
          return back(cut);
        }

        if (strict && initial) {
          return back();
        }

        return forward(...nextArguments, back)
      }
    );
  }

  const count = 0;

  return next(count, ...initialArguments, back);
}
