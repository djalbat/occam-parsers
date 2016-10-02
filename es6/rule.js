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
