"use strict";

import Rule from "../rule";
import TerminalPartBNFNode from "../node/bnf/part/terminal";
import RuleNameDefinition from "../definition/ruleName";

import { EpsilonRuleName,
         WildcardRuleName,
         EndOfLineRuleName,
         TerminalPartRuleName,
         TerminalSymbolRuleName,
         RegularExpressionRuleName,
         SignificantTokenTypeRuleName } from "../ruleNames";

export default class TerminalPartRule extends Rule {
  constructor() {
    const name = TerminalPartRuleName,
          epsilonRuleName = EpsilonRuleName,
          wildcardRuleName = WildcardRuleName,
          endOfLineRuleName = EndOfLineRuleName,
          terminalSymbolRuleName = TerminalSymbolRuleName,
          regularExpressionRuleName = RegularExpressionRuleName,
          significantTokenTypeRuleName = SignificantTokenTypeRuleName,
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
