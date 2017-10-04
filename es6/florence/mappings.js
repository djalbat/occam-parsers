'use strict';

const DiscardOddChildNodes = require('../common/node/nonTerminal/discardOddChildNodes'),
      DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChildNode'),
      DiscardFifthThenSecondChildNode = require('../common/node/nonTerminal/discardFifthThenSecondChildNode'),
      TransparentThenKeepFirstNode = require('../common/node/nonTerminal/transparentThenKeepFirstNode'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecondNode');

const mappings = {

  'proof': DiscardSecondChildNode,
  'premise': DiscardSecondChildNode,
  'premises': DiscardSecondChildNode,
  'sublemma': DiscardSecondChildNode,
  'therefore': DiscardSecondChildNode,
  'conclusion': DiscardSecondChildNode,
  'metaProof': DiscardSecondChildNode,

  'indicativeConditional': DiscardFifthThenSecondChildNode,

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

  'name': TransparentThenKeepFirstNode,
  
  'parenthesisedTypeNames': TransparentThenKeepSecondNode,
  'parenthesisedLabels': TransparentThenKeepSecondNode,
  'parenthesisedTerms': TransparentThenKeepSecondNode,
  
  'parenthesisedTypeName': TransparentThenKeepSecondNode,
  'parenthesisedTerm': TransparentThenKeepSecondNode

};

module.exports = mappings;
