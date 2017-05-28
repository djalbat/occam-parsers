'use strict';

const lexers = require('occam-lexers');

const PrimitiveParser = require('../primitive/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer, BasicLexer } = lexers;

class BasicParser extends CommonParser {
  static fromGrammar(grammar) {
    const lines = BNFLexer.linesFromGrammar(grammar),
          significantTokenTypes = BasicLexer.getSignificantTokenTypes(),
          mappings = {},
          productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
          basicParser = new BasicParser(productions);

    return basicParser;
  }
}

module.exports = BasicParser;
