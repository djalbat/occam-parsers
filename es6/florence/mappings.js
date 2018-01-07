'use strict';

const DiscardOddChildNodes = require('../common/node/nonTerminal/discardOddChildNodes'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecondNode');

const mappings = {

  'typesDeclaration': DiscardOddChildNodes,
  'contextsDeclaration': DiscardOddChildNodes,
  'variablesDeclaration': DiscardOddChildNodes,
  'constructorsDeclaration': DiscardOddChildNodes,
  'dependentTypesDeclaration': DiscardOddChildNodes,
  'metavariablesDeclaration': DiscardOddChildNodes,

  'typeNames': DiscardOddChildNodes,
  'labels': DiscardOddChildNodes,
  'terms': DiscardOddChildNodes,

  'parenthesisedTypeNames': TransparentThenKeepSecondNode,
  'parenthesisedLabels': TransparentThenKeepSecondNode,
  'parenthesisedTerms': TransparentThenKeepSecondNode,
  
  'parenthesisedTypeName': TransparentThenKeepSecondNode,
  'parenthesisedTerm': TransparentThenKeepSecondNode

};

module.exports = mappings;
