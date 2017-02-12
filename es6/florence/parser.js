'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    ErrorsNode = require('./errorsNode'),
    TransparentNode = require('../common/node/transparent'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/transparentThenKeepSecond');

class FlorenceParser extends CommonParser {
  static fromNothing(mappings) {
    var lines = BNFLexer.linesFromGrammar(grammar),
        significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

    mappings = Object.assign({
      'errors': ErrorsNode,
      'part': TransparentNode,
      'premise': TransparentNode,
      'premises': TransparentNode,
      'premise(s)': DiscardSecondChildNode,
      'conclusion': DiscardSecondChildNode,
      'statementBody': TransparentNode,
      'commaThenLabel': TransparentThenKeepSecondNode,
      'whitespaceOrPart': TransparentNode,
      'labelledStatement': DiscardSecondChildNode,
      'parenthesisedLabels': TransparentThenKeepSecondNode,
      '(labelled)Statement': TransparentNode,
      'specialOrUnassigned': TransparentNode,
      'subLemmaOr(labelled)Statement': TransparentNode
    }, mappings);

    var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
