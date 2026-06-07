"use strict";

import RuleContext from "../context/rule";
import PartContext from "../context/part";
import PartsContext from "../context/parts";
import TopmostContext from "../context/topmost";
import PartChoiceContext from "../context/partChoice";
import DefinitionContext from "../context/definition";
import RuleNamePartContext from "../context/ruleNamePart";

export function ruleContext(innerFunction, rule, context) {
  let parsed;

  const ruleContext = RuleContext.fromRule(rule, context);

  context = ruleContext;  ///

  parsed = innerFunction(context);

  return parsed;
}

export function partContext(innerFunction, part, context) {
  let parsed;

  const partContext = PartContext.fromPart(part, context);

  context = partContext;  ///

  parsed = innerFunction(context);

  return parsed;
}

export function partsContext(innerFunction, parts, definition, context) {
  let parsed;

  const partsContext = PartsContext.fromPartsAndDefinition(parts, definition, context);

  context = partsContext;  ///

  parsed = innerFunction(context);

  return parsed;
}

export function topmostContext(innerFunction, parser, tokens, context = null) {
  let parsed;

  const topmostContext = TopmostContext.fromParserAndTokens(parser, tokens, context);

  context = topmostContext;  ///

  parsed = innerFunction(context);

  return parsed;
}

export function partChoiceContext(innerFunction, partChoice, context) {
  let parsed;

  const partChoiceContext = PartChoiceContext.fromPartChoice(partChoice, context);

  context = partChoiceContext;  ///

  parsed = innerFunction(context);

  return parsed;
}

export function definitionContext(innerFunction, definition, context) {
  let parsed;

  const definitionContext = DefinitionContext.fromDefinition(definition, context);

  context = definitionContext;  ///

  parsed = innerFunction(context);

  return parsed;
}

export function ruleNamePartContext(innerFunction, ruleNamePart, context) {
  let parsed;

  const ruleNamePartContext = RuleNamePartContext.fromRuleNamePart(ruleNamePart, context);

  context = ruleNamePartContext;  ///

  parsed = innerFunction(context);

  return parsed;
}

