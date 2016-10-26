'use strict';

var Rule = require('./rule'),
    ErrorNode = require('./node/terminal/error'),
    NonTerminalNode = require('./node/nonTerminal');

class Production {
  constructor(name, rules, Node) {
    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  getName() {
    return this.name;
  }
  
  parse(context, productions, noWhitespace) {
    var nodes = null;

    this.rules.some(function(rule) {
      nodes = rule.parse(context, productions, noWhitespace);

      var parsed = (nodes !== null);

      return parsed;
    });

    var parsed = (nodes !== null);

    if (parsed) {
      var firstNode = first(nodes);

      if (firstNode instanceof ErrorNode) {

      } else {
        var productionName = this.name; ///

        nodes = this.Node.fromNodes(nodes, productionName);
      }
    }

    return nodes;
  }

  static fromLine(line, terminalSymbolsRegExp, significantTokenTypes, mappings) {
    var name = line.getName(),
        rules = line.mapSymbolSequences(function(symbolSequence) {
          var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes);

          return rule;
        }),
        Node = mappings[name] || NonTerminalNode, ///
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;

function first(array) { return array[0]; }
