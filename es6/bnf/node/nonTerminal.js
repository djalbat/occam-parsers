'use strict';

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(childNodes, productionName) {
    this.childNodes = childNodes;
    this.productionName = productionName;
  }
  
  getChildNodes() {
    return this.childNodes;
  }
  
  getProductionName() {
    return this.productionName;
  }
  
  getParseTree() {
    var nonTerminalNode = this,  ///
        nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode),
        parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }
  
  query(expression, index = null) {
    if ((expression === '*') ||
        (expression === this.productionName)) {
      return this;
    }

    var queryRegExpPattern = `^(?:${this.productionName}|\\*)(?:\\[(\\d+)\\])?\/(.+)`,
        queryRegExp = new RegExp(queryRegExpPattern),
        matches = expression.match(queryRegExp);

    if (matches === null) {
      return null;
    }

    var secondMatch = second(matches),
        modifierIndex = parseInt(secondMatch),  ///
        modifierIndexInteger = !isNaN(modifierIndex);

    if (modifierIndexInteger) {
      if (modifierIndex !== index) {
        return [];
      }
    }

    var thirdMatch = third(matches),
        childExpression = thirdMatch,  ///
        childIndex = 0,
        nodes = this.childNodes.reduce(function(nodes, childNode) {
          var childNodeNodes = childNode.query(childExpression, childIndex);

          if (childNodeNodes !== null) {
            nodes = nodes.concat(childNodeNodes);

            childIndex++;
          }

          return nodes;
        }, []);

    return nodes;
  }

  update() {
    this.childNodes.forEach(function(childNode) {
      childNode.update();
    });
  }

  static fromNodes(nodes, productionName) {
    var childNodes = nodes, ///
        nonTerminalNode = new NonTerminalNode(childNodes, productionName);

    nodes = [nonTerminalNode]; ///
    
    return nodes;
  }
}

module.exports = NonTerminalNode;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
