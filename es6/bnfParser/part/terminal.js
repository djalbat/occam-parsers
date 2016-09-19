'use strict';

class TerminalPart {
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

  static fromSymbol(symbol, terminalSymbolsRegExp) {
    var terminalPart = null,
        matches = symbol.match(terminalSymbolsRegExp);

    if (matches !== null) {
      terminalPart = new TerminalPart(symbol);
    }

    return terminalPart;
  }
}

module.exports = TerminalPart;
