"use strict";

import RuleContext from "../context/rule";
import PartContext from "../context/part";
import PartsContext from "../context/parts";
import TopmostContext from "../context/topmost";
import PartChoiceContext from "../context/partChoice";
import DefinitionContext from "../context/definition";
import RuleNamePartContext from "../context/part/ruleName";
import ContinuationContext from "../context/continuation";
import ChoiceOfPartsContext from "../context/part/choiceOfParrts";
import ContinuationPartContext from "../context/part/continuation";
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

export function partsContext(innerFunction, parts, parsePartContinually, context) {
  const partsContext = PartsContext.fromPartsAndParsePartsContinually(parts, parsePartContinually, context);

  context = partsContext;  ///

  innerFunction(context);
}

export function topmostContext(innerFunction, parser, tokens, context = null) {
  const topmostContext = TopmostContext.fromParserAndTokens(parser, tokens, context);

  context = topmostContext;  ///

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

export function continuationContext(innerFunction, context) {
  const continuationContext = ContinuationContext.fromNothing(context);

  context = continuationContext;  ///

  innerFunction(context);
}

export function continuationPartContext(innerFunction, part, count, parsePart, context) {
  const continuationPartContext = ContinuationPartContext.fromPartCountAndParsePart(part, count, parsePart, context);

  context = continuationPartContext;  ///

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
