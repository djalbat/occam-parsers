"use strict";

import RuleContext from "../context/rule";
import PartContext from "../context/part";
import PartsContext from "../context/parts";
import TopmostContext from "../context/topmost";
import CallAheadContext from "../context/callAhead";
import PartChoiceContext from "../context/partChoice";
import DefinitionContext from "../context/definition";
import RuleNamePartContext from "../context/ruleNamePart";

export function ruleContext(innerFunction, rule, context) {
  const ruleContext = RuleContext.fromRule(rule, context);

  context = ruleContext;  ///

  innerFunction(context);
}

export function partContext(innerFunction, part, context) {
  const partContext = PartContext.fromPart(part, context);

  context = partContext;  ///

  innerFunction(context);
}

export function partsContext(innerFunction, parts, parseParts, context) {
  const partsContext = PartsContext.fromPartsAndParseParts(parts, parseParts, context);

  context = partsContext;  ///

  innerFunction(context);
}

export function topmostContext(innerFunction, parser, tokens, context = null) {
  const topmostContext = TopmostContext.fromParserAndTokens(parser, tokens, context);

  context = topmostContext;  ///

  innerFunction(context);
}

export function callAheadContext(innerFunction, state, callAheadPart, context) {
  const callAheadContext = CallAheadContext.fromStateANdCallAheadPart(state, callAheadPart, context);

  context = callAheadContext;  ///

  innerFunction(context);
}

export function partChoiceContext(innerFunction, partChoice, context) {
  const partChoiceContext = PartChoiceContext.fromPartChoice(partChoice, context);

  context = partChoiceContext;  ///

  innerFunction(context);
}

export function definitionContext(innerFunction, definition, context) {
  const definitionContext = DefinitionContext.fromDefinition(definition, context);

  context = definitionContext;  ///

  innerFunction(context);
}

export function ruleNamePartContext(innerFunction, ruleNamePart, context) {
  const ruleNamePartContext = RuleNamePartContext.fromRuleNamePart(ruleNamePart, context);

  context = ruleNamePartContext;  ///

  innerFunction(context);
}

