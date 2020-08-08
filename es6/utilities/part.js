"use strict";

export function isPartRuleNamePart(part) {
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

export function isPartRuleNamePartWithLookAhead(part) {
  let partRuleNamePartWithLookAhead = false;

  const partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part,  ///
          lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      partRuleNamePartWithLookAhead = true;
    }
  }

  return partRuleNamePartWithLookAhead;
}
