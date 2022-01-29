"use strict";

import { characters } from "necessary";

import { EMPTY_STRING } from "../constants";

const { SPACE_CHARACTER } = characters;

export function paddingFromPaddingLength(paddingLength) {
  let padding = EMPTY_STRING;

  for (let position = 0; position < paddingLength; position++) {
    padding += SPACE_CHARACTER;
  }

  return padding;
}
