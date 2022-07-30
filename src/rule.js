"use strict";

import { specialSymbols } from "occam-lexers";

import { EMPTY_STRING } from "./constants";
import { paddingFromPaddingLength } from "./utilities/string";

const { exclamationMark } = specialSymbols;

export default class Rule {
  constructor(name, ambiguous, definitions, NonTerminalNode) {
    this.name = name;
    this.ambiguous = ambiguous;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  getName() {
    return this.name;
  }

  isAmbiguous() {
    return this.ambiguous;
  }

  getDefinitions() {
    return this.definitions;
  }

  getNonTerminalNode() {
    return this.NonTerminalNode;
  }

  addDefinition(definition) {
    this.definitions.push(definition);
  }

  removeDefinition(definition) {
    const index = this.definitions.indexOf(definition);

    if (index > -1) {
      const start = index,  ///
            deleteCount = 1;  ///

      this.definitions.splice(start, deleteCount);
    }
  }

  removeDefinitions(definitions) {
    definitions.forEach((definition) => {
      const index = this.definitions.indexOf(definition);

      if (index > -1) {
        const start = index,  ///
              deleteCount = 1;

        this.definitions.splice(start, deleteCount);
      }
    });
  }

  replaceDefinition(replaceDefinition, ...replacementDefinitions) {
    const index = this.definitions.indexOf(replaceDefinition),
          start = index, ///
          deleteCount = 1;

    this.definitions.splice(start, deleteCount, ...replacementDefinitions)
  }

  replaceAllDefinitions(...replacementDefinitions) {
    const start = 0,
          length = this.definitions.length,
          deleteCount = length; ///

    this.definitions.splice(start, deleteCount, ...replacementDefinitions)
  }

  parseDefinition(definition, nodes, state, callback) {
    let parsed;

    const savedIndex = state.getSavedIndex();

    parsed = definition.parse(nodes, state, callback);

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  parse(state, callback) {
    let parsed,
        nodes;

    let ruleNode = null;

    this.definitions.some((definition) => {
      nodes = [];

      parsed = this.parseDefinition(definition, nodes, state, callback);

      if (parsed) {
        const nodesLength = nodes.length;

        if (nodesLength === 0) {
          parsed = false;
        }
      }

      if (parsed) {
        return true;
      }
    });

    if (parsed) {
      const ruleName = this.name, ///
            childNodes = nodes,  ///
            nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);

      ruleNode = nonTerminalNode; ///
    }

    return ruleNode;
  }

  asString(maximumRuleNameLength, multiLine = true) {
    const definitionsLength = this.definitions.length;

    multiLine = multiLine && (definitionsLength > 1);  ///

    const maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce((definitionsString, definition) => {
            const definitionString = definition.asString();

            if (definitionsString === EMPTY_STRING) {
              definitionsString = definitionString; ///
            } else {
              definitionsString = multiLine ?
                                   `${definitionsString}

${maximumPadding}   | ${definitionString}` :
                                     `${definitionsString} | ${definitionString}`;
            }

            return definitionsString;
          }, EMPTY_STRING),
          ruleName = this.name, ///
          ruleNameLength = ruleName.length,
          ambiguousString = this.ambiguous ?
                              exclamationMark :
                                EMPTY_STRING,
          ambiguousStringLength = ambiguousString.length,
          paddingLength = maximumRuleNameLength - ruleNameLength - ambiguousStringLength,
          padding = paddingFromPaddingLength(paddingLength);

    const semicolonString = multiLine ?
                             `

${maximumPadding}   ;` :
                               " ;",
          string = `

${this.name}${ambiguousString}${padding} ::= ${definitionsString}${semicolonString}`;

    return string;
  }
}
