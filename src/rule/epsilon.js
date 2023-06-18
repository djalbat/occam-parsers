"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import EpsilonBNFNode from "../node/bnf/epsilon";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { epsilonRuleName } from "../ruleNames";

const { epsilon } = specialSymbols;

export default class EpsilonRule extends Rule {
  static fromNothing() {
    const content = epsilon, ///
          epsilonTerminalSymbolDefinition = TerminalSymbolDefinition.fromContent(content),
          name = epsilonRuleName, ///
          ambiguous = false,
          definitions = [
            epsilonTerminalSymbolDefinition
          ],
          NonTerminalNode = EpsilonBNFNode, ///
          epsilonRule = new EpsilonRule(name, ambiguous, definitions, NonTerminalNode);

    return epsilonRule;
  }
}
