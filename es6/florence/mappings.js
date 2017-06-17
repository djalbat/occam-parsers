'use strict';

const TransparentNode = require('../common/node/nonTerminal/transparentNode'),
      DiscardOddChildNodes = require('../common/node/nonTerminal/discardOddChildNodes'),
      DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChildNode'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecondNode');

const mappings = {

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

  'terms': DiscardOddChildNodes,
  'types': DiscardOddChildNodes,
  'labels': DiscardOddChildNodes,
  'variables': DiscardOddChildNodes,
  'constructors': DiscardOddChildNodes,
  'metaVariables': DiscardOddChildNodes,
  'dependentTypes': DiscardOddChildNodes,
  'qualifiedMetaVariables': DiscardOddChildNodes,

  'includeDirective': DiscardOddChildNodes,

  'byOrFrom' : TransparentNode,
  'premiseOrPremises' : TransparentNode,
  'metaVariableOrQualifiedMetavariable' : TransparentNode,
  'unjustifiedStatementOrJustifiedStatement' : TransparentNode,
  'proofDerivationOrAbridgedProofDerivation' : TransparentNode,

  'parenthesisedLabels' : TransparentThenKeepSecondNode,
  'parenthesisedTerms' : TransparentThenKeepSecondNode,
  'parenthesisedTypes' : TransparentThenKeepSecondNode
  
};

module.exports = mappings;
