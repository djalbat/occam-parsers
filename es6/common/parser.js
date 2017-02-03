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
          firstNode = first(nodes);

      documentNode = firstNode; ///
    }

    return documentNode;
  }

  parseGivenProductionName(tokens, productionName) {
    var context = new Context(tokens),
        production = this.findProduction(productionName),
        noWhitespace = false,
        nodes = production.parse(context, this.productions, noWhitespace);

    return nodes;
  }

  findProduction(productionName) {
    var name = productionName,  ///
        index = this.indexOfProductionByName(name),
        production = (index !== null) ?
                       this.productions[index] :
                         null;

    return production;
  }

  indexOfProductionByName(name) {
    var index,
        foundIndex = null;

    this.productions.some(function(production, index) {
      var productionName = production.getName();

      if (productionName === name) {
        foundIndex = index;

        return true;
      } else {
        return false;
      }
    });

    index = foundIndex; ///

    return index;
  }
}

module.exports = CommonParser;

function first(array) { return array[0]; }
