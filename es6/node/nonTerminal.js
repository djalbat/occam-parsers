'use strict';

class NonTerminalNode {
  constructor(childNodes) {
    this.childNodes = childNodes;
  }
  
  toString() {
    var str = this.childNodes.reduce(function(str, childNode) {
      var childNodeStr = childNode.toString();
      
      str += childNodeStr;
      
      return str;
    }, '');
    
    return str;
  }

  static fromNodes(nodes) {
    var childNodes = nodes, ///
        nonTerminalNode = new NonTerminalNode(childNodes);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }
}

module.exports = NonTerminalNode;
