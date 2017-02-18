'use strict';

var Context = require('./context');

class CommonParser {
  constructor(productions) {
    this.productions = productions;
  }

  getProductions() {
    return this.productions;
  }

  parse(tokens, production = null, noWhitespace = false) {
    var node = null;

    if (production === null) {
      var productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var firstProduction = first(this.productions);

        production = firstProduction; ///
      }
    }

    if (production !== null) {
      var context = new Context(tokens, this.productions),
          nodes = production.parse(context, noWhitespace);

      if (nodes !== null) {
        var nodesLength = nodes.length;

        if (nodesLength > 0) {
          var firstNode = first(nodes);

          node = firstNode; ///
        }
      }
    }

    return node;
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
