"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { ellipsis } = specialSymbols;

export default class CallAheadModifierRuleDefinition extends Definition {
  static fromNothing() {
    const content = ellipsis,  ///
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          terminalSymbolPart = TerminalSymbolPart.fromContent(content),
          parts = [
            noWhitespacePart,
            terminalSymbolPart
          ],
          precedence = null,
          callAheadModifierRuleDefinition = new CallAheadModifierRuleDefinition(parts, precedence);

    return callAheadModifierRuleDefinition;
  }
}
