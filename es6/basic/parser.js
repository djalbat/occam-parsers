'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var BNFParser = require('../../es6/bnf/parser'),
    CommonParser = require('../../es6/common/parser');

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
