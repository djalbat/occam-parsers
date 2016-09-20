'use strict';

class RegularExpressionPart {
  constructor(regExp) {
    this.regExp = regExp;
  }

  parse(input, context, productions) {
    var parsed = false,
        index = context.getIndex(),
        inputLength = input.length;

    if (index < inputLength) {
      var inputSubstring = input.substr(index),
          matches = this.regExp.exec(inputSubstring);

      if (matches && matches.index === 0) {
        var firstMatch = first(matches),
            amount = firstMatch.length;  ///

        context.advance(amount);

        parsed = true;
      }
    }

    return parsed;
  }

  static fromSymbol(symbol, specialSymbolsRegExp) {
    var regularExpressionPart = null,
        regularExpressionRegExp = /\/([^/]+)\//,
        matches = symbol.match(regularExpressionRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          pattern = secondMatch,  ///
          regExp = new RegExp(pattern);

      regularExpressionPart = new RegularExpressionPart(regExp);
    }

    return regularExpressionPart;
  }
}

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
