'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      mappings = require('./mappings'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

class FlorenceParser extends CommonParser {
  static fromAdditionalMappings(additionalMappings) {
    const florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, Object.assign(mappings, additionalMappings)); ///

    return florenceParser;
  }

  static fromGrammarAndMappings(grammar, mappings) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines),
          productions = BNFParser.generateProductions(node, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
