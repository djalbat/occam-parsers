'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    LabelNode = require('./node/label'),
    MissingNode = require('../common/node/missing'),
    TransparentNode = require('../common/node/transparent'),
    MissingFirstChildNode = require('../common/node/missingFirstChild'),
    TransparentSecondChildNode = require('../common/node/transparentSecondChild'),
    TransparentMissingFirstChildNode = require('../common/node/transparentMissingFirstChild');

class FlorenceParser extends CommonParser {
  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
        significantTokenTypes = FlorenceLexer.significantTokenTypes(),
        mappings = {
          'part': TransparentNode,
          'label': LabelNode,
          'rule': MissingFirstChildNode,
          'premise': TransparentSecondChildNode,
          'premises': TransparentMissingFirstChildNode,
          'conclusion': MissingFirstChildNode,
          'endsOfLines': MissingNode,
          'commaThenLabel': TransparentSecondChildNode,
          'parenthesisedLabels': TransparentSecondChildNode,
          '(labelled)statement': TransparentNode
        },
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
