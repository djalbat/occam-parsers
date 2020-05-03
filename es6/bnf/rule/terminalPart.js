"use strict";

const Rule = require("../rule"),
      ruleNames = require("../ruleNames"),
      TerminalPartNode = require("../node/part/terminal"),
      RuleNameDefinition = require("../definition/ruleName");

const { TerminalPartRuleName, RegularExpressionRuleName, SignificantTokenTypeRuleName, TerminalSymbolRuleName, EndOfLineRuleName, EpsilonRuleName, WildcardRuleName } = ruleNames;

class TerminalPartRule extends Rule {
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
          definitions = [
            significantTokenTypeRuleNameDefinition,
            regularExpressionRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            epsilonRuleNameDefinition,
            wildcardRuleNameDefinition
          ],
          Node = TerminalPartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = TerminalPartRule;
