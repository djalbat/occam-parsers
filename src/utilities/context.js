"use strict";

import RuleContext from "../context/rule";
import PartContext from "../context/part";
import TopmostContext from "../context/topmost";
import PartChoiceContext from "../context/partChoice";
import DefinitionContext from "../context/definition";

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

