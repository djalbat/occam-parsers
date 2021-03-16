"use strict";

import Definition from "../definition";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

export default class SignificantTokenTypeDefinition extends Definition {
  constructor(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType),
          parts = [
            significantTokenTypePart
          ];
    
    super(parts)
  }
}
