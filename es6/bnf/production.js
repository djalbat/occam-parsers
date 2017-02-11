'use strict';

var Rule = require('./rule'),
    NonTerminalNode = require('../common/node/nonTerminal');

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

    context.increaseDepth();

    var tooDeep = context.isTooDeep();

    if (tooDeep) {
      throw new Error(`The parse tree is too deep at production '${this.name}'`);
    }

    var ruleNodes = null,
        ruleParsed = this.rules.some(function(rule) {
          ruleNodes = rule.parse(context, productions, noWhitespace);

          var ruleParsed = (ruleNodes !== null);

          return ruleParsed;
        });

    if (ruleParsed) {
      var ruleNodesLength = ruleNodes.length,
          productionName = this.name; ///

      if (ruleNodesLength > 0) {
        nodes = this.Node.fromNodes(ruleNodes, productionName);
      }
    }

    context.decreaseDepth();

    return nodes;
  }

  static fromLine(line, significantTokenTypes, mappings) {
    var name = line.getName(),
        rules = line.mapSymbolSequences(function(symbolSequence) {
          var rule = Rule.fromSymbolSequence(symbolSequence, significantTokenTypes);

          return rule;
        }),
        Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode, ///
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;
