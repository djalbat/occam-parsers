"use strict";

import Definition from "../definition";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

export default class TerminalSymbolDefinition extends Definition {
  static fromContent(content) {
    const terminalSymbolPart = TerminalSymbolPart.fromContent(content),
          parts = [
            terminalSymbolPart
          ],
          precedence = null,
          terminalSymbolDefinition = new TerminalSymbolDefinition(parts, precedence);

    return terminalSymbolDefinition;
  }
}
