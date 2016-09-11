'use strict';

var Part = require('./part');

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

  static fromExpression(expression, specialSymbols, Parts) {
    var symbols = symbolsFromExpression(expression, specialSymbols),
        parts = [],
        symbolsLength = symbols.length,
        symbolRemaining = (symbolsLength > 0);

    while (symbolRemaining) {
      var part = Part.fromSymbols(symbols, Parts);

      parts.push(part);

      symbolsLength = symbols.length;
      symbolRemaining = (symbolsLength > 0);
    }

    var rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

function symbolsFromExpression(expression, specialSymbols) {
  var symbolsRegExp = new RegExp(`(\\s+|'[^']'|${specialSymbols})`, 'u'),  ///
      symbols = expression.split(symbolsRegExp);

  symbols = symbols.reduce(function(symbols, symbol) {
    if ((symbol !== '') && (symbol !== ' ')){
      symbols.push(symbol);
    }

    return symbols;
  }, []);

  return symbols;
}
