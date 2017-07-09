'use strict';

const lexers = require('occam-lexers');

const arrayUtil = require('../util/array');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class bnfUtil {
  static isNodeNoWhitespaceNode(node) {
    let nodeNoWhitespaceNode = false;
  
    const nodeTerminalNode = node.isTerminalNode();
  
    if (nodeTerminalNode) {
      const terminalNode = node,
            terminalNodeContent = terminalNode.getContent();
  
      nodeNoWhitespaceNode = (terminalNodeContent === NO_WHITESPACE);
    }
  
    return nodeNoWhitespaceNode;
  }

  static isNodeChoiceNode(node) {
    let nodeNoChoiceNode = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,
            terminalNodeContent = terminalNode.getContent();

      nodeNoChoiceNode = (terminalNodeContent === '|');
    }

    return nodeNoChoiceNode;
  }

  static isNodeQuantifiersNode(node) {
    let nodeQuantifiersNode = false;

    const nodeTerminalNode = node.isTerminalNode(),
          nodeNonTerminalNode = !nodeTerminalNode;

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes(),
            firstChildNode = arrayUtil.first(childNodes),
            firstChildNodeTerminalNode = firstChildNode.isTerminalNode();

      if (firstChildNodeTerminalNode) {
        const terminalNode = firstChildNode,  ///
              terminalNodeContent = terminalNode.getContent();

        nodeQuantifiersNode = (terminalNodeContent === '?') ||
                              (terminalNodeContent === '*') ||
                              (terminalNodeContent === '+');
      }
    }

    return nodeQuantifiersNode;
  }

  static quantifiersFromQuantifiersNode(quantifiersNode, quantifiers = []) {
    const quantifier = quantifierFromQuantifiersNode(quantifiersNode);

    quantifiers.push(quantifier);

    const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
          quantifiersNodeChildNodesLength =  quantifiersNodeChildNodes.length;

    if (quantifiersNodeChildNodesLength === 2) {
      const secondQuantifiersNodeChildNode = arrayUtil.second(quantifiersNodeChildNodes);

      quantifiersNode = secondQuantifiersNodeChildNode; ///

      quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
    }

    return quantifiers;
  }
}

module.exports = bnfUtil;

function quantifierFromQuantifiersNode(quantifiersNode) {
  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        firstQuantifiersNodeChildNode = arrayUtil.first(quantifiersNodeChildNodes),
        firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
        quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
