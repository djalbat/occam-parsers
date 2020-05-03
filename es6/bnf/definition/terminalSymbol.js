"use strict";

const Definition = require("../definition"),
      TerminalSymbolPart = require("../part/terminal/terminalSymbol");

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
