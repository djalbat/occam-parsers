'use strict';

const arrayUtil = require('../util/array'),
      NonTerminalNode = require('../common/node/nonTerminal'),
      EpsilonTerminalNode = require('../common/node/terminal/epsilon');

class Rule {
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
  
  doDefinitionsExist() {
    const definitionsLength = this.definitions.length,
          definitionsExist = (definitionsLength > 0);
    
    return definitionsExist;
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
      throw new Error(`The parse tree is too deep at rule '${this.name}'`);
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
        const ruleName = this.name,
              nodes = definitionNodes,  ///
              lastNode = arrayUtil.last(nodes),
              lastNodeNullified = isNodeNullified(lastNode);

        if (lastNodeNullified) {
          const start = -1,
                deleteCount = 1;

          nodes.splice(start, deleteCount);
        }

        nodeOrNodes = this.Node.fromNodesAndRuleName(nodes, ruleName);
      }
    }

    context.decreaseDepth();

    return nodeOrNodes;
  }

  toString(maximumRuleNameLength) {
    const maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function(definitionsString, definition) {
            const definitionString = definition.toString();
  
            if (definitionsString === null) {
              definitionsString = definitionString;
            } else {
              definitionsString = `${definitionsString}\n\n${maximumPadding}     | ${definitionString}`;
            }
  
            return definitionsString;
          }, null),
          ruleName = this.name, ///
          ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = `\n\n  ${this.name}${padding} ::= ${definitionsString} ;`;

    return string;
  }

  static fromRule(Class, rule) {
    if (rule === undefined) {
      rule = Class;
      Class = Rule;
    }
    
    const name = rule.getName(),
          definitions = rule.getDefinitions(),
          Node = rule.getNode();

    rule = new Class(name, definitions, Node);

    return rule;
  }
}

module.exports = Rule;

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
      const childNode = arrayUtil.first(childNodes);

      nullified = (childNode instanceof EpsilonTerminalNode); ///
    }
  }

  return nullified;
}
