'use strict';

var NonTerminalNodeParseTree = require('../../bnf/parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(childNodes, productionName, startLine, endLine) {
    this.childNodes = childNodes;
    this.productionName = productionName;
    this.startLine = startLine;
    this.endLine = endLine;
  }
  
  getChildNodes() {
    return this.childNodes;
  }
  
  getProductionName() {
    return this.productionName;
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
        nonTerminalNode = NonTerminalNode.fromChildNodesAndProductionName(childNodes, productionName);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }

  static fromChildNodesAndProductionName(childNodes, productionName, Class = NonTerminalNode) {
    var startLine = startLineFromChildNodes(childNodes),
        endLine = endLineFromChildNodes(childNodes),
        nonTerminalNode = new Class(childNodes, productionName, startLine, endLine);

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
