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

  parseDefinition(definition, nodes, state, callback, precedence, parentRuleName) {
    let parsed;

    const savedIndex = state.getSavedIndex();

    clear(nodes);

    parsed = definition.parse(nodes, state, callback, precedence, this.name); ///

    if (parsed) {
      const nodesLength = nodes.length;

      if (nodesLength === 0) {
        parsed = false;
      }
    }

    if (parsed) {
      if (this.name === parentRuleName) {
        const definitionLowerPrecedence = definition.isLowerPrecedence(precedence);

        if (definitionLowerPrecedence) {
          parsed = false;
        }
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  parse(state, callback, precedence, parentRuleName) {
    let ruleNode = null;

    let nodes = [],
        parsed;

    this.definitions.some((definition) => {
      parsed = this.parseDefinition(definition, nodes, state, callback, precedence, parentRuleName);

      if (parsed) {
        return true;
      }
    });

    if (parsed) {
      const ruleName = this.name, ///
            childNodes = nodes,  ///
            nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence);

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

      ambiguous = name; ///

      name = Class; ///

      Class = Rule; ///
    }

    const rule = new Class(name, ambiguous, definitions, NonTerminalNode);

    return rule;
  }
}
