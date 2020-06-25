"use strict";

import { paddingFromPaddingLength } from "../utilities/string";

export default class Rule {
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

  addDefinition(definition, position) {
    const definitionsIncludesDefinition = this.definitions.includes(definition);

    if (!definitionsIncludesDefinition) {
      if (position === undefined) {
        const definitionsLength = this.definitions.length;

        position = definitionsLength; ///
      }

      const start = position, ///
            deleteCount = 0;

      this.definitions.splice(start, deleteCount, definition);
    }
  }

  removeDefinition(definition) {
    const definitionsIncludesDefinition = this.definitions.includes(definition);

    if (definitionsIncludesDefinition) {
      const definitionIndex = this.definitions.indexOf(definition),
            start = definitionIndex,  ///
            deleteCount = 1;

      this.definitions.splice(start, deleteCount);
    }
  }

  replaceDefinition(oldDefinition, newDefinition) {
    const oldDefinitionIndex = this.definitions.indexOf(oldDefinition);

    if (oldDefinitionIndex > -1) {
      const start = oldDefinitionIndex, ///
            deleteCount = 1;

      this.definitions.splice(start, deleteCount, newDefinition)
    }
  }

  parse(context) {
    let node = null;

    this.definitions.some((definition) => {
      node = this.parseDefinition(definition, context);

      const parsed = (node !== null);

      if (parsed) {
        return true;
      }
    });

    return node;
  }

  parseWithLookAhead(context, callback) {
    this.definitions.some((definition) => {
      const node = this.parseDefinition(definition, context),
            parsed = callback(node);

      if (parsed) {
        return true;
      }
    });
  }

  parseDefinition(definition, context) {
    let node = null;

    context.increaseDepth();

    const tooDeep = context.isTooDeep();

    if (tooDeep) {
      throw new Error(`The parse tree is too deep at rule "${this.name}".`);
    }

    const nodes = definition.parse(context),
          parsed = (nodes !== null);

    if (parsed) {
      const ruleName = this.name, ///
            childNodes = nodes,  ///
            nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);

      node = nonTerminalNode; ///
    }

    context.decreaseDepth();

    return node;
  }

  asString(maximumRuleNameLength, multiLine = true) {
    const definitionsLength = this.definitions.length;

    multiLine = multiLine && (definitionsLength > 1);  ///

    const maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce((definitionsString, definition) => {
            const definitionString = definition.asString();

            if (definitionsString === "") {
              definitionsString = definitionString; ///
            } else {
              definitionsString = multiLine ?
                                   `${definitionsString}\n\n${maximumPadding}   | ${definitionString}` :
                                     `${definitionsString} | ${definitionString}`;
            }

            return definitionsString;
          }, ""),
          ruleName = this.name, ///
          ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength);

    const semicolonString = multiLine ?
                             `\n\n${maximumPadding}   ;` :
                               " ;",
          string = `\n\n${this.name}${padding} ::= ${definitionsString}${semicolonString}`;

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
