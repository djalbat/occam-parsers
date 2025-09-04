"use strict";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import StringLiteralPart from "../part/terminal/stringLiteral";

export default class QuantifierRuleDefinition extends Definition {
  static fromSpecialSymbol(specialSymbol) {
    const content = specialSymbol,  ///
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          stringLiteralPart = StringLiteralPart.fromContent(content),
          parts = [
            noWhitespacePart,
            stringLiteralPart
          ],
          precedence = null,
          quantifierRuleDefinition = new QuantifierRuleDefinition(parts, precedence);

    return quantifierRuleDefinition;
  }
}
