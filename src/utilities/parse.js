"use strict";

import { arrayUtilities } from "necessary";

const { push, clear } = arrayUtilities;

export function parsePart(part, nodes, state, callback, callAhead) {
  let parsed;

  const index = 0,
        parts = [
          part
        ];

  parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

  return parsed;
}

export function parseParts(parts, nodes, state, callback, callAhead) {
  let parsed;

  const index = 0;

  parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

  return parsed;
}

function parsePartOfParts(index, parts, nodes, state, callback, callAhead) {
  let parsed;

  const partsLength = parts.length;

  if (index === partsLength) {
    parsed = (callback !== null) ?
               callback() :
                 true;
  } else {
    const part = parts[index],
          partCallAhead = (callAhead === null) ?
                            part.isCallAhead() :
                              true;

    index++;

    parsed = partCallAhead ?
               parsePartWithCallAhead(part, index, parts, nodes, state, callback, callAhead) :
                 parsePartWithoutCallAhead(part, index, parts, nodes, state, callback, callAhead);
  }

  return parsed;
}

function parsePartWithCallAhead(part, index, parts, nodes, state, callback, callAhead) {
  let parsed;

  const partNodes = [];

  callAhead = () => { ///
    let parsed;

    clear(partNodes);

    const nodes = partNodes;  ///

    parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);

    return parsed;
  };

  parsed = part.parse(nodes, state, callback, callAhead);

  if (parsed) {
    push(nodes, partNodes);
  }

  return parsed;
}

function parsePartWithoutCallAhead(part, index, parts, nodes, state, callback, callAhead) {
  let parsed;

  parsed = part.parse(nodes, state, callback, callAhead);

  if (parsed) {
    parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
  }

  return parsed;
}
