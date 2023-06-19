"use strict";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

export default class QuantifierRuleDefinition extends Definition {
  static fromSpecialSymbol(specialSymbol) {
    const content = specialSymbol,  ///
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          terminalSymbolPart = TerminalSymbolPart.fromContent(content),
          parts = [
            noWhitespacePart,
            terminalSymbolPart
          ],
          precedence = null,
          quantifierRuleDefinition = new QuantifierRuleDefinition(parts, precedence);

    return quantifierRuleDefinition;
  }
}
