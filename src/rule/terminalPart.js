"use strict";

import Rule from "../rule";
import TerminalPartBNFNode from "../node/bnf/part/terminal";
import RuleNameDefinition from "../definition/ruleName";

import { epsilonRuleName,
         wildcardRuleName,
         endOfLineRuleName,
         terminalPartRuleName,
         terminalSymbolRuleName,
         regularExpressionRuleName,
         significantTokenTypeRuleName } from "../ruleNames";

export default class TerminalPartRule extends Rule {
  constructor() {
    const name = terminalPartRuleName,
          epsilonRuleNameDefinition = new RuleNameDefinition(epsilonRuleName),
          wildcardRuleNameDefinition = new RuleNameDefinition(wildcardRuleName),
          endOfLineRuleNameDefinition = new RuleNameDefinition(endOfLineRuleName),
          terminalSymbolRuleNameDefinition = new RuleNameDefinition(terminalSymbolRuleName),
          regularExpressionRuleNameDefinition = new RuleNameDefinition(regularExpressionRuleName),
          significantTokenTypeRuleNameDefinition = new RuleNameDefinition(significantTokenTypeRuleName),
          ambiguous = false,
          definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition,
            epsilonRuleNameDefinition
          ],
          Node = TerminalPartBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
