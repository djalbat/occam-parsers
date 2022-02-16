"use strict";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

export default class QuantifierRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const content = terminalSymbolContent,  ///
          noWhitespacePart = new NoWhitespacePart(),
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            noWhitespacePart,
            terminalSymbolPart
          ];

    super(parts)
  }
}
