'use strict';

class NonTerminalNode {
  constructor(childNodes, productionName) {
    this.childNodes = childNodes;
    this.productionName = productionName;
  }
  
  getStrArray() {
    var strArray = [],
        str = this.productionName + '~',
        strLength = str.length,
        width = strLength,  ///
        depth = this.getDepth();

    this.childNodes.forEach(function(childNode) {
      var childNodeStrArray = childNode.getStrArray(),
          index = 0;

      childNodeStrArray.forEach(function(str) {
        if (strArray[index] === undefined) {
          strArray[index] = '';
        }
        
        strArray[index++] += str;
      });

      var lastIndex = index,
          lastChildNodeStr = last(childNodeStrArray),
          lastChildNodeStrLength = lastChildNodeStr.length,
          size = lastChildNodeStrLength,  ///
          marginStr = marginStrFromSize(size, ',');

      for (index = lastIndex; index < depth; index++) {
        if (strArray[index] === undefined) {
          strArray[index] = '';
        }

        strArray[index] = marginStr + strArray[index];
      }
    });

    var childNodesWidth = strArray.reduce(function(childNodesWidth, str) {
          var strLength = str.length;

          childNodesWidth = Math.max(childNodesWidth, strLength);

          return childNodesWidth;
        }, 0);

    var differenceInWidths = width - childNodesWidth,
        size = Math.abs(differenceInWidths),
        marginStr = marginStrFromSize(size);

    if (differenceInWidths > 0) {
      strArray.forEach(function(str, index) {
        strArray[index] = marginStr + strArray[index];
      })
    }

    strArray.unshift(str);

    if (differenceInWidths < 0) {
      strArray[0] = marginStr + strArray[0];
    }

    return strArray;
  }

  getDepth() {
    var childNodesDepth = this.childNodes.reduce(function(childNodesDepth, childNode) {
          var childNodeDepth = childNode.getDepth();

          childNodesDepth = Math.max(childNodesDepth, childNodeDepth);

          return childNodesDepth;
        }, 0),
        depth = childNodesDepth + 1;

    return depth;
  }

  static fromNodes(nodes, productionName) {
    var childNodes = nodes, ///
        nonTerminalNode = new NonTerminalNode(childNodes, productionName);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }
}

module.exports = NonTerminalNode;

function last(array) { return array[array.length - 1]; }

function marginStrFromSize(size, spaceCharacter) {
  var marginStr = '';

  spaceCharacter = spaceCharacter || ' ';

  for (var count = 0; count < size; count++) {
    marginStr += spaceCharacter;
  }

  return marginStr;
}
