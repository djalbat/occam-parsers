'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

class BasicParser extends CommonParser {
  static fromGrammarAndTerminalSymbolsRegExpPattern(grammar, terminalSymbolsRegExpPattern) {
    var lines = BNFLexer.linesFromGrammar(grammar),
        significantTokenTypes = BasicLexer.significantTokenTypes(),
        mappings = {},
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
        basicParser = new BasicParser(productions);

    return basicParser;
  }
}

module.exports = BasicParser;
