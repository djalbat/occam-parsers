'use strict';

const LeftRecursiveProduction = require('./production/leftRecursive'),
      RightRecursiveProduction = require('./production/rightRecursive'),
      NonLeftRecursiveProduction = require('./production/nonLeftRecursive'),
      NonImplicitlyLeftRecursiveProduction = require('./production/nonImplicitlyLeftRecursive');

class leftRecursion {
  static eliminate(productions) {
    const nonLeftRecursiveProductions = [],
          rightRecursiveProductions = [];

    productions.forEach(function(production, index) {
      const leftRecursiveProduction = LeftRecursiveProduction.fromProduction(production);
      
      if (leftRecursiveProduction !== null) {
        debugger

        const nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromLeftRecursiveProduction(leftRecursiveProduction),
              rightRecursiveProduction = RightRecursiveProduction.fromLeftRecursiveProduction(leftRecursiveProduction);

        nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);

        rightRecursiveProductions.push(rightRecursiveProduction);
      }
      
      // const begin = 0,
      //       end = index,  ///
      //       previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
      //       previousProductions = previousNonLeftRecursiveProductions,  ///
      //       nonImplicitlyLeftRecursiveProduction = NonImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);
      //
      // if (nonImplicitlyLeftRecursiveProduction !== null) {
      //   production = nonImplicitlyLeftRecursiveProduction;  ///
      // }
      //
      // const productionLeftRecursive = production.isLeftRecursive();
      //
      // if (productionLeftRecursive) {
      //   const nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
      //         rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);
      //
      // } else {
      //   const nonLeftRecursiveProduction = production;  ///
      //
      //   nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);
      // }
    });

    productions = [].concat(nonLeftRecursiveProductions).concat(rightRecursiveProductions);

    return productions;
  }
}

module.exports = leftRecursion;
