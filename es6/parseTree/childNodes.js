'use strict';

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty');

class ChildNodesParseTree extends ParseTree {
  constructor(lines, verticalBranchPosition) {
    super(lines);
    
    this.verticalBranchPosition = verticalBranchPosition;
  }
  
  getVerticalBranchPosition() {
    return this.verticalBranchPosition;
  }
  
  static fromChildNodes(childNodes) {
    var childNodeParseTrees = childNodes.map(function(childNode) {
          var childNodeParseTree = childNode.getParseTree();

          return childNodeParseTree;
        }),
        childNodeParseTreesLength = childNodeParseTrees.length,
        childNodeParseTreesDepth = childNodeParseTrees.reduce(function(childNodeParseTreesDepth, childNodeParseTree) {
          var childNodeParseTreeDepth = childNodeParseTree.getDepth();

          childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);

          return childNodeParseTreesDepth;
        }, 0),
        verticalBranchPosition = childNodeParseTrees.reduce(function(verticalBranchPosition, childNodeParseTree) {
          if (verticalBranchPosition === null) {
            var firstChildNodeParseTree = childNodeParseTree,
                firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();
            
            verticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
          } else {
            verticalBranchPosition = undefined;
          }
          
          return verticalBranchPosition;
        }, null),
        childNodesParseTree = EmptyParseTree.fromDepth(childNodeParseTreesDepth, ChildNodesParseTree, verticalBranchPosition);

    childNodeParseTrees.forEach(function(childNodeParseTree, index) {
      var childNodeParseTreeDepth = childNodeParseTree.getDepth(),
          clonedChildNodeParseTree = childNodeParseTree.clone(),
          lastChildNodeParseTree = (index === childNodeParseTreesLength - 1);

      if (!lastChildNodeParseTree) {
        var rightMarginWidth = 1;

        clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
      }

      if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
        var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;

        clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
      }

      childNodesParseTree.appendToRight(clonedChildNodeParseTree);
    });

    return childNodesParseTree;
  }
}

module.exports = ChildNodesParseTree;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
