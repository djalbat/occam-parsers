"use strict";

import { cutFrame } from "../frame";

export function isValid(frame) {
  const valid = (frame !== null) && (frame !== cutFrame);

  return valid;
}

export function isInvalid(frame) {
  const invalid = (frame === null) || (frame === cutFrame);

  return invalid;
}
