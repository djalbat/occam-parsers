'use strict';

class Parser {
  constructor(productions) {
    this.productions = productions;
  }
  
  parse(input) {
    var index = 0,
        context = {
          index: index
        };

    var parsedInput = null,
        productionsLength = this.productions.length;

    if (productionsLength > 0) {
      var firstProduction = first(this.productions),
          parsed = firstProduction.parse(input, context, this.productions);

      if (parsed) {
        parsedInput = input.slice(0, context.index);
      }
    }

    return parsedInput;
  }
}

module.exports = Parser;

function first(array) { return array[0]; }
