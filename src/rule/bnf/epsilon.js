"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import TerminalSymbolDefinition from "../../definition/terminalSymbol";

import { EPSILON_RULE_NAME } from "../../ruleNames";

const { epsilon } = specialSymbols;

export default class EpsilonBNFRule extends Rule {
  static fromNothing() {
    const content = epsilon, ///
          epsilonTerminalSymbolDefinition = TerminalSymbolDefinition.fromContent(content),
          name = EPSILON_RULE_NAME, ///
          opacity = null,
          definitions = [
            epsilonTerminalSymbolDefinition
          ],
          epsilonRule = new EpsilonBNFRule(name, opacity, definitions);

    return epsilonRule;
  }
}
