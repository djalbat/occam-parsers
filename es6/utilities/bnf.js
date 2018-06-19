'use strict';

const lexers = require('occam-lexers');

const arrayUtilities = require('../utilities/array');

const { BNFLexer } = lexers,
      { first, second } = arrayUtilities,
      { specialSymbols } = BNFLexer,
      { NO_WHITESPACE } = specialSymbols;

function isNodeNoWhitespaceNode(node) {
  let nodeNoWhitespaceNode = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,
          terminalNodeContent = terminalNode.getContent();

    nodeNoWhitespaceNode = (terminalNodeContent === NO_WHITESPACE);
  }

  return nodeNoWhitespaceNode;
}

function isNodeChoiceNode(node) {
  let nodeNoChoiceNode = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,
          terminalNodeContent = terminalNode.getContent();

    nodeNoChoiceNode = (terminalNodeContent === '|');
  }

  return nodeNoChoiceNode;
}

function isNodeQuantifiersNode(node) {
  let nodeQuantifiersNode = false;

  const nodeTerminalNode = node.isTerminalNode(),
        nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = first(childNodes),
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

function quantifiersFromQuantifiersNode(quantifiersNode, quantifiers = []) {
  const quantifier = quantifierFromQuantifiersNode(quantifiersNode);

  quantifiers.push(quantifier);

  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        quantifiersNodeChildNodesLength =  quantifiersNodeChildNodes.length;

  if (quantifiersNodeChildNodesLength === 2) {
    const secondQuantifiersNodeChildNode = second(quantifiersNodeChildNodes),
          secondQuantifiersNodeChildNodeQuantifiersNode = isNodeQuantifiersNode(secondQuantifiersNodeChildNode);

    if (secondQuantifiersNodeChildNodeQuantifiersNode) {
      quantifiersNode = secondQuantifiersNodeChildNode; ///

      quantifiers = quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
    }
  }

  return quantifiers;
}

module.exports = {
  isNodeNoWhitespaceNode,
  isNodeChoiceNode,
  isNodeQuantifiersNode,
  quantifiersFromQuantifiersNode
};

function quantifierFromQuantifiersNode(quantifiersNode) {
  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        firstQuantifiersNodeChildNode = first(quantifiersNodeChildNodes),
        firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
        quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
