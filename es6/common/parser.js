'use strict';

var Context = require('./context');

class CommonParser {
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
          nodes = firstProduction.parse(context, this.productions, noWhitespace),
          maximumDepth = context.getMaximumDepth(),
          depth = context.getDepth();

      if (depth < maximumDepth) {
        if (nodes !== null) {
          var firstNode = first(nodes);

          documentNode = firstNode; ///
        }
      }
    }

    return documentNode;
  }
}

module.exports = CommonParser;

function first(array) { return array[0]; }
