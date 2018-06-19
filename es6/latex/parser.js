'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class LaTeXParser extends CommonParser {
  static fromBNFAndMappings(bnf, mappings) {
    let latexParser = null;

    try {
      const significantTokens = bnfLexer.significantTokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromSignificantTokens(significantTokens),
            rules = BNFParser.generateRules(rulesNode, mappings);

      latexParser = new LaTeXParser(rules);
    } catch (error) {
      
    }

    return latexParser;
  }

  static fromMappings(mappings) {
    const latexParser = LaTeXParser.fromBNFAndMappings(bnf, mappings);

    return latexParser;
  }

  static fromNothing() {
    const mappings = {},
          latexParser = LaTeXParser.fromBNFAndMappings(bnf, mappings);

    return latexParser;
  }
}

Object.assign(LaTeXParser, {
  bnf
});

module.exports = LaTeXParser;
