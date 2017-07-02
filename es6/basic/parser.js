'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      parserUtil = require('../util/parser'),
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

  static findRule(ruleName, rules) { return parserUtil.findRule(ruleName, rules); }
}

module.exports = BasicParser;

BasicParser.bnf = bnf;
