'use strict';

class SymbolSequence {
  constructor(symbols) {
    this.symbols = symbols;
  }

  mapSymbols(cb) {
    return this.symbols.map(cb);
  }
  
  static fromChoice(choice) {
    var symbols = choice.split(/\s+/),
        expression = new SymbolSequence(symbols);
    
    return expression;
  }
}

module.exports = SymbolSequence;
