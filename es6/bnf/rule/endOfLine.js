"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import EndOfLineNode from "../node/endOfLine";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { EndOfLineRuleName } from "../ruleNames";

const { END_OF_LINE } = specialSymbols;

class EndOfLineRule extends Rule {
  constructor() {
    const endOfLineTerminalSymbolContent = END_OF_LINE,
          endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
          name = EndOfLineRuleName,
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          Node = EndOfLineNode;

    super(name, definitions, Node)
  }
}

module.exports = EndOfLineRule;
