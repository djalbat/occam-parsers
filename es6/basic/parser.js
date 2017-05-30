'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      CommonParser = require('../common/parser'),
      PrimitiveParser = require('../primitive/parser');

const { PrimitiveLexer, BasicLexer } = lexers;

class BasicParser extends CommonParser {
  static fromNothing() {
    const basicParser = BasicParser.fromGrammar(grammar);
    
    return basicParser;
  }
  
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
