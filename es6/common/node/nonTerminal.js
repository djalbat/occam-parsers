'use strict';

const necessary = require('necessary');

const NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

const { array } = necessary,
      { forwardsSome, backwardsSome } = array;

class NonTerminalNode {
  constructor(ruleName, childNodes) {
    this.ruleName = ruleName;
    this.childNodes = childNodes;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }
  
  getRuleName() {
    return this.ruleName;
  }

  getChildNodes() {
    return this.childNodes;
  }
  
  getFirstLine() {
    let firstLine = null;

    forwardsSome(this.childNodes, function(childNode) {
      firstLine = childNode.getFirstLine();

      if (firstLine !== null) {
        return true;
      }
    });

    return firstLine;
  }

  getLastLine() {
    let lastLine = null;

    backwardsSome(this.childNodes, function(childNode) {
      lastLine = childNode.getLastLine();

      if (lastLine !== null) {
        return true;
      }
    });

    return lastLine;
  }

  getFirstSignificantToken() {
    let firstSignificantToken = null;

    forwardsSome(this.childNodes, function(childNode) {
      firstSignificantToken = childNode.getFirstSignificantToken();

      if (firstSignificantToken !== null) {
        return true;
      }
    });

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    let lastSignificantToken = null;

    backwardsSome(this.childNodes, function(childNode) {
      lastSignificantToken = childNode.getLastSignificantToken();

      if (lastSignificantToken !== null) {
        return true;
      }
    });

    return lastSignificantToken;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  parseTreeFromLines(lines) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndLines(nonTerminalNode, lines),
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
