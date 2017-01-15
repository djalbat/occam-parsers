'use strict';

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(childNodes, productionName) {
    this.childNodes = childNodes;
    this.productionName = productionName;
  }
  
  getChildNodes() {
    return this.childNodes;
  }
  
  getProductionName() {
    return this.productionName;
  }
  
  getParseTree() {
    var nonTerminalNode = this,  ///
        nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode),
        parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }
  
  update() {
    this.childNodes.forEach(function(childNode) {
      childNode.update();
    });
  }

  static fromNodes(nodes, productionName) {
    var childNodes = nodes, ///
        nonTerminalNode = new NonTerminalNode(childNodes, productionName);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }
}

module.exports = NonTerminalNode;
