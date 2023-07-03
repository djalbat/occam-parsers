"use strict";

export function isPartLookAhead(part) {
  let partLookAhead = false;

  const partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part,  ///
          lookAhead = ruleNamePart.isLookAhead();

    partLookAhead = lookAhead;  ///
  }

  return partLookAhead;
}

function isPartRuleNamePart(part) {
  let partRuleNamePart = false;

  const partTerminalPart = part.isTerminalPart(),
        partNonTerminalPart = !partTerminalPart;

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();

    partRuleNamePart = nonTerminalPartRuleNamePart; ///
  }

  return partRuleNamePart;
}