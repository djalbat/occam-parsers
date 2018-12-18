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
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode),
          laTeXParser = new LaTeXParser(rules);

    return laTeXParser;
  }

  static fromNothing() {
    const laTeXParser = LaTeXParser.fromBNF(bnf);

    return laTeXParser;
  }
}

Object.assign(LaTeXParser, {
  bnf
});

module.exports = LaTeXParser;
