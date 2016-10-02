'use strict';

var TerminalNode = require('../node/terminal');

class SpecialPart {
  constructor(symbol) {
    this.symbol = symbol;
  }

  parse(context, productions) {
    var nodes = null,
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
        token = nextNonWhitespaceToken; ///

    if (token !== undefined) {
      var str = token.getString(),
          parsed = (str === this.symbol);

      if (parsed) {
        var terminalNode = new TerminalNode(str);

        nodes = [terminalNode];

        context.advanceJustPastToken(token);
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
