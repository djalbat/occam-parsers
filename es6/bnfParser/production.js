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
  
  parse(input, context, productions) {
    var index = context.index,
        parsed = this.rules.some(function(rule) {
      var parsed = rule.parse(input, context, productions);
      
      if (!parsed) {
        context.index = index;
        
        return false;
      } else {
        return true;
      }
    });
    
    return parsed;
  }

  static fromLine(line, Parts, terminalSymbolsRegExp, mappings) {
    var name = line.getName(),
        rules = line.mapSymbolSequences(function(symbolSequence) {
          var rule = Rule.fromSymbolSequence(symbolSequence, Parts, terminalSymbolsRegExp);

          return rule;
        }),
        Node = mappings[name],
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;
