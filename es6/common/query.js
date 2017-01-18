'use strict';

var Spread = require('./spread');

class Query {
  constructor(infiniteDescent, productionName, subQuery, spread) {
    this.infiniteDescent = infiniteDescent;
    this.productionName = productionName;
    this.subQuery = subQuery;
    this.spread = spread;
  }
  
  nodesFromNode(node) {
    var nodes = [],
        childNodes = node.getChildNodes(),
        nodeProductionName = node.getProductionName();

    if ((this.productionName === '*') ||
        (this.productionName === nodeProductionName)) {

      if (this.spread.isBetween()) {
        if (this.subQuery === null) {
          nodes = [node];
        } else {
          nodes = childNodes.reduce(function(nodes, childNode) {
            var childNodeNodes = this.subQuery.nodesFromNode(childNode);

            nodes = nodes.concat(childNodeNodes);

            return nodes;
          }.bind(this), nodes);
        }
      }

      this.spread.incrementIndex();
    }

    if (this.infiniteDescent) {
      nodes = childNodes.reduce(function(nodes, childNode) {
        var childNodeNodes = this.nodesFromNode(childNode);

        nodes = nodes.concat(childNodeNodes);

        return nodes;
      }.bind(this), nodes);
    }

    return nodes;
  }

  static fromExpression(expression) {
    if (expression === undefined) { ///
      return null;
    }
    
    var matches = expression.match(/^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        fourthMatch = fourth(matches),
        fifthMatch = fifth(matches),
        infiniteDescent = (secondMatch === '/'),  ///
        productionName = thirdMatch,  ///
        subExpression = fifthMatch,  ///
        spreadExpression = fourthMatch,  ///
        subQuery = Query.fromExpression(subExpression),
        spread = Spread.fromExpression(spreadExpression),
        query = new Query(infiniteDescent, productionName, subQuery, spread);
    
    return query;
  }
}

module.exports = Query;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
function fourth(array) { return array[3]; }
function fifth(array) { return array[4]; }
