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
}

module.exports = nodeUtil;

function quantifierFromQuantifiersNode(quantifiersNode) {
  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        firstQuantifiersNodeChildNode = first(quantifiersNodeChildNodes),
        firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
        quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}

function first(array) { return array[0]; }
function second(array) { return array[1]; }
