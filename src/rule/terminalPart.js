"use strict";

import Rule from "../rule";
import RuleNameDefinition from "../definition/ruleName";
import TerminalPartBNFNode from "../node/bnf/part/terminal";

import { epsilonRuleName,
         wildcardRuleName,
         endOfLineRuleName,
         terminalPartRuleName,
         terminalSymbolRuleName,
         regularExpressionRuleName,
         significantTokenTypeRuleName } from "../ruleNames";

export default class TerminalPartRule extends Rule {
  static fromNothing() {
    const name = terminalPartRuleName,
          epsilonRuleNameDefinition = RuleNameDefinition.fromRuleName(epsilonRuleName),
          wildcardRuleNameDefinition = RuleNameDefinition.fromRuleName(wildcardRuleName),
          endOfLineRuleNameDefinition = RuleNameDefinition.fromRuleName(endOfLineRuleName),
          terminalSymbolRuleNameDefinition = RuleNameDefinition.fromRuleName(terminalSymbolRuleName),
          regularExpressionRuleNameDefinition = RuleNameDefinition.fromRuleName(regularExpressionRuleName),
          significantTokenTypeRuleNameDefinition = RuleNameDefinition.fromRuleName(significantTokenTypeRuleName),
          ambiguous = false,
          definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition,
            epsilonRuleNameDefinition
          ],
          NonTerminalNode = TerminalPartBNFNode,
          terminalPartRule = new TerminalPartRule(name, ambiguous, definitions, NonTerminalNode);

    return terminalPartRule;
  }
}
