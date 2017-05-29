'use strict';

const lexers = require('occam-lexers');

const PrimitiveParser = require('../primitive/parser'),
      CommonParser = require('../common/parser');

const { PrimitiveLexer, BasicLexer } = lexers;

class BasicParser extends CommonParser {
  static fromGrammar(grammar) {
    const lines = PrimitiveLexer.linesFromGrammar(grammar),
          significantTokenTypes = BasicLexer.significantTokenTypes(),
          mappings = {},
          productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
          basicParser = new BasicParser(productions);

    return basicParser;
  }
}

module.exports = BasicParser;
