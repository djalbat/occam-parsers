'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      RuleNameDefinition = require('../definition/ruleName');

const { RegularExpressionRuleName, SignificantTokenTypeRuleName, TerminalSymbolRuleName, EndOfLineRuleName, EpsilonRuleName, WildcardRuleName } = ruleNames;

class TerminalPartRule extends Rule {
  constructor() {
    const name = PartRuleName,
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
            regularExpressionRuleNameDefinition,
            significantTokenTypeRuleNameDefinition,
            terminalSymbolRuleNameDefinition,
            endOfLineRuleNameDefinition,
            epsilonRuleNameDefinition,
            wildcardRuleNameDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = TerminalPartRule;
