'use strict';

var NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(productionName, childNodes) {
    this.productionName = productionName;
    this.childNodes = childNodes;
  }

  getProductionName() {
    return this.productionName;
  }

  getChildNodes() {
    return this.childNodes;
  }
  
  getFirstLine() {
    var firstChildNode = first(this.childNodes),
        firstChildNodeFirstLine = firstChildNode.getFirstLine(),
        firstLine = firstChildNodeFirstLine;

    return firstLine;
  }

  getLastLine() {
    var lastChildNode = last(this.childNodes),
        lastChildNodeFirstLine = lastChildNode.getLastLine(),
        lastLine = lastChildNodeFirstLine;

    return lastLine;
  }

  getFirstSignificantToken() {
    var firstChildNode = first(this.childNodes),
        firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
        firstSignificantToken = firstChildNodeFirstSignificantToken; ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    var lastChildNode = last(this.childNodes),
        lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
        lastSignificantToken = lastChildNodeLastSignificantToken; ///

    return lastSignificantToken;
  }

  getParseTree() {
    var nonTerminalNode = this,  ///
        nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode),
        parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  static fromNodesAndProductionName(nodes, productionName, Class = NonTerminalNode) {
    var childNodes = nodes, ///
        nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }

  static fromProductionNameAndChildNodes(productionName, childNodes, Class = NonTerminalNode) {
    var nonTerminalNode = new Class(productionName, childNodes);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
