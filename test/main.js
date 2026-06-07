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
  describe("a simple BNF rule", () => {
    describe("content with a single rule", () => {
      it("results in the requisite parse tree" , () => {
        const content = `
          
                  a ::= b ;
                
                `,
              tokens = bnfLexer.tokenise(content),
              node = bnfParser.parse(tokens),
              parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                  document [2]                             
                                        |                                  
                                    rule [2]                               
                                        |                                  
            --------------------------------------------------------       
            |                |                  |                  |       
        name [2]    "::="[special] [2]   definitions [2]   ";"[special] [2]
            |                                   |                          
      "a"[name] [2]                      definition [2]                    
                                                |                          
                                            part [2]                       
                                                |                          
                                       nonTerminalPart [2]                 
                                                |                          
                                          ruleName [2]                     
                                                |                          
                                          "b"[name] [2]                    
    
        `));
      });
    });
  });

  describe("a single rule with a single definition with a terminal part", () => {
    const entries = [
            {
              "unassigned": "^[^\\s]"
            }
          ],
          bnf = `
          
            S    ::= "a" ;
          
          `;

    describe("content with a single token", () => {
      it("results in the requisite parse tree" , () => {
        const content = `
      
                  a
                
                `,
              tokens = tokensFromEntriesAndContent(entries, content),
              node = nodeFromBNFAndTokens(bnf, tokens),
              parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                 S [2]       
                   |         
          "a"[unassigned] [2]
    
        `));
      });
    });
  });

  describe("two rules the first with a single definition with a call ahead part and the second with a single definition with an optional part", () => {
    const entries = [
            {
              "unassigned": "^[^\\s]"
            }
          ],
          bnf = `
          
            S ::= A... "a" ;
            
            A ::= "a"? ;
          
          `;

    describe("content with a single token", () => {
      it.only("results in the requisite parse tree" , () => {
        const content = `

                a
              
              `,
              tokens = tokensFromEntriesAndContent(entries, content),
              node = nodeFromBNFAndTokens(bnf, tokens),
              parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                  S [4-2]            
                     |               
              --------------         
              |            |         
            A [4] "a"[unassigned] [2]
      
        `));
      });
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
