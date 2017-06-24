'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      CommonParser = require('../common/parser'),
      ExtendedBNFParser = require('../extendedBNF/parser');

const { ExtendedBNFLexer } = lexers;

const extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
      extendedBNFParser = ExtendedBNFParser.fromNothing();

class BasicParser extends CommonParser {
  static fromNothing() {
    const basicParser = BasicParser.fromGrammar(grammar);
    
    return basicParser;
  }
  
  static fromGrammar(grammar) {
    let basicParser = null;

    try {
      const lines = extendedBNFLexer.linesFromGrammar(grammar),
            node = extendedBNFParser.nodeFromLines(lines),
            rules = ExtendedBNFParser.generateRules(node);

      basicParser = new BasicParser(rules);
    } catch (error) {
      
    }

    return basicParser;
  }
}

module.exports = BasicParser;

BasicParser.grammar = grammar;