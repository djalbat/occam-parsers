"use strict";

import { BasicLexer } from "occam-lexers";
import { arrayUtilities } from "necessary";

import BasicParser from "../basic/parser";

import { rulesFromBNF } from "../utilities/parser";
import { ruleMapFromRules } from "../utilities/rules";

const { first } = arrayUtilities;

export function compareParseTreeStrings(stringA, stringB) {
  stringA = stripWhitespace(stringA);
  stringB = stripWhitespace(stringB);

  return (stringA === stringB);
}

export function nodeFromEntriesBnfAndContent(entries, bnf, content) {
  const tokens = tokensFromEntriesAndContent(entries, content),
        node = nodeFromBNFAndTokens(bnf, tokens);

  return node;
}

export function parseTreeStringFromNodeAndTokens(node, tokens) {
  const parseTree = node.asParseTree(tokens);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}

export function parseTreeStringFromEntriesBnfAndContent(entries, bnf, content) {
  const tokens = tokensFromEntriesAndContent(entries, content),
        node = nodeFromBNFAndTokens(bnf, tokens),
        parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

  return parseTreeString;
}

export default {
  compareParseTreeStrings,
  nodeFromEntriesBnfAndContent,
  parseTreeStringFromNodeAndTokens,
  parseTreeStringFromEntriesBnfAndContent
};

function stripWhitespace(string) {
  string = string.replace(/[\s\t\n\r]/g, "");

  return string;
}

function nodeFromBNFAndTokens(bnf, tokens) {
  const rules = rulesFromBNF(bnf),
        ruleMap = ruleMapFromRules(rules),
        firstRule = first(rules),
        startRule = firstRule,
        exampleParser = new BasicParser(startRule, ruleMap),
        node = exampleParser.parse(tokens);

  return node;
}

function tokensFromEntriesAndContent(entries, content) {
  const basicLexer = BasicLexer.fromEntries(entries),
        tokens = basicLexer.tokenise(content);

  return tokens;
}
