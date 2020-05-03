"use strict";

import Definition from "../definition";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

class SignificantTokenTypeDefinition extends Definition {
  constructor(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType),
          parts = [
            significantTokenTypePart
          ];
    
    super(parts)
  }
}

module.exports = SignificantTokenTypeDefinition;
