'use strict';

var TerminalNode = require('../node/terminal');

class TerminalSymbolPart {
  constructor(symbol, noWhitespace) {
    this.symbol = symbol;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodes = null,
        token = context.getNextToken(noWhitespace);

    if (token !== undefined) {
      var str = token.getString(),
          parsed = (str === this.symbol);  ///

      if (parsed) {
        var terminalNode = new TerminalNode(str);

        nodes = [terminalNode];

        context.advanceJustPastToken(token);
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolPartsRegExp, terminalTypes, noWhitespace) {
    var terminalSymbolPart = null,
        matches = symbol.match(terminalSymbolPartsRegExp);

    if (matches !== null) {
      terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
    }

    return terminalSymbolPart;
  }
}

module.exports = TerminalSymbolPart;
