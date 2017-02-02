'use strict';

var NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(productionName, childNodes, startLine, endLine) {
    this.productionName = productionName;
    this.childNodes = childNodes;
    this.startLine = startLine;
    this.endLine = endLine;
  }

  getProductionName() {
    return this.productionName;
  }

  getChildNodes() {
    return this.childNodes;
  }
  
  getStartLine() {
    return this.startLine;
  }

  getEndLine() {
    return this.endLine;
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
    var startLine = startLineFromChildNodes(childNodes),
        endLine = endLineFromChildNodes(childNodes),
        nonTerminalNode = new Class(productionName, childNodes, startLine, endLine);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;

function startLineFromChildNodes(childNodes) {
  var firstChildNode = first(childNodes),
      firstChildNodeStartLine = firstChildNode.getStartLine(),
      startLine = firstChildNodeStartLine;

  return startLine;
}

function endLineFromChildNodes(childNodes) {
  var lastChildNode = last(childNodes),
      lastChildNodeStartLine = lastChildNode.getEndLine(),
      endLine = lastChildNodeStartLine;

  return endLine;
}
function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
