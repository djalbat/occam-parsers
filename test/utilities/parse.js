"use strict";

const { BasicLexer } = require("occam-lexers"),
      { arrayUtilities } = require("necessary"),
      { BasicParser, rulesUtilities, parserUtilities } = require("../../lib/index.js"); ///

const { first } = arrayUtilities,
      { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities;

function compareParseTreeStrings(stringA, stringB) {
  stringA = stripWhitespace(stringA);
  stringB = stripWhitespace(stringB);

  return (stringA === stringB);
}

function nodeFromEntriesBnfAndContent(entries, bnf, content) {
  const tokens = tokensFromEntriesAndContent(entries, content),
        node = nodeFromBNFAndTokens(bnf, tokens);

  return node;
}

function parseTreeStringFromNodeAndTokens(node, tokens) {
  const parseTree = node.asParseTree(tokens);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}

function parseTreeStringFromEntriesBnfAndContent(entries, bnf, content) {
  const tokens = tokensFromEntriesAndContent(entries, content),
        node = nodeFromBNFAndTokens(bnf, tokens),
        parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

  return parseTreeString;
}

module.exports = {
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
