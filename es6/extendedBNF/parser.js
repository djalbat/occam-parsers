'use strict';

const cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      extendedBNF = require('./extendedBNF'),
      Rule = require('./rule'),
      Definition = require('./definition'),
      CommonParser = require('../common/parser'),
      PartRule = require('./rule/part'),
      RuleRule = require('./rule/rule'),
      RulesRule = require('./rule/rules'),
      RuleNameRule = require('./rule/ruleName'),
      EpsilonRule = require('./rule/epsilon'),
      WildcardRule = require('./rule/wildcard'),
      EndOfLineRule = require('./rule/endOfLine'),
      DefinitionRule = require('./rule/definition'),
      DefinitionsRule = require('./rule/definitions'),
      GroupOfPartsRule = require('./rule/groupOfParts'),
      ChoiceOfPartsRule = require('./rule/choiceOfParts'),
      OptionalPartRule = require('./rule/optionalPart'),
      ZeroOrMorePartsRule = require('./rule/zeroOrMoreParts'),
      OneOrMorePartsRule = require('./rule/oneOrMoreParts'),
      TerminalSymbolRule = require('./rule/terminalSymbol'),
      NoWhitespacePartRule = require('./rule/noWhitespacePart'),
      RegularExpressionRule = require('./rule/regularExpression'),
      SignificantTokenTypeRule = require('./rule/significantTokenType');

class ExtendedBNFParser extends CommonParser {
  static generateRules(node, mappings = {}) {
    const rules = (node !== null) ?
                     node.generateRules(Rule, Definition, mappings) :
                       [];

    return rules;
  }

  static fromNothing() {
    const partRule = new PartRule(),
          ruleRule = new RuleRule(),
          rulesRule = new RulesRule(),
          ruleNameRule = new RuleNameRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          optionalPartRule = new OptionalPartRule(),
          zeroOrMorePartsRule = new ZeroOrMorePartsRule(),
          oneOrMorePartsRule = new OneOrMorePartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

    let rules = [
      rulesRule,
      ruleRule,
      definitionsRule,
      definitionRule,
      noWhitespacePartRule,
      optionalPartRule,
      zeroOrMorePartsRule,
      oneOrMorePartsRule,
      groupOfPartsRule,
      choiceOfPartsRule,
      partRule,
      ruleNameRule,
      regularExpressionRule,
      significantTokenTypeRule,
      terminalSymbolRule,
      endOfLineRule,
      epsilonRule,
      wildcardRule
    ];

    rules = cycles.eliminate(rules);  ///

    rules = leftRecursion.eliminate(rules);  ///

    const extendedBNFParser = new ExtendedBNFParser(rules);
    
    return extendedBNFParser;
  }
}

module.exports = ExtendedBNFParser;

ExtendedBNFParser.extendedBNF = extendedBNF;
