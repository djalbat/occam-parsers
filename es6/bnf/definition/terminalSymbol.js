"use strict";

import Definition from "../definition";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

class TerminalSymbolDefinition extends Definition {
  constructor(content) {
    const terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            terminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = TerminalSymbolDefinition;
