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

  static fromExpression(expression, Parts) {
    var parts = expression.mapSymbols(function(symbol) {
          var part = Part.fromSymbol(symbol, Parts);
          
          return part;
        }),
        rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;
