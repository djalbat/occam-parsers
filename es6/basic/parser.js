'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      CommonParser = require('../common/parser'),
      ExtendedBNFParser = require('../extendedBNF/parser');

const { ExtendedBNFLexer } = lexers;

class BasicParser extends CommonParser {
  static fromNothing() {
    const basicParser = BasicParser.fromGrammar(grammar);
    
    return basicParser;
  }
  
  static fromGrammar(grammar) {
    let basicParser = null;

    try {
      const extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
            extendedBNFParser = ExtendedBNFParser.fromNothing(),
            lines = extendedBNFLexer.linesFromGrammar(grammar),
            node = extendedBNFParser.nodeFromLines(lines),
            productions = ExtendedBNFParser.generateProductions(node);

      basicParser = new BasicParser(productions);
    } catch (error) {
      
    }

    return basicParser;
  }
}

module.exports = BasicParser;

BasicParser.grammar = grammar;