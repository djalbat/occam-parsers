'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class MetaJSONParser extends CommonParser {
  static fromBNF(bnf) {
    let metaJSONParser = null;

    try {
      const tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            rules = BNFParser.generateRules(rulesNode);

      metaJSONParser = new MetaJSONParser(rules);
    } catch (error) {

    }

    return metaJSONParser;
  }

  static fromNothing() { return MetaJSONParser.fromBNF(bnf); }
}

Object.assign(MetaJSONParser, {
  bnf
});

module.exports = MetaJSONParser;
