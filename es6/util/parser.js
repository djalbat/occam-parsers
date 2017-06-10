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

  static findProduction(productionName, productions) {
    let foundProduction = null;

    productions.some(function(production) {
      const productionFound = production.isFoundByProductionName(productionName);
      
      if (productionFound) {
        foundProduction = production;

        return true;
      }
    });

    const production = foundProduction; ///

    return production;
  }
}

module.exports = parserUtil;
