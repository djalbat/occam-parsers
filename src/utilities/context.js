"use strict";

import RuleContext from "../context/rule";
import PartContext from "../context/part";
import PartsContext from "../context/parts";
import TopmostContext from "../context/topmost";
import PartChoiceContext from "../context/partChoice";
import DefinitionContext from "../context/definition";
import ContinuationContext from "../context/continuation";
import RuleNamePartContext from "../context/part/ruleName";
import IsolatedPartPartContext from "../context/part/isolatedPart";
import ContinuationPartContext from "../context/part/continuation";
import CommittedPartPartContext from "../context/part/committedPart";
import SequenceOfPartsPartContext from "../context/part/sequenceOfParts";

export function ruleContext(rule, context) { return RuleContext.fromRule(rule, context); }

export function partContext(part, context) { return PartContext.fromPart(PartContext, part, context); } ///

export function partsContext(parts, parsePartContinually, context) { return PartsContext.fromPartsAndParsePartsContinually(parts, parsePartContinually, context); }

export function topmostContext(parser, tokens, context = null) { return TopmostContext.fromParserAndTokens(parser, tokens, context); }

export function partChoiceContext(partChoice, context) { return PartChoiceContext.fromPartChoice(partChoice, context); }

export function definitionContext(definition, context) { return DefinitionContext.fromDefinition(definition, context); }

export function continuationContext(continuingContext, context) { return ContinuationContext.fromContinuingContext(continuingContext, context); }

export function ruleNamePartContext(frame, ruleNamePart, context) { return RuleNamePartContext.fromframeAndRuleNamePart(frame, ruleNamePart, context); }

export function isolatedPartPartContext(context) { return IsolatedPartPartContext.fromNothing(context); }

export function continuationPartContext(part, count, parsePartContinually, context) { return ContinuationPartContext.fromPartCountAndParsePartContinually(part, count, parsePartContinually, context); }

export function committedPartPartContext(savedFrame, consuming, context) { return CommittedPartPartContext.fromSavedFrameAndConsuming(savedFrame, consuming, context); }

export function sequenceOfPartsPartContext(sequenceOfPartsPart, context) { return SequenceOfPartsPartContext.fromSequenceOfPartsPart(sequenceOfPartsPart, context); }
