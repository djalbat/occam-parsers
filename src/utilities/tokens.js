"use strict";

export function tokenLineIndexFromTokenAndTokens(token, tokens) {
  let tokenLineIndex = 0;

  const tokenIndex = tokens.indexOf(token),
        start = 0,
        end = tokenIndex;

  tokens = tokens.slice(start, end);  ///

  tokens.forEach((token) => {
    const tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      tokenLineIndex++;
    }
  });

  return tokenLineIndex;
}
