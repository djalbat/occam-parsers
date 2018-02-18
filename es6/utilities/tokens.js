'use strict';

function significantTokensFromLines(lines) {
  const tokens = lines.reduce(function(tokens, line) {
          const lineTokens = line.getTokens();

          tokens = tokens.concat(lineTokens);

          return tokens;
        }, []),
        significantTokens = tokens.reduce(function(significantTokens, token) {
          const tokenSignificantToken = token.isSignificantToken();

          if (tokenSignificantToken) {
            const significantToken = token; ///

            significantTokens.push(significantToken);
          }

          return significantTokens;
        }, []);

  return significantTokens;
}

module.exports = {
  significantTokensFromLines: significantTokensFromLines
};
