'use strict';

const TransparentNode = require('../common/node/nonTerminal/transparent'),
      DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChild'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecond');

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
