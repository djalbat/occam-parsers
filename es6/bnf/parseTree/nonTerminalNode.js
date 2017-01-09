'use strict';

var EmptyParseTree = require('../parseTree/empty'),
    ChildNodesParseTree = require('../parseTree/childNodes'),
    ProductionNameParseTree = require('../parseTree/productionName'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

class NonTerminalNodeParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNode(nonTerminalNode) {
    var productionName = nonTerminalNode.getProductionName(),
        childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        childNode = firstChildNode,
        childNodesLength = childNodes.length,
        productionNameParseTree = ProductionNameParseTree.fromProductionName(productionName),
        childNodeOrNodesParseTree = (childNodesLength === 1) ?
                                      childNode.getParseTree() :
                                        ChildNodesParseTree.fromChildNodes(childNodes);
    
    var productionNameParseTreeVerticalBranchPosition = productionNameParseTree.getVerticalBranchPosition(),
        childNodeOrNodesParseTreeVerticalBranchPosition = childNodeOrNodesParseTree.getVerticalBranchPosition(),
        verticalBranchPositionsDifference = productionNameParseTreeVerticalBranchPosition - childNodeOrNodesParseTreeVerticalBranchPosition,
        leftMarginWidth = undefined;

    if (false) {

    } else if (verticalBranchPositionsDifference < 0) {
      leftMarginWidth = -verticalBranchPositionsDifference;

      productionNameParseTree.addLeftMargin(leftMarginWidth);
    } else if (verticalBranchPositionsDifference > 0) {
      leftMarginWidth = +verticalBranchPositionsDifference;

      childNodeOrNodesParseTree.addLeftMargin(leftMarginWidth);
    }

    var productionNameParseTreeWidth = productionNameParseTree.getWidth(),
        childNodeOrNodesParseTreeWidth = childNodeOrNodesParseTree.getWidth(),
        widthsDifference = productionNameParseTreeWidth - childNodeOrNodesParseTreeWidth,
        rightMarginWidth = undefined;

    if (false) {

    } else if (widthsDifference < 0) {
      rightMarginWidth = -widthsDifference;
      
      productionNameParseTree.addRightMargin(rightMarginWidth);
    } else if (widthsDifference > 0) {
      rightMarginWidth = +widthsDifference;

      childNodeOrNodesParseTree.addRightMargin(rightMarginWidth);
    }

    productionNameParseTreeVerticalBranchPosition = productionNameParseTree.getVerticalBranchPosition();

    var productionNameParseTreeDepth = productionNameParseTree.getDepth(),
        nonTerminalNodeParseTreeDepth = productionNameParseTreeDepth, ///
        verticalBranchPosition = productionNameParseTreeVerticalBranchPosition, ///
        nonTerminalNodeParseTree = EmptyParseTree.fromDepth(nonTerminalNodeParseTreeDepth, NonTerminalNodeParseTree, verticalBranchPosition);

    nonTerminalNodeParseTree.appendToRight(productionNameParseTree);
    nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);

    return nonTerminalNodeParseTree;
  }
}

module.exports = NonTerminalNodeParseTree;

function first(array) { return array[0]; }
