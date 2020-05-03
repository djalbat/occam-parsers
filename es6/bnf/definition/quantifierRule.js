"use strict";

import Definition from "../definition";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

export default class QuantifierRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const content = terminalSymbolContent,  ///
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            terminalSymbolPart
          ];

    super(parts)
  }
}
