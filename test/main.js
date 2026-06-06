"use strict";

const { BNFLexer, BasicLexer } = require("occam-lexers"),
      { arrayUtilities } = require("necessary"),
      { BNFParser, BasicParser, rulesUtilities, parserUtilities } = require("../lib/index.js");

const { first } = arrayUtilities,
      { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

describe("src/main", () => {
  describe("a single definition with a terminal part", () => {
    it("results in the requisite parse tree" , () => {
      const content = `
      
              a ::= b ;
            
            `,
            tokens = bnfLexer.tokenise(content),
            node = bnfParser.parse(tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
               S [0]       
                 |         
        "a"[unassigned] [0]
    
      `));
    });
  });
});

function compareParseTreeStrings(stringA, stringB) {
  stringA = stripWhitespace(stringA);
  stringB = stripWhitespace(stringB);

  return (stringA === stringB);
}

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

function parseTreeStringFromNodeAndTokens(node, tokens) {
  const parseTree = node.asParseTree(tokens);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}
