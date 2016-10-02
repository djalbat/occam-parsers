'use strict';

var Context = require('./context'),
    DocumentNode = require('./node/document');

class Parser {
  constructor(productions) {
    this.productions = productions;
  }
  
  parse(tokens) {
    var documentNode = new DocumentNode(),
        context = new Context(tokens),
        productionsLength = this.productions.length;

    if (productionsLength > 0) {
      var firstProduction = first(this.productions),
          nodes = firstProduction.parse(context, this.productions);

      if (nodes !== null) {
        var childNodes = nodes; ///

        documentNode.addChildNodes(childNodes);
      }
    }

    return documentNode;
  }
}

module.exports = Parser;

function first(array) { return array[0]; }
