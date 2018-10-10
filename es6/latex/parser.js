'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class LaTeXParser extends CommonParser {
  static fromBNF(bnf) {
    let latexParser = null;

    try {
      const tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            rules = BNFParser.generateRules(rulesNode);

      latexParser = new LaTeXParser(rules);
    } catch (error) {
      
    }

    return latexParser;
  }

  static fromNothing() { return LaTeXParser.fromBNF(bnf); }
}

Object.assign(LaTeXParser, {
  bnf
});

module.exports = LaTeXParser;
