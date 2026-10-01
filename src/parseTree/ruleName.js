"use strict";

import VerticalBranchParseTree from "./verticalBranch";

import { stringFromStringNonTermionalNodeAndTokens } from "../utilities/parseTree";

export default class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    const opacity = nonTerminalNode.getOpacity(),
          ruleName = nonTerminalNode.getRuleName();

    let string;

    string = (opacity !== null) ?
               `${string}${opacity}` :
                  ruleName; ///

    string = stringFromStringNonTermionalNodeAndTokens(string, nonTerminalNode, tokens);

    const stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);

    ruleNameParseTree.appendToTop(verticalBranchParseTree);

    return ruleNameParseTree;
  }
}
