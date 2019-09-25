'use strict';

const bnf = require('./bnf'),
      Rule = require('./rule'),
      CommonParser = require('../common/parser'),
      NameRule = require('./rule/name'),
      PartRule = require('./rule/part'),
      RuleRule = require('./rule/rule'),
      ErrorRule = require('./rule/error'),
      EpsilonRule = require('./rule/epsilon'),
      DocumentRule = require('./rule/document'),
      RuleNameRule = require('./rule/ruleName'),
      WildcardRule = require('./rule/wildcard'),
      EndOfLineRule = require('./rule/endOfLine'),
      QuantifierRule = require('./rule/quantifier'),
      DefinitionRule = require('./rule/definition'),
      DefinitionsRule = require('./rule/definitions'),
      TerminalPartRule = require('./rule/terminalPart'),
      GroupOfPartsRule = require('./rule/groupOfParts'),
      ChoiceOfPartsRule = require('./rule/choiceOfParts'),
      TerminalSymbolRule = require('./rule/terminalSymbol'),
      NonTerminalPartRule = require('./rule/nonTerminalPart'),
      LookAheadModifierRule = require('./rule/lookAheadModifier'),
      RegularExpressionRule = require('./rule/regularExpression'),
      OptionalQuantifierRule = require('./rule/optionalQuantifier'),
      OneOrMoreQuantifierRule = require('./rule/oneOrMoreQuantifier'),
      ZeroOrMoreQuantifierRule = require('./rule/zeroOrMoreQuantifier'),
      SignificantTokenTypeRule = require('./rule/significantTokenType');

class BNFParser extends CommonParser {
	rulesFromTokens(tokens) {
    const node = this.parse(tokens),
          rules = (node !== null) ?
                    node.generateRules(Rule) :
                      [];

    return rules;
  }

  static fromNothing() {
    const nameRule = new NameRule(),
          partRule = new PartRule(),
          ruleRule = new RuleRule(),
          errorRule = new ErrorRule(),
          epsilonRule = new EpsilonRule(),
          documentRule = new DocumentRule(),
          ruleNameRule = new RuleNameRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          quantifierRule = new QuantifierRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalPartRule = new TerminalPartRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          nonTerminalPartRule = new NonTerminalPartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          lookAheadModifierRule = new LookAheadModifierRule(),
          optionalQuantifierRule = new OptionalQuantifierRule(),
          oneOrMoreQuantifierRule = new OneOrMoreQuantifierRule(),
          zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

    let rules = [
      documentRule,
      ruleRule,
      nameRule,
      definitionsRule,
      definitionRule,
      partRule,
      nonTerminalPartRule,
      terminalPartRule,
      choiceOfPartsRule,
      groupOfPartsRule,
      ruleNameRule,
      significantTokenTypeRule,
      regularExpressionRule,
      terminalSymbolRule,
      endOfLineRule,
      epsilonRule,
      wildcardRule,
      quantifierRule,
      lookAheadModifierRule,
      optionalQuantifierRule,
      oneOrMoreQuantifierRule,
      zeroOrMoreQuantifierRule,
      errorRule
    ];

    const bnfParser = new BNFParser(rules);
    
    return bnfParser;
  }
}

Object.assign(BNFParser, {
  bnf
});

module.exports = BNFParser;
