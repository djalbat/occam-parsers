"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import EndOfLineBNFNode from "../../node/bnf/endOfLine";
import TerminalSymbolDefinition from "../../definition/terminalSymbol";

import { endOfLineRuleName } from "../../ruleNames";

const { endOfLine } = specialSymbols;

export default class EndOfLineBNFRule extends Rule {
  static fromNothing() {
    const content = endOfLine,
          endOfLineTerminalSymbolDefinition = TerminalSymbolDefinition.fromContent(content),
          name = endOfLineRuleName, ///
          opacity = null,
          definitions = [
            endOfLineTerminalSymbolDefinition
          ],
          NonTerminalNode = EndOfLineBNFNode, ///
          endOfLineRule = new EndOfLineBNFRule(name, opacity, definitions, NonTerminalNode);

    return endOfLineRule;
  }
}
