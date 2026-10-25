"use strict";

import Frame from "./frame";

import { emptyFrame } from "./frame";
import { EMPTY_STRING } from "./constants";
import { every as linearEvery  } from "./utilities/linear";
import { every as branchingEvery  } from "./utilities/branching";

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

  isConsuming(ruleMap, visitedRules = [], checkForCutParts = false) {
    const consuming = this.parts.some((part) => {
      const consuming = part.isConsuming(ruleMap, visitedRules, checkForCutParts);

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
    const frameEmpty = frame.isEmpty();

    if (!frameEmpty) {
      const nonTerminalNode = createNonTerminalNode(rule, definition, savedFrame, frame, state);

      if (nonTerminalNode !== null) {
        const childNode = nonTerminalNode;  ///

        frame = Frame.fromChildNode(childNode); ///

        frame = savedFrame.merge(frame); ///
      } else {
        frame = null;
      }
    } else {
      frame = null;
    }

    return frame;
  }

  asString() {
    const partsString = partsStringFromParts(this.parts),
          precedenceString = (this.precedence !== null) ?
                               this.precedence.asString() :
                                 EMPTY_STRING,
          string = `${partsString}${precedenceString}`;

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

function partsStringFromParts(parts) {
  const partsString = parts.reduce((partsString, part) => {
    const partString = part.asString();

    partsString = (partsString !== null) ?
                    `${partsString} ${partString}` :
                      partString; ///

    return partsString;
  }, null);

  return partsString;
}

function createNonTerminalNode(rule, definition, savedFrame, frame, state) {
  let nonTerminalNode;

  const opacity = rule.getOpacity(),
        ruleName = rule.getName(),
        childNodes = frame.getChildNodes(),
        precedence = precedenceFromDefinitionSavedFrameAndFrame(definition, savedFrame, frame),
        NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, state);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

  nonTerminalNode = nonTerminalNode.rewrite(state); ///

  return nonTerminalNode;
}

function precedenceFromDefinitionSavedFrameAndFrame(definition, savedFrame, frame) {
  let precedence;

  const framePrecedence = frame.getPrecedence(),
        definitionPrecedence = definition.getPrecedence();

  precedence = definitionPrecedence || framePrecedence;

  if (precedence !== null) {
    const isolated = savedFrame.isIsolated();

    if (isolated) {
      precedence = precedence.isolate();  ///
    }
  }

  return precedence;
}
