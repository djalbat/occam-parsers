'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      mappings = require('./mappings'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      arrayUtilities = require('../utilities/array'),
      customGrammarUtilities = require('../utilities/customGrammar'),
      defaultCustomGrammarTermBNF = require('./defaultCustomGrammar/termBNF'),
      defaultCustomGrammarStatementBNF = require('./defaultCustomGrammar/statementBNF'),
      defaultCustomGrammarMetastatementBNF = require('./defaultCustomGrammar/metastatementBNF');

const { BNFLexer } = lexers,
      { push } = arrayUtilities,
      { rulesFromBNFMap, addQualifiedAndUnqualifiedStatementAndMetastatementRules } = customGrammarUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      defaultCustomGrammarRules = rulesFromBNFMap(defaultCustomGrammarBNFMap),
      defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules, ///
      defaultAdditionalMappings = {};

class FlorenceParser extends CommonParser {
  static fromCombinedCustomGrammarsRulesAndAdditionalMappings(combinedCustomGrammarsRules, additionalMappings) {
    const florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules, additionalMappings);

    return florenceParser;
  }

  static fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules = defaultCombinedCustomGrammarsRules, additionalMappings = defaultAdditionalMappings) {
    combinedCustomGrammarsRules = addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules);  ///

    mappings = Object.assign(mappings, additionalMappings); ///

    const lines = bnfLexer.linesFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromLines(lines),
          rules = BNFParser.generateRules(rulesNode, mappings);

    push(rules, combinedCustomGrammarsRules);

    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }
}

Object.assign(FlorenceParser, {
  bnf: bnf,
  mappings: mappings,
  defaultCustomGrammarTermBNF: defaultCustomGrammarTermBNF,
  defaultCustomGrammarStatementBNF: defaultCustomGrammarStatementBNF,
  defaultCustomGrammarMetastatementBNF: defaultCustomGrammarMetastatementBNF
});

module.exports = FlorenceParser;
