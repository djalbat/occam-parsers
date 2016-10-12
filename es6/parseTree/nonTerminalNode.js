'use strict';

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty'),
    ChildNodesParseTree = require('../parseTree/childNodes'),
    ProductionNameParseTree = require('../parseTree/productionName'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch'),
    HorizontalBranchParseTree = require('../parseTree/horizontalBranch');

class NonTerminalNodeParseTree extends ParseTree {
  constructor(lines, verticalBranchParseTree) {
    super(lines);

    this.verticalBranchParseTree = verticalBranchParseTree;
  }

  getVerticalBranchPosition() { return this.verticalBranchParseTree.getVerticalBranchPosition(); }

  static fromNonTerminalNode(nonTerminalNode) {
    var productionName = nonTerminalNode.getProductionName(),
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesParseTree = ChildNodesParseTree.fromChildNodes(childNodes),
        productionNameParseTree = ProductionNameParseTree.fromProductionName(productionName),
        productionNameParseTreeWidth = productionNameParseTree.getWidth(),
        productionNameParseTreeDepth = productionNameParseTree.getDepth(),
        childNodesParseTreeWidth = childNodesParseTree.getWidth(),
        nonTerminalNodeParseTreeDepth = productionNameParseTreeDepth;

    var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition();

    if (childNodesParseTreeVerticalBranchPosition !== null) {
      var leftMargin,
          rightMargin,
          verticalBranchParseTree,
          verticalBranchParseTreeWidth,
          verticalBranchParseTreeVerticalBranchPosition;

      if (productionNameParseTreeWidth === childNodesParseTreeWidth) {
        verticalBranchParseTreeWidth = productionNameParseTreeWidth;
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth);
      } else if (productionNameParseTreeWidth > childNodesParseTreeWidth) {
        verticalBranchParseTreeWidth = productionNameParseTreeWidth;
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth);
        verticalBranchParseTreeVerticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();

        leftMargin = verticalBranchParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;
        rightMargin = productionNameParseTreeWidth - childNodesParseTreeWidth - leftMargin;

        childNodesParseTree.addLeftMargin(leftMargin);
        childNodesParseTree.addRightMargin(rightMargin);
      } else if (productionNameParseTreeWidth < childNodesParseTreeWidth) {
        verticalBranchParseTreeWidth = productionNameParseTreeWidth;
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth);
        verticalBranchParseTreeVerticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();

        leftMargin = childNodesParseTreeVerticalBranchPosition - verticalBranchParseTreeVerticalBranchPosition;
        rightMargin = childNodesParseTreeWidth - productionNameParseTreeWidth - leftMargin;

        verticalBranchParseTree.addLeftMargin(leftMargin);
        verticalBranchParseTree.addRightMargin(rightMargin);
        productionNameParseTree.addLeftMargin(leftMargin);
        productionNameParseTree.addRightMargin(rightMargin);
      }
    } else {
      // var differenceInWidths = Math.abs(productionNameParseTreeWidth - childNodesParseTreeWidth),
      //     leftMarginWidth = Math.ceil(differenceInWidths/2),
      //     rightMarginWidth = Math.floor(differenceInWidths/2);
      //
      // if (false) {
      //
      // } else if (productionNameParseTreeWidth > childNodesParseTreeWidth) {
      //   childNodesParseTree.addLeftMargin(leftMarginWidth);
      //   childNodesParseTree.addRightMargin(rightMarginWidth);
      // } else if (productionNameParseTreeWidth < childNodesParseTreeWidth) {
      //   productionNameParseTree.addLeftMargin(leftMarginWidth);
      //   productionNameParseTree.addRightMargin(rightMarginWidth);
      // }
    }

    var nonTerminalNodeParseTree = EmptyParseTree.fromDepth(nonTerminalNodeParseTreeDepth, NonTerminalNodeParseTree, verticalBranchParseTree);

    nonTerminalNodeParseTree.appendToRight(productionNameParseTree);
    nonTerminalNodeParseTree.appendToTop(verticalBranchParseTree);
    nonTerminalNodeParseTree.appendToBottom(childNodesParseTree);

    return nonTerminalNodeParseTree;
  }
}

module.exports = NonTerminalNodeParseTree;
