"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { NO_WHITESPACE } = specialSymbols;

export default class NoWhitespacePartDefinition extends Definition {
  static fromNothing() {
    const content = NO_WHITESPACE,  ///
          terminalSymbolPart = TerminalSymbolPart.fromContent(content),
          parts = [
            terminalSymbolPart
          ],
          precedence = null,
          noWhitespacePartDefinition = new NoWhitespacePartDefinition(parts, precedence);

    return noWhitespacePartDefinition;
  }
}
