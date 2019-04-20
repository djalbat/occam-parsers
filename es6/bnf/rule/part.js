'use strict';

const Rule = require('../rule'),
      PartNode = require('../node/part'),
      ruleNames = require('../ruleNames'),
      PartRuleDefinition = require('../definition/partRule'),
      NoWhitespacePartRuleDefinition = require('../definition/partRule/noWhitespace'),
      GroupOfPartsPartRuleDefinition = require('../definition/partRule/groupOfParts'),
      ChoiceOfPartsPartRuleDefinition = require('../definition/partRule/choiceOfParts');

const { PartRuleName, EpsilonRuleName, WildcardRuleName, RuleNameRuleName, EndOfLineRuleName, TerminalSymbolRuleName, RegularExpressionRuleName, SignificantTokenTypeRuleName } = ruleNames;

class PartRule extends Rule {
  constructor() {
    const ruleNameRuleName = RuleNameRuleName,
          regularExpressionRuleName = RegularExpressionRuleName,
          significantTokenTypeRuleName = SignificantTokenTypeRuleName,
          terminalSymbolRuleName = TerminalSymbolRuleName,
          endOfLineRuleName = EndOfLineRuleName,
          epsilonRuleName = EpsilonRuleName,
          wildcardRuleName = WildcardRuleName,
          noWhitespacePartRuleDefinition = new NoWhitespacePartRuleDefinition(),
          groupOfPartsPartRuleDefinition = new GroupOfPartsPartRuleDefinition(),
          choiceOfPartsPartRuleDefinition = new ChoiceOfPartsPartRuleDefinition(),
          ruleNameRuleNamePartRuleDefinition = new PartRuleDefinition(ruleNameRuleName),
          regularExpressionRuleNamePartRuleDefinition = new PartRuleDefinition(regularExpressionRuleName),
          significantTokenTypeRuleNamePartRuleDefinition = new PartRuleDefinition(significantTokenTypeRuleName),
          terminalSymbolRuleNamePartRuleDefinition = new PartRuleDefinition(terminalSymbolRuleName),
          endOfLineRuleNamePartRuleDefinition = new PartRuleDefinition(endOfLineRuleName),
          epsilonRuleNamePartRuleDefinition = new PartRuleDefinition(epsilonRuleName),
          wildcardRuleNamePartRuleDefinition = new PartRuleDefinition(wildcardRuleName),
          name = PartRuleName,
          definitions = [
            noWhitespacePartRuleDefinition,
            groupOfPartsPartRuleDefinition,
            choiceOfPartsPartRuleDefinition,
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
