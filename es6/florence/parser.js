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

      'name': TransparentNode,
      'part': TransparentNode,
      'premise': TransparentNode,
      'premises': TransparentNode,
      'statement': TransparentNode,
      'subDerivation': TransparentNode,
      'proofDerivation': TransparentNode,
      'parenthesisedType': TransparentNode,
      'abridgedProofDerivation': TransparentNode,

      'typeName': TransparentNode,
      'labelName': TransparentNode,
      'variableName': TransparentNode,
      'constructorName': TransparentNode,
      'metavariableName': TransparentNode,

      'premise(s)': TransparentNode,
      'type(s)Declaration': TransparentNode,
      '(typed)Variable(s)Declaration': TransparentNode,
      'typedConstructor(s)Declaration': TransparentNode,
      '(qualified)Metavariable(s)Declaration': TransparentNode,

      '(typed)Variable': TransparentNode,
      '(qualified)Metavariable': TransparentNode,
      '(abridged)ProofDerivation': TransparentNode,

      'byOrFrom': TransparentNode,
      'typeOrTerm': TransparentNode,
      'unjustifiedStatementOrUnknown': TransparentNode,
      '(un)justifiedStatementOrUnknown': TransparentNode,
      'specialUnassignedOrMinorKeywords': TransparentNode,

      'commaThenTerm': TransparentThenKeepSecondNode,
      'commaThenType': TransparentThenKeepSecondNode,
      'commaThenLabel': TransparentThenKeepSecondNode,
      'commaThenMetavariable': TransparentThenKeepSecondNode,
      'commaThen(typed)Variable': TransparentThenKeepSecondNode,
      'commaThenTypedConstructor': TransparentThenKeepSecondNode,
      'commaThen(qualified)Metavariable': TransparentThenKeepSecondNode,

      'parenthesisedTermList': TransparentThenKeepSecondNode,
      'parenthesisedTypeList': TransparentThenKeepSecondNode,
      'parenthesisedLabelList': TransparentThenKeepSecondNode,

      'conclusion': DiscardSecondChildNode,
      'typedVariable': DiscardSecondChildNode,
      'typedConstructor': DiscardSecondChildNode

    }, mappings);

    const productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
