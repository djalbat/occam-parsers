'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      mappings = require('./mappings'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer, FlorenceLexer } = lexers;

const significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

class FlorenceParser extends CommonParser {
  static fromAdditionalMappings(additionalMappings) {
    const florenceParser = FlorenceParser.fromGrammarAndAdditionalMappings(grammar, Object.assign(mappings, additionalMappings)); ///

    return florenceParser;
  }

  static fromGrammarAndMappings(grammar, mappings) {
    const lines = BNFLexer.linesFromGrammar(grammar),
          productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
