"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { ellipsis } = specialSymbols;

export default class LookAheadModifierRuleDefinition extends Definition {
  static fromNothing() {
    const content = ellipsis,  ///
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          terminalSymbolPart = TerminalSymbolPart.fromContent(content),
          parts = [
            noWhitespacePart,
            terminalSymbolPart
          ],
          precedence = null,
          lookAheadModifierRuleDefinition = new LookAheadModifierRuleDefinition(parts, precedence);

    return lookAheadModifierRuleDefinition;
  }
}
