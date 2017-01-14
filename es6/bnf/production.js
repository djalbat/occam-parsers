'use strict';

var Rule = require('./rule'),
    FatalErrorNode = require('./node/fatalError'),
    NonTerminalNode = require('./node/nonTerminal');

const TOO_DEEP_FATAL_ERROR_MESSAGE = 'The parse tree is too deep. This is likely caused by left recursion.';

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
    context.increaseDepth();

    var nodes = null,
        tooDeep = context.isTooDeep();

    if (tooDeep) {
      var tooDeepFatalErrorMessage = TOO_DEEP_FATAL_ERROR_MESSAGE,
          tooDeepFatalErrorNode = new FatalErrorNode(tooDeepFatalErrorMessage);

      nodes = [tooDeepFatalErrorNode]
    } else {
      this.rules.some(function(rule) {
        nodes = rule.parse(context, productions, noWhitespace);

        var parsed = (nodes !== null);

        return parsed;
      });

      var parsed = (nodes !== null);

      if (parsed) {
        var firstNode = first(nodes);

        if (firstNode instanceof FatalErrorNode) {

        } else {
          var productionName = this.name; ///

          nodes = this.Node.fromNodes(nodes, productionName);
        }
      }
    }

    context.decreaseDepth();

    return nodes;
  }

  static fromLine(line, terminalSymbolsRegExp, significantTokenTypes, mappings) {
    var name = line.getName(),
        rules = line.mapSymbolSequences(function(symbolSequence) {
          var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes);

          return rule;
        }),
        Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode, ///
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;

function first(array) { return array[0]; }
