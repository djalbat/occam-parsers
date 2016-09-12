'use strict';

var ProductionNamePart = require('./productionName');

class ZeroOrMoreProductionNamesPart {
  constructor(productionName) {
    this.productionName = productionName;
  }

  parse(input, context, productions) {
    var production = ProductionNamePart.findProduction(this.productionName, productions);

    for(;;) {
      var index = context.index;

      if (!production.parse(input, context, productions)) {
        context.index = index;

        return true;
      }
    }
  }
  
  static fromSymbol(symbol, Parts) {
    var zeroOrMoreProductionNamesPart = null,
        zeroOrMoreProductionNamesRegExp = /([^*]+)\*$/,
        matches = symbol.match(zeroOrMoreProductionNamesRegExp);

    if (matches !== null) {
      var productionName = matches[1];

      zeroOrMoreProductionNamesPart = new ZeroOrMoreProductionNamesPart(productionName);
    }

    return zeroOrMoreProductionNamesPart;
  }
}

module.exports = ZeroOrMoreProductionNamesPart;
