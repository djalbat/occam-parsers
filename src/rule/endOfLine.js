"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import EndOfLineBNFNode from "../node/bnf/endOfLine";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { endOfLineRuleName } from "../ruleNames";

const { END_OF_LINE } = specialSymbols;

export default class EndOfLineRule extends Rule {
  static fromNothing() {
    const content = END_OF_LINE,
          endOfLineTerminalSymbolDefinition = TerminalSymbolDefinition.fromContent(content),
          name = endOfLineRuleName, ///
          ambiguous = false,
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          NonTerminalNode = EndOfLineBNFNode, ///
          endOfLineRule = new EndOfLineRule(name, ambiguous, definitions, NonTerminalNode);

    return endOfLineRule;
  }
}
