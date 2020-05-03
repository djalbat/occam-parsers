"use strict";

import { types } from "occam-lexers";

import Definition from "../definition";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

const { nameType } = types;

export default class NameDefinition extends Definition {
  constructor() {
    const nameSignificantTokenType = nameType,  ///
          nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType),
          parts = [
            nameSignificantTokenTypePart
          ];

    super(parts)
  }
}
