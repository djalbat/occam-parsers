'use strict';

var ProductionPart = require('./production');

class ZeroOrMoreProductionsPart {
  constructor(name) {
    this.name = name;
  }

  parse(input, context, productions) {
    var parsed = false,
        production = ProductionPart.findProduction(this.name, productions);

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
  
  static fromSymbol(symbol, terminalSymbolsRegExp) {
    var zeroOrMoreProductionsPart = null,
        zeroOrMoreProductionsRegExp = /([^*]+)\*$/,
        matches = symbol.match(zeroOrMoreProductionsRegExp);

    if (matches !== null) {
      var name = matches[1];

      zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);
    }

    return zeroOrMoreProductionsPart;
  }
}

module.exports = ZeroOrMoreProductionsPart;
