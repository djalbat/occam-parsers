"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "./verticalBranch";

const { epsilon } = specialSymbols;

class EpsilonNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = epsilon, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(EpsilonNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const epsilonNodeParseTree = terminalNodeParseTree; ///

    return epsilonNodeParseTree;
  }
}

module.exports = EpsilonNodeParseTree;
