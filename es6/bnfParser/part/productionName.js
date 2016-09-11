'use strict';

class ProductionNamePart {
  constructor(productionName) {
    this.productionName = productionName;
  }

  static fromSymbols(symbols, Parts) {
    var symbol = symbols.shift(),
        productionName = symbol,  ///
        productionNamePart = new ProductionNamePart(productionName);

    return productionNamePart;
  }

  static findProduction(productionName, rules) {
    var foundProduction = undefined;

    rules.some(function(rule) {
      var name = rule.getName();

      if (name === productionName) {
        foundProduction = rule;

        return true;
      } else {
        return false;
      }
    }.bind(this));

    var rule = foundProduction;

    return rule;
  }
}

module.exports = ProductionNamePart;
