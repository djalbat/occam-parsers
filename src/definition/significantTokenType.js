"use strict";

import Definition from "../definition";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

export default class SignificantTokenTypeDefinition extends Definition {
  static fromSignificantTokenType(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType),
          parts = [
            significantTokenTypePart
          ],
          precedence = null,
          significantTokenTypeDefinition = new SignificantTokenTypeDefinition(parts, precedence);

    return significantTokenTypeDefinition;
  }
}
