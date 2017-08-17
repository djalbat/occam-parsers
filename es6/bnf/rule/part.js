'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      PartRuleDefinition = require('../definition/partRule'),
      NoWhitespaceDefinition = require('../definition/noWhitespace'),
      GroupOfPartsDefinition = require('../definition/groupOfParts'),
      ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

class PartRule extends Rule {
  constructor() {
    const ruleNameRuleName = 'ruleName',
          regularExpressionRuleName = 'regularExpression',
          significantTokenTypeRuleName = 'significantTokenType',
          terminalSymbolRuleName = 'terminalSymbol',
          endOfLineRuleName = 'endOfLine',
          epsilonRuleName = 'epsilon',
          wildcardRuleName = 'wildcard',
          noWhitespaceDefinition = new NoWhitespaceDefinition(),
          groupOfPartsDefinition = new GroupOfPartsDefinition(),
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
          ruleNameRuleNamePartRuleDefinition = new PartRuleDefinition(ruleNameRuleName),
          regularExpressionRuleNamePartRuleDefinition = new PartRuleDefinition(regularExpressionRuleName),
          significantTokenTypeRuleNamePartRuleDefinition = new PartRuleDefinition(significantTokenTypeRuleName),
          terminalSymbolRuleNamePartRuleDefinition = new PartRuleDefinition(terminalSymbolRuleName),
          endOfLineRuleNamePartRuleDefinition = new PartRuleDefinition(endOfLineRuleName),
          epsilonRuleNamePartRuleDefinition = new PartRuleDefinition(epsilonRuleName),
          wildcardRuleNamePartRuleDefinition = new PartRuleDefinition(wildcardRuleName),
          name = ruleNames.PartRule,
          definitions = [
            noWhitespaceDefinition,
            groupOfPartsDefinition,
            choiceOfPartsDefinition,
            ruleNameRuleNamePartRuleDefinition,
            regularExpressionRuleNamePartRuleDefinition,
            significantTokenTypeRuleNamePartRuleDefinition,
            terminalSymbolRuleNamePartRuleDefinition,
            endOfLineRuleNamePartRuleDefinition,
            epsilonRuleNamePartRuleDefinition,
            wildcardRuleNamePartRuleDefinition
          ],
          Node = PartNode;
    
    super(name, definitions, Node)
  }
}

module.exports = PartRule;
