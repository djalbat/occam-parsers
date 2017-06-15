'use strict';

const TerminalNode = require('../common/node/terminal'),
      NonTerminalNode = require('../common/node/nonTerminal');

class nodeUtil {
  static isNodeTerminalNode(node) {
    const nodeTerminalNode = (node instanceof TerminalNode);

    return nodeTerminalNode;
  }

  static isNodeNonTerminalNode(node) {
    const nodeNonTerminalNode = (node instanceof NonTerminalNode);

    return nodeNonTerminalNode;
  }

  static isNodeNoWhitespaceNode(node) {
    let nodeNoWhitespaceNode = false;
  
    const nodeTerminalNode = nodeUtil.isNodeTerminalNode(node);
  
    if (nodeTerminalNode) {
      const terminalNode = node,
            terminalNodeContent = terminalNode.getContent();
  
      nodeNoWhitespaceNode = (terminalNodeContent === "<NO_WHITESPACE>"); ///
    }
  
    return nodeNoWhitespaceNode;
  }
  
  static quantifiersFromQuantifiersNode(quantifiersNode, quantifiers = []) {
    const quantifier = quantifierFromQuantifiersNode(quantifiersNode);

    quantifiers.push(quantifier);

    const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
          quantifiersNodeChildNodesLength =  quantifiersNodeChildNodes.length;

    if (quantifiersNodeChildNodesLength === 2) {
      const secondQuantifiersNodeChildNode = second(quantifiersNodeChildNodes);

      quantifiersNode = secondQuantifiersNodeChildNode; ///

      quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
    }

    return quantifiers;
  }

  static sequenceOfPartsPartFromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace) {
    const part = node.generatePart(Parts, noWhitespace),
          quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode),
          sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts);

    return sequenceOfPartsPart;
  }
}

module.exports = nodeUtil;

function quantifierFromQuantifiersNode(quantifiersNode) {
  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        firstQuantifiersNodeChildNode = first(quantifiersNodeChildNodes),
        firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
        quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}

function sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts) {
  const quantifier = quantifiers.shift(),
        quantifiersLength = quantifiers.length;

  let sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts);

  if (quantifiersLength > 0) {
    part = sequenceOfPartsPart; ///

    sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifiers(part, quantifiers, Parts);
  }

  return sequenceOfPartsPart;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts) {
  let sequenceOfPartsPart;

  switch (quantifier) {
    case '?':
      const OptionalPartPart = Parts['OptionalPartPart'],
          optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart;
      break;

    case '*':
      const ZeroOrMorePartsPart = Parts['ZeroOrMorePartsPart'],
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart;
      break;

    case '+':
      const OneOrMorePartsPart = Parts['OneOrMorePartsPart'],
          oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart;
      break;
  }

  return sequenceOfPartsPart;
}

function first(array) { return array[0]; }

function second(array) { return array[1]; }
