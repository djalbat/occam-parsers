'use strict';

class Expression {
  constructor(symbols) {
    this.symbols = symbols;
  }

  mapSymbols(cb) {
    return this.symbols.map(cb);
  }
  
  static fromExpressionString(expressionString, specialSymbols) {
    var symbols = expressionString.split(/\s+/),
        expression = new Expression(symbols);
    
    return expression;
  }
}

module.exports = Expression;
