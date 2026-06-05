"use strict";

export function guard(innerFunction, nodes, state, callback, callAhead) {
  let parsed;

  const savedIndex = state.getSavedIndex(),
        nodesLength = nodes.length;

  parsed = innerFunction(nodes, state, callback, callAhead);

  if (!parsed) {
    const start = nodesLength;  ///

    nodes.splice(start);

    state.backtrack(savedIndex);
  }

  return parsed;
}
