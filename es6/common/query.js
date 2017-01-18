'use strict';

var Spread = require('./spread');

class Query {
  constructor(infiniteDescent, productionName, spread, subQuery) {
    this.infiniteDescent = infiniteDescent;
    this.productionName = productionName;
    this.spread = spread;
    this.subQuery = subQuery;
  }
  
  nodesFromNode(node) {
    var nodes = [],
        childNodes = node.getChildNodes(),
        nodeProductionName = node.getProductionName();

    if ((this.productionName === '*') ||
        (this.productionName === nodeProductionName)) {
      
      if (this.subQuery === null) {
        nodes = [node];
      } else {
        nodes = childNodes.reduce(function(nodes, childNode) {
          var childNodeNodes = this.subQuery.nodesFromNode(childNode);

          nodes = nodes.concat(childNodeNodes);
          
          return nodes;
        }.bind(this), []);
      }
    } else if (this.infiniteDescent) {
      nodes = childNodes.reduce(function(nodes, childNode) {
        var childNodeNodes = this.nodesFromNode(childNode);

        nodes = nodes.concat(childNodeNodes);

        return nodes;
      }.bind(this), []);
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
        spreadExpression = fourthMatch,  ///
        subExpression = fifthMatch,  ///
        spread = Spread.fromExpression(spreadExpression),
        subQuery = Query.fromExpression(subExpression),
        query = new Query(infiniteDescent, productionName, spread, subQuery);
    
    return query;
  }
}

module.exports = Query;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
function fourth(array) { return array[3]; }
function fifth(array) { return array[4]; }
