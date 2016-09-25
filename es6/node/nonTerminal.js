'use strict';

var ParseTree = require('../parseTree');

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
    var nonTerminalNode = this, ///
        parseTree = ParseTree.fromNonTerminalNode(nonTerminalNode);
    
    return parseTree;
  }

  static fromNodes(nodes, productionName) {
    var childNodes = nodes, ///
        nonTerminalNode = new NonTerminalNode(childNodes, productionName);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }
}

module.exports = NonTerminalNode;
