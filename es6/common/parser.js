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
          depth = context.getDepth(),
          maximumDepth = context.getMaximumDepth();

      if (depth < maximumDepth) {
        if (nodes !== null) {
          var firstNode = first(nodes);

          documentNode = firstNode; ///

          documentNode.update();
        }
      }
    }

    return documentNode;
  }
}

module.exports = CommonParser;

function first(array) { return array[0]; }
