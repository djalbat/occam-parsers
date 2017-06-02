'use strict';

class Production {
  constructor(name, rules, Node) {
    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  getName() {
    return this.name;
  }

  parse(context, noWhitespace) {
    let nodeOrNodes = null;

    context.increaseDepth();

    const tooDeep = context.isTooDeep();

    if (tooDeep) {
      throw new Error(`The parse tree is too deep at production '${this.name}'`);
    }

    let ruleNodes = null;
    
    const someRuleParsed = this.rules.some(function(rule) {
            ruleNodes = rule.parse(context, noWhitespace);
  
            const ruleParsed = (ruleNodes !== null);
  
            return ruleParsed;
          });

    if (someRuleParsed) {
      const ruleNodesLength = ruleNodes.length;

      if (ruleNodesLength > 0) {
        const nodes = ruleNodes,  ///
              productionName = this.name; ///

        nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName);  ///
      }
    }

    context.decreaseDepth();

    return nodeOrNodes;
  }
}

module.exports = Production;