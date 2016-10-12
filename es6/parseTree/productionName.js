'use strict';

var ParseTree = require('../parseTree');

class ProductionNameParseTree extends ParseTree {
  static fromProductionName(productionName) {
    var str = productionName, ///
        productionNameParseTree = ParseTree.fromString(str);

    return productionNameParseTree;
  }
}

module.exports = ProductionNameParseTree;
