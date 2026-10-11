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

  isConsuming(ruleMap, visitedRules) {
    const consuming = this.parts.some((part) => {
      const consuming = part.isConsuming(ruleMap, visitedRules);

      if (consuming) {
        return true;
      }
    });

    return consuming;
  }

  parse(rule, frame, state, forward, back) {
    const savedFrame = frame, ///
          branching = state.isBranching(),
          every = branching ?
                    branchingEvery :
                      linearEvery;

    return every(this.parts, (part, frame, state, forward, back) => {
      return part.parse(frame, state, forward, back);
    }, emptyFrame, state, (frame, state, back) => {
      const definition = this;  ///

      frame = this.compose(rule, definition, savedFrame, frame, state);  ///

      if (frame === null) {
        return back();
      }

      return forward(frame, state, back);
    }, back);
  }

  compose(rule, definition, savedFrame, frame, state) {
    const nonTerminalNode = nonTerminalNodeFromRuleDefinitionFrameAndState(rule, definition, frame, state),
          unpalatable = nonTerminalNode.isUnpalatable();

    if (unpalatable) {
      frame = null;
    } else {
      const childNode = nonTerminalNode;  ///

      frame = Frame.fromChildNode(childNode); ///

      frame = savedFrame.merge(frame); ///
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

function nonTerminalNodeFromRuleDefinitionFrameAndState(rule, definition, frame, state) {
  let nonTerminalNode;

  const opacity = rule.getOpacity(),
        ruleName = rule.getName(),
        childNodes = frame.getChildNodes(),
        precedence = frame.getPrecedence(definition),
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

  nonTerminalNode = nonTerminalNode.rewrite(state);

  return nonTerminalNode;
}
