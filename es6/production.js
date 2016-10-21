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
    var ruleNodes = undefined,
        parsed = this.rules.some(function(rule) {
          ruleNodes = rule.parse(context, productions, noWhitespace);
          
          var parsed = (ruleNodes !== null);
    
          return parsed;
        });
    
    var productionName = this.name, ///
        nodes = parsed ?
                  this.Node.fromNodes(ruleNodes, productionName) :  ///
                    null;
    
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
