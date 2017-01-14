'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    LabelNode = require('./node/label'),
    IncludeDirectiveNode = require('./node/includeDirective'),
    MissingNode = require('../common/node/missing'),
    MissingFirstChildNode = require('../common/node/missingFirstChild'),
    MissingSecondChildNode = require('../common/node/missingSecondChild'),
    TransparentNode = require('../common/node/transparent'),
    TransparentThenSecondNode = require('../common/node/transparentThenSecond'),
    TransparentThenMissingFirstNode = require('../common/node/transparentThenMissingFirst');

class FlorenceParser extends CommonParser {
  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
        significantTokenTypes = FlorenceLexer.significantTokenTypes(),
        mappings = {
          'part': TransparentNode,
          'rule': MissingFirstChildNode,
          'label': LabelNode,
          'premise': TransparentThenSecondNode,
          'premises': TransparentThenMissingFirstNode,
          'directive': TransparentNode,
          'then': MissingFirstChildNode,
          'hence': MissingFirstChildNode,
          'proof': MissingFirstChildNode,
          'suppose': MissingFirstChildNode,
          'therefore': TransparentThenMissingFirstNode,
          'conclusion': MissingFirstChildNode,
          'endsOfLines': MissingNode,
          'commaThenLabel': TransparentThenSecondNode,
          'includeDirective': IncludeDirectiveNode,
          'parenthesisedLabels': TransparentThenSecondNode,
          'labelledStatement': MissingSecondChildNode,
          '(labelled)Statement': TransparentNode,
          'subLemmaOr(labelled)Statement': TransparentNode
        },
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
