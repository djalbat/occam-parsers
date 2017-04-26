'use strict';

const NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(productionName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken) {
    this.productionName = productionName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
    this.firstSignificantToken = firstSignificantToken;
    this.lastSignificantToken = lastSignificantToken;
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
    return this.firstSignificantToken;
  }

  getLastSignificantToken() {
    return this.lastSignificantToken;
  }
  
  update() {
    this.childNodes.forEach(function(childNode) {
      childNode.update();
    })
  }

  reset() {
    this.childNodes.forEach(function(childNode) {
      childNode.reset();
    })
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
          nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes, Class);

    return nonTerminalNode;
  }

  static fromProductionNameAndChildNodes(productionName, childNodes, Class = NonTerminalNode) {
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
          nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
