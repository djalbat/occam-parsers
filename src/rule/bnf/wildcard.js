"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import TerminalSymbolDefinition from "../../definition/terminalSymbol";

import { WILDCARD_RULE_NAME } from "../../ruleNames";

const { wildcard } = specialSymbols;

export default class WildcardBNFRule extends Rule {
  static fromNothing() {
    const content = wildcard, ///
          wildcardTerminalSymbolDefinition = TerminalSymbolDefinition.fromContent(content),
          name = WILDCARD_RULE_NAME,  ///
          opacity = null,
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          wildcardRule = new WildcardBNFRule(name, opacity, definitions);

    return wildcardRule;
  }
}
