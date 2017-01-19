'use strict';

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    ErrorNode = require('./node/error'),
    LabelNode = require('./node/label'),
    IncludeDirectiveNode = require('./node/includeDirective'),
    TransparentNode = require('../common/node/transparent'),
    DiscardChildrenNode = require('../common/node/discardChildren'),
    DiscardFirstChildNode = require('../common/node/discardFirstChild'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    TransparentThenSecondNode = require('../common/node/transparentThenSecond'),
    TransparentThenDiscardFirstNode = require('../common/node/transparentThenDiscardFirst');

class FlorenceParser extends CommonParser {
  parse(tokens) {
    var documentNode = super.parse(tokens);

    // if (documentNode !== null) {
    //   var errorNodes = documentNode.query('//error');
    //
    //   documentNode.update();
    // }

    return documentNode;
  }

  static fromNothing() {
    var lines = BNFLexer.linesFromGrammar(grammar),
        significantTokenTypes = FlorenceLexer.significantTokenTypes(),
        mappings = {
          'part': TransparentNode,
          'rule': DiscardFirstChildNode,
          'error': ErrorNode,
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
          'endsOfLines': DiscardChildrenNode,
          'statementBody': TransparentNode,
          'commaThenLabel': TransparentThenSecondNode,
          'includeDirective': IncludeDirectiveNode,
          'parenthesisedLabels': TransparentThenSecondNode,
          'labelledStatement': DiscardSecondChildNode,
          '(labelled)Statement': TransparentNode,
          'specialOrUnassigned': TransparentNode,
          'subLemmaOr(labelled)Statement': TransparentNode
        },
        productions = BNFParser.parse(lines, significantTokenTypes, mappings),
        florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
