'use strict';

const bnfUtil = require('../../util/bnf'),
      arrayUtil = require('../../util/array'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      ChoiceOfPartsPart = require('../part/choiceOfParts'),
      OptionalPartPart = require('../part/optionalPart'),
      ZeroOrMorePartsPart = require('../part/zeroOrMoreParts'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      NonTerminalNode = require('../../common/node/nonTerminal');


class PartNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    let part = null;

    const childNodes = this.getChildNodes(),
          nodes = childNodes, ///
          quantifiers = quantifiersFromNodes(nodes);

    noWhitespace = noWhitespaceFromNodes(nodes, noWhitespace);

    const nodesLength = nodes.length;
    
    if (nodesLength === 1) {
      const firstNode = arrayUtil.first(nodes),
            node = firstNode;  ///

      part = partFromNode(node, noWhitespace);
    } else {
      part = partFromNodes(nodes);
    }
    
    part = partFromPartAndQuantifiers(part, quantifiers);

    return part;
  }
  
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, PartNode); }
}

module.exports = PartNode;

function noWhitespaceFromNodes(nodes, noWhitespace) {
  const firstNode = arrayUtil.first(nodes),
        firstNodeNoWhitespaceNode = bnfUtil.isNodeNoWhitespaceNode(firstNode);

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

  const lastNode = arrayUtil.last(nodes),
        lastNodeQuantifiersNode = bnfUtil.isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    const quantifiersNode = lastNode;  ///

    quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode);

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
