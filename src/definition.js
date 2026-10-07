"use strict";

import { characters } from "necessary";

import Frame from "./frame";

import { emptyFrame } from "./frame";
import { every as linearEvery  } from "./utilities/linear";
import { every as branchingEvery  } from "./utilities/branching";
import { EMPTY_STRING, TRANSPARENT_PRECEDENCE } from "./constants";

const { SPACE_CHARACTER } = characters;

export default class Definition {
  constructor(parts, precedence) {
    this.parts = parts;
    this.precedence = precedence;
  }

  getParts() {
    return this.parts;
  }

  getPrecedence() {
    return this.precedence;
  }

  parse(rule, frame, state, forward, back) {
    const branching = state.isBranching(),
          every = branching ?
                    branchingEvery :
                      linearEvery;

    return every(this.parts, (part, frame, state, forward, back) => {
      return part.parse(frame, state, forward, back);
    }, emptyFrame, state, (definitionFrame, state, back) => {
      frame = this.compose(rule, frame, definitionFrame, state);

      if (frame === null) {
        return back();
      }

      return forward(frame, state, back);
    }, back);
  }

  compose(rule, frame, definitionFrame, state) {
    const definition = this,  ///
          nonTerminalNode = nonTerminalNodeFromDefinitionFrameDefinitionAndRule(definitionFrame, definition, rule, state),
          unpalatable = nonTerminalNode.isUnpalatable();

    if (unpalatable) {
      frame = null;
    } else {
      const childNode = nonTerminalNode,  ///
            ruleFrame = Frame.fromChildNode(childNode); ///

      frame = frame.merge(ruleFrame); ///
    }

    return frame;
  }

  asString() {
    let string;

    const partsString = this.parts.reduce((partsString, part) => {
      const partString = part.asString();

      if (partsString === EMPTY_STRING) {
        partsString = partString; ///
      } else {
        partsString = `${partsString} ${partString}`;
      }

      return partsString;
    }, EMPTY_STRING);

    string = partsString; ///

    if (this.precedence !== null) {
      const precedence = (this.precedence === TRANSPARENT_PRECEDENCE) ?
                           SPACE_CHARACTER :
                             this.precedence;

      string = `${string} (${precedence})`;
    }

    return string;
  }

  static fromParts(Class, parts) {
    if (parts === undefined) {
      parts = Class;  ///

      Class = Definition; ///
    }

    const precedence = null,
          definition = new Class(parts, precedence);

    return definition;
  }

  static fromPartsAndPrecedence(Class, parts, precedence) {
    if (precedence === undefined) {
      precedence = parts; ///

      parts = Class;  ///

      Class = Definition; ///
    }

    const definition = new Class(parts, precedence);

    return definition;
  }
}

function nonTerminalNodeFromDefinitionFrameDefinitionAndRule(definitionFrame, definition, rule, state) {
  let nonTerminalNode;

  const frame = definitionFrame,  ///
        opacity = rule.getOpacity(),
        ruleName = rule.getName(),
        childNodes = frame.getChildNodes(),
        precedence = frame.getPrecedence(definition),
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

  nonTerminalNode = nonTerminalNode.rewrite(state);

  return nonTerminalNode;
}
