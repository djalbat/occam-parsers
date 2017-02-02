'use strict';

var Context = require('./context');

class CommonParser {
  constructor(productions) {
    this.productions = productions;
  }
  
  parse(tokens, productionName = null) {
    var parsedNode = null,
        context = new Context(tokens),
        productionsLength = this.productions.length;

    if (productionsLength > 0) {
      var noWhitespace = false,
          firstProduction = first(this.productions),
          foundProduction = this.findProduction(productionName),
          production = (productionName === null) ?
                         firstProduction :
                           foundProduction,
          nodes = production.parse(context, this.productions, noWhitespace),
          maximumDepth = context.getMaximumDepth(),
          depth = context.getDepth();

      if (depth < maximumDepth) {
        if (nodes !== null) {
          var firstNode = first(nodes);

          parsedNode = firstNode; ///
        }
      }
    }

    return parsedNode;
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
