"use strict";

import Rule from "../rule";
import TerminalPartBNFNode from "../node/bnf/part/terminal";
import RuleNameDefinition from "../definition/ruleName";

import { TerminalPartRuleName, RegularExpressionRuleName, SignificantTokenTypeRuleName, TerminalSymbolRuleName, EndOfLineRuleName, WildcardRuleName } from "../ruleNames";

export default class TerminalPartRule extends Rule {
  constructor() {
    const name = TerminalPartRuleName,
          wildcardRuleName = WildcardRuleName,
          endOfLineRuleName = EndOfLineRuleName,
          terminalSymbolRuleName = TerminalSymbolRuleName,
          regularExpressionRuleName = RegularExpressionRuleName,
          significantTokenTypeRuleName = SignificantTokenTypeRuleName,
          wildcardRuleNameDefinition = new RuleNameDefinition(wildcardRuleName),
          endOfLineRuleNameDefinition = new RuleNameDefinition(endOfLineRuleName),
          terminalSymbolRuleNameDefinition = new RuleNameDefinition(terminalSymbolRuleName),
          regularExpressionRuleNameDefinition = new RuleNameDefinition(regularExpressionRuleName),
          significantTokenTypeRuleNameDefinition = new RuleNameDefinition(significantTokenTypeRuleName),
          definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            wildcardRuleNameDefinition
          ],
          Node = TerminalPartBNFNode;
    
    super(name, definitions, Node)
  }
}
