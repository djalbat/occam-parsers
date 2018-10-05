'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

const { first, forwardsSome, backwardsSome } = arrayUtilities;

class NonTerminalNode {
  constructor(ruleName, childNodes) {
    this.ruleName = ruleName;
    this.childNodes = childNodes;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
  }

  getRuleName() {
    return this.ruleName;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getFirstToken() {
    let firstToken = null;

    forwardsSome(this.childNodes, function(childNode) {
      firstToken = childNode.getFirstToken();

      if (firstToken !== null) {
        return true;
      }
    });

    return firstToken;
  }

  getLastToken() {
    let lastToken = null;

    backwardsSome(this.childNodes, function(childNode) {
      lastToken = childNode.getLastToken();

      if (lastToken !== null) {
        return true;
      }
    });

    return lastToken;
  }
  
  isNullified() {
    let nullified = false;

    const childNodesLength = this.childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(this.childNodes),
            childNode = firstChildNode, ///
            childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

        nullified = terminalNodeEpsilonNode; ///
      }
    }

    return nullified;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }
  
  asParseTree(tokens) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  static fromNodesAndRuleName(Class, nodes, ruleName) {
    if (ruleName === undefined) {
      ruleName = nodes;
      nodes = Class;
      Class = NonTerminalNode;
    }
    
    const childNodes = nodes, ///
          nonTerminalNode = Class.fromRuleNameAndChildNodes(Class, ruleName, childNodes);

    return nonTerminalNode;
  }

  static fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
    if (childNodes === undefined) {
      childNodes = ruleName;
      ruleName = Class;
      Class = NonTerminalNode;
    }
    
    const nonTerminalNode = new Class(ruleName, childNodes);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;
