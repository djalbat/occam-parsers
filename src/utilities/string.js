"use strict";

import { SPACE_CHARACTER } from "../constants";

export function marginStringFromMarginWidth(marginWidth) {
  const marginString = SPACE_CHARACTER.repeat(marginWidth);

  return marginString;
}
