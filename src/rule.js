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

  parse(nodes, state, callback) {
    let parsed = false;

    this.definitions.some((definition) => {
      const precedence = definition.getPrecedence();

      if (precedence === null) {
        const childNodes = [];

        parsed = definition.parse(childNodes, state, callback);

        if (parsed) {
          const node = this.nodeFromChildNodesAndPrecedence(childNodes, precedence);

          nodes.push(node);
        }
      } else {
        const childNodes = [];

        parsed = definition.parse(childNodes, state, () => {
          let parsed;

          const childNodesLowerPrecedence = this.areChildNodesLowerPrecedence(childNodes, precedence);

          parsed = !childNodesLowerPrecedence;

          if (parsed) {
            const node = this.nodeFromChildNodesAndPrecedence(childNodes, precedence);

            nodes.push(node);

            if (callback !== null) {
              parsed = callback();

              if (!parsed) {
                nodes.pop();
              }
            }
          }

          return parsed;
        });
      }

      if (parsed) {
        return true;
      }
    });

    return parsed;
  }

  areChildNodesLowerPrecedence(childNodes, precedence) {
    const ruleName = this.name, ///
          childNodesLowerPrecedence = childNodes.some((childNode) => {  ///
            const childNodeLowerPrecedence = childNode.isLowerPrecedence(ruleName, precedence);

            if (childNodeLowerPrecedence) {
              return true;
            }
          });

    return childNodesLowerPrecedence;
  }

  nodeFromChildNodesAndPrecedence(childNodes, precedence) {
    const ruleName = this.name, ///
          nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence),
          node = nonTerminalNode; ///

    return node;
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
