"use strict";

import { characters } from "necessary";

import { EMPTY_STRING } from "./constants";
import { definitionContext } from "./utilities/context";
import { parseParts, parsePartsContinually } from "./utilities/parts";

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

  parse(context) {
    let parsed;

    const definition = this;  ///

    definitionContext((context) => {
      const continuing = context.isContinuing();

      parsed = continuing ?
                  parsePartsContinually(this.parts, context) :
                    parseParts(this.parts, context);

      if (parsed) {
        parsed = context.commit();
      }
    }, definition, context);

    return parsed;
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
      const precedence = (this.precedence === Infinity) ?
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
