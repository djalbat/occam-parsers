"use strict";

import { EMPTY_STRING, MINUS_CHARACTER, SPACE_CHARACTER, TRANSPARENT_PRECEDENCE_STRENGTH } from "./constants";

export default class Precedence {
  constructor(strength, associativity) {
    this.strength = strength;
    this.associativity = associativity;
  }

  getStrength() {
    return this.strength;
  }

  getAssociativity() {
    return this.associativity;
  }

  isTransparent() {
    const transparent = (this.strength === TRANSPARENT_PRECEDENCE_STRENGTH);

    return transparent;
  }

  compare(precedence, first, last) {
    let complies;

    const strength = precedence.getStrength(),
          associativity = precedence.getAssociativity();

    if (false) {
      ///
    } else if (first) {
      complies = (associativity < 0) ?
                   (this.strength >= strength) :
                     (this.strength > strength);
    } else if (last) {
      complies = (associativity < 0) ?
                   (this.strength > strength) :
                     (this.strength >= strength);
    } else {
      complies = (this.strength >= strength);
    }

    return complies;
  }

  asString() {
    let string;

    const transparent = this.isTransparent();

    if (transparent) {
      string = SPACE_CHARACTER;
    } else {
      const sign = (this.associativity < 0) ?
                      MINUS_CHARACTER :
                        EMPTY_STRING;

      string = `${sign}${this.strength}`;
    }

    string = ` (${string})`; ///

    return string;
  }

  static fromNumber(number) {
    const strength = Math.abs(number),
          associativity = Math.sign(number),
          precedence = new Precedence(strength, associativity);

    return precedence;
  }

  static fromNothing() {
    const strength = null,
          associativity = null,
          precedence = new Precedence(strength, associativity);

    return precedence;
  }

  static fromStrength(strength) {
    const associativity = null,
          precedence = new Precedence(strength, associativity);

    return precedence;
  }
}

const strength = TRANSPARENT_PRECEDENCE_STRENGTH;

export const isolatedPrecedence = Precedence.fromNothing();

export const transparentPrecedence = Precedence.fromStrength(strength);
