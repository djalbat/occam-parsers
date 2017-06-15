'use strict';

const arrayUtil = require('../../util/array'),
      EmptyParseTree = require('./empty'),
      ChildNodesParseTree = require('./childNodes'),
      VerticalBranchParseTree = require('./verticalBranch'),
      ProductionNameParseTree = require('./productionName');

class NonTerminalNodeParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNode(nonTerminalNode, lines) {
    const childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          childNode = firstChildNode,
          childNodesLength = childNodes.length,
          childNodeOrNodesParseTree = (childNodesLength === 1) ?
                                        childNode.generateParseTree(lines) :
                                          ChildNodesParseTree.fromChildNodes(childNodes, lines),
          productionNameParseTree = ProductionNameParseTree.fromNonTerminalNode(nonTerminalNode, lines);
    
    let productionNameParseTreeVerticalBranchPosition = productionNameParseTree.getVerticalBranchPosition();
    
    const childNodeOrNodesParseTreeVerticalBranchPosition = childNodeOrNodesParseTree.getVerticalBranchPosition(),
          verticalBranchPositionsDifference = productionNameParseTreeVerticalBranchPosition - childNodeOrNodesParseTreeVerticalBranchPosition;
    
    let leftMarginWidth = undefined;

    if (false) {

    } else if (verticalBranchPositionsDifference < 0) {
      leftMarginWidth = -verticalBranchPositionsDifference;

      productionNameParseTree.addLeftMargin(leftMarginWidth);
    } else if (verticalBranchPositionsDifference > 0) {
      leftMarginWidth = +verticalBranchPositionsDifference;

      childNodeOrNodesParseTree.addLeftMargin(leftMarginWidth);
    }

    const productionNameParseTreeWidth = productionNameParseTree.getWidth(),
          childNodeOrNodesParseTreeWidth = childNodeOrNodesParseTree.getWidth(),
          widthsDifference = productionNameParseTreeWidth - childNodeOrNodesParseTreeWidth;
    
    let rightMarginWidth = undefined;

    if (false) {

    } else if (widthsDifference < 0) {
      rightMarginWidth = -widthsDifference;
      
      productionNameParseTree.addRightMargin(rightMarginWidth);
    } else if (widthsDifference > 0) {
      rightMarginWidth = +widthsDifference;

      childNodeOrNodesParseTree.addRightMargin(rightMarginWidth);
    }

    productionNameParseTreeVerticalBranchPosition = productionNameParseTree.getVerticalBranchPosition();

    const productionNameParseTreeDepth = productionNameParseTree.getDepth(),
          nonTerminalNodeParseTreeDepth = productionNameParseTreeDepth, ///
          verticalBranchPosition = productionNameParseTreeVerticalBranchPosition, ///
          nonTerminalNodeParseTree = EmptyParseTree.fromDepth(nonTerminalNodeParseTreeDepth, NonTerminalNodeParseTree, verticalBranchPosition);

    nonTerminalNodeParseTree.appendToRight(productionNameParseTree);
    nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);

    return nonTerminalNodeParseTree;
  }
}

module.exports = NonTerminalNodeParseTree;
