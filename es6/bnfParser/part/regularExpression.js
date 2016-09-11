'use strict';

class RegularExpressionPart {
  constructor(pattern) {
    this.pattern = pattern;
  }

  static fromSymbols(symbols, Parts) {
    var terminalPart = null,
        firstSymbol = first(symbols),
        symbol = firstSymbol, ///
        terminalRegExp = /(\/[^']+\/)/,
        matches = symbol.match(terminalRegExp);

    if (matches !== null) {
      var pattern = matches[1],
          regExp = new RegExp(pattern);

      symbols.shift();

      terminalPart = new RegularExpressionPart(pattern);
    }

    return terminalPart;
  }
}

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
