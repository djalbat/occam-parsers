'use strict';

function tokensFromLines(lines) {
  const tokens = lines.reduce(function(tokens, line) {
    const lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}

module.exports = {
  tokensFromLines: tokensFromLines
};
