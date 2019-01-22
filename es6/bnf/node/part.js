'use strict';

const bnfUtilities = require('../../utilities/bnf'),
      arrayUtilities = require('../../utilities/array'),
      OptionalPartPart = require('../part/nonTerminal/optionalPart'),
      ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
      ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { first, last } = arrayUtilities,
      { isNodeQuantifiersNode, isNodeNoWhitespaceNode, quantifiersFromQuantifiersNode } = bnfUtilities;

class PartNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    let part = null;

    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(), ///
          quantifiers = quantifiersFromNodes(nodes),
          firstNodeNoWhitespaceNode = isFirstNodeNoWhitespaceNode(nodes),
          lastNodeRightRecursivePartNode = isLastNodeRightRecursivePartNode(nodes);

    if (firstNodeNoWhitespaceNode) {
      nodes.shift();

      noWhitespace = true;
    }

    if (lastNodeRightRecursivePartNode) {
      nodes.pop();
    }

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

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(PartNode, ruleName, childNodes); }
}

module.exports = PartNode;

function quantifiersFromNodes(nodes) {
  let  quantifiers = [];

  const lastNode = last(nodes),
        lastNodeQuantifiersNode = isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    const quantifiersNode = lastNode;  ///

    quantifiers = quantifiersFromQuantifiersNode(quantifiersNode);
  }

  return quantifiers;
}

function isFirstNodeNoWhitespaceNode(nodes) {
  const firstNode = first(nodes),
        firstNodeNoWhitespaceNode = isNodeNoWhitespaceNode(firstNode);

  return firstNodeNoWhitespaceNode;
}

function isLastNodeRightRecursivePartNode(nodes) {
  let lastNodeRightRecursivePartNode = false;

  const lastNode = last(nodes),
        lastNodeTerminalNode = lastNode.isTerminalNode(),
        lastNodeNonTerminalNode = !lastNodeTerminalNode;

  if (lastNodeNonTerminalNode) {
    const nonTerminalNode = lastNode, ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

    lastNodeRightRecursivePartNode = (nonTerminalNodeRuleName === 'part~'); ///
  }

  return lastNodeRightRecursivePartNode;
}

function partFromNode(node, noWhitespace) {
  const part = node.generatePart(noWhitespace);

  return part;
}

function partFromNodes(nodes) {
  let part = null;

  const choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes);

  if (choiceOfPartsPart !== null) {
    part = choiceOfPartsPart; ///
  } else {
    const groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes);

    if (groupOfPartsPart !== null) {
      part = groupOfPartsPart;  ///
    }
  }

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
