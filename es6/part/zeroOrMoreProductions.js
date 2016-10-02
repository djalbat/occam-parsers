'use strict';

var ProductionPart = require('./production');

class ZeroOrMoreProductionsPart {
  constructor(name) {
    this.name = name;
  }

  parse(context, productions) {
    var nodes = null,
        production = ProductionPart.findProduction(this.name, productions);

    if (production !== null) {
      nodes = [];

      for(;;) {
        context.saveIndex();
        
        var productionNodes = production.parse(context, productions),
            parsed = (productionNodes !== null);

        if (parsed) {
          nodes = nodes.concat(productionNodes);
        } else {
          context.backtrack();

          return nodes;
        }
      }
    }

    return nodes;
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
