'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      TransparentNode = require('../common/node/nonTerminal/transparent'),
      DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChild'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecond');

const { BNFLexer, FlorenceLexer } = lexers;

class FlorenceParser extends CommonParser {
  static fromNothing(mappings) {
    const lines = BNFLexer.linesFromGrammar(grammar),
          significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

    mappings = Object.assign({
      'part': TransparentNode,
      'premise': TransparentNode,
      'premises': TransparentNode,
      'statement': TransparentNode,
      'premise(s)': DiscardSecondChildNode,
      'conclusion': DiscardSecondChildNode,
      'commaThenLabel': TransparentThenKeepSecondNode,
      'labelledStatement': DiscardSecondChildNode,
      'parenthesisedLabels': TransparentThenKeepSecondNode,
      '(un)labelledStatement': TransparentNode,
      'specialOrUnassigned': TransparentNode,
      'subLemmaOr(un)labelledStatement': TransparentNode
    }, mappings);

    const productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
