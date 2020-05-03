"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { NO_WHITESPACE } = specialSymbols;

class NoWhitespacePartDefinition extends Definition {
  constructor() {
    const content = NO_WHITESPACE,
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = NoWhitespacePartDefinition;
