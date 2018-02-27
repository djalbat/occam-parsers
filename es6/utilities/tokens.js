'use strict';

function significantTokensFromTokens(tokens) {
  const significantTokens = tokens.reduce(function(significantTokens, token) {
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
  significantTokensFromTokens: significantTokensFromTokens
};
