'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    LabelNode = require('./node/label'),
    IncludeDirectiveNode = require('./node/includeDirective'),
    DiscardNode = require('../common/node/discard'),
    DiscardFirstChildNode = require('../common/node/discardFirstChild'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    TransparentNode = require('../common/node/transparent'),
    TransparentThenSecondNode = require('../common/node/transparentThenSecond'),
    TransparentThenDiscardFirstNode = require('../common/node/transparentThenDiscardFirst');

class FlorenceParser extends CommonParser {
  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
        significantTokenTypes = FlorenceLexer.significantTokenTypes(),
        mappings = {
          'part': TransparentNode,
          'rule': DiscardFirstChildNode,
          'label': LabelNode,
          'premise': TransparentThenSecondNode,
          'premises': TransparentThenDiscardFirstNode,
          'directive': TransparentNode,
          'then': DiscardFirstChildNode,
          'hence': DiscardFirstChildNode,
          'proof': DiscardFirstChildNode,
          'suppose': DiscardFirstChildNode,
          'therefore': TransparentThenDiscardFirstNode,
          'conclusion': DiscardFirstChildNode,
          'endsOfLines': DiscardNode,
          'commaThenLabel': TransparentThenSecondNode,
          'includeDirective': IncludeDirectiveNode,
          'parenthesisedLabels': TransparentThenSecondNode,
          'labelledStatement': DiscardSecondChildNode,
          '(labelled)Statement': TransparentNode,
          'subLemmaOr(labelled)Statement': TransparentNode
        },
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
