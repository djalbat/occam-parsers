"use strict";

import { characters } from "necessary";

const { SPACE_CHARACTER } = characters;

export function marginStringFromMarginWidth(marginWidth) {
  const marginString = SPACE_CHARACTER.repeat(marginWidth);

  return marginString;
}
