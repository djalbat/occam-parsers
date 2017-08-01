'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class BasicParser extends CommonParser {
  static fromBNF(bnf) {
    let basicParser = null;

    try {
      const lines = bnfLexer.linesFromBNF(bnf),
            node = bnfParser.nodeFromLines(lines),
            rules = BNFParser.generateRules(node);

      basicParser = new BasicParser(rules);
    } catch (error) {
      
    }

    return basicParser;
  }

  static fromNothing() {
    const basicParser = BasicParser.fromBNF(bnf);

    return basicParser;
  }
}

module.exports = BasicParser;

BasicParser.bnf = bnf;
