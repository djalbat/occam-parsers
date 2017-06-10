'use strict';

const Graph = require('./graph'),
      parserUtil = require('../util/parser'),
      Production = require('../common/production'),
      UnitRuleProduction = require('./production/unitRule'),
      UnitRulesProduction = require('./production/unitRules'),
      NonUnitRulesProduction = require('./production/nonUnitRules'),
      RightRecursiveProduction = require('./production/rightRecursive'),
      NonLeftRecursiveProduction = require('./production/nonLeftRecursive'),
      NonImplicitlyLeftRecursiveProduction = require('./production/nonImplicitlyLeftRecursive');

class grammarUtil {
  static eliminateCycles(productions) {
    const unitRulesProductions = unitRulesProductionsFromProductions(productions),
          graph = graphFromUnitRulesProductions(unitRulesProductions),
          nonCyclicProductions = nonCyclicProductionsFromGraph(graph, productions);

    productions = nonCyclicProductions; ///

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

function unitRulesProductionsFromProductions(productions) {
  const unitRulesProductions = productions.reduce(function(unitRulesProductions, production) {
    const unitRulesProduction = UnitRulesProduction.fromProduction(production);

    if (unitRulesProduction !== null) {
      unitRulesProductions.push(unitRulesProduction);
    }

    return unitRulesProductions;
  }, []);

  return unitRulesProductions;
}

function graphFromUnitRulesProductions(unitRulesProductions) {
  const graph = new Graph();

  unitRulesProductions.forEach(function(unitRulesProduction) {
    const productionName = unitRulesProduction.getName(),
          productionNames = unitRulesProduction.getProductionNames(),
          vertexName = productionName,  ///
          descendantVertexNames = productionNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}

function nonCyclicProductionsFromGraph(graph, productions) {
  const components = graph.getComponents(),
        nonCyclicProductions = components.reduce(function(nonCyclicProductions, component) {
          const componentNonCyclic = component.isNonCyclic();

          if (componentNonCyclic) {
            const nonCyclicComponent = component, ///
                  nonCyclicComponentNonCyclicProduction = nonCyclicProductionFromNonCyclicComponent(nonCyclicComponent, productions);

            nonCyclicProductions.push(nonCyclicComponentNonCyclicProduction);
          } else {
            const cyclicComponent = component,  ///
                  cyclicComponentNonCyclicProductions = nonCyclicProductionsFromCyclicComponent(cyclicComponent, productions);

            nonCyclicProductions = nonCyclicProductions.concat(cyclicComponentNonCyclicProductions);
          }

          return nonCyclicProductions;
        }, []);

  return nonCyclicProductions;
}

function nonCyclicProductionFromNonCyclicComponent(nonCyclicComponent, productions) {
  const firstVertex = nonCyclicComponent.getFirstVertex(),
        firstVertexName = firstVertex.getName(),
        nonCyclicProductionName = firstVertexName,  ///
        nonCyclicProduction = parserUtil.findProduction(nonCyclicProductionName, productions);

  return nonCyclicProduction;
}

function nonCyclicProductionsFromCyclicComponent(cyclicComponent, productions) {
  productions = productionsFromCyclicComponent(cyclicComponent, productions); ///

  const unitRuleProductions = unitRuleProductionsFromProductions(productions),
        nonUnitRulesProductions = nonUnitRulesProductionsFromProductions(productions),
        removedUnitRuleProductions = [],
        addedNonUnitRulesProductions = [];

  let unitRuleProductionsLength = unitRuleProductions.length;

  while (unitRuleProductionsLength > 0) {
    const removedUnitRuleProduction = unitRuleProductions.shift();

    removedUnitRuleProductions.push(removedUnitRuleProduction);

    const removedUnitRuleProductionName = removedUnitRuleProduction.getName(),
          removedUnitRuleProductionUnitRuleProductionName = removedUnitRuleProduction.getUnitRuleProductionName(),
          nonUnitRulesProductionName = removedUnitRuleProductionUnitRuleProductionName,  ///
          nonUnitRulesProduction = parserUtil.findProduction(nonUnitRulesProductionName, nonUnitRulesProductions),
          nonUnitRulesProductionRules = nonUnitRulesProduction.getRules(),
          addedNonUnitRulesProductionName = removedUnitRuleProductionName,  ///
          addedNonUnitRulesProductionRules = nonUnitRulesProductionRules; ///

    let addedNonUnitRulesProduction = parserUtil.findProduction(addedNonUnitRulesProductionName, addedNonUnitRulesProductions);

    if (addedNonUnitRulesProduction === null) {
      const removedUnitRuleProductionNode = removedUnitRuleProduction.getNode(),
            addedNonUnitRulesProductionNode = removedUnitRuleProductionNode;

      addedNonUnitRulesProduction = new Production(addedNonUnitRulesProductionName, addedNonUnitRulesProductionRules, addedNonUnitRulesProductionNode);

      addedNonUnitRulesProductions.push(addedNonUnitRulesProduction);
    } else {
      addedNonUnitRulesProduction.concatRules(nonUnitRulesProductionRules);
    }

    let unitRuleProductionName = removedUnitRuleProductionUnitRuleProductionName, ///
        unitRuleProduction = parserUtil.findProduction(unitRuleProductionName, unitRuleProductions);

    if (unitRuleProduction !== null) {
      const unitRuleProductionUnitRuleProductionName = unitRuleProduction.getUnitRuleProductionName();

      unitRuleProductionName = removedUnitRuleProductionName; ///

      if (unitRuleProductionName !== unitRuleProductionUnitRuleProductionName) {
        unitRuleProduction = findUnitRuleProduction(unitRuleProductionName, unitRuleProductionUnitRuleProductionName, removedUnitRuleProductions);

        if (unitRuleProduction === null) {
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRuleProductionName(unitRuleProductionName, unitRuleProductionUnitRuleProductionName);

          unitRuleProductions.unshift(unitRuleProduction);
        }
      }
    }

    unitRuleProductionsLength = unitRuleProductions.length;
  }

  nonUnitRulesProductions.forEach(function(nonUnitRulesProduction) {
    const nonUnitRulesProductionName = nonUnitRulesProduction.getName(),
          addedNonUnitRulesProductionName = nonUnitRulesProductionName,
          addedNonUnitRulesProduction = parserUtil.findProduction(addedNonUnitRulesProductionName, addedNonUnitRulesProductions);

    if (addedNonUnitRulesProduction !== null) {
      const addedNonUnitRulesProductionRules = addedNonUnitRulesProduction.getRules();

      nonUnitRulesProduction.concatRules(addedNonUnitRulesProductionRules);
    }
  });

  productions = nonUnitRulesProductions;  ///

  return productions;
}

function productionsFromCyclicComponent(cyclicComponent, productions) {
  productions = cyclicComponent.mapVertices(function(vertex) {
    const vertexName = vertex.getName(),
          productionName = vertexName,  ///
          production = parserUtil.findProduction(productionName, productions);

    return production;
  });

  return productions;
}

function unitRuleProductionsFromProductions(productions) {
  const unitRuleProductions = productions.reduce(function(unitRuleProductions, production) {
    const name = production.getName(),
          unitRulesProduction = UnitRulesProduction.fromProduction(production),
          unitRulesProductionUnitRuleProductions = unitRulesProduction.mapUnitRules(function(unitRule) {
            const unitRulesProductionUnitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);
            
            return unitRulesProductionUnitRuleProduction;
          });

    unitRuleProductions = unitRuleProductions.concat(unitRulesProductionUnitRuleProductions);

    return unitRuleProductions;
  }, []);

  return unitRuleProductions;
}

function nonUnitRulesProductionsFromProductions(productions) {
  const nonUnitProductions = productions.map(function(production) {
    const nonUnitProduction = NonUnitRulesProduction.fromProduction(production);
    
    return nonUnitProduction;
  });
  
  return nonUnitProductions;
}

function findUnitRuleProduction(productionName, unitRuleProductionName, unitRuleProductions) {
  const firstProductionName = productionName, ///
        secondProductionName = unitRuleProductionName;  ///

  let foundUnitRuleProduction = null;

  unitRuleProductions.some(function(unitRuleProduction) {
    const unitRuleProductionFound = unitRuleProduction.isFoundByProductionNames(firstProductionName, secondProductionName);

    if (unitRuleProductionFound) {
      foundUnitRuleProduction = unitRuleProduction;

      return true;
    }
  });

  const unitRuleProduction = foundUnitRuleProduction; ///

  return unitRuleProduction;
}