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
      ModifierRule = require('./rule/modifier'),
      WildcardRule = require('./rule/wildcard'),
      EndOfLineRule = require('./rule/endOfLine'),
      DefinitionRule = require('./rule/definition'),
      DefinitionsRule = require('./rule/definitions'),
      TerminalPartRule = require('./rule/terminalPart'),
      GroupOfPartsRule = require('./rule/groupOfParts'),
      ChoiceOfPartsRule = require('./rule/choiceOfParts'),
      TerminalSymbolRule = require('./rule/terminalSymbol'),
      NonTerminalPartRule = require('./rule/nonTerminalPart'),
      OptionalModifierRule = require('./rule/optionalModifier'),
      LookAheadModifierRule = require('./rule/lookAheadModifier'),
      RegularExpressionRule = require('./rule/regularExpression'),
      OneOrMoreModifierRule = require('./rule/oneOrMoreModifier'),
      ZeroOrMoreModifierRule = require('./rule/zeroOrMoreModifier'),
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
          modifierRule = new ModifierRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalPartRule = new TerminalPartRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          nonTerminalPartRule = new NonTerminalPartRule(),
          optionalModifierRule = new OptionalModifierRule(),
          lookAheadModifierRule = new LookAheadModifierRule(),
          oneOrMoreModifierRule = new OneOrMoreModifierRule(),
          regularExpressionRule = new RegularExpressionRule(),
          zeroOrMoreModifierRule = new ZeroOrMoreModifierRule(),
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
      regularExpressionRule,
      significantTokenTypeRule,
      terminalSymbolRule,
      endOfLineRule,
      epsilonRule,
      wildcardRule,
      modifierRule,
      optionalModifierRule,
      oneOrMoreModifierRule,
      zeroOrMoreModifierRule,
      lookAheadModifierRule,
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
