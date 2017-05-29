'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      mappings = require('./mappings'),
      CommonParser = require('../common/parser'),
      PrimitiveParser = require('../primitive/parser');

const { PrimitiveLexer, FlorenceLexer } = lexers;

const significantTokenTypes = FlorenceLexer.significantTokenTypes();

class FlorenceParser extends CommonParser {
  static fromAdditionalMappings(additionalMappings) {
    const florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, Object.assign(mappings, additionalMappings)); ///

    return florenceParser;
  }

  static fromGrammarAndMappings(grammar, mappings) {
    const lines = PrimitiveLexer.linesFromGrammar(grammar),
          productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
