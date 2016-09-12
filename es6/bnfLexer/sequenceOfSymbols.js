'use strict';

class SequenceOfSymbols {
  constructor(symbols) {
    this.symbols = symbols;
  }

  mapSymbols(cb) {
    return this.symbols.map(cb);
  }
  
  static fromChoice(choice, specialSymbols) {
    var symbols = choice.split(/\s+/),
        expression = new SequenceOfSymbols(symbols);
    
    return expression;
  }
}

module.exports = SequenceOfSymbols;
