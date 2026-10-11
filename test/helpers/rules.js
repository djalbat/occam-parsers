"use strict";

const { arrayUtilities } = require("necessary");

const { first } = arrayUtilities;

function partFromRules(rules) {
  const definition = definitionFromRules(rules),
        parts = definition.getParts(),
        firstPart = first(parts),
        part = firstPart; ///

  return part;
}

function definitionFromRules(rules) {
  const rule = ruleFromRules(rules),
        defintions = rule.getDefinitions(),
        firstDefinition = first(defintions),
        definition = firstDefinition; ///

  return definition;
}

function ruleFromRules(rules) {
  const firstRule = first(rules),
        rule = firstRule; ///

  return rule;
}

module.exports = {
  partFromRules,
  definitionFromRules,
  ruleFromRules
}
