'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

class BasicParser extends CommonParser {
  static fromNothing() {
    const basicParser = BasicParser.fromGrammar(grammar);
    
    return basicParser;
  }
  
  static fromGrammar(grammar) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines),
          productions = BNFParser.generateProductions(node),
          basicParser = new BasicParser(productions);

    return basicParser;
  }
}

module.exports = BasicParser;
