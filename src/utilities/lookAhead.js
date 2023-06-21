"use strict";

import { arrayUtilities } from "necessary";

import { isPartRuleNamePartWithLookAhead } from "./part";

const { push } = arrayUtilities;

export function parseParts(parts, nodes, index, state, callback) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = (callback !== null) ?
                callback() :
                  true;
  } else {
    const part = parts[index];

    parsed = parsePartOfParts(part, parts, nodes, index, state, callback);
  }

  return parsed;
}

export function parsePartOfParts(part, parts, nodes, index, state, callback) {
  let parsed;

  if (callback !== null) {
    const partsNodes = [];

    index++;

    parsed = part.parse(nodes, state, () => {
      const parsed = parseParts(parts, partsNodes, index, state, callback);

      return parsed;
    });

    if (parsed) {
      push(nodes, partsNodes);
    }
  } else {
    const partRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead(part);

    if (partRuleNamePartWithLookAhead) {
      const ruleNamePart = part, ///
            partsNodes = [];

      index++;

      parsed = ruleNamePart.parse(nodes, state, () => {
        const parsed = parseParts(parts, partsNodes, index, state, callback);

        return parsed;
      });

      if (parsed) {
        push(nodes, partsNodes);
      }
    } else {
      parsed = part.parse(nodes, state, callback);

      if (parsed) {
        index++;

        parsed = parseParts(parts, nodes, index, state, callback);
      }
    }
  }

  return parsed;
}
