'use strict';

const Graph = require('./graph'),
      parserUtil = require('../util/parser'),
      CyclicProduction = require('./production/unitRules'),
      NonUnitProduction = require('./production/nonUnit'),
      RightRecursiveProduction = require('./production/rightRecursive'),
      NonLeftRecursiveProduction = require('./production/nonLeftRecursive'),
      NonImplicitlyLeftRecursiveProduction = require('./production/nonImplicitlyLeftRecursive');

class grammarUtil {
  static eliminateCycles(productions) {
    const cyclicProductions = cyclicProductionsFromProductions(productions),
          graph = graphFromCyclicProductions(cyclicProductions),
          components = graph.getComponents();

    productions = productionsFromComponents(components, productions);

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

module.exports = grammarUtil;

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

function productionsFromComponents(components, productions) {
  const componentProductions = components.reduce(function(componentProductions, component) {
    const componentCyclic = component.isCyclic();

    if (componentCyclic) {
      const cyclicComponent = component,  ///
            nonCyclicProductions = nonCyclicProductionsFromCyclicComponent(cyclicComponent, productions);

      componentProductions = componentProductions.concat(nonCyclicProductions);
    } else {
      const nonCyclicComponent = component,  ///
            production = productionFromNonCyclicComponent(nonCyclicComponent, productions);

      componentProductions.push(production);
    }

    return componentProductions;
  }, []);

  productions = componentProductions; ///

  return productions;
}

function nonCyclicProductionsFromCyclicComponent(cyclicComponent, productions) {
  const cyclicProductions = cyclicComponent.mapVertex(function(vertex) {
          const vertexName = vertex.getName(),
                cyclicProductionName = vertexName,  ///
                production = parserUtil.findProduction(cyclicProductionName, productions),
                cyclicProduction = CyclicProduction.fromProduction(production);

          return cyclicProduction;
        }),
        unitProductions = unitProductionsFromCyclicProductions(cyclicProductions),
        nonUnitProductions = nonUnitProductionsFromCyclicProductions(cyclicProductions);

  debugger
}

function unitProductionsFromCyclicProductions(cyclicProductions) {
  const unitProductions = cyclicProductions.reduce(function(unitProductions, cyclicProduction) {
    const cyclicProductionEdges = cyclicProduction.getUnitProductions();

    unitProductions = unitProductions.concat(cyclicProductionEdges);

    return unitProductions;
  }, []);

  return unitProductions;
}

function nonUnitProductionsFromCyclicProductions(cyclicProductions) {
  const nonUnitProductions = cyclicProductions.map(function(cyclicProduction) {
    const nonUnitProduction = NonUnitProduction.fromCyclicProduction(cyclicProduction);
    
    return nonUnitProduction;
  });
  
  return nonUnitProductions;
}

function productionFromNonCyclicComponent(nonCyclicComponent, productions) {
  const nonCyclicComponentFirstVertex = nonCyclicComponent.getFirstVertex(),
        nonCyclicComponentFirstVertexName = nonCyclicComponentFirstVertex.getName(),
        productionName = nonCyclicComponentFirstVertexName,  ///
        production = parserUtil.findProduction(productionName, productions);

  return production;
}