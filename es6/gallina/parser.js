'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    GallinaLexer = lexers.GallinaLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../../es6/common/parser');

class GallinaParser extends CommonParser {
  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = GallinaLexer.terminalSymbolsRegExpPattern(),
        significantTokenTypes = GallinaLexer.significantTokenTypes(),
        mappings = {},
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
        gallinaParser = new GallinaParser(productions);

    return gallinaParser;
  }
}

module.exports = GallinaParser;
