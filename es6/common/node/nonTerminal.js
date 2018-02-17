'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

const { forwardsSome, backwardsSome } = arrayUtilities;

class NonTerminalNode {
  constructor(ruleName, childNodes) {
    this.ruleName = ruleName;
    this.childNodes = childNodes;

    this.parentNode = undefined;  ///
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

  getParentNode() {
    return this.parentNode;
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
  
  isNullified() {
    const firstSignificantToken = this.getFirstSignificantToken(),
          nullified = (firstSignificantToken === null);  ///
    
    return nullified;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }
  
  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  asParseTree(lines) {
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
