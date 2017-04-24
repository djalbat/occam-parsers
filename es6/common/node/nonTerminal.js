'use strict';

const NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(productionName, childNodes, firstLine, lastLine) {
    this.productionName = productionName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
  }

  getProductionName() {
    return this.productionName;
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
    const firstChildNode = first(this.childNodes),
          firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
          firstSignificantToken = firstChildNodeFirstSignificantToken; ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    const lastChildNode = last(this.childNodes),
          lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
          lastSignificantToken = lastChildNodeLastSignificantToken; ///

    return lastSignificantToken;
  }

  parseTree(lines) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode, lines),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  static fromNodesAndProductionName(nodes, productionName, Class = NonTerminalNode) {
    const childNodes = nodes, ///
          nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes);

    return nonTerminalNode;
  }

  static fromProductionNameAndChildNodes(productionName, childNodes, Class = NonTerminalNode) {
    const firstChildNode = first(childNodes),
          lastChildNode = last(childNodes),
          firstChildNodeFirstLine = firstChildNode.getFirstLine(),
          lastChildNodeFirstLine = lastChildNode.getLastLine(),
          firstLine = firstChildNodeFirstLine,  ///
          lastLine = lastChildNodeFirstLine,  ///
          nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
