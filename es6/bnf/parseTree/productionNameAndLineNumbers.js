'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ProductionNameParseTree extends VerticalBranchParseTree {
  static fromProductionNameAndLineNumbers(productionName, startLineNumbers, endLineNumbers) {
    var string = `${productionName} (${startLineNumbers}-${endLineNumbers})`,
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
