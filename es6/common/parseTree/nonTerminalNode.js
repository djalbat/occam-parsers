"use strict";

import RuleNameParseTree from "./ruleName";
import ChildNodesParseTree from "./childNodes";
import VerticalBranchParseTree from "./verticalBranch";

import { first } from "../../utilities/array";

export default class NonTerminalNodeParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    const childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = first(childNodes),
          childNode = firstChildNode,
          childNodesLength = childNodes.length,
          childNodeOrNodesParseTree = (childNodesLength === 1) ?
                                        childNode.asParseTree(tokens) :
                                          ChildNodesParseTree.fromChildNodesAndTokens(childNodes, tokens),
          ruleNameParseTree = RuleNameParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
    
    let ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
    
    const childNodeOrNodesParseTreeVerticalBranchPosition = childNodeOrNodesParseTree.getVerticalBranchPosition(),
          verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodeOrNodesParseTreeVerticalBranchPosition;
    
    let leftMarginWidth = undefined;

    if (false) {

    } else if (verticalBranchPositionsDifference < 0) {
      leftMarginWidth = -verticalBranchPositionsDifference;

      ruleNameParseTree.addLeftMargin(leftMarginWidth);
    } else if (verticalBranchPositionsDifference > 0) {
      leftMarginWidth = +verticalBranchPositionsDifference;

      childNodeOrNodesParseTree.addLeftMargin(leftMarginWidth);
    }

    const ruleNameParseTreeWidth = ruleNameParseTree.getWidth(),
          childNodeOrNodesParseTreeWidth = childNodeOrNodesParseTree.getWidth(),
          widthsDifference = ruleNameParseTreeWidth - childNodeOrNodesParseTreeWidth;
    
    let rightMarginWidth = undefined;

    if (false) {

    } else if (widthsDifference < 0) {
      rightMarginWidth = -widthsDifference;
      
      ruleNameParseTree.addRightMargin(rightMarginWidth);
    } else if (widthsDifference > 0) {
      rightMarginWidth = +widthsDifference;

      childNodeOrNodesParseTree.addRightMargin(rightMarginWidth);
    }

    ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

    const ruleNameParseTreeDepth = ruleNameParseTree.getDepth(),
          nonTerminalNodeParseTreeDepth = ruleNameParseTreeDepth, ///
          verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, ///
          nonTerminalNodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, nonTerminalNodeParseTreeDepth, verticalBranchPosition);

    nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
    nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);

    return nonTerminalNodeParseTree;
  }
}
