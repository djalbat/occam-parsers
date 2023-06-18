"use strict";

import { types, specialSymbols } from "occam-lexers";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";
import SignificantTokenTypePart from "../part/terminal/significantTokenType";

const { numberType } = types,
      { openBracket, closeBracket } = specialSymbols;

export default class PrecedenceDefinition extends Definition {
  static fromNothing() {
    const numberSignificantTokenType = numberType,  ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          noWhitespacePart = new NoWhitespacePart(),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          numberSignificantTokenTypePart = new SignificantTokenTypePart(numberSignificantTokenType),
          parts = [
            openBracketTerminalSymbolPart,
            noWhitespacePart,
            numberSignificantTokenTypePart,
            noWhitespacePart,
            closeBracketTerminalSymbolPart
          ],
          precedence = null,
          precedenceDefinition = new PrecedenceDefinition(parts, precedence);

    return precedenceDefinition;
  }
}
