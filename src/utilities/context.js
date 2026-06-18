"use strict";

import RuleContext from "../context/rule";
import PartContext from "../context/part";
import PartsContext from "../context/parts";
import TopmostContext from "../context/topmost";
import PartChoiceContext from "../context/partChoice";
import DefinitionContext from "../context/definition";
import RuleNamePartContext from "../context/part/ruleName";
import ContiunationContext from "../context/continuation";
import ChoiceOfPartsContext from "../context/part/choiceOfParrts";
import ContiunationPartContext from "../context/part/contiunation";
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

export function partsContext(innerFunction, parts, parsePartsContiunally, context) {
  const partsContext = PartsContext.fromPartsAndParsePartsContinually(parts, parsePartsContiunally, context);

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

export function continuationContext(innerFunction, state, contiunationParts, context) {
  const contiunationContext = ContiunationContext.fromStateAndContiunationParts(state, contiunationParts, context);

  context = contiunationContext;  ///

  innerFunction(context);
}

export function contiunationPartContext(innerFunction, part, count, parsePart, context) {
  const contiunationPartContext = ContiunationPartContext.fromPartCountAndParsePart(part, count, parsePart, context);

  context = contiunationPartContext;  ///

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
