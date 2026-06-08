"use strict";

import { arrayUtilities } from "necessary";

import { ruleContext } from "./utilities/context";
import { EMPTY_STRING } from "./constants";
import { specialSymbols } from "occam-lexers";
import { marginStringFromMarginWidth } from "./utilities/string";

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

  parse(context) {
    let parsed;

    const rule = this;  ///

    ruleContext((context) => {
      parsed = this.definitions.some((definition) => {
        parsed = definition.parse(context);

        if (parsed) {
          return true;
        }
      });

      if (parsed) {
        parsed = context.commit();  ///
      }
    }, rule, context);

    return parsed;
  }

  NonTerminalNodeFromRuleName(ruleName, state) { return state.NonTerminalNodeFromRuleName(ruleName); }

  asString(maximumRuleNameLength, multiLine = true) {
    const definitionsLength = this.definitions.length;

    multiLine = multiLine && (definitionsLength > 1);  ///

    const opacityString = opacityStringFromOpacity(this.opacity),
          semicolonString = semicolonStringFromMultilineAndMaximumRuleNameLength(multiLine, maximumRuleNameLength),
          definitionsString = definitionsStringFromMultilineDefinitionsAndMaximumRuleNameLength(multiLine, this.definitions, maximumRuleNameLength),
          ruleName = this.name, ///
          ruleNameLength = ruleName.length,
          opacityStringLength = opacityString.length,
          marginWidth = maximumRuleNameLength - ruleNameLength - opacityStringLength,
          marginString = marginStringFromMarginWidth(marginWidth),
          string = `

${this.name}${opacityString}${marginString} ::= ${definitionsString}${semicolonString}`;

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

function opacityStringFromOpacity(opacity) {
  const opacityString = (opacity !== null)?
          opacity: ///
            EMPTY_STRING;

  return opacityString;
}

function semicolonStringFromMultilineAndMaximumRuleNameLength(multiLine, maximumRuleNameLength) {
  const marginWidth = maximumRuleNameLength,  ///
        marginString = marginStringFromMarginWidth(marginWidth),
        semicolonString = multiLine ?
      `

${marginString}   ;` :
      " ;";

  return semicolonString;
}

function definitionsStringFromMultilineDefinitionsAndMaximumRuleNameLength(multiLine, definitions, maximumRuleNameLength) {
  const marginWidth = maximumRuleNameLength,  ///
        marginString = marginStringFromMarginWidth(marginWidth),
        definitionsString = definitions.reduce((definitionsString, definition) => {
          const definitionString = definition.asString();

          if (definitionsString === EMPTY_STRING) {
            definitionsString = definitionString; ///
          } else {
            definitionsString = multiLine ?
                                 `${definitionsString}
    
${marginString}   | ${definitionString}` :
                                   `${definitionsString} | ${definitionString}`;
          }

          return definitionsString;
        }, EMPTY_STRING);

  return definitionsString;
}
