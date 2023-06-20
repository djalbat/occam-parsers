"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import { EMPTY_STRING } from "./constants";
import { paddingFromPaddingLength } from "./utilities/string";

const { clear } = arrayUtilities,
      { exclamationMark } = specialSymbols;

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

  parseDefinition(definition, nodes, state, callback, precedence) {
    let parsed;

    const savedIndex = state.getSavedIndex();

    clear(nodes);

    parsed = definition.parse(nodes, state, callback, precedence);

    if (parsed) {
      const nodesLength = nodes.length;

      if (nodesLength === 0) {
        parsed = false;
      }
    }

    if (parsed) {
      const definitionLowerPrecedence = definition.isLowerPrecedence(precedence);

      if (definitionLowerPrecedence) {
        parsed = false;
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  parse(state, callback, precedence) {
    let ruleNode = null;

    let nodes = [],
        parsed;

    this.definitions.some((definition) => {
      parsed = this.parseDefinition(definition, nodes, state, callback, precedence);

      if (parsed) {
        return true;
      }
    });

    if (parsed) {
      const ruleName = this.name, ///
            precedence = null,
            childNodes = nodes,  ///
            nonTerminalNode = this.NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes);

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

  static fromNameAmbiguousDefinitionsAndNonTerminalNode(Class, name, ambiguous, definitions, NonTerminalNode) {
    if (NonTerminalNode === undefined) {
      NonTerminalNode = definitions;  ///

      definitions = ambiguous;  ///

      name = Class; ///

      Class = Rule; ///
    }

    const rule = new Class(name, ambiguous, definitions, NonTerminalNode);

    return rule;
  }
}

function areNodesLowerPrecedence(nodes, precedence, ruleName) {
  let nodesLowerPrecedence = false;

  if (precedence !== null) {
    nodesLowerPrecedence = nodes.some((node) => {
      const nodeLowerPrecedence = node.isLowerPrecedence(precedence, ruleName);

      if (nodeLowerPrecedence) {
        return true;
      }
    });
  }

  return nodesLowerPrecedence;
}
