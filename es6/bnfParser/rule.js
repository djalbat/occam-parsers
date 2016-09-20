'use strict';

var SpecialPart = require('./part/special'),
    ProductionPart = require('./part/production'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [
  SpecialPart,
  RegularExpressionPart,
  ZeroOrMoreProductionsPart,
  ProductionPart
];

class Rule {
  constructor(parts) {
    this.parts = parts;
  }
  
  parse(input, context, productions) {
    var parsed = this.parts.every(function(part) {
      var parsed = part.parse(input, context, productions);
      
      return parsed;
    });
    
    return parsed;
  }

  static fromSymbolSequence(symbolSequence, specialSymbolsRegExp) {
    var parts = symbolSequence.mapSymbols(function(symbol) {
          var part = partFromSymbol(symbol, specialSymbolsRegExp);
          
          return part;
        }),
        rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

function partFromSymbol(symbol, specialSymbolsRegExp) {
  var part = undefined; ///

  Parts.some(function(Part) {
    part = Part.fromSymbol(symbol, specialSymbolsRegExp);

    var parsed = (part !== null);

    return parsed;
  });

  return part;
}
