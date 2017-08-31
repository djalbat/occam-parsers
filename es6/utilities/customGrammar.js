'use strict';

const lexers = require('occam-lexers'),
      necessary = require('necessary');

const BNFParser = require('../bnf/parser'),
      parserUtilities = require('../utilities/parser'),
      QualifiedCustomGrammarRule = require('../florence/rule/customGrammar/qualified'),
      UnqualifiedCustomGrammarRule = require('../florence/rule/customGrammar/unqualified');

const { BNFLexer } = lexers,
      { array } = necessary,
      { push } = array,
      add = push; ///

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      statementRuleName = 'statement',
      metastatementRuleName = 'metastatement',
      qualifiedStatementRuleName = 'qualifiedStatement',
      qualifiedMetastatementRuleName = 'qualifiedMetastatement',
      unqualifiedStatementRuleName = 'unqualifiedStatement',
      unqualifiedMetastatementRuleName = 'unqualifiedMetastatement';

class customGrammarUtilities {
  static rulesFromBNFMap(bnfMap) {
    const ruleNames = Object.keys(bnfMap),
          bnf = ruleNames.reduce(function (bnf, ruleName) {
            const ruleBNF = bnfMap[ruleName];

            bnf = `${bnf}${ruleBNF}`;

            return bnf;
          }, ''),
          lines = bnfLexer.linesFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromLines(lines),
          rules = BNFParser.generateRules(rulesNode);

    return rules;
  }

  static addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules) {
    combinedCustomGrammarsRules = combinedCustomGrammarsRules.slice();  ///
    
    const statementCustomGrammarRule = parserUtilities.findRuleByName(statementRuleName, combinedCustomGrammarsRules),
          metastatementCustomGrammarRule = parserUtilities.findRuleByName(metastatementRuleName, combinedCustomGrammarsRules),
          qualifiedStatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(qualifiedStatementRuleName, statementCustomGrammarRule),
          unqualifiedStatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(unqualifiedStatementRuleName, statementCustomGrammarRule),
          qualifiedMetastatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(qualifiedMetastatementRuleName, metastatementCustomGrammarRule),
          unqualifiedMetastatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndCustomGrammarRule(unqualifiedMetastatementRuleName, metastatementCustomGrammarRule),
          qualifiedAndUnqualifiedStatementAndMetastatementRules = [
            qualifiedStatementCustomGrammarRule,
            unqualifiedStatementCustomGrammarRule,
            qualifiedMetastatementCustomGrammarRule,
            unqualifiedMetastatementCustomGrammarRule
          ];

    add(combinedCustomGrammarsRules, qualifiedAndUnqualifiedStatementAndMetastatementRules);

    return combinedCustomGrammarsRules;
  }
}

module.exports = customGrammarUtilities;
