'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ProductionNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNode(nonTerminalNode) {
    var productionName = nonTerminalNode.getProductionName(),
        startLine = nonTerminalNode.getStartLine(),
        endLine = nonTerminalNode.getEndLine(),
        startLineNumber = startLine.getNumber(),
        endLineNumber = endLine.getNumber(),
        string = `${productionName} (${startLineNumber}-${endLineNumber})`,
        stringLength = string.length,
        verticalBranchParseTreeWidth = stringLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
        productionNameParseTree = VerticalBranchParseTree.fromString(string, ProductionNameParseTree, verticalBranchPosition);

    productionNameParseTree.appendToTop(verticalBranchParseTree);

    return productionNameParseTree;
  }
}

module.exports = ProductionNameParseTree;
