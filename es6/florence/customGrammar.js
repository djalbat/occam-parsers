'use strict';

const lexers = require('occam-lexers');

const BNFParser = require('../bnf/parser'),
      parserUtilities = require('../utilities/parser'),
      qualificationRule = require('./customGrammar/rule/qualification'),
      QualifiedCustomGrammarRule = require('./customGrammar/rule/qualified'),
      UnqualifiedCustomGrammarRule = require('./customGrammar/rule/unqualified');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class customGrammar {
  static rulesFromBNFMap(bnfMap) {
    const ruleNames = Object.keys(bnfMap),
          bnf = ruleNames.reduce(function(bnf, ruleName) {
            const ruleBNF = bnfMap[ruleName];
  
            bnf = `${bnf}${ruleBNF}`;
  
            return bnf;
          }, ''),
          lines = bnfLexer.linesFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromLines(lines),
          rules = BNFParser.generateRules(rulesNode);

    rules.push(qualificationRule);

    const statementRuleName = 'statement',
          metastatementRuleName = 'metastatement',
          qualifiedStatementRuleName = 'qualifiedStatement',
          unqualifiedStatementRuleName = 'unqualifiedStatement',
          qualifiedMetastatementRuleName = 'qualifiedMetastatement',
          unqualifiedMetastatementRuleName = 'unqualifiedMetastatement',
          statementRule = parserUtilities.findRuleByName(statementRuleName, rules),
          metastatementRule = parserUtilities.findRuleByName(metastatementRuleName, rules),
          qualifiedStatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndRule(qualifiedStatementRuleName, statementRule),
          unqualifiedStatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndRule(unqualifiedStatementRuleName, statementRule),
          qualifiedMetastatementCustomGrammarRule = new QualifiedCustomGrammarRule.fromRuleNameAndRule(qualifiedMetastatementRuleName, metastatementRule),
          unqualifiedMetastatementCustomGrammarRule = new UnqualifiedCustomGrammarRule.fromRuleNameAndRule(unqualifiedMetastatementRuleName, metastatementRule);

    rules.push(qualifiedStatementCustomGrammarRule);
    rules.push(unqualifiedStatementCustomGrammarRule);
    rules.push(qualifiedMetastatementCustomGrammarRule);
    rules.push(unqualifiedMetastatementCustomGrammarRule);

    return rules;
  }
}

module.exports = customGrammar;
