"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import WildcardBNFNode from "../../node/bnf/wildcard";
import TerminalSymbolDefinition from "../../definition/terminalSymbol";

import { wildcardRuleName } from "../../ruleNames";

const { wildcard } = specialSymbols;

export default class WildcardBNFRule extends Rule {
  static fromNothing() {
    const content = wildcard, ///
          wildcardTerminalSymbolDefinition = TerminalSymbolDefinition.fromContent(content),
          name = wildcardRuleName,  ///
          opacity = null,
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          NonTerminalNode = WildcardBNFNode,  ///
          wildcardRule = new WildcardBNFRule(name, opacity, definitions, NonTerminalNode);

    return wildcardRule;
  }
}
