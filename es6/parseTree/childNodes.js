'use strict';

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty');

class ChildNodesParseTree extends ParseTree {
  static fromChildNodes(childNodes) {
    var childNodesParseTree = childNodes.map(function(childNode) {
          var childNodeParseTree = childNode.getParseTree();

          return childNodeParseTree;
        }),
        childNodesParseTreeLength = childNodesParseTree.length,
        childNodesParseTreeDepth = childNodesParseTree.reduce(function(childNodesParseTreeDepth, childNodeParseTree) {
          var childNodeParseTreeDepth = childNodeParseTree.getDepth();

          childNodesParseTreeDepth = Math.max(childNodesParseTreeDepth, childNodeParseTreeDepth);

          return childNodesParseTreeDepth;
        }, 0),
        emptyParseTree = EmptyParseTree.fromDepth(childNodesParseTreeDepth),
        parseTree = emptyParseTree; ///

    childNodesParseTree.forEach(function(childNodeParseTree, index) {
      var childNodeParseTreeDepth = childNodeParseTree.getDepth(),
          clonedChildParseTree = childNodeParseTree.clone(),
          lastChildParseTree = (index === childNodesParseTreeLength - 1);

      if (!lastChildParseTree) {
        var rightMarginWidth = 1;

        clonedChildParseTree.addRightMargin(rightMarginWidth);
      }

      if (childNodeParseTreeDepth < childNodesParseTreeDepth) {
        var bottomMarginDepth = childNodesParseTreeDepth - childNodeParseTreeDepth;

        clonedChildParseTree.addBottomMargin(bottomMarginDepth);
      }

      parseTree.appendToRight(clonedChildParseTree);
    });

    return parseTree;
  }
}

module.exports = ChildNodesParseTree;
