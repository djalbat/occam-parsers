"use strict";

export function lineIndexFromTokenIndexAndTokens(tokenIndex, tokens) {
  let lineIndex = null;

  if (tokenIndex !== null) {
    lineIndex = 0;

    const start = 0,
          end = tokenIndex;

    tokens = tokens.slice(start, end);  ///

    tokens.forEach((token) => {
      const tokenEndOfLineToken = token.isEndOfLineToken();

      if (tokenEndOfLineToken) {
        lineIndex++;
      }
    });
  }

  return lineIndex;
}
