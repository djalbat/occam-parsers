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
  
  parse(input, context, productions) {
    context.saveIndex();
    
    var ruleNodes = undefined,
        parsed = this.rules.some(function(rule) {
          ruleNodes = rule.parse(input, context, productions);
          
          var parsed = (ruleNodes !== null);
    
          if (!parsed) {
            context.backtrack();
          }
          
          return parsed;
        });
    
    var productionName = this.name, ///
        nodes = parsed ?
                  this.Node.fromNodes(ruleNodes, productionName) :  ///
                    null;
    
    return nodes;
  }

  static fromLine(line, specialSymbolsRegExp, mappings) {
    var name = line.getName(),
        rules = line.mapSymbolSequences(function(symbolSequence) {
          var rule = Rule.fromSymbolSequence(symbolSequence, specialSymbolsRegExp);

          return rule;
        }),
        Node = mappings[name] || NonTerminalNode, ///
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;
