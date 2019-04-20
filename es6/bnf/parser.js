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
      DefinitionRule = require('./rule/definition'),
      DefinitionsRule = require('./rule/definitions'),
      TerminalSymbolRule = require('./rule/terminalSymbol'),
      RegularExpressionRule = require('./rule/regularExpression'),
      RightRecursivePartRule = require('./rule/rightRecursivePart'),
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
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          regularExpressionRule = new RegularExpressionRule(),
          rightRecursivePartRule = new RightRecursivePartRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

    let rules = [
      documentRule,
      ruleRule,
      definitionsRule,
      definitionRule,
      partRule,
      nameRule,
      ruleNameRule,
      regularExpressionRule,
      significantTokenTypeRule,
      terminalSymbolRule,
      endOfLineRule,
      epsilonRule,
      wildcardRule,
      rightRecursivePartRule,
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
