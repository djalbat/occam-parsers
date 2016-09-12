'use strict';

var ProductionNamePart = require('./productionName');

class ZeroOrMoreProductionNamesPart {
  constructor(productionName) {
    this.productionName = productionName;
  }

  parse(input, context, productions) {
    var parsed = false,
        production = ProductionNamePart.findProduction(this.productionName, productions);

    if (production !== null) {
      parsed = true;

      for(;;) {
        var index = context.index;

        if (!production.parse(input, context, productions)) {
          context.index = index;

          return parsed;
        }
      }
    }

    return parsed;
  }
  
  static fromSymbol(symbol) {
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
