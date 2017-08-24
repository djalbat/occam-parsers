'use strict';

const lexers = require('occam-lexers'),
      necessary = require('necessary');

const bnf = require('./bnf'),
      mappings = require('./mappings'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      customGrammarUtilities = require('../utilities/customGrammar'),
      customGrammarDefaultBNFMap = require('./customGrammarDefaultBNFMap');

const { array } = necessary,
      { BNFLexer } = lexers,
      { push } = array;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      customGrammarDefaultRules = customGrammarUtilities.rulesFromBNFMap(customGrammarDefaultBNFMap),
      defaultAdditionalMappings = {};

class FlorenceParser extends CommonParser {
  static fromCustomGrammarRulesAndAdditionalMappings(customGrammarRules, additionalMappings) {
    const florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, customGrammarRules, additionalMappings);

    return florenceParser;
  }

  static fromBNFAndMappings(bnf, mappings, customGrammarRules = customGrammarDefaultRules, additionalMappings = defaultAdditionalMappings) {
    customGrammarRules = customGrammarUtilities.addQualifiedAndUnqualifiedStatementAndMetastatementRules(customGrammarRules);  ///

    mappings = Object.assign(mappings, additionalMappings); ///

    const lines = bnfLexer.linesFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromLines(lines),
          rules = BNFParser.generateRules(rulesNode, mappings);

    push(rules, customGrammarRules);

    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }
}

Object.assign(FlorenceParser, {
  bnf: bnf,
  mappings: mappings,
  customGrammarDefaultBNFMap: customGrammarDefaultBNFMap  
});

module.exports = FlorenceParser;
