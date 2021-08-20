"use strict";

import { EMPTY_STRING, SINGLE_SPACE } from "../constants";

export function paddingFromPaddingLength(paddingLength) {
  let padding = EMPTY_STRING;

  for (let position = 0; position < paddingLength; position++) {
    padding += SINGLE_SPACE;
  }

  return padding;
}
