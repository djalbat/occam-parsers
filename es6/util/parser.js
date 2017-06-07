'use strict';

const Graph = require('../graph'),
      CyclicProduction = require('../common/production/cyclic'),
      RightRecursiveProduction = require('../common/production/rightRecursive'),
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
    const cyclicProductions = cyclicProductionsFromProductions(productions),
          graph = graphFromCyclicProductions(cyclicProductions),
          cycles = graph.getCycles();

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

function cyclicProductionsFromProductions(productions) {
  const cyclicProductions = productions.reduce(function(cyclicProductions, production) {
    const cyclicProduction = CyclicProduction.fromProduction(production);

    if (cyclicProduction !== null) {
      cyclicProductions.push(cyclicProduction);
    }

    return cyclicProductions;
  }, []);

  return cyclicProductions;
}

function graphFromCyclicProductions(cyclicProductions) {
  const graph = new Graph();

  cyclicProductions.forEach(function(cyclicProduction) {
    const cyclicProductionName = cyclicProduction.getName(),
          cyclicProductionRulesProductionNames = cyclicProduction.getRulesProductionNames(),
          vertexName = cyclicProductionName,  ///
          descendantVertexNames = cyclicProductionRulesProductionNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}
