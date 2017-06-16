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
    const unitDefinitionsProductions = unitDefinitionsProductionsFromProductions(productions),
          graph = graphFromUnitDefinitionsProductions(unitDefinitionsProductions),
          components = graph.generateComponents(),
          nonCyclicProductions = nonCyclicProductionsFromComponents(components, unitDefinitionsProductions);

    productions = productions.map(function(production) {
      const productionName = production.getName(),
            nonCyclicProduction = parserUtil.findProduction(productionName, nonCyclicProductions),
            alreadyNonCyclicProduction = parserUtil.findProduction(productionName, productions);  ///

      production = nonCyclicProduction || alreadyNonCyclicProduction; ///

      return production;
    });

    return productions;
  }
}

module.exports = cycles;

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
          unitDefinitionProductionNames = unitDefinitionProductionNamesFromProductionNames(productionNames, unitDefinitionsProductions),
          vertexName = productionName,  ///
          descendantVertexNames = unitDefinitionProductionNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}

function unitDefinitionProductionNamesFromProductionNames(productionNames, unitDefinitionProductions) {
  const unitDefinitionProductionNames = productionNames.reduce(function(unitDefinitionProductionNames, productionName) {
    const unitDefinitionProduction = parserUtil.findProduction(productionName, unitDefinitionProductions);
    
    if (unitDefinitionProduction !== null) {
      const unitDefinitionProductionName = productionName;  ///

      unitDefinitionProductionNames.push(unitDefinitionProductionName);
    }    
    
    return unitDefinitionProductionNames;
  }, []);

  return unitDefinitionProductionNames;
}

function nonCyclicProductionsFromComponents(components, unitDefinitionsProductions) {
  const nonCyclicProductions = components.reduce(function(nonCyclicProductions, component) {
          const componentNonCyclic = component.isNonCyclic();

          if (componentNonCyclic) {
            nonCyclicProductionFromComponent(component, unitDefinitionsProductions, nonCyclicProductions);
          } else {
            nonCyclicProductionsFromComponent(component, unitDefinitionsProductions, nonCyclicProductions);
          }

          return nonCyclicProductions;
        }, []);

  return nonCyclicProductions;
}

function nonCyclicProductionFromComponent(component, unitDefinitionsProductions, nonCyclicProductions) {
  const firstVertex = component.getFirstVertex(),
        firstVertexName = firstVertex.getName(),
        nonCyclicProductionName = firstVertexName,  ///
        nonCyclicProduction = parserUtil.findProduction(nonCyclicProductionName, unitDefinitionsProductions);

  if (nonCyclicProduction !== null) { ///
    nonCyclicProductions.push(nonCyclicProduction);
  }
}

function nonCyclicProductionsFromComponent(component, unitDefinitionsProductions, nonCyclicProductions) {
  unitDefinitionsProductions = unitDefinitionsProductionsFromComponent(component, unitDefinitionsProductions);  ///
  
  const unitDefinitionProductions = unitDefinitionProductionsFromUnitDefinitionsProductions(unitDefinitionsProductions),
        fixedProductions = fixedProductionsFromUnitDefinitionsProductions(unitDefinitionsProductions),
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

function unitDefinitionsProductionsFromComponent(component, unitDefinitionsProductions) {
  const componentUnitDefinitionProductions = component.mapVertices(function(vertex) {
    const vertexName = vertex.getName(),
          componentUnitDefinitionName = vertexName,  ///
          componentUnitDefinitionProduction = parserUtil.findProduction(componentUnitDefinitionName, unitDefinitionsProductions);

    return componentUnitDefinitionProduction;
  });

  unitDefinitionsProductions = componentUnitDefinitionProductions;  ///

  return unitDefinitionsProductions;
}

function unitDefinitionProductionsFromUnitDefinitionsProductions(unitDefinitionsProductions) {
  const unitDefinitionProductions = unitDefinitionsProductions.reduce(function(unitDefinitionProductions, unitDefinitionsProduction) {
    const unitDefinitionsProductionName = unitDefinitionsProduction.getName();
    
    unitDefinitionsProduction.forEachUnitDefinition(function(unitDefinition) {
      const name = unitDefinitionsProductionName, ///
            unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);

      unitDefinitionProductions.push(unitDefinitionProduction);
    });

    return unitDefinitionProductions;
  }, []);

  return unitDefinitionProductions;
}

function fixedProductionsFromUnitDefinitionsProductions(unitDefinitionsProductions) {
  const fixedProductions = unitDefinitionsProductions.map(function(unitDefinitionsProduction) {
    const nonUnitProduction = NonUnitDefinitionsProduction.fromUnitDefinitionsProduction(unitDefinitionsProduction),
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
