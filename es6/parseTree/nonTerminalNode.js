'use strict';

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

class NonTerminalNodeParseTree extends ParseTree {
  static fromNonTerminalNode(nonTerminalNode) {
    var productionName = nonTerminalNode.getProductionName(),
        childNodes = nonTerminalNode.getChildNodes(),
        productionNameParseTree = parseTreeFromProductionName(productionName),
        childParseTreesParseTree = parseTreeFromChildNodes(childNodes);

    var parseTree = productionNameParseTree,  ///
        parseTreeWidth = parseTree.getWidth(),
        childParseTreesParseTreeWidth = childParseTreesParseTree.getWidth(),
        differenceInWidths = Math.abs(parseTreeWidth - childParseTreesParseTreeWidth),
        leftMarginWidth = Math.floor(differenceInWidths/2),
        rightMarginWidth = Math.ceil(differenceInWidths/2);

    if (false) {

    } else if (parseTreeWidth < childParseTreesParseTreeWidth) {
      parseTree.addLeftMargin(leftMarginWidth);
      parseTree.addRightMargin(rightMarginWidth);
    } else if (childParseTreesParseTreeWidth < parseTreeWidth) {
      childParseTreesParseTree.addLeftMargin(leftMarginWidth);
      childParseTreesParseTree.addRightMargin(rightMarginWidth);
    }

    parseTree.appendToBottom(childParseTreesParseTree);

    return parseTree;
  }
}

module.exports = NonTerminalNodeParseTree;

function parseTreeFromProductionName(productionName) {
  var str = productionName, ///
      parseTree = ParseTree.fromString(str),
      parseTreeWidth = parseTree.getWidth(),
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(parseTreeWidth);

  parseTree.appendToTop(verticalBranchParseTree);
  parseTree.appendToBottom(verticalBranchParseTree);

  return parseTree;
}

function parseTreeFromChildNodes(childNodes) {
  var childParseTrees = childNodes.map(function(childNode) {
        var childParseTree = childNode.getParseTree();

        return childParseTree;
      }),
      childParseTreesLength = childParseTrees.length,
      childParseTreesDepth = childParseTrees.reduce(function(childParseTreesDepth, childParseTree) {
        var childParseTreeDepth = childParseTree.getDepth();

        childParseTreesDepth = Math.max(childParseTreesDepth, childParseTreeDepth);

        return childParseTreesDepth;
      }, 0),
      emptyParseTree = EmptyParseTree.fromDepth(childParseTreesDepth),
      parseTree = emptyParseTree; ///

  childParseTrees.forEach(function(childParseTree, index) {
    var childParseTreeDepth = childParseTree.getDepth(),
        clonedChildParseTree = childParseTree.clone(),
        lastChildParseTree = (index === childParseTreesLength - 1);

    if (!lastChildParseTree) {
      var rightMarginWidth = 1;

      clonedChildParseTree.addRightMargin(rightMarginWidth);
    }

    if (childParseTreeDepth < childParseTreesDepth) {
      var bottomMarginDepth = childParseTreesDepth - childParseTreeDepth;

      clonedChildParseTree.addBottomMargin(bottomMarginDepth);
    }

    parseTree.appendToRight(clonedChildParseTree);
  });

  return parseTree;
}
