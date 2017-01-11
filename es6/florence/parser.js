'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    PartNode = require('./node/part'),
    EndsOfLinesNode = require('./node/endsOfLines'),
    CommaThenLabelNode = require('./node/commaThenLabel'),
    ParenthesisedLabelsNode = require('./node/parenthesisedLabels');

class FlorenceParser extends CommonParser {
  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
        significantTokenTypes = FlorenceLexer.significantTokenTypes(),
        mappings = {
          part: PartNode,
          endsOfLines: EndsOfLinesNode,
          commaThenLabel: CommaThenLabelNode,
          parenthesisedLabels: ParenthesisedLabelsNode
        },
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
