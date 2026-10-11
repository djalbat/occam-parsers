"use strict";

const { rulesUtilities, parserUtilities } = require("occam-parsers");

const { eliminateLeftRecursion } = require("../../lib");  ///

const { rulesFromBNF } = parserUtilities,
      { rulesAsString } = rulesUtilities;

function adjustedBNFFromBNF(bnf) {
  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const multiLine = true,
        rulesString = rulesAsString(rules, multiLine),
        adjustedBNF = rulesString;  ///

  return adjustedBNF;
}

function adjustedBNFFromRules(rules) {
  const multiLine = true,
        rulesString = rulesAsString(rules, multiLine),
        adjustedBNF = rulesString;  ///

  return adjustedBNF;
}

module.exports = {
  adjustedBNFFromBNF,
  adjustedBNFFromRules
};
