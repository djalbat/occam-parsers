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

  'then': DiscardSecondChildNode,
  'hence': DiscardSecondChildNode,
  'proof': DiscardSecondChildNode,
  'suppose': DiscardSecondChildNode,
  'premise': DiscardSecondChildNode,
  'premises': DiscardSecondChildNode,
  'therefore': DiscardSecondChildNode,
  'conclusion': DiscardSecondChildNode,

  'includeDirective': DiscardOddChildNodes,

  'types': DiscardOddChildNodes,
  'variables': DiscardOddChildNodes,
  'constructors': DiscardOddChildNodes,
  'abbreviations': DiscardOddChildNodes,
  'dependentTypes': DiscardOddChildNodes,
  'metavariables': DiscardOddChildNodes,
  'qualifiedMetavariables': DiscardOddChildNodes,

  'labels': DiscardOddChildNodes,
  'terms': DiscardOddChildNodes,
  
  'parenthesisedTypeNames' : TransparentThenKeepSecondNode,
  'parenthesisedLabels' : TransparentThenKeepSecondNode,
  'parenthesisedTerms' : TransparentThenKeepSecondNode
  
};

module.exports = mappings;
