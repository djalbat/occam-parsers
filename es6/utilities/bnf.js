'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../bnf/ruleNames'),
      arrayUtilities = require('../utilities/array');

const { BNFLexer } = lexers,
      { first, second } = arrayUtilities,
      { specialSymbols } = BNFLexer,
      { plus, asterisk, questionMark, exclamationMark, NO_WHITESPACE } = specialSymbols,
      { RuleNameRuleName, RightRecursivePartRuleName } = ruleNames;

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

function isNodeRuleNameNode(node) {
  let nodeRuleNameNode = false;

  const nodeTerminalNode = node.isTerminalNode(),
        nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

    nodeRuleNameNode = (nonTerminalNodeRuleName === RuleNameRuleName);
  }

  return nodeRuleNameNode;
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

      nodeQuantifiersNode = (terminalNodeContent === plus) ||
                            (terminalNodeContent === asterisk) ||
                            (terminalNodeContent === questionMark) ||
                            (terminalNodeContent === exclamationMark);
    }
  }

  return nodeQuantifiersNode;
}

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

function isNodeRightRecursivePartNode(node) {
  let nodeRightRecursivePartNode = false;

  const nodeTerminalNode = node.isTerminalNode(),
        nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
        nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

    nodeRightRecursivePartNode = (nonTerminalNodeRuleName === RightRecursivePartRuleName);
  }

  return nodeRightRecursivePartNode;
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
  isNodeChoiceNode,
  isNodeRuleNameNode,
  isNodeQuantifiersNode,
  isNodeNoWhitespaceNode,
  isNodeRightRecursivePartNode,
  quantifiersFromQuantifiersNode
};

function quantifierFromQuantifiersNode(quantifiersNode) {
  const quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
        firstQuantifiersNodeChildNode = first(quantifiersNodeChildNodes),
        firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
        quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
