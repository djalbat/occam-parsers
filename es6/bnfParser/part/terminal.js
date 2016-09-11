'use strict';

class TerminalPart {
  constructor(string) {
    this.string = string;
  }

  static fromSymbols(symbols, Parts) {
    var terminalPart = null,
        firstSymbol = first(symbols),
        symbol = firstSymbol, ///
        terminalRegExp = /'([^']+)'/,
        matches = symbol.match(terminalRegExp);

    if (matches !== null) {
      var string = matches[1];

      symbols.shift();

      terminalPart = new TerminalPart(string);
    }

    return terminalPart;
  }
}

module.exports = TerminalPart;

function first(array) { return array[0]; }
