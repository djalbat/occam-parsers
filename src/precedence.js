"use strict";

import { EMPTY_STRING, MINUS_CHARACTER, SPACE_CHARACTER } from "./constants";

export default class Precedence {
  constructor(strength, associativity, intervening, isolated) {
    this.strength = strength;
    this.associativity = associativity;
    this.intervening = intervening;
    this.isolated = isolated;
  }

  getStrength() {
    return this.strength;
  }

  getAssociativity() {
    return this.associativity;
  }

  isIntervening() {
    return this.intervening;
  }

  isIsolated() {
    return this.isolated;
  }

  compare(precedence, first, last) {
    let compares;

    const intervening = precedence.isIntervening();

    if (false) {
      ///
    } else if (intervening) {
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
          intervening = this.intervening,
          isolated = true,
          precedence = new Precedence(strength, associativity, intervening, isolated);

    return precedence;
  }

  asString() {
    let string;

    if (this.intervening) {
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
          intervening = false,
          isolated = false,
          precedence = new Precedence(strength, associativity, intervening, isolated);

    return precedence;
  }

  static fromNumber(number) {
    const strength = Math.abs(number),
          associativity = Math.sign(number),
          intervening = false,
          isolated = false,
          precedence = new Precedence(strength, associativity, intervening, isolated);

    return precedence;
  }

  static fromStrength(strength) {
    const associativity = null,
          intervening = false,
          isolated = false,
          precedence = new Precedence(strength, associativity, intervening, isolated);

    return precedence;
  }

  static fromIsolated(isolated) {
    const strength = null,
          associativity = null,
          intervening = false,
          precedence = new Precedence(strength, associativity, intervening, isolated);

    return precedence;
  }

  static fromIntervening(intervening) {
    const strength = null,
          associativity = null,
          isolated = false,
          precedence = new Precedence(strength, associativity, intervening, isolated);

    return precedence;
  }
}

const isolated = true,
      intervening = true;

export const isolatedPrecedence = Precedence.fromIsolated(isolated);

export const interveningPrecedence = Precedence.fromIntervening(intervening);
