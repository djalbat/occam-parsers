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
    var index = context.getIndex(),
        savedIndex = index, ///
        parsed = this.rules.some(function(rule) {
      var parsed = rule.parse(input, context, productions);
      
      if (!parsed) {
        context.backtrack(savedIndex);
        
        return false;
      } else {
        return true;
      }
    });
    
    return parsed;
  }

  static fromLine(line, terminalSymbolsRegExp, mappings) {
    var name = line.getName(),
        rules = line.mapSymbolSequences(function(symbolSequence) {
          var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp);

          return rule;
        }),
        Node = mappings[name],
        production = new Production(name, rules, Node);

    return production;
  }
}

module.exports = Production;
