'use strict';

var EmptyParseTree = require('../parseTree/empty'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch'),
    HorizontalBranchParseTree = require('../parseTree/horizontalBranch');

class ChildNodesParseTree extends VerticalBranchParseTree {
  static fromChildNodes(childNodes) {
    var childNodeParseTrees = childNodes.map(function(childNode) {
          var childNodeParseTree = childNode.getParseTree();

          return childNodeParseTree;
        }),
        childNodeParseTreesLength = childNodeParseTrees.length,
        firstVerticalBranchPosition = undefined,
        lastVerticalBranchPosition = 0,
        childNodeParseTreesWidth = 0,
        childNodeParseTreesDepth = 0;

    childNodeParseTrees.forEach(function(childNodeParseTree, index) {
      var childNodeParseTreeWidth = childNodeParseTree.getWidth(),
          childNodeParseTreeDepth = childNodeParseTree.getDepth();

      if (index === 0) {
        var firstChildNodeParseTree = childNodeParseTree,
            firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();

        firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
      }

      if (index === childNodeParseTreesLength - 1) {
        var lastChildNodeParseTree = childNodeParseTree,
            lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();

        lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
      }

      if (index < childNodeParseTreesLength - 1) {
        lastVerticalBranchPosition += childNodeParseTreeWidth;
        lastVerticalBranchPosition += 1;

        childNodeParseTreesWidth += 1;
      }

      childNodeParseTreesWidth += childNodeParseTreeWidth;
      childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
    });

    var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1,
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(width),
        horizontalBranchParseTree = HorizontalBranchParseTree.fromWidth(width),
        leftMarginWidth = firstVerticalBranchPosition,
        rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);
    horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
    horizontalBranchParseTree.addRightMargin(rightMarginWidth);
    
    var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
        childNodesParseTree = EmptyParseTree.fromDepth(childNodeParseTreesDepth, ChildNodesParseTree, verticalBranchPosition);

    childNodeParseTrees.forEach(function(childNodeParseTree, index) {
      var childNodeParseTreeDepth = childNodeParseTree.getDepth(),
          clonedChildNodeParseTree = childNodeParseTree.clone();

      if (index < childNodeParseTreesLength - 1) {
        var rightMarginWidth = 1;

        clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
      }

      if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
        var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;

        clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
      }

      childNodesParseTree.appendToRight(clonedChildNodeParseTree);
    });

    childNodesParseTree.appendToTop(horizontalBranchParseTree);
    childNodesParseTree.appendToTop(verticalBranchParseTree);

    return childNodesParseTree;
  }
}

module.exports = ChildNodesParseTree;
