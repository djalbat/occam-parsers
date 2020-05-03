"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { exclamationMark } = specialSymbols;

class LookAheadModifierRuleDefinition extends Definition {
  constructor() {
    const content = exclamationMark,  ///
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = LookAheadModifierRuleDefinition;
