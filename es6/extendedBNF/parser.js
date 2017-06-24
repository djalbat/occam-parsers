'use strict';

const grammar = require('./grammar'),
      Definition = require('./definition'),
      Rule = require('./rule'),
      cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      CommonParser = require('../common/parser'),
      PartRule = require('./rule/part'),
      EpsilonRule = require('./rule/epsilon'),
      WildcardRule = require('./rule/wildcard'),
      EndOfLineRule = require('./rule/endOfLine'),
      DefinitionRule = require('./rule/definition'),
      RuleRule = require('./rule/rule'),
      DefinitionsRule = require('./rule/definitions'),
      RulesRule = require('./rule/rules'),
      GroupOfPartsRule = require('./rule/groupOfParts'),
      ChoiceOfPartsRule = require('./rule/choiceOfParts'),
      OptionalPartRule = require('./rule/optionalPart'),
      ZeroOrMorePartsRule = require('./rule/zeroOrMoreParts'),
      OneOrMorePartsRule = require('./rule/oneOrMoreParts'),
      RuleNameRule = require('./rule/ruleName'),
      TerminalSymbolRule = require('./rule/terminalSymbol'),
      NoWhitespacePartRule = require('./rule/noWhitespacePart'),
      RegularExpressionRule = require('./rule/regularExpression'),
      SignificantTokenTypeRule = require('./rule/significantTokenType');

class ExtendedBNFParser extends CommonParser {
  static generateRules(node, mappings = {}) {
    let rules = (node !== null) ?
                        node.generateRules(Rule, Definition, mappings) :
                          [];

    rules = cycles.eliminate(rules);  ///

    rules = leftRecursion.eliminate(rules);  ///

    return rules;
  }

  static fromNothing() {
    const partRule = new PartRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          ruleRule = new RuleRule(),
          definitionsRule = new DefinitionsRule(),
          rulesRule = new RulesRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          optionalPartRule = new OptionalPartRule(),
          zeroOrMorePartsRule = new ZeroOrMorePartsRule(),
          oneOrMorePartsRule = new OneOrMorePartsRule(),
          ruleNameRule = new RuleNameRule(),
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

ExtendedBNFParser.grammar = grammar;
