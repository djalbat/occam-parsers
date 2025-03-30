"use strict";

import Rule from "../../rule";
import RuleNameDefinition from "../../definition/ruleName";
import TerminalPartBNFNode from "../../node/bnf/part/terminal";

import { epsilonRuleName,
         wildcardRuleName,
         endOfLineRuleName,
         terminalPartRuleName,
         terminalSymbolRuleName,
         noWhitespacePartRuleName,
         regularExpressionRuleName,
         startOfContentPartRuleName,
         significantTokenTypeRuleName } from "../../ruleNames";

export default class TerminalPartBNFRule extends Rule {
  static fromNothing() {
    const name = terminalPartRuleName,
          epsilonRuleNameDefinition = RuleNameDefinition.fromRuleName(epsilonRuleName),
          wildcardRuleNameDefinition = RuleNameDefinition.fromRuleName(wildcardRuleName),
          endOfLineRuleNameDefinition = RuleNameDefinition.fromRuleName(endOfLineRuleName),
          terminalSymbolRuleNameDefinition = RuleNameDefinition.fromRuleName(terminalSymbolRuleName),
          noWhitespacePartRuleNameDefinition = RuleNameDefinition.fromRuleName(noWhitespacePartRuleName),
          regularExpressionRuleNameDefinition = RuleNameDefinition.fromRuleName(regularExpressionRuleName),
          startOfContentPartRuleNameDefinition = RuleNameDefinition.fromRuleName(startOfContentPartRuleName),
          significantTokenTypeRuleNameDefinition = RuleNameDefinition.fromRuleName(significantTokenTypeRuleName),
          opacity = null,
          definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition,
            epsilonRuleNameDefinition,
            noWhitespacePartRuleNameDefinition,
            startOfContentPartRuleNameDefinition
          ],
          NonTerminalNode = TerminalPartBNFNode,  ///
          terminalPartRule = new TerminalPartBNFRule(name, opacity, definitions, NonTerminalNode);

    return terminalPartRule;
  }
}
