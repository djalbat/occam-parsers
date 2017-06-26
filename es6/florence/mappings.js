'use strict';

const TransparentNode = require('../common/node/nonTerminal/transparentNode'),
      DiscardOddChildNodes = require('../common/node/nonTerminal/discardOddChildNodes'),
      DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChildNode'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecondNode');

const mappings = {

  'unjustifiedOrJustifiedMetastatement' : TransparentNode,
  'unjustifiedOrJustifiedStatement' : TransparentNode,

  'part': TransparentNode,
  
  'name': TransparentNode,

  'proof': DiscardSecondChildNode,
  'premise': DiscardSecondChildNode,
  'premises': DiscardSecondChildNode,
  'therefore': DiscardSecondChildNode,
  'conclusion': DiscardSecondChildNode,
  'derivation': DiscardSecondChildNode,

  'includeDirective': DiscardOddChildNodes,

  'typesDefinition': DiscardOddChildNodes,
  'variablesDefinition': DiscardOddChildNodes,
  'constructorsDefinition': DiscardOddChildNodes,
  'abbreviationsDefinition': DiscardOddChildNodes,
  'dependentTypesDefinition': DiscardOddChildNodes,
  'metavariablesDefinition': DiscardOddChildNodes,
  'qualifiedMetavariablesDefinition': DiscardOddChildNodes,

  'typeNames': DiscardOddChildNodes,
  'labels': DiscardOddChildNodes,
  'terms': DiscardOddChildNodes,
  
  'parenthesisedTypeNames' : TransparentThenKeepSecondNode,
  'parenthesisedLabels' : TransparentThenKeepSecondNode,
  'parenthesisedTerms' : TransparentThenKeepSecondNode
  
};

module.exports = mappings;
