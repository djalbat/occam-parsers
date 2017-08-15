'use strict';

const necessary = require('necessary');

const bnfUtilities = require('../../utilities/bnf'),
      OptionalPartPart = require('../part/nonTerminal/optionalPart'),
      ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
      ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { array } = necessary,
      { first, last } = array;

class PartNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    let part = null;

    const childNodes = this.getChildNodes(),
          nodes = childNodes, ///
          quantifiers = quantifiersFromNodes(nodes);

    noWhitespace = noWhitespaceFromNodes(nodes, noWhitespace);

    const nodesLength = nodes.length;
    
    if (nodesLength === 1) {
      const firstNode = first(nodes),
            node = firstNode;  ///

      part = partFromNode(node, noWhitespace);
    } else {
      part = partFromNodes(nodes);
    }
    
    part = partFromPartAndQuantifiers(part, quantifiers);

    return part;
  }
  
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(PartNode, nodes, ruleName); }
}

module.exports = PartNode;

function noWhitespaceFromNodes(nodes, noWhitespace) {
  const firstNode = first(nodes),
        firstNodeNoWhitespaceNode = bnfUtilities.isNodeNoWhitespaceNode(firstNode);

  if (firstNodeNoWhitespaceNode) {
    noWhitespace = true;

    const begin = 0,
          deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return noWhitespace;
}

function quantifiersFromNodes(nodes) {
  let  quantifiers = [];

  const lastNode = last(nodes),
        lastNodeQuantifiersNode = bnfUtilities.isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    const quantifiersNode = lastNode;  ///

    quantifiers = bnfUtilities.quantifiersFromQuantifiersNode(quantifiersNode);

    const begin = -1,
          deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return quantifiers;
}

function partFromNode(node, noWhitespace) {
  const part = node.generatePart(noWhitespace);

  return part;
}

function partFromNodes(nodes) {
  const part = ChoiceOfPartsPart.fromNodes(nodes) || GroupOfPartsPart.fromNodes(nodes); /// 

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers) {
  const quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    const quantifier = quantifiers.shift(),
          sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier);

    part = sequenceOfPartsPart; ///

    part = partFromPartAndQuantifiers(part, quantifiers);
  }

  return part;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier) {
  let sequenceOfPartsPart;

  switch (quantifier) {
    case '?':
      const optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart; ///
      break;

    case '*':
      const zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart;  ///
      break;

    case '+':
      const oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart; ///
      break;
  }

  return sequenceOfPartsPart;
}
