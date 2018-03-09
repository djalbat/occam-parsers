'use strict';

const RuleNamePart = require('./part/nonTerminal/ruleName'),
      arrayUtilities = require('../utilities/array');

const { first, allButFirst } = arrayUtilities,
      { type } = RuleNamePart,
      ruleNamePartType = type;  ///

class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  getFirstPart() {
    const firstPart = first(this.parts);

    return firstPart;
  }

  getPartsLength() {
    const partsLength = this.parts.length;

    return partsLength;
  }

  getAllButFirstParts() {
    const allButFirstParts = allButFirst(this.parts);

    return allButFirstParts;
  }

  isFirstPartRuleNamePart() {
    let firstPartRuleNamePart;
    
    const firstPart = this.getFirstPart(),
          firstPartTerminalPart = firstPart.isTerminalPart(),
          firstPartNonTerminalPart = !firstPartTerminalPart;
    
    if (firstPartNonTerminalPart) {
      const nonTerminalPart = firstPart,  ///
            nonTerminalPartType = nonTerminalPart.getType(),
            nonTerminalPartTypeRuleNamePartType = (nonTerminalPartType === ruleNamePartType),
            nonTerminalPartRuleNamePart = nonTerminalPartTypeRuleNamePartType;  ///

      firstPartRuleNamePart = nonTerminalPartRuleNamePart;  ///      
    }
    
    return firstPartRuleNamePart;
  }

  parse(configuration, noWhitespace) {
    let nodes = [];

    const savedIndex = configuration.getSavedIndex(),
          everyPartParsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(configuration, noWhitespace),
                  partParsed = (partNodeOrNodes !== null);

            if (partParsed) {
              nodes = nodes.concat(partNodeOrNodes);

              noWhitespace = false;
            }

            return partParsed;
          });

    if (!everyPartParsed) {
      configuration.backtrack(savedIndex);

      nodes = null;
    }

    return nodes;
  }
  
  asString() {
    const partsString = this.parts.reduce(function(partsString, part) {
          const partString = part.asString();

          if (partsString === null) {
            partsString = partString;
          } else {
            partsString = `${partsString} ${partString}`;
          }

          return partsString;
        }, null),
        string = partsString; ///

    return string;
  }
}

module.exports = Definition;
