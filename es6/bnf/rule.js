'use strict';

const arrayUtilities = require('../utilities/array'),
      stringUtilities = require('../utilities/string');

const { push } = arrayUtilities,
      { paddingFromPaddingLength } = stringUtilities;

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

  setName(name) {
    this.name = name;
  }

  setDefinitions(definitions) {
    this.definitions = definitions;
  }

  setNonTerminalNode(NonTerminalNode) {
    this.NonTerminalNode = NonTerminalNode;
  }

  addDefinitions(definitions) {
    push(this.definitions, definitions);
  }

  addDefinition(definition) {
    this.definitions.push(definition);
  }

  parse(configuration, noWhitespace) {
    let node = null;

    this.definitions.some((definition) => {
      node = this.parseDefinition(definition, configuration, noWhitespace);

      const parsed = (node !== null);

      if (parsed) {
        return true;
      }
    });

    return node;
  }

  parseWithLookAhead(configuration, noWhitespace, callback) {
    this.definitions.some((definition) => {
      const node = this.parseDefinition(definition, configuration, noWhitespace),
            parsed = callback(node);

      if (parsed) {
        return true;
      }
    });
  }

  parseDefinition(definition, configuration, noWhitespace) {
    let node = null;

    configuration.increaseDepth();

    const tooDeep = configuration.isTooDeep();

    if (tooDeep) {
      throw new Error(`The parse tree is too deep at rule '${this.name}'`);
    }

    const nodes = definition.parse(configuration, noWhitespace),
          parsed = (nodes !== null);

    if (parsed) {
      const ruleName = this.name,
            childNodes = nodes,  ///
            nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);

      node = nonTerminalNode; ///
    }

    configuration.decreaseDepth();

    return node;
  }

  asString(maximumRuleNameLength, multiLine = true) {
    const definitionsLength = this.definitions.length;

    multiLine = multiLine && (definitionsLength > 1);  ///

    const maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function(definitionsString, definition) {
            const definitionString = definition.asString();

            if (definitionsString === '') {
              definitionsString = definitionString; ///
            } else {
              definitionsString = multiLine ?
                                   `${definitionsString}\n\n${maximumPadding}     | ${definitionString}` :
                                     `${definitionsString} | ${definitionString}`;
            }

            return definitionsString;
          }, ''),
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
