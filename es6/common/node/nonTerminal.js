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
  
  static fromNodesAndRuleName(nodes, ruleName, Class = NonTerminalNode) {
    const childNodes = nodes, ///
          nonTerminalNode = Class.fromRuleNameAndChildNodes(ruleName, childNodes, Class);

    return nonTerminalNode;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes, Class = NonTerminalNode) {
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
