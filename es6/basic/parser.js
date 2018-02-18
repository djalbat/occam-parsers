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
      const significantTokens = bnfLexer.significantTokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromSignificantTokens(significantTokens),
            rules = BNFParser.generateRules(rulesNode);

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

Object.assign(BasicParser, {
  bnf: bnf
});

module.exports = BasicParser;
