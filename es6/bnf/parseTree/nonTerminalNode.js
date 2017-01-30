'use strict';

var EmptyParseTree = require('../parseTree/empty'),
    ChildNodesParseTree = require('../parseTree/childNodes'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch'),
    ProductionNameAndLineNumbersParseTree = require('../parseTree/productionNameAndLineNumbers');

class NonTerminalNodeParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNode(nonTerminalNode) {
    var productionName = nonTerminalNode.getProductionName(),
        childNodes = nonTerminalNode.getChildNodes(),
        startLine = nonTerminalNode.getStartLine(),
        endLine = nonTerminalNode.getEndLine(),
        startLineNumber = startLine.getNumber(),
        endLineNumber = endLine.getNumber(),
        firstChildNode = first(childNodes),
        childNode = firstChildNode,
        childNodesLength = childNodes.length,
        productionNameAndLineNumbersParseTree = ProductionNameAndLineNumbersParseTree.fromProductionNameAndLineNumbers(productionName, startLineNumber, endLineNumber),
        childNodeOrNodesParseTree = (childNodesLength === 1) ?
                                      childNode.getParseTree() :
                                        ChildNodesParseTree.fromChildNodes(childNodes);
    
    var productionNameParseTreeVerticalBranchPosition = productionNameAndLineNumbersParseTree.getVerticalBranchPosition(),
        childNodeOrNodesParseTreeVerticalBranchPosition = childNodeOrNodesParseTree.getVerticalBranchPosition(),
        verticalBranchPositionsDifference = productionNameParseTreeVerticalBranchPosition - childNodeOrNodesParseTreeVerticalBranchPosition,
        leftMarginWidth = undefined;

    if (false) {

    } else if (verticalBranchPositionsDifference < 0) {
      leftMarginWidth = -verticalBranchPositionsDifference;

      productionNameAndLineNumbersParseTree.addLeftMargin(leftMarginWidth);
    } else if (verticalBranchPositionsDifference > 0) {
      leftMarginWidth = +verticalBranchPositionsDifference;

      childNodeOrNodesParseTree.addLeftMargin(leftMarginWidth);
    }

    var productionNameParseTreeWidth = productionNameAndLineNumbersParseTree.getWidth(),
        childNodeOrNodesParseTreeWidth = childNodeOrNodesParseTree.getWidth(),
        widthsDifference = productionNameParseTreeWidth - childNodeOrNodesParseTreeWidth,
        rightMarginWidth = undefined;

    if (false) {

    } else if (widthsDifference < 0) {
      rightMarginWidth = -widthsDifference;
      
      productionNameAndLineNumbersParseTree.addRightMargin(rightMarginWidth);
    } else if (widthsDifference > 0) {
      rightMarginWidth = +widthsDifference;

      childNodeOrNodesParseTree.addRightMargin(rightMarginWidth);
    }

    productionNameParseTreeVerticalBranchPosition = productionNameAndLineNumbersParseTree.getVerticalBranchPosition();

    var productionNameParseTreeDepth = productionNameAndLineNumbersParseTree.getDepth(),
        nonTerminalNodeParseTreeDepth = productionNameParseTreeDepth, ///
        verticalBranchPosition = productionNameParseTreeVerticalBranchPosition, ///
        nonTerminalNodeParseTree = EmptyParseTree.fromDepth(nonTerminalNodeParseTreeDepth, NonTerminalNodeParseTree, verticalBranchPosition);

    nonTerminalNodeParseTree.appendToRight(productionNameAndLineNumbersParseTree);
    nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);

    return nonTerminalNodeParseTree;
  }
}

module.exports = NonTerminalNodeParseTree;

function first(array) { return array[0]; }
