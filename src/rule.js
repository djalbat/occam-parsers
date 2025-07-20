"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "./constants";
import { specialSymbols } from "occam-lexers";
import { paddingFromPaddingLength } from "./utilities/string";

const { clear } = arrayUtilities,
      { opaque: opaqueSpecialSymbol, semiOpaque: semiOpaqueSpecialSymbol } = specialSymbols;

export default class Rule {
  constructor(name, opacity, definitions) {
    this.name = name;
    this.opacity = opacity;
    this.definitions = definitions;
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

  setName(name) {
    this.name = name;
  }

  setOpacity(opacity) {
    this.opacity = opacity;
  }

  setDefinitions(definitions) {
    this.definitions = definitions;
  }

  isOpaque() {
    const opaque = (this.opacity === opaqueSpecialSymbol);

    return opaque;
  }

  isSemiOpaque() {
    const semiOpaque = (this.opacity === semiOpaqueSpecialSymbol);

    return semiOpaque;
  }

  isTransparent() {
    const semiOpaque = (this.opacity === null);

    return semiOpaque;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    const opacity = this.opacity,
          ruleName = this.name, ///
          childNodes = [],
          NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName, state),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity),
          savedPrecedence = state.getSavedPrecedence();

    let node = nonTerminalNode; ///

    nodes.push(node);

    parsed = this.definitions.some((definition) => {
      let parsed;

      clear(childNodes);

      const precedence = definition.getPrecedence();

      state.setPrecedence(precedence);

      callback = () => {  ///
        let parsed;

        const precedence = state.getPrecedence();

        nonTerminalNode.setPrecedence(precedence);

        parsed = true;

        if (parsed) {
          node.setChildNodesParentNode();
        }

        const rewrittenNonTerminalNode = nonTerminalNode.rewrite(state);

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

            node = nonTerminalNode; ///

            nodes.push(node);
          }
        }

        if (!parsed) {
          node.resetChildNodesParentNode();
        }

        return parsed;
      };

      parsed = definition.parse(childNodes, state, callback, callAhead);

      if (!parsed) {
        state.resetPrecedence(savedPrecedence);
      }

      return parsed;
    });

    if (!parsed) {
      nodes.pop();
    }

    if (callAhead === null) {
      state.resetPrecedence(savedPrecedence);
    }

    return parsed;
  }

  NonTerminalNodeFromRuleName(ruleName, state) { return state.NonTerminalNodeFromRuleName(ruleName); }

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

  static fromNameOpacityAndDefinitions(Class, name, opacity, definitions) {
    if (definitions === undefined) {
      definitions = opacity;  ///

      opacity = name; ///

      name = Class; ///

      Class = Rule; ///
    }

    const rule = new Class(name, opacity, definitions);

    return rule;
  }
}
