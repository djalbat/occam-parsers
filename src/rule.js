"use strict";

import { specialSymbols } from "occam-lexers";

import { EMPTY_STRING } from "./constants";
import { paddingFromPaddingLength } from "./utilities/string";

export default class Rule {
  constructor(name, opacity, definitions, NonTerminalNode) {
    this.name = name;
    this.opacity = opacity;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  getName() {
    return this.name;
  }

  getOpacity() {
    return this.opacity;
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

  setOpacity(opacity) {
    this.opacity = opacity;
  }

  setDefinitions(definitions) {
    this.definitions = definitions;
  }

  setNonTerminalNode(NonTerminalNode) {
    this.NonTerminalNode = NonTerminalNode;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const savedPrecedence = state.getSavedPrecedence();

    parsed = this.definitions.some((definition) => {
      let node,
          nonTerminalNode;

      const ruleName = this.name,
            opacity = this.opacity,
            childNodes = [];

      nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);

      const precedence = definition.getPrecedence();

      node = nonTerminalNode; ///

      nodes.push(node);

      state.setPrecedence(precedence);

      const parsed = definition.parse(childNodes, state, () => {
        let parsed;

        parsed = true;

        const precedence = state.getPrecedence();

        nonTerminalNode.setPrecedence(precedence);

        const rewrittenNonTerminalNode = nonTerminalNode.rewrite();

        if (rewrittenNonTerminalNode !== null) {
          if (parsed) {
            nodes.pop();

            node = rewrittenNonTerminalNode; ///

            nodes.push(node);
          }
        }

        if (parsed) {
          const empty = node.isEmpty();

          if (empty) {
            parsed = false;
          }
        }

        if (parsed) {
          const unprecedented = node.isUnprecedented();

          if (unprecedented) {
            parsed = false;
          }
        }

        if (parsed) {
          if (callAhead !== null) {
            state.resetPrecedence(savedPrecedence);

            parsed = callAhead();
          }
        }

        if (rewrittenNonTerminalNode !== null) {
          if (!parsed) {
            nodes.pop();

            const node = nonTerminalNode; ///

            nodes.push(node);
          }
        }

        return parsed;
      }, callAhead);

      if (!parsed) {
        nodes.pop();

        state.resetPrecedence(savedPrecedence);
      }

      return parsed;
    });

    if (callAhead === null) {
      state.resetPrecedence(savedPrecedence);
    }

    return parsed;
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
          opacityString = (this.opacity === null)?
                            EMPTY_STRING :
                              this.opacity, ///
          opacityStringLength = opacityString.length,
          paddingLength = maximumRuleNameLength - ruleNameLength - opacityStringLength,
          padding = paddingFromPaddingLength(paddingLength);

    const semicolonString = multiLine ?
                             `

${maximumPadding}   ;` :
                               " ;",
          string = `

${this.name}${opacityString}${padding} ::= ${definitionsString}${semicolonString}`;

    return string;
  }

  static fromNameOpacityDefinitionsAndNonTerminalNode(Class, name, opacity, definitions, NonTerminalNode) {
    if (NonTerminalNode === undefined) {
      NonTerminalNode = definitions;  ///

      definitions = opacity;  ///

      opacity = name; ///

      name = Class; ///

      Class = Rule; ///
    }

    const rule = new Class(name, opacity, definitions, NonTerminalNode);

    return rule;
  }
}
