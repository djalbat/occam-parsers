"use strict";

export function isValid(frame) {
  const valid = (frame !== null);

  return valid;
}

export function isInvalid(frame) {
  const invalid = (frame === null);

  return invalid;
}
