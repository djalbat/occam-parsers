'use strict';

var Parts = require('./parts');

class Rule {
  constructor(parts) {
    this.parts = parts;
  }
  
  parse(context, productions) {
    var nodes = [];
    
    var parsed = this.parts.every(function(part) {
      var partNodes = part.parse(context, productions),
          parsed = (partNodes !== null);
      
      if (parsed) {
        nodes = nodes.concat(partNodes);
      }
      
      return parsed;
    });
    
    nodes = parsed ? nodes : null;
    
    return nodes;
  }

  static fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, terminalTypes) {
    var parts = symbolSequence.mapSymbols(function(symbol) {
          var part = partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes);
          
          return part;
        }),
        rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
  var part = undefined; ///

  Parts.some(function(Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes);

    var parsed = (part !== null);

    return parsed;
  });

  return part;
}
