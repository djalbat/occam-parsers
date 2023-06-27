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

  parseDefinition(definition, nodes, state, callback) {
    let parsed;

    const savedIndex = state.getSavedIndex();

    if (callback === null) {
      parsed = definition.parse(nodes, state, callback);

      if (parsed) {
        const nodesLength = nodes.length;

        if (nodesLength === 0) {
          parsed = false;
        }
      }
    } else {
      const definitionCallback = () => {
        let parsed = true;

        if (parsed) {
          const nodesLength = nodes.length;

          if (nodesLength === 0) {
            parsed = false;
          }
        }

        if (parsed) {
          const ruleName = this.name, ///
                precedence = state.getPrecedence(),
                nodesLowerPrecedence = nodes.some((node) => {
                  const nodeLowerPrecedence = node.isLowerPrecedence(ruleName, precedence);

                  if (nodeLowerPrecedence) {
                    return true;
                  }
                });

          if (nodesLowerPrecedence) {
            parsed = false;
          }
        }

        if (parsed) {
          parsed = callback();
        }

        return parsed;
      }

      Object.assign(definitionCallback, {
        callback,
        definition
      });

      state.callbacks.push(definitionCallback);

      parsed = definition.parse(nodes, state, definitionCallback);

      state.callbacks.pop();

    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  parse(state, callback) {
    let ruleNode = null;

    let nodes,
        parsed;

    const precedence = state.getPrecedence();

    this.definitions.some((definition) => {
      nodes = [];

      parsed = this.parseDefinition(definition, nodes, state, callback);

      if (parsed) {
        return true;
      }
    });

    if (parsed) {
      const ruleName = this.name, ///
            childNodes = nodes,  ///
            precedence = state.getPrecedence(),
            nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence);

      ruleNode = nonTerminalNode; ///
    }

    state.setPrecedence(precedence);

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

      ambiguous = name; ///

      name = Class; ///

      Class = Rule; ///
    }

    const rule = new Class(name, ambiguous, definitions, NonTerminalNode);

    return rule;
  }
}
