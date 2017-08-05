'use strict';

const necessary = require('necessary');

const NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

const { array } = necessary,
      { first, last } = array;

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
    
    const firstChildNode = first(childNodes),
          lastChildNode = last(childNodes),
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
