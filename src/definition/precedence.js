"use strict";

import { types, specialSymbols } from "occam-lexers";

import Definition from "../definition";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

const { numberType } = types,
      { openBracket, closeBracket } = specialSymbols;

export default class PrecedenceDefinition extends Definition {
  static fromNothing() {
    const significantTokenType = numberType,  ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          openBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = TerminalSymbolPart.fromContent(closeBracketTerminalSymbolContent),
          numberSignificantTokenTypePart = SignificantTokenTypePart.fromSignificantTokenType(significantTokenType),
          optionalNumberSignificantTokenTypePartPart = OptionalPartPart.fromPart(numberSignificantTokenTypePart),
          parts = [
            openBracketTerminalSymbolPart,
            optionalNumberSignificantTokenTypePartPart,
            closeBracketTerminalSymbolPart
          ],
          precedence = null,
          precedenceDefinition = new PrecedenceDefinition(parts, precedence);

    return precedenceDefinition;
  }
}
