'use strict';

class NonTerminalNode {
  constructor(childNodes, name) {
    this.childNodes = childNodes;
    this.name = name;
  }
  
  toString() {
    var childNodesStr = this.childNodes.reduce(function(childNodesStr, childNode) {
          var childNodeStr = childNode.toString();

          childNodesStr += childNodeStr;

          return childNodesStr;
        }, ''),
        nameLength = this.name.length,
        length = Math.floor(nameLength/2),
        leftMarginStr = leftMarginStrFromLength(length),
        str =
          leftMarginStr + this.name + '\n' +
          leftMarginStr + '|' + '\n';

    return str;
  }

  static fromNodes(nodes, name) {
    var childNodes = nodes, ///
        nonTerminalNode = new NonTerminalNode(childNodes, name);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }
}

module.exports = NonTerminalNode;

function leftMarginStrFromLength(length) {
  var leftMarginStr = '';

  for (var count = 0; count < length; count++) {
    leftMarginStr += '.';
  }

  return leftMarginStr;
}