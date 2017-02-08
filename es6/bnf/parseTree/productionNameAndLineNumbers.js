'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ProductionNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNode(nonTerminalNode) {
    var productionName = nonTerminalNode.getProductionName(),
        firstLine = nonTerminalNode.getFirstLine(),
        lastLine = nonTerminalNode.getLastLine(),
        firstLineNumber = firstLine.getNumber(),
        lastLineNumber = lastLine.getNumber(),
        firstLineRemoved = firstLine.isRemoved(),
        lastLineRemoved = lastLine.isRemoved();

    firstLineNumber = firstLineRemoved ? '-' : firstLineNumber; ///
    lastLineNumber = lastLineRemoved ? '-' : lastLineNumber;  ///

    var string = `${productionName} (${firstLineNumber}-${lastLineNumber})`,
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
