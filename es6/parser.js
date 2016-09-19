'use strict';

var Context = require('./parser/context');

class Parser {
  constructor(productions) {
    this.productions = productions;
  }
  
  parse(input) {
    var parsedInput = null,
        context = new Context(),
        productionsLength = this.productions.length;

    if (productionsLength > 0) {
      var firstProduction = first(this.productions),
          parsed = firstProduction.parse(input, context, this.productions);

      if (parsed) {
        var index = context.getIndex();
        
        parsedInput = input.slice(0, index);  ///
      }
    }

    return parsedInput;
  }
}

module.exports = Parser;

function first(array) { return array[0]; }
