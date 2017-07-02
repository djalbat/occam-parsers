'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      RuleNameDefinition = require('../definition/ruleName');





class PartRule extends Rule {
  constructor() {
    const noWhitespacePartRuleName = 'noWhitespacePart',
          optionalPartRuleName = 'optionalPart',
          zeroOrMorePartsRuleName = 'zeroOrMoreParts',
          oneOrMorePartsRuleName = 'oneOrMoreParts',
          groupOfPartsRuleName = 'groupOfParts',
          choiceOfPartsRuleName = 'choiceOfParts',
          ruleNameRuleName = 'ruleName',
          regularExpressionRuleName = 'regularExpression',
          significantTokenTypeRuleName = 'significantTokenType',
          terminalSymbolRuleName = 'terminalSymbol',
          endOfLineRuleName = 'endOfLine',
          epsilonRuleName = 'epsilon',
          wildcardRuleName = 'wildcard',
          noWhitespacePartRuleNameDefinition = new RuleNameDefinition(noWhitespacePartRuleName),
          optionalPartRuleNameDefinition = new RuleNameDefinition(optionalPartRuleName),
          zeroOrMorePartsRuleNameDefinition = new RuleNameDefinition(zeroOrMorePartsRuleName),
          oneOrMorePartsRuleNameDefinition = new RuleNameDefinition(oneOrMorePartsRuleName),
          groupOfPartsRuleNameDefinition = new RuleNameDefinition(groupOfPartsRuleName),
          choiceOfPartsRuleNameDefinition = new RuleNameDefinition(choiceOfPartsRuleName),
          ruleNameRuleNameDefinition = new RuleNameDefinition(ruleNameRuleName),
          regularExpressionRuleNameDefinition = new RuleNameDefinition(regularExpressionRuleName),
          significantTokenTypeRuleNameDefinition = new RuleNameDefinition(significantTokenTypeRuleName),
          terminalSymbolRuleNameDefinition = new RuleNameDefinition(terminalSymbolRuleName),
          endOfLineRuleNameDefinition = new RuleNameDefinition(endOfLineRuleName),
          epsilonRuleNameDefinition = new RuleNameDefinition(epsilonRuleName),
          wildcardRuleNameDefinition = new RuleNameDefinition(wildcardRuleName),
          name = 'part',
          definitions = [
            noWhitespacePartRuleNameDefinition,
            optionalPartRuleNameDefinition,
            zeroOrMorePartsRuleNameDefinition,
            oneOrMorePartsRuleNameDefinition,
            groupOfPartsRuleNameDefinition,
            choiceOfPartsRuleNameDefinition,
            ruleNameRuleNameDefinition,
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

module.exports = PartRule;
