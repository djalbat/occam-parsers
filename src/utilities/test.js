"use strict";

import { BasicLexer } from "occam-lexers";
import { arrayUtilities } from "necessary";

import BasicParser from "../basic/parser";

import { rulesFromBNF } from "../utilities/parser";
import { ruleMapFromRules } from "../utilities/rules";

const { first } = arrayUtilities;

export function nodeFromBNFAndTokens(Parser, bnf, tokens) {
  if (tokens === undefined) {
    tokens = bnf; ///

    bnf = Parser; //

    Parser = BasicParser; ///
  }

  const rules = rulesFromBNF(bnf),
    ruleMap = ruleMapFromRules(rules),
    firstRule = first(rules),
    startRule = firstRule,
    parser = new Parser(startRule, ruleMap),
    node = parser.parse(tokens);

  return node;
}

export function nodeFromRulesAndTokens(Parser, rules, tokens) {
  if (tokens === undefined) {
    tokens = rules; ///

    rules = Parser; //

    Parser = BasicParser; ///
  }

  const ruleMap = ruleMapFromRules(rules),
        firstRule = first(rules),
        startRule = firstRule,
        parser = new Parser(startRule, ruleMap),
        node = parser.parse(tokens);

  return node;
}

export function compareParseTreeStrings(stringA, stringB) {
  stringA = stripWhitespace(stringA);
  stringB = stripWhitespace(stringB);

  return (stringA === stringB);
}

export function tokensFromEntriesAndContent(Lexer, entries, content) {
  if (content === undefined) {
    content = entries;  /'/

    entries = Lexer;  ///

    Lexer = BasicLexer; ///
  }

  const lexer = Lexer.fromEntries(entries),
        tokens = lexer.tokenise(content);

  return tokens;
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
  nodeFromBNFAndTokens,
  nodeFromRulesAndTokens,
  compareParseTreeStrings,
  tokensFromEntriesAndContent,
  nodeFromEntriesBnfAndContent,
  parseTreeStringFromNodeAndTokens,
  parseTreeStringFromEntriesBnfAndContent
};

function stripWhitespace(string) {
  string = string.replace(/[\s\t\n\r]/g, "");

  return string;
}
