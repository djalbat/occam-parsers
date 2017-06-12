'use strict';

class Production {
  constructor(name, definitions, Node) {
    this.name = name;
    this.definitions = definitions;
    this.Node = Node;
  }

  getName() {
    return this.name;
  }

  getDefinitions() {
    return this.definitions;
  }

  getNode() {
    return this.Node;
  }

  isFoundByProductionName(productionName) {
    const found = (this.name === productionName);

    return found;
  }

  setName(name) {
    this.name = name;
  }

  setDefinitions(definitions) {
    this.definitions = definitions;
  }

  setNode(node) {
    this.node = node;
  }

  addDefinitions(definitions) {
    this.definitions = this.definitions.concat(definitions);
  }

  parse(context, noWhitespace) {
    let nodeOrNodes = null;

    context.increaseDepth();

    const tooDeep = context.isTooDeep();

    if (tooDeep) {
      throw new Error(`The parse tree is too deep at production '${this.name}'`);
    }

    let definitionNodes = null;
    
    const someDefinitionParsed = this.definitions.some(function(definition) {
            definitionNodes = definition.parse(context, noWhitespace);
  
            const definitionParsed = (definitionNodes !== null);
  
            return definitionParsed;
          });

    if (someDefinitionParsed) {
      const definitionNodesLength = definitionNodes.length;

      if (definitionNodesLength > 0) {
        const nodes = definitionNodes,  ///
              productionName = this.name; ///

        nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName);  ///
      }
    }

    context.decreaseDepth();

    return nodeOrNodes;
  }
}

module.exports = Production;
