'use strict';

var Rule = require('./rule');

class Production {
  constructor(name, rules, Node) {
    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  getName() {
    return this.name;
  }

  static fromLine(line, specialSymbols, Parts, mappings) {
    var matches = line.match(/^\s*([^\s]+)\s+::=(.+)$/),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        expression = thirdMatch.replace(/^\s+|\s+$/g, ''),
        expressions = expression.split(/\s+\|\s+/),
        name = secondMatch,  ///
        rules = expressions.map(function(expression) {
          var rule = Rule.fromExpression(expression, specialSymbols, Parts);

          return rule;
        }),
        Node = mappings[name],
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
