"use strict";

import RuleNameParseTree from "./ruleName";
import ChildNodesParseTree from "./childNodes";
import VerticalBranchParseTree from "./verticalBranch";

export default class NonTerminalNodeParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    let nonTerminalNodeParseTree;

    const childNodes = nonTerminalNode.getChildNodes(),
          ruleNameParseTree = RuleNameParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          childNodesParseTree = ChildNodesParseTree.fromChildNodesAndTokens(childNodes, tokens);

    if (childNodesParseTree === null) {
      const ruleNameParseTreeDepth = ruleNameParseTree.getDepth(),
            ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition(),
            verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, ///
            depth = ruleNameParseTreeDepth; ///

      nonTerminalNodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, depth, verticalBranchPosition);

      nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
    } else {
      let ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

      const childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(),
            verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;

      let leftMarginWidth;

      if (false) {
        ///
      } else if (verticalBranchPositionsDifference < 0) {
        leftMarginWidth = -verticalBranchPositionsDifference;

        ruleNameParseTree.addLeftMargin(leftMarginWidth);
      } else if (verticalBranchPositionsDifference > 0) {
        leftMarginWidth = +verticalBranchPositionsDifference;

        childNodesParseTree.addLeftMargin(leftMarginWidth);
      }

      const ruleNameParseTreeWidth = ruleNameParseTree.getWidth(),
            childNodesParseTreeWidth = childNodesParseTree.getWidth(),
            widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;

      let rightMarginWidth;

      if (false) {
        ///
      } else if (widthsDifference < 0) {
        rightMarginWidth = -widthsDifference;

        ruleNameParseTree.addRightMargin(rightMarginWidth);
      } else if (widthsDifference > 0) {
        rightMarginWidth = +widthsDifference;

        childNodesParseTree.addRightMargin(rightMarginWidth);
      }

      ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

      const ruleNameParseTreeDepth = ruleNameParseTree.getDepth(),
            verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, ///
            depth = ruleNameParseTreeDepth; ///

      nonTerminalNodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, depth, verticalBranchPosition);

      nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);

      nonTerminalNodeParseTree.appendToBottom(childNodesParseTree);
    }

    return nonTerminalNodeParseTree;
  }
}
