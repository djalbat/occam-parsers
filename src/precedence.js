"use strict";

import { EMPTY_STRING, MINUS_CHARACTER, SPACE_CHARACTER } from "./constants";

export default class Precedence {
  constructor(strength, associativity, transparent, isolated) {
    this.strength = strength;
    this.associativity = associativity;
    this.transparent = transparent;
    this.isolated = isolated;
  }

  getStrength() {
    return this.strength;
  }

  getAssociativity() {
    return this.associativity;
  }

  isTransparent() {
    return this.transparent;
  }

  isIsolated() {
    return this.isolated;
  }

  compare(precedence, first, last) {
    let compares;

    const transparent = precedence.isTransparent();

    if (false) {
      ///
    } else if (transparent) {
      compares = false;
    } else if (this.isolated) {
      compares = true;
    } else {
      const strength = precedence.getStrength(),
            associativity = precedence.getAssociativity();

      if (false) {
        ///
      } else if (first) {
        compares = (associativity < 0) ?
                     (this.strength >= strength) :
                       (this.strength > strength);
      } else if (last) {
        compares = (associativity < 0) ?
                     (this.strength > strength) :
                       (this.strength >= strength);
      } else {
        compares = (this.strength >= strength);
      }
    }

    return compares;
  }

  isolate() {
    const strength = this.strength,
          associativity = this.associativity,
          transparent = this.transparent,
          isolated = true,
          precedence = new Precedence(strength, associativity, transparent, isolated);

    return precedence;
  }

  asString() {
    let string;

    if (this.transparent) {
      string = SPACE_CHARACTER;
    } else {
      const sign = (this.associativity < 0) ?
                      MINUS_CHARACTER :
                        EMPTY_STRING;

      string = `${sign}${this.strength}`;
    }

    string = (this.isolated) ?
               `((${string}))` : ///
                 `(${string})`; ///

    string = ` ${string}`; ///

    return string;
  }

  static fromNothing() {
    const strength = null,
          associativity = null,
          transparent = false,
          isolated = false,
          precedence = new Precedence(strength, associativity, transparent, isolated);

    return precedence;
  }

  static fromNumber(number) {
    const strength = Math.abs(number),
          associativity = Math.sign(number),
          transparent = false,
          isolated = false,
          precedence = new Precedence(strength, associativity, transparent, isolated);

    return precedence;
  }

  static fromStrength(strength) {
    const associativity = null,
          transparent = false,
          isolated = false,
          precedence = new Precedence(strength, associativity, transparent, isolated);

    return precedence;
  }

  static fromIsolated(isolated) {
    const strength = null,
          associativity = null,
          transparent = false,
          precedence = new Precedence(strength, associativity, transparent, isolated);

    return precedence;
  }

  static fromTransparent(transparent) {
    const strength = null,
          associativity = null,
          isolated = false,
          precedence = new Precedence(strength, associativity, transparent, isolated);

    return precedence;
  }
}

const isolated = true,
      transparent = true;

export const isolatedPrecedence = Precedence.fromIsolated(isolated);

export const transparentPrecedence = Precedence.fromTransparent(transparent);
