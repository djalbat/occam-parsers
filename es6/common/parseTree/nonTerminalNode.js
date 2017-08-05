'use strict';

const necessary = require('necessary');

const RuleNameParseTree = require('./ruleName'),
      ChildNodesParseTree = require('./childNodes'),
      VerticalBranchParseTree = require('./verticalBranch');

const { array } = necessary,
      { first } = array;

class NonTerminalNodeParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndLines(nonTerminalNode, lines) {
    const childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = first(childNodes),
          childNode = firstChildNode,
          childNodesLength = childNodes.length,
          childNodeOrNodesParseTree = (childNodesLength === 1) ?
                                        childNode.parseTreeFromLines(lines) :
                                          ChildNodesParseTree.fromChildNodesAndLines(childNodes, lines),
          ruleNameParseTree = RuleNameParseTree.fromNonTerminalNodeAndLines(nonTerminalNode, lines);
    
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

module.exports = NonTerminalNodeParseTree;
