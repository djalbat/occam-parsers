'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ProductionNameParseTree extends VerticalBranchParseTree {
  static fromProductionName(productionName) {
    var str = productionName, ///
        strLength = str.length,
        verticalBranchParseTreeWidth = strLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
        productionNameParseTree = VerticalBranchParseTree.fromString(str, ProductionNameParseTree, verticalBranchPosition);

    productionNameParseTree.appendToTop(verticalBranchParseTree);

    return productionNameParseTree;
  }
}

module.exports = ProductionNameParseTree;
