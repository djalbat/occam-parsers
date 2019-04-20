'use strict';

function lookAheadFromPart(part) {
  let lookAhead = false;

  const partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part;  ///

    lookAhead = ruleNamePart.getLookAhead();
  }

  return lookAhead;
}

module.exports = {
  lookAheadFromPart
};

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
