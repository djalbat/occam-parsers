'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class CSSParser extends CommonParser {
  static fromBNF(bnf) {
    let cssParser = null;

    try {
      const tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            rules = BNFParser.generateRules(rulesNode);

      cssParser = new CSSParser(rules);
    } catch (error) {
      
    }

    return cssParser;
  }

  static fromNothing() {
    const cssParser = CSSParser.fromBNF(bnf);

    return cssParser;
  }
}

Object.assign(CSSParser, {
  bnf
});

module.exports = CSSParser;
