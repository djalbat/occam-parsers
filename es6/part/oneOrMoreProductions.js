'use strict';

var ProductionPart = require('./production'),
    ZeroOrMoreProductionsPart = require('./zeroOrMoreProductions');

class OneOrMoreProductionsPart {
  constructor(name, zeroOrMoreProductionsPart) {
    this.name = name;
    this.zeroOrMoreProductionsPart = zeroOrMoreProductionsPart;
  }

  parse(context, productions) {
    var nodes = null,
        production = ProductionPart.findProduction(this.name, productions);

    if (production !== null) {
      context.saveIndex();

      var productionNodes = production.parse(context, productions),
          parsed = (productionNodes !== null);

      if (parsed) {
        nodes = productionNodes;
        
        var zeroOrMoreNodes = this.zeroOrMoreProductionsPart.parse(context, productions);
        
        nodes = nodes.concat(zeroOrMoreNodes);
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
    var oneOrMoreProductionsPart = null,
        oneOrMoreProductionsRegExp = /([^*]+)\+$/,
        matches = symbol.match(oneOrMoreProductionsRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          name = secondMatch, ///
          zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);

      oneOrMoreProductionsPart = new OneOrMoreProductionsPart(name, zeroOrMoreProductionsPart);
    }

    return oneOrMoreProductionsPart;
  }
}

module.exports = OneOrMoreProductionsPart;

function second(array) { return array[1]; }
