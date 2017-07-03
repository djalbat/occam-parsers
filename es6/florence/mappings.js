'use strict';

const TransparentNode = require('../common/node/nonTerminal/transparentNode'),
      DiscardOddChildNodes = require('../common/node/nonTerminal/discardOddChildNodes'),
      DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChildNode'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecondNode');

const mappings = {

  'unjustifiedOrJustifiedMetastatement' : TransparentNode,
  'unjustifiedOrJustifiedStatement' : TransparentNode,

  'name': TransparentNode,

  'proof': DiscardSecondChildNode,
  'premise': DiscardSecondChildNode,
  'premises': DiscardSecondChildNode,
  'subproof': DiscardSecondChildNode,
  'therefore': DiscardSecondChildNode,
  'conclusion': DiscardSecondChildNode,

  'includeDirective': DiscardOddChildNodes,

  'typesDeclaration': DiscardOddChildNodes,
  'contextsDeclaration': DiscardOddChildNodes,
  'variablesDeclaration': DiscardOddChildNodes,
  'constructorsDeclaration': DiscardOddChildNodes,
  'abbreviationsDeclaration': DiscardOddChildNodes,
  'dependentTypesDeclaration': DiscardOddChildNodes,
  'metavariablesDeclaration': DiscardOddChildNodes,

  'typeNames': DiscardOddChildNodes,
  'labels': DiscardOddChildNodes,
  'terms': DiscardOddChildNodes,
  
  'parenthesisedTypeNames' : TransparentThenKeepSecondNode,
  'parenthesisedTypeName' : TransparentThenKeepSecondNode,
  'parenthesisedLabels' : TransparentThenKeepSecondNode,
  'parenthesisedTerms' : TransparentThenKeepSecondNode,
  'parenthesisedTerm' : TransparentThenKeepSecondNode

};

module.exports = mappings;
