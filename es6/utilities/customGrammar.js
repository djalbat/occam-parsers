'use strict';

const lexers = require('occam-lexers');

const BNFParser = require('../bnf/parser'),
      arrayUtilities = require('../utilities/array'),
      parserUtilities = require('../utilities/parser'),
      QualifiedCustomGrammarRule = require('../florence/rule/customGrammar/qualified'),
      UnqualifiedCustomGrammarRule = require('../florence/rule/customGrammar/unqualified');

const { BNFLexer } = lexers,
      { push } = arrayUtilities,
      { findRuleByName } = parserUtilities,
      add = push; ///

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      statementRuleName = 'statement',
      metastatementRuleName = 'metastatement',
      qualifiedStatementRuleName = 'qualifiedStatement',
      qualifiedMetastatementRuleName = 'qualifiedMetastatement',
      unqualifiedStatementRuleName = 'unqualifiedStatement',
      unqualifiedMetastatementRuleName = 'unqualifiedMetastatement';

function rulesFromBNFs(bnfs) {
  const bnf = bnfs.join(''),
        lines = bnfLexer.linesFromBNF(bnf),
        rulesNode = bnfParser.rulesNodeFromLines(lines),
        rules = BNFParser.generateRules(rulesNode);

  return rules;
}

function addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules) {
  combinedCustomGrammarsRules = combinedCustomGrammarsRules.slice();  ///
  
  const statementCustomGrammarRule = findRuleByName(statementRuleName, combinedCustomGrammarsRules),
        metastatementCustomGrammarRule = findRuleByName(metastatementRuleName, combinedCustomGrammarsRules),
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

module.exports = {
  rulesFromBNFs: rulesFromBNFs,
  addQualifiedAndUnqualifiedStatementAndMetastatementRules: addQualifiedAndUnqualifiedStatementAndMetastatementRules
};
