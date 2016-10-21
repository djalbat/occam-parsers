'use strict';

var lexers = require('./occam-lexers'),
    IncludeDirectiveToken = lexers.IncludeDirectiveToken;

class PreProcessor {
  parse(tokens) {
    var preprocessedTokens = tokens.reduce(function(preprocessedTokens, token) {
      if (token instanceof IncludeDirectiveToken) {
        ///
      } else {
        var preprocessedToken = token;

        preprocessedTokens.push(preprocessedToken);
      }

      return preprocessedTokens;
    }, []);

    return preprocessedTokens;
  }
}

module.exports = PreProcessor;
