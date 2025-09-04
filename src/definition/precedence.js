"use strict";

import { types, specialSymbols } from "occam-lexers";

import Definition from "../definition";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import StringLiteralPart from "../part/terminal/stringLiteral";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

const { numberType } = types,
      { openBracket, closeBracket } = specialSymbols;

export default class PrecedenceDefinition extends Definition {
  static fromNothing() {
    const significantTokenType = numberType,  ///
          openBracketStringLiteralContent = openBracket, ///
          closeBracketStringLiteralContent = closeBracket, ///
          openBracketStringLiteralPart = StringLiteralPart.fromContent(openBracketStringLiteralContent),
          closeBracketStringLiteralPart = StringLiteralPart.fromContent(closeBracketStringLiteralContent),
          numberSignificantTokenTypePart = SignificantTokenTypePart.fromSignificantTokenType(significantTokenType),
          optionalNumberSignificantTokenTypePartPart = OptionalPartPart.fromPart(numberSignificantTokenTypePart),
          parts = [
            openBracketStringLiteralPart,
            optionalNumberSignificantTokenTypePartPart,
            closeBracketStringLiteralPart
          ],
          precedence = null,
          precedenceDefinition = new PrecedenceDefinition(parts, precedence);

    return precedenceDefinition;
  }
}
