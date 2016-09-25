'use strict';

var ParseTree = require('../parseTree'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ProductionNameParseTree extends ParseTree {
  static fromProductionName(productionName) {
    var str = productionName, ///
        productionNameParseTree = ParseTree.fromString(str),
        productionNameParseTreeWidth = productionNameParseTree.getWidth(),
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(productionNameParseTreeWidth);

    productionNameParseTree.appendToTop(verticalBranchParseTree);
    productionNameParseTree.appendToBottom(verticalBranchParseTree);

    return productionNameParseTree;
  }
}

module.exports = ProductionNameParseTree;
