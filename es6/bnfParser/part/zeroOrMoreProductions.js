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
        var index = context.getIndex(),
            savedIndex = index; ///

        if (!production.parse(input, context, productions)) {
          context.backtrack(savedIndex);

          return parsed;
        }
      }
    }

    return parsed;
  }
  
  static fromSymbol(symbol, specialSymbolsRegExp) {
    var zeroOrMoreProductionsPart = null,
        zeroOrMoreProductionsRegExp = /([^*]+)\*$/,
        matches = symbol.match(zeroOrMoreProductionsRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          name = secondMatch; ///

      zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);
    }

    return zeroOrMoreProductionsPart;
  }
}

module.exports = ZeroOrMoreProductionsPart;

function second(array) { return array[1]; }
