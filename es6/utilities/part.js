"use strict";

function isPartRuleNamePart(part) {
  let partRuleNamePart = false;

  const partTerminalPart = part.isTerminalPart(),
        partNonTerminalPart = !partTerminalPart;

  if (partNonTerminalPart) {
    const nonTerminalPart = part,
          nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();

    partRuleNamePart = nonTerminalPartRuleNamePart; ///
  }

  return partRuleNamePart;
}

module.exports = {
  isPartRuleNamePart
};
