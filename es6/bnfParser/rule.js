'use strict';

var TerminalPart = require('./part/terminal'),
    ProductionPart = require('./part/production'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [
  TerminalPart,
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

  static fromSymbolSequence(symbolSequence, terminalSymbolsRegExp) {
    var parts = symbolSequence.mapSymbols(function(symbol) {
          var part = partFromSymbol(symbol, terminalSymbolsRegExp);
          
          return part;
        }),
        rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp) {
  var part = undefined; ///

  Parts.some(function(Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp);

    var parsed = (part !== null);

    return parsed;
  });

  return part;
}
