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
      'variableName': TransparentNode,
      '(typed)Variable': TransparentNode,
      'constructorName': TransparentNode,
      'metavariableName': TransparentNode,
      'parenthesisedType': TransparentNode,
      'type(s)Declaration': TransparentNode,
      'specialOrUnassigned': TransparentNode,
      '(un)labelledStatement': TransparentNode,
      '(qualified)Metavariable': TransparentNode,
      '(typed)Variable(s)Declaration': TransparentNode,
      'typedConstructor(s)Declaration': TransparentNode,
      'subLemmaOr(un)labelledStatement': TransparentNode,
      '(qualified)Metavariable(s)Declaration': TransparentNode,
      'premise(s)': DiscardSecondChildNode,
      'conclusion': DiscardSecondChildNode,
      'typedVariable': DiscardSecondChildNode,
      'typedConstructor': DiscardSecondChildNode,
      'labelledStatement': DiscardSecondChildNode,
      'commaThenType': TransparentThenKeepSecondNode,
      'commaThenLabel': TransparentThenKeepSecondNode,
      'commaThenMetavariable': TransparentThenKeepSecondNode,
      'commaThen(Typed)Variable': TransparentThenKeepSecondNode,
      'commaThenTypedConstructor': TransparentThenKeepSecondNode,
      'commaThen(qualified)Metavariable': TransparentThenKeepSecondNode,
      'parenthesisedTypeList': TransparentThenKeepSecondNode,
      'parenthesisedLabelList': TransparentThenKeepSecondNode
    }, mappings);

    const productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
