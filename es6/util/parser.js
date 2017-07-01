'use strict';

class parserUtil {
  static tokensFromLines(lines) {
    const tokens = lines.reduce(function(tokens, line) {
      const lineTokens = line.getTokens();

      tokens = tokens.concat(lineTokens);

      return tokens;
    }, []);

    return tokens;
  }

    static findRule(ruleName, rules) {
    let foundRule = null;

    rules.some(function(rule) {
      const ruleFound = rule.isFoundByRuleName(ruleName);
      
      if (ruleFound) {
        foundRule = rule;

        return true;
      }
    });

    const rule = foundRule; ///

    return rule;
  }
}

module.exports = parserUtil;
