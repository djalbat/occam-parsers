'use strict';

var Context = require('./context');

class Parser {
  constructor(productions) {
    this.productions = productions;
  }
  
  parse(tokens) {
    var documentNode = null,
        context = new Context(tokens),
        productionsLength = this.productions.length;

    if (productionsLength > 0) {
      var noWhitespace = false,
          firstProduction = first(this.productions),
          nodes = firstProduction.parse(context, this.productions, noWhitespace);

      if (nodes !== null) {
        var firstNode = first(nodes);

        documentNode = firstNode; ///
      }
    }

    return documentNode;
  }
}

module.exports = Parser;

function first(array) { return array[0]; }
