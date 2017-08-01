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

  static findRuleByName(name, rules) {
    const rule = rules.find(function(rule) {
      const ruleName = rule.getName(),
            found = (ruleName === name);
      
      return found;
    }) || null; ///
    
    return rule;
  }
}

module.exports = parserUtil;
