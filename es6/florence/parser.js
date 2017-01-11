'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    MissingNode = require('./node/missing'),
    TransparentNode = require('./node/transparent'),
    SecondChildNode = require('./node/secondChild'),
    MissingFirstChildNode = require('./node/missingFirstChild');

class FlorenceParser extends CommonParser {
  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
        significantTokenTypes = FlorenceLexer.significantTokenTypes(),
        mappings = {
          'part': TransparentNode,
          'label': TransparentNode,
          'rule': MissingFirstChildNode,
          'premise': SecondChildNode,
          'conclusion': MissingFirstChildNode,
          'endsOfLines': MissingNode,
          'commaThenLabel': SecondChildNode,
          'parenthesisedLabels': SecondChildNode,
          '(labelled)statement': TransparentNode
        },
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
