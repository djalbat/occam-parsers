"use strict";

import { arrayUtilities } from "necessary";

import { isPartRuleNamePartWithLookAhead } from "./part";

const { push } = arrayUtilities;

export function parseParts(parts, nodes, index, state, callback, precedence) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = (callback !== null) ?
                callback(precedence) :
                  true;
  } else {
    const part = parts[index];

    parsed = parsePartOfParts(part, parts, nodes, index, state, callback, precedence);
  }

  return parsed;
}

export function parsePartOfParts(part, parts, nodes, index, state, callback, precedence) {
  let parsed;

  if (callback !== null) {
    const partsNodes = [];

    index++;

    parsed = part.parse(nodes, state, (precedence) => {
      const parsed = parseParts(parts, partsNodes, index, state, callback, precedence);

      return parsed;
    }, precedence);

    if (parsed) {
      push(nodes, partsNodes);
    }
  } else {
    const partRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead(part);

    if (partRuleNamePartWithLookAhead) {
      const ruleNamePart = part, ///
            partsNodes = [];

      index++;

      parsed = ruleNamePart.parse(nodes, state, (precedence) => {
        const parsed = parseParts(parts, partsNodes, index, state, callback, precedence);

        return parsed;
      }, precedence);

      if (parsed) {
        push(nodes, partsNodes);
      }
    } else {
      parsed = part.parse(nodes, state, callback, precedence);

      if (parsed) {
        index++;

        parsed = parseParts(parts, nodes, index, state, callback, precedence);
      }
    }
  }

  return parsed;
}
