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

    var productions = this.productions,
        firstProduction = first(productions),
        parsed = firstProduction.parse(input, context, productions);
    
    if (parsed) {
      var parsedInput = input.slice(0, context.index);

      return parsedInput;
    } else {
      return null;
    }
  }
}

module.exports = Parser;

function first(array) { return array[0]; }
