'use strict';

const NonTerminalNode = require('../common/node/nonTerminal'),
      EpsilonTerminalNode = require('../common/node/terminal/epsilon');

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
    console.log(this.name)
    
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
        const productionName = this.name,
              nodes = definitionNodes,  ///
              lastNode = last(nodes),
              lastNodeNullified = isNodeNullified(lastNode);

        if (lastNodeNullified) {
          const start = -1,
              deleteCount = 1;

          nodes.splice(start, deleteCount);
        }

        nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName);  ///
      }
    }

    context.decreaseDepth();

    return nodeOrNodes;
  }

  toString(maximumProductionNameLength) {
    const maximumPadding = paddingFromPaddingLength(maximumProductionNameLength),
          definitionsString = this.definitions.reduce(function(definitionsString, definition) {
            const definitionString = definition.toString();
  
            if (definitionsString === null) {
              definitionsString = definitionString;
            } else {
              definitionsString = `${definitionsString}\n\n${maximumPadding}     | ${definitionString}`;
            }
  
            return definitionsString;
          }, null),
          productionNameLength = this.name.length,  ///
          paddingLength = maximumProductionNameLength - productionNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = `\n\n  ${this.name}${padding} ::= ${definitionsString}`;

    return string;
  }

  static fromProduction(production, Class = Production) {
    const name = production.getName(),
          definitions = production.getDefinitions(),
          Node = production.getNode();

    production = new Class(name, definitions, Node); ///

    return production;
  }
}

module.exports = Production;

function paddingFromPaddingLength(paddingLength) {
  let padding = '';

  for (let position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}

function isNodeNullified(node) {
  let nullified = false;

  if (node instanceof NonTerminalNode) {
    const nonTerminalNode = node, ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const childNode = first(childNodes);

      nullified = (childNode instanceof EpsilonTerminalNode); ///
    }
  }

  return nullified;
}

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
