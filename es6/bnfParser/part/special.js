'use strict';

class SpecialPart {
  constructor(symbol) {
    this.symbol = symbol;
  }

  parse(input, context, productions) {
    var parsed = false,
        index = context.getIndex(),
        inputLength = input.length;

    if (index < inputLength) {
      var inputSubtring = input.substr(index),
          symbolIndex = inputSubtring.indexOf(this.symbol);

      if (symbolIndex === 0) {
        var amount = this.symbol.length; ///

        context.advance(amount);

        parsed = true;
      }
    }

    return parsed;
  }

  static fromSymbol(symbol, specialSymbolsRegExp) {
    var specialPart = null,
        matches = symbol.match(specialSymbolsRegExp);

    if (matches !== null) {
      specialPart = new SpecialPart(symbol);
    }

    return specialPart;
  }
}

module.exports = SpecialPart;
