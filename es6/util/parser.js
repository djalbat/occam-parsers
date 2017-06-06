'use strict';

const RightRecursiveProduction = require('../common/production/rightRecursive'),
      NonLeftRecursiveProduction = require('../common/production/nonLeftRecursive'),
      NonImplicitlyLeftRecursiveProduction = require('../common/production/nonImplicitlyLeftRecursive');

class parserUtil {
  static tokensFromLines(lines) {
    const tokens = lines.reduce(function(tokens, line) {
      const lineTokens = line.getTokens();

      tokens = tokens.concat(lineTokens);

      return tokens;
    }, []);

    return tokens;
  }

  static eliminateLeftRecursiveProductions(productions) {
    const nonLeftRecursiveProductions = [],
          rightRecursiveProductions = [];

    productions.forEach(function(production, index) {
      const begin = 0,
            end = index,  ///
            previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
            previousProductions = previousNonLeftRecursiveProductions,  ///
            productionImplicitlyLeftRecursive = production.isImplicitlyLeftRecursive(previousProductions);

      if (productionImplicitlyLeftRecursive) {
        const nonImplicitlyLeftRecursiveProduction = NonImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);

        production = nonImplicitlyLeftRecursiveProduction;  ///
      }

      const productionLeftRecursive = production.isLeftRecursive();

      if (productionLeftRecursive) {
        const nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
              rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);

        nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);

        rightRecursiveProductions.push(rightRecursiveProduction);
      } else {
        const nonLeftRecursiveProduction = production;  ///

        nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);
      }
    });

    productions = [].concat(nonLeftRecursiveProductions).concat(rightRecursiveProductions);

    return productions;
  }
}

module.exports = parserUtil;
