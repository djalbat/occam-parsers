'use strict';

class Rule {
  constructor(name, definitions, NonTerminalNode) {
    this.name = name;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  getName() {
    return this.name;
  }

  getDefinitions() {
    return this.definitions;
  }

  getNonTerminalNode() {
    return this.NonTerminalNode;
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

  parse(configuration, noWhitespace) {
    let nonTerminalNode = null;

    configuration.increaseDepth();

    const tooDeep = configuration.isTooDeep();

    if (tooDeep) {
      throw new Error(`The parse tree is too deep at rule '${this.name}'`);
    }

    let definitionNodes = null;
    
    const someDefinitionParsed = this.definitions.some(function(definition) {
      definitionNodes = definition.parse(configuration, noWhitespace);

      if (definitionNodes !== null) {
        return true;
      }
    });

    if (someDefinitionParsed) {
      const ruleName = this.name,
            nodes = definitionNodes;  ///

      nonTerminalNode = this.NonTerminalNode.fromNodesAndRuleName(nodes, ruleName);
    }

    configuration.decreaseDepth();

    return nonTerminalNode;
  }
  
  asString(maximumRuleNameLength, multiLine = true) {
    const definitionsLength = this.definitions.length;

    multiLine = multiLine && (definitionsLength > 1);  ///

    const maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function(definitionsString, definition) {
            const definitionString = definition.asString();

            if (definitionsString === null) {
              definitionsString = definitionString; ///
            } else {
              definitionsString = multiLine ?
                                   `${definitionsString}\n\n${maximumPadding}     | ${definitionString}` :
                                     `${definitionsString} | ${definitionString}`;
            }

            return definitionsString;
          }, null),
          ruleName = this.name, ///
          ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength);

    const semicolonString = multiLine ?
                             `\n\n${maximumPadding}     ;` :
                               ' ;',
          string = `\n\n  ${this.name}${padding} ::= ${definitionsString}${semicolonString}`;

    return string;
  }

  static fromRule(Class, rule) {
    if (rule === undefined) {
      rule = Class;
      Class = Rule;
    }
    
    const name = rule.getName(),
          definitions = rule.getDefinitions(),
          NonTerminalNode = rule.getNonTerminalNode();

    rule = new Class(name, definitions, NonTerminalNode);

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
