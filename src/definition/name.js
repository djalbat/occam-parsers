"use strict";

import { types } from "occam-lexers";

import Definition from "../definition";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

const { nameType } = types;

export default class NameDefinition extends Definition {
  static fromNothing() {
    const nameSignificantTokenType = nameType,  ///
          nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType),
          parts = [
            nameSignificantTokenTypePart
          ],
          precedence = null,
          nameDefinition = new NameDefinition(parts, precedence);

    return nameDefinition;
  }
}
