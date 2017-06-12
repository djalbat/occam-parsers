'use strict';

const tarjan = require('occam-tarjan');

const parserUtil = require('../util/parser'),
      Production = require('../common/production'),
      UnitDefinitionProduction = require('./production/unitDefinition'),
      UnitDefinitionsProduction = require('./production/unitDefinitions'),
      NonUnitDefinitionsProduction = require('./production/nonUnitDefinitions');

const { Graph } = tarjan;

class cycles {
  static eliminate(productions) {
    const graph = graphFromProductions(productions),
          components = graph.generateComponents(),
          nonCyclicProductions = nonCyclicProductionsFromComponents(components, productions),
          alreadyNonCyclicProductions = alreadyNonCyclicProductionsFromGraph(graph, productions);

    productions = productions.map(function(production) {
      const productionName = production.getName(),
            nonCyclicProduction = parserUtil.findProduction(productionName, nonCyclicProductions),
            alreadyNonCyclicProduction = parserUtil.findProduction(productionName, alreadyNonCyclicProductions);

      production = nonCyclicProduction || alreadyNonCyclicProduction; ///

      return production;
    });

    return productions;
  }
}

module.exports = cycles;

function graphFromProductions(productions) {
  const unitDefinitionsProductions = unitDefinitionsProductionsFromProductions(productions),
        graph = graphFromUnitDefinitionsProductions(unitDefinitionsProductions);

  return graph;
}

function unitDefinitionsProductionsFromProductions(productions) {
  const unitDefinitionsProductions = productions.reduce(function(unitDefinitionsProductions, production) {
    const unitDefinitionsProduction = UnitDefinitionsProduction.fromProduction(production);

    if (unitDefinitionsProduction !== null) {
      unitDefinitionsProductions.push(unitDefinitionsProduction);
    }

    return unitDefinitionsProductions;
  }, []);

  return unitDefinitionsProductions;
}

function graphFromUnitDefinitionsProductions(unitDefinitionsProductions) {
  const graph = new Graph();

  unitDefinitionsProductions.forEach(function(unitDefinitionsProduction) {
    const productionName = unitDefinitionsProduction.getName(),
          productionNames = unitDefinitionsProduction.getProductionNames(),
          vertexName = productionName,  ///
          descendantVertexNames = productionNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}

function nonCyclicProductionsFromComponents(components, productions) {
  const nonCyclicProductions = components.reduce(function(nonCyclicProductions, component) {
          const componentNonCyclic = component.isNonCyclic();

          if (componentNonCyclic) {
            nonCyclicProductionFromComponent(component, productions, nonCyclicProductions);
          } else {
            nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions);
          }

          return nonCyclicProductions;
        }, []);

  return nonCyclicProductions;
}

function alreadyNonCyclicProductionsFromGraph(graph, productions) {
  const alreadyNonCyclicProductions = productions.filter(function(production) {
    const productionName = production.getName(),
          vertexName = productionName,  ///
          vertexPresent = graph.isVertexPresent(vertexName),
          productionAlreadyNonCyclic = !vertexPresent; ///
    
    return productionAlreadyNonCyclic;
  });

  return alreadyNonCyclicProductions;
}

function nonCyclicProductionFromComponent(component, productions, nonCyclicProductions) {
  const firstVertex = component.getFirstVertex(),
        firstVertexName = firstVertex.getName(),
        nonCyclicProductionName = firstVertexName,  ///
        nonCyclicProduction = parserUtil.findProduction(nonCyclicProductionName, productions);

  nonCyclicProductions.push(nonCyclicProduction);
}

function nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions) {
  productions = productionsFromComponent(component, productions); ///

  const fixedProductions = fixedProductionsFromProductions(productions),
        unitDefinitionProductions = unitDefinitionProductionsFromProductions(productions),
        removedProductions = [],
        addedProductions = [];

  let unitDefinitionProductionsLength = unitDefinitionProductions.length;

  while (unitDefinitionProductionsLength > 0) {
    let unitDefinitionProduction = unitDefinitionProductions.shift(),
        unitDefinitionProductionName = unitDefinitionProduction.getName();

    const removedProduction = unitDefinitionProduction;

    removedProductions.push(removedProduction);

    const unitDefinitionProductionUnitDefinitionProductionName = unitDefinitionProduction.getUnitDefinitionProductionName(),
          fixedProductionName = unitDefinitionProductionUnitDefinitionProductionName,  ///
          addedProductionName = unitDefinitionProductionName,  ///
          fixedProduction = parserUtil.findProduction(fixedProductionName, fixedProductions);

    let addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction === null) {
      addedProduction = Production.fromProduction(fixedProduction);

      addedProduction.setName(addedProductionName);

      addedProductions.push(addedProduction);
    } else {
      const fixedProductionDefinitions = fixedProduction.getDefinitions();

      addedProduction.addDefinitions(fixedProductionDefinitions);
    }

    const intermediateProductionName = unitDefinitionProductionUnitDefinitionProductionName, ///
          intermediateProduction = parserUtil.findProduction(intermediateProductionName, unitDefinitionProductions);

    if (intermediateProduction !== null) {
      const intermediateProductionUnitDefinitionProductionName = intermediateProduction.getUnitDefinitionProductionName(),
            unitDefinitionProductionUnitDefinitionProductionName = intermediateProductionUnitDefinitionProductionName,  ///
            unitDefinitionProductionNonCyclic = (unitDefinitionProductionName !== unitDefinitionProductionUnitDefinitionProductionName);

      if (unitDefinitionProductionNonCyclic) {
        unitDefinitionProduction = findUnitDefinitionProduction(unitDefinitionProductionName, unitDefinitionProductionUnitDefinitionProductionName, removedProductions);

        if (unitDefinitionProduction === null) {
          unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinitionProductionName(unitDefinitionProductionName, unitDefinitionProductionUnitDefinitionProductionName);

          unitDefinitionProductions.unshift(unitDefinitionProduction);
        }
      }
    }

    unitDefinitionProductionsLength = unitDefinitionProductions.length;
  }

  nonCyclicProductionsFromFixedAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions);
}

function nonCyclicProductionsFromFixedAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions) {
  fixedProductions.forEach(function(fixedProduction) {
    const nonCyclicProduction = fixedProduction, ///
          nonCyclicProductionName = nonCyclicProduction.getName(),
          addedProductionName = nonCyclicProductionName, ///
          addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction !== null) {
      const addedProductionDefinitions = addedProduction.getDefinitions();

      nonCyclicProduction.addDefinitions(addedProductionDefinitions);
    }

    nonCyclicProductions.push(nonCyclicProduction);
  });
}

function productionsFromComponent(component, productions) {
  productions = component.mapVertices(function(vertex) {
    const vertexName = vertex.getName(),
          productionName = vertexName,  ///
          production = parserUtil.findProduction(productionName, productions);

    return production;
  });

  return productions;
}

function unitDefinitionProductionsFromProductions(productions) {
  const unitDefinitionProductions = productions.reduce(function(unitDefinitionProductions, production) {
    const name = production.getName(),
          unitDefinitionsProduction = UnitDefinitionsProduction.fromProduction(production);

    unitDefinitionsProduction.forEachUnitDefinition(function(unitDefinition) {
      const unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);

      unitDefinitionProductions.push(unitDefinitionProduction);
    });

    return unitDefinitionProductions;
  }, []);

  return unitDefinitionProductions;
}

function fixedProductionsFromProductions(productions) {
  const fixedProductions = productions.map(function(production) {
    const nonUnitProduction = NonUnitDefinitionsProduction.fromProduction(production),
          fixedProduction = nonUnitProduction; ///
    
    return fixedProduction;
  });
  
  return fixedProductions;
}

function findUnitDefinitionProduction(productionName, unitDefinitionProductionName, unitDefinitionProductions) {
  const firstProductionName = productionName, ///
        secondProductionName = unitDefinitionProductionName;  ///

  let foundUnitDefinitionProduction = null;

  unitDefinitionProductions.some(function(unitDefinitionProduction) {
    const unitDefinitionProductionFound = unitDefinitionProduction.isFoundByProductionNames(firstProductionName, secondProductionName);

    if (unitDefinitionProductionFound) {
      foundUnitDefinitionProduction = unitDefinitionProduction;

      return true;
    }
  });

  const unitDefinitionProduction = foundUnitDefinitionProduction; ///

  return unitDefinitionProduction;
}
