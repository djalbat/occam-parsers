'use strict';

const RightRecursiveProduction = require('../common/production/rightRecursive'),
      PossiblyCyclicProduction = require('../common/production/possiblyCyclic'),
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

  static eliminateCycles(productions) {
    debugger

    const possiblyCyclicProductions = productions.reduce(function(possiblyCyclicProductions, production) {
      const possiblyCyclicProduction = PossiblyCyclicProduction.fromProduction(production);

      if (possiblyCyclicProduction !== null) {
        possiblyCyclicProductions.push(possiblyCyclicProduction);
      }

      return possiblyCyclicProductions;
    }, []);

    // const firstProduction = first(productions),
    //       production = firstProduction, ///
    //       productionName = production.getName(),
    //       productionNames = [productionName],
    //       productionRules = production.getRules();
    //
    // productionRules.forEach(function(productionRule) {
    //   const productionRuleFirstProductionNamePart = productionRule.getFirstProductionNamePart();
    //
    //   if (productionRuleFirstProductionNamePart !== null) {
    //     const productionRuleFirstProductionNamePartProductionName = productionRuleFirstProductionNamePart.getProductionName(),
    //           productionRuleFirstProductionName = productionRuleFirstProductionNamePartProductionName;  ///
    //
    //   }
    // });

    return productions;
  }

  static eliminateLeftRecursion(productions) {
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

// function first(array) { return array[0]; }
