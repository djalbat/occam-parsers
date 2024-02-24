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

  setName(name) {
    this.name = name;
  }

  seAmbiguous(ambiguous) {
    this.ambiguous = ambiguous;
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
            ambiguous = this.ambiguous,
            childNodes = [];

      nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous);

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
