'use strict';

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty'),
    HorizontalBranchParseTree = require('../parseTree/horizontalBranch');

class ChildNodesParseTree extends ParseTree {
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
        emptyParseTree = EmptyParseTree.fromDepth(childNodeParseTreesDepth),
        childNodesParseTree = emptyParseTree; ///

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

    if (false) {

    } else if (childNodeParseTreesLength === 1) {
      
    } else if (childNodeParseTreesLength > 1) {
      var firstChildNodeParseTree = first(childNodeParseTrees),
          lastChildNodeParseTree = last(childNodeParseTrees),
          firstChildNodeParseTreeWidth = firstChildNodeParseTree.getWidth(),
          lastChildNodeParseTreeWidth = lastChildNodeParseTree.getWidth(),
          leftMarginWidth = Math.floor(firstChildNodeParseTreeWidth/2),
          rightMarginWidth = Math.ceil(lastChildNodeParseTreeWidth/2) - 1,
          childNodesParseTreeWidth = childNodesParseTree.getWidth(),
          horizontalBranchParseTree = HorizontalBranchParseTree.fromWidth(childNodesParseTreeWidth, leftMarginWidth, rightMarginWidth);

      childNodesParseTree.appendToTop(horizontalBranchParseTree);
    }

    return childNodesParseTree;
  }
}

module.exports = ChildNodesParseTree;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
