'use strict';

var Context = require('./context'),
    DocumentNode = require('./node/document');

class Parser {
  constructor(productions) {
    this.productions = productions;
  }
  
  parse(input) {
    var documentNode = new DocumentNode(),
        context = new Context(),
        productionsLength = this.productions.length;

    if (productionsLength > 0) {
      var firstProduction = first(this.productions),
          nodes = firstProduction.parse(input, context, this.productions),
          childNodes = nodes; ///
      
      documentNode.addChildNodes(childNodes);
    }

    return documentNode;
  }
}

module.exports = Parser;

function first(array) { return array[0]; }
