'use strict';

const LeftRecursiveProduction = require('./production/leftRecursive'),
      RightRecursiveProduction = require('./production/rightRecursive'),
      NonLeftRecursiveProduction = require('./production/nonLeftRecursive'),
      ImplicitlyLeftRecursiveProduction = require('./production/implicitlyLeftRecursive');

class leftRecursion {
  static eliminate(productions) {
    const nonLeftRecursiveProductions = [],
          rightRecursiveProductions = [];

    productions.forEach(function(production, index) {
      const begin = 0,
            end = index,  ///
            previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
            previousProductions = previousNonLeftRecursiveProductions,  ///
            implicitlyLeftRecursiveProduction = ImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);

      if (implicitlyLeftRecursiveProduction !== null) {
        const leftRecursiveProduction = LeftRecursiveProduction.fromImplicitlyLeftRecursiveProductionAndPreviousProductions(implicitlyLeftRecursiveProduction, previousProductions);
        
        production = leftRecursiveProduction; ///
      }
      
      const leftRecursiveProduction = LeftRecursiveProduction.fromProduction(production);
      
      if (leftRecursiveProduction === null) {
        const nonLeftRecursiveProduction = production;  ///

        nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);
      } else {
        const rightRecursiveProduction = RightRecursiveProduction.fromLeftRecursiveProduction(leftRecursiveProduction),
              nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromLeftRecursiveProduction(leftRecursiveProduction);

        rightRecursiveProductions.push(rightRecursiveProduction);

        nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);
      }
    });

    productions = [].concat(nonLeftRecursiveProductions).concat(rightRecursiveProductions);

    return productions;
  }
}

module.exports = leftRecursion;
