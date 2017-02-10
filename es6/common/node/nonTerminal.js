'use strict';

var NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

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

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  getFirstSignificantToken() {
    var firstChildNode = first(this.childNodes),
        firstChildNodeFirstSignificantToken = firstChildNode.getSignificantFirstToken(),
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

  static fromNodes(nodes, productionName) {
    var childNodes = nodes, ///
        nonTerminalNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }

  static fromProductionNameAndChildNodes(productionName, childNodes, Class = NonTerminalNode) {
    var firstLine = firstLineFromChildNodes(childNodes),
        lastLine = lastLineFromChildNodes(childNodes),
        nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;

function firstLineFromChildNodes(childNodes) {
  var firstChildNode = first(childNodes),
      firstChildNodeFirstLine = firstChildNode.getFirstLine(),
      firstLine = firstChildNodeFirstLine;

  return firstLine;
}

function lastLineFromChildNodes(childNodes) {
  var lastChildNode = last(childNodes),
      lastChildNodeFirstLine = lastChildNode.getLastLine(),
      lastLine = lastChildNodeFirstLine;

  return lastLine;
}
function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
