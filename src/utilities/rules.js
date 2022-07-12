"use strict";

import { first } from "../utilities/array";

import { EMPTY_STRING } from "../constants";

export function rulesAsString(rules, multiLine) {
  const maximumRuleNameLength = rules.reduce((maximumRuleNameLength, rule) => {
        const ruleName = rule.getName(),
              ruleNameLength = ruleName.length;

        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

        return maximumRuleNameLength;
      }, 0),
      rulesString = rules.reduce((rulesString, rule) => {
        const ruleString = rule.asString(maximumRuleNameLength, multiLine);

        rulesString += ruleString;

        return rulesString;
      }, EMPTY_STRING).replace(/^\n\n/, EMPTY_STRING);

  return rulesString;
}

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

export default {
  rulesAsString,
  ruleMapFromRules,
  startRuleFromRules
};
