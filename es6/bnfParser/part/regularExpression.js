'use strict';

class RegularExpressionPart {
  constructor(regExp) {
    this.regExp = regExp;
  }

  parse(input, context, productions) {
    var parsed = false,
        index = context.index,
        inputLength = input.length;

    if (index < inputLength) {
      var inputSubstring = input.substr(index),
          matches = this.regExp.exec(inputSubstring);

      if (matches && matches.index === 0) {
        var firstMatch = first(matches),
            firstMatchLength = firstMatch.length;

        context.index += firstMatchLength;

        parsed = true;
      }
    }

    return parsed;
  }

  static fromSymbols(symbols, Parts) {
    var terminalPart = null,
        firstSymbol = first(symbols),
        symbol = firstSymbol, ///
        terminalRegExp = /\/([^/]+)\//,
        matches = symbol.match(terminalRegExp);

    if (matches !== null) {
      var pattern = matches[1],
          regExp = new RegExp(pattern);

      symbols.shift();

      terminalPart = new RegularExpressionPart(regExp);
    }

    return terminalPart;
  }
}

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
