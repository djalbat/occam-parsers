"use strict";

import { push } from "../utilities/array";
import { isPartRuleNamePartWithLookAhead } from "./part";

export function parseParts(parts, nodes, index, state, callback) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    if (callback !== null) {
      parsed = callback();
    } else {
      parsed = true;
    }
  } else {
    const part = parts[index];

    parsed = parsePart(part, parts, nodes, index, state, callback);
  }

  return parsed;
}

function parsePart(part, parts, nodes, index, state, callback) {
  let parsed;

  if (callback !== null) {
    const partsNodes = [];

    parsed = part.parse(nodes, state, () => {
      index++;

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

      parsed = ruleNamePart.parse(nodes, state, () => {
        index++;

        const callback = null,
              parsed = parseParts(parts, partsNodes, index, state, callback);

        return parsed;
      });

      if (parsed) {
        push(nodes, partsNodes);
      }
    } else {
      const callback = null;

      parsed = part.parse(nodes, state, callback);

      if (parsed) {
        index++;

        parsed = parseParts(parts, nodes, index, state, callback);
      }
    }
  }

  return parsed;
}
