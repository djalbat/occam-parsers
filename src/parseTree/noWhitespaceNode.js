"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "./verticalBranch";

const { noWhitespace } = specialSymbols;

export default class NoWhitespaceNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = noWhitespace, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(NoWhitespaceNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const noWhitespaceNodeParseTree = terminalNodeParseTree; ///

    return noWhitespaceNodeParseTree;
  }
}
