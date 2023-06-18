"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { exclamationMark } = specialSymbols;

export default class AmbiguousModifierRuleDefinition extends Definition {
  static fromNothing() {
    const content = exclamationMark,  ///
          noWhitespacePart = new NoWhitespacePart(),
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            noWhitespacePart,
            terminalSymbolPart
          ],
          precedence = null,
          ambiguousModifierRuleDefinition = new AmbiguousModifierRuleDefinition(parts, precedence);

    return ambiguousModifierRuleDefinition;
  }
}
