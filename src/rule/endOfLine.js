"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import EndOfLineBNFNode from "../bnf/node/endOfLine";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { EndOfLineRuleName } from "../ruleNames";

const { END_OF_LINE } = specialSymbols;

export default class EndOfLineRule extends Rule {
  constructor() {
    const endOfLineTerminalSymbolContent = END_OF_LINE,
          endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
          name = EndOfLineRuleName,
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          Node = EndOfLineBNFNode;

    super(name, definitions, Node)
  }
}
