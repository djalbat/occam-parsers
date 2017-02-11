'use strict';

var Spread = require('./spread'),
    TerminalNode = require('./common/node/terminal'),
    NonTerminalNode = require('./common/node/nonTerminal');

class Query {
  constructor(infiniteDescent, productionNames, subQuery, spread) {
    this.infiniteDescent = infiniteDescent;
    this.productionNames = productionNames;
    this.subQuery = subQuery;
    this.spread = spread;
  }
  
  nodesFromNode(node) {
    var nodes = [],
        wildcard = (this.productionNames === '*');

    if (false) {

    } else if (node instanceof TerminalNode) {
      if (wildcard) {
        if (this.spread.isBetween()) {
          if (this.subQuery === null) {
            nodes = [node];
          }
        }

        this.spread.incrementIndex();
      }
    } else if (node instanceof NonTerminalNode) {
      var childNodes = node.getChildNodes(),
          productionName = node.getProductionName(),
          found = (this.productionNames.indexOf(productionName) > -1);

      if (wildcard || found) {
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
    }
    
    return nodes;
  }

  static fromExpression(expression) {
    if (expression === undefined) { ///
      return null;
    }
    
    var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/,
        matches = expression.match(regExp),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        fourthMatch = fourth(matches),
        fifthMatch = fifth(matches),
        infiniteDescent = (secondMatch === '/'),  ///
        productionNames = thirdMatch.split('|'),  ///
        subExpression = fifthMatch,  ///
        spreadExpression = fourthMatch,  ///
        subQuery = Query.fromExpression(subExpression),
        spread = Spread.fromExpression(spreadExpression),
        query = new Query(infiniteDescent, productionNames, subQuery, spread);
    
    return query;
  }
}

module.exports = Query;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
function fourth(array) { return array[3]; }
function fifth(array) { return array[4]; }
