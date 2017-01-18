'use strict';

var Spread = require('./spread');

class Query {
  constructor(infiniteDescent, childProductionName, spread, subQuery) {
    this.infiniteDescent = infiniteDescent;
    this.childProductionName = childProductionName;
    this.spread = spread;
    this.subQuery = subQuery;
  }
  
  nodesFromNode(node) {
    var nodes = null,
        childNodes = node.getChildNodes();

    if (childNodes !== null) {
      var index = 0;

      nodes = childNodes.reduce(function(nodes, childNode) {
        var childNodeProductionName = childNode.getProductionName();

        if ((this.childProductionName === '*') ||
            (this.childProductionName === childNodeProductionName)) {

          var spreadIndex = this.spread.containsIndex(index);

          if (spreadIndex) {
            var childNodeNodes = (this.subQuery !== null) ?
                                    this.subQuery.nodesFromNode(childNode) :
                                      [childNode];  ///

            nodes = nodes.concat(childNodeNodes);
          }

          index++;
        }

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
        childProductionName = thirdMatch,  ///
        spreadExpression = fourthMatch,  ///
        subExpression = fifthMatch,  ///
        spread = Spread.fromExpression(spreadExpression),
        subQuery = Query.fromExpression(subExpression),
        query = new Query(infiniteDescent, childProductionName, spread, subQuery);
    
    return query;
  }
}

module.exports = Query;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
function fourth(array) { return array[3]; }
function fifth(array) { return array[4]; }
