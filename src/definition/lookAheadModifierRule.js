"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { ellipsis } = specialSymbols;

export default class LookAheadModifierRuleDefinition extends Definition {
  constructor() {
    const content = ellipsis,  ///
          noWhitespacePart = new NoWhitespacePart(),
          terminalSymbolPart = new TerminalSymbolPart(content),
          parts = [
            noWhitespacePart,
            terminalSymbolPart
          ];

    super(parts)
  }
}