'use strict';

const lexers = require('occam-lexers'),
      necessary = require('necessary');

const bnf = require('./bnf'),
      mappings = require('./mappings'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      customGrammar = require('./customGrammar'),
      defaultCustomGrammarBNFMap = require('./defaultCustomGrammarBNFMap');

const { array } = necessary,
      { BNFLexer } = lexers,
      { push } = array;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      defaultCustomGrammarRules = customGrammar.rulesFromBNFMap(defaultCustomGrammarBNFMap),
      defaultAdditionalMappings = {};

class FlorenceParser extends CommonParser {
  static fromCombinedCustomGrammarsRulesAndAdditionalMappings(combinedCustomGrammarsRules, additionalMappings) {
    const florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules, additionalMappings);
  
    return florenceParser;
  }
  
  static fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules = defaultCustomGrammarRules, additionalMappings = defaultAdditionalMappings) {
    mappings = Object.assign(mappings, additionalMappings); ///

    const lines = bnfLexer.linesFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromLines(lines),
          rules = BNFParser.generateRules(rulesNode, mappings);

    push(rules, combinedCustomGrammarsRules);
    
    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }
}

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.bnf = bnf;

FlorenceParser.defaultCustomGrammarBNFMap = defaultCustomGrammarBNFMap;
