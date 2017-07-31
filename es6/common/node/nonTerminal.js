'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(ruleName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken) {
    this.ruleName = ruleName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
    this.firstSignificantToken = firstSignificantToken;
    this.lastSignificantToken = lastSignificantToken;
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
    return this.firstLine;
  }

  getLastLine() {
    return this.lastLine;
  }

  getFirstSignificantToken() {
    return this.firstSignificantToken;
  }

  getLastSignificantToken() {
    return this.lastSignificantToken;
  }

  generateParseTree(lines) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode, lines),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
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
    
    const firstChildNode = arrayUtil.first(childNodes),
          lastChildNode = arrayUtil.last(childNodes),
          firstChildNodeFirstLine = firstChildNode.getFirstLine(),
          lastChildNodeFirstLine = lastChildNode.getLastLine(),
          firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
          lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
          firstLine = firstChildNodeFirstLine,  ///
          lastLine = lastChildNodeFirstLine,  ///
          firstSignificantToken = firstChildNodeFirstSignificantToken, ///
          lastSignificantToken = lastChildNodeLastSignificantToken, ///
          nonTerminalNode = new Class(ruleName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;
