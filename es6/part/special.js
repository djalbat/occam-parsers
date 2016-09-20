'use strict';

var TerminalNode = require('../node/terminal');

class SpecialPart {
  constructor(symbol) {
    this.symbol = symbol;
  }

  parse(input, context, productions) {
    var nodes = null,
        index = context.getIndex(),
        inputLength = input.length;

    if (index < inputLength) {
      var inputSubstring = input.substr(index),
          symbolIndex = inputSubstring.indexOf(this.symbol),
          parsed = (symbolIndex === 0);

      if (parsed) {
        var symbolLength = this.symbol.length,
            str = inputSubstring.substr(0, symbolLength),
            terminalNode = new TerminalNode(str),
            amount = symbolLength;  ///

        nodes = [terminalNode];

        context.advance(amount);
      }
    }

    return nodes;
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
