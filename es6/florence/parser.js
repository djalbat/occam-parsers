'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      defaultCustomGrammarBNF = require('./defaultCustomGrammarBNF');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class FlorenceParser extends CommonParser {
  static fromBNF(bnf) {
    bnf = `${bnf}${defaultCustomGrammarBNF}`; ///

    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }

  static fromNothing() {
    const florenceParser = FlorenceParser.fromBNF(bnf);

    return florenceParser;
  }
}

Object.assign(FlorenceParser, {
  bnf
});

module.exports = FlorenceParser;
