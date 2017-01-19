'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    GallinaLexer = lexers.GallinaLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

class GallinaParser extends CommonParser {
  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        significantTokenTypes = GallinaLexer.significantTokenTypes(),
        mappings = {},
        productions = BNFParser.parse(lines, significantTokenTypes, mappings),
        gallinaParser = new GallinaParser(productions);

    return gallinaParser;
  }
}

module.exports = GallinaParser;
