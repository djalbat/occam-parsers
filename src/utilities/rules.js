"use strict";

import { first } from "../utilities/array";

export function ruleMapFromRules(rules) {
  const ruleMap = {};

  rules.forEach((rule) => {
    const ruleName = rule.getName();

    ruleMap[ruleName] = rule;
  });

  return ruleMap;
}

export function startRuleFromRules(rules) {
  const firstRule = first(rules),
      startRule = firstRule;  ///

  return startRule;
}
