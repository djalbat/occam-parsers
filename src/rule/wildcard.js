"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import WildcardBNFNode from "../node/bnf/wildcard";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { wildcardRuleName } from "../ruleNames";

const { wildcard } = specialSymbols;

export default class WildcardRule extends Rule {
  static fromNothing() {
    const content = wildcard, ///
          wildcardTerminalSymbolDefinition = TerminalSymbolDefinition.fromContent(content),
          name = wildcardRuleName,  ///
          ambiguous = false,
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          NonTerminalNode = WildcardBNFNode,  ///
          wildcardRule = new WildcardRule(name, ambiguous, definitions, NonTerminalNode);

    return wildcardRule;
  }
}
