'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    TransparentNode = require('../common/node/transparent'),
    DiscardChildrenNode = require('../common/node/discardChildren'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/transparentThenKeepSecond');

class FlorenceParser extends CommonParser {
  static fromNothing(mappings) {
    var lines = BNFLexer.linesFromGrammar(grammar),
        significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

    mappings = Object.assign({
      // 'part': TransparentNode,
      // 'label': TransparentNode,
      // 'premise': TransparentNode,
      // 'premises': TransparentNode,
      // 'directive': TransparentNode,
      // 'endsOfLines': DiscardChildrenNode,
      // 'statementBody': TransparentNode,
      // 'commaThenLabel': TransparentThenKeepSecondNode,
      // 'labelledStatement': DiscardSecondChildNode,
      // 'parenthesisedLabels': TransparentThenKeepSecondNode,
      // '(labelled)Statement': TransparentNode,
      // 'specialOrUnassigned': TransparentNode,
      // 'subLemmaOr(labelled)Statement': TransparentNode
    }, mappings);

    var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
