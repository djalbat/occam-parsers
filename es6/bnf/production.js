'use strict';

var Rule = require('./rule'),
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
    var nodes = null,
        tooDeep = context.isTooDeep();

    if (!tooDeep) {
      context.increaseDepth();

      var ruleNodes = null,
          ruleParsed = this.rules.some(function(rule) {
            ruleNodes = rule.parse(context, productions, noWhitespace);

            var ruleParsed = (ruleNodes !== null);

            return ruleParsed;
          });

      if (ruleParsed) {
        var productionName = this.name; ///

        nodes = this.Node.fromNodes(ruleNodes, productionName);
      }

      tooDeep = context.isTooDeep();

      if (!tooDeep) {
        context.decreaseDepth();
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
        Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode, ///
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;
