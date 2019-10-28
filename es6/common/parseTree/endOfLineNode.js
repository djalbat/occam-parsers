'use strict';

const lexers = require('occam-lexers');

const VerticalBranchParseTree = require('./verticalBranch');

const { specialSymbols } = lexers,
      { END_OF_LINE } = specialSymbols;

class EndOfLineNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = END_OF_LINE, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(EndOfLineNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const epsilonNodeParseTree = terminalNodeParseTree; ///

    return epsilonNodeParseTree;
  }
}

module.exports = EndOfLineNodeParseTree;
