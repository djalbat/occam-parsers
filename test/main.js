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
      const content = "a ::= b ;";

      it("results in the requisite parse tree" , () => {
        const tokens = bnfLexer.tokenise(content),
              node = bnfParser.parse(tokens),
              parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                      document [0]                             
                                            |                                  
                                        rule [0]                               
                                            |                                  
                --------------------------------------------------------       
                |                |                  |                  |       
            name [0]    "::="[special] [0]   definitions [0]   ";"[special] [0]
                |                                   |                          
          "a"[name] [0]                      definition [0]                    
                                                    |                          
                                                part [0]                       
                                                    |                          
                                           nonTerminalPart [0]                 
                                                    |                          
                                              ruleName [0]                     
                                                    |                          
                                              "b"[name] [0]                    
    
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

    describe("content with a single significant token", () => {
      const content = "a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                 S [0]       
                   |         
          "a"[unassigned] [0]
    
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
          
            S ::= A... "." ;
            
            A ::= "a" "b"? ;
          
          `;

    describe("content with two significant tokens", () => {
      const content = "a .";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "."[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b .";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "."[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe.skip("two rules the first with a single definition with a call ahead part and the second with a single definition with a zero or more parts part", () => {
    const entries = [
            {
              "unassigned": "^[^\\s]"
            }
          ],
          bnf = `
              
                S ::= A... "b" ;
                
                A ::= "a" "b"* ;
              
              `;

    describe("content with two significant tokens", () => {
      it("results in the requisite parse tree" , () => {
        const content = `
    
                    a b b
                  
                  `,
              tokens = tokensFromEntriesAndContent(entries, content),
              node = nodeFromBNFAndTokens(bnf, tokens),
              parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                           S [2]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [2]        "b"[unassigned] [2]
                   |                             
          "a"[unassigned] [2]                    
      
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

function parseTreeStringFromEntriesBnfAndContent(entries, bnf, content) {
  const tokens = tokensFromEntriesAndContent(entries, content),
        node = nodeFromBNFAndTokens(bnf, tokens),
        parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

  return parseTreeString;
}
