"use strict";

import RuleContext from "../context/rule";
import PartContext from "../context/part";
import PartsContext from "../context/parts";
import TopmostContext from "../context/topmost";
import CallAheadContext from "../context/callAhead";
import PartChoiceContext from "../context/partChoice";
import DefinitionContext from "../context/definition";
import RuleNamePartContext from "../context/part/ruleName";
import ContinualPartContext from "../context/part/continual";
import ChoiceOfPartsContext from "../context/part/choiceOfParrts";
import SequenceOfPartsPartContext from "../context/part/sequenceOfParts";

export function ruleContext(innerFunction, rule, context) {
  const ruleContext = RuleContext.fromRule(rule, context);

  context = ruleContext;  ///

  innerFunction(context);
}

export function partContext(innerFunction, part, context) {
  const partContext = PartContext.fromPart(PartContext, part, context); ///

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

export function callAheadContext(innerFunction, state, callAheadParts, context) {
  const callAheadContext = CallAheadContext.fromStateAndCallAheadParts(state, callAheadParts, context);

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

export function continualPartContext(innerFunction, part, count, parsePart, context) {
  const continualPartContext = ContinualPartContext.fromPartCountAndParsePart(part, count, parsePart, context);

  context = continualPartContext;  ///

  innerFunction(context);
}

export function choiceOfPartsPartContext(innerFunction, choiceOfPartsPart, context) {
  const choiceOfPartsPartContext = ChoiceOfPartsContext.fromChoiceOfPartsPart(choiceOfPartsPart, context);

  context = choiceOfPartsPartContext;  ///

  innerFunction(context);
}

export function sequenceOfPartsPartContext(innerFunction, sequenceOfPartsPart, context) {
  const sequenceOfPartsPartContext = SequenceOfPartsPartContext.fromSequenceOfPartsPart(sequenceOfPartsPart, context);

  context = sequenceOfPartsPartContext;  ///

  innerFunction(context);
}
