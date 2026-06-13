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
  describe("a BNF rule", () => {
    describe("content with a single rule", () => {
      const content = "A ::= P ;";

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
          "A"[name] [0]                      definition [0]                    
                                                    |                          
                                                part [0]                       
                                                    |                          
                                           nonTerminalPart [0]                 
                                                    |                          
                                              ruleName [0]                     
                                                    |                          
                                              "P"[name] [0]                    
    
        `));
      });
    });
  });

  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a terminal part", () => {
    const bnf = `
    
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

  describe("one optional part", () => {
    const bnf = `
    
      S    ::= "a" .? ;
    
    `;

    describe("content with one significant token", () => {
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

    describe("content with two significant tokens", () => {
      const content = "a b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0]
      
        `));
      });
    });
  });

  describe("one zero or more parts part", () => {
    const bnf = `
    
      S    ::= "a" .* ;
    
    `;

    describe("content with one significant token", () => {
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

    describe("content with two significant tokens", () => {
      const content = "a b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0]
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                     S [0]                           
                                       |                             
                   -----------------------------------------         
                   |                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0] "c"[unassigned] [0]
      
        `));
      });
    });
  });

  describe("one one or more parts part", () => {
    const bnf = `
    
      S    ::= "a" .+ ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0]
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                     S [0]                           
                                       |                             
                   -----------------------------------------         
                   |                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0] "c"[unassigned] [0]
      
        `));
      });
    });
  });

  describe("calling ahead to a terminal part", () => {
    const bnf = `
    
      S ::= A... "b" ;
      
      A ::= "a" ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a b";

      it.only("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "b"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead to one optional part", () => {
    const bnf = `
    
      S ::= A... "c"? ;
      
      A ::= "a" "b" ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it.skip("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "c"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead through one optional part", () => {
    const bnf = `
    
      S ::= A... "c" ;
      
      A ::= "a" .? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                         S [0]                 
                           |                   
                 ---------------------         
                 |                   |         
               A [0]        "c"[unassigned] [0]
                 |                             
        "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "c"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("nested calling ahead through one optional part", () => {
    const bnf = `
        
      S ::= B... "c" ;
      
      B ::= A . ;
    
      A ::= "a" .? ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           B [0]                  "c"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "b"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "c"[unassigned] [0]
                                            |                                            
                             -------------------------------                             
                             |                             |                             
                           A [0]                  "b"[unassigned] [0]                    
                             |                                                           
                   ---------------------                                                 
                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("nested calling ahead through two optional parts", () => {
    const bnf = `
        
      S ::= B... "c" ;
      
      B ::= A .? ;
    
      A ::= "a" .? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                             S [0]                 
                               |                   
                     ---------------------         
                     |                   |         
                   B [0]        "c"[unassigned] [0]
                     |                             
                   A [0]                           
                     |                             
            "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           B [0]                  "c"[unassigned] [0]
                             |                                       
                           A [0]                                     
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "c"[unassigned] [0]
                                            |                                            
                             -------------------------------                             
                             |                             |                             
                           A [0]                  "b"[unassigned] [0]                    
                             |                                                           
                   ---------------------                                                 
                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("doubly nested calling ahead through two optional parts", () => {
    const bnf = `
        
      S ::= B... "d" ;
      
      B ::= A... .? ;
    
      A ::= "a" /./? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a d";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                             S [0]                 
                               |                   
                     ---------------------         
                     |                   |         
                   B [0]        "d"[unassigned] [0]
                     |                             
                   A [0]                           
                     |                             
            "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b d";

      it.skip("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           B [0]                  "d"[unassigned] [0]
                             |                                       
                           A [0]                                     
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });

    describe.skip("content with four significant tokens", () => {
      const content = "a b c d";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           B [0]                  "c"[unassigned] [0]
                             |                                       
                           A [0]                                     
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead through one zero or more parts part", () => {
    const bnf = `
        
      S ::= A... "c" ;
      
      A ::= "a" .* ;
        
    `;

    describe("content with two significant tokens", () => {
      const content = "a c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "c"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "c"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                         S [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "c"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("nested calling ahead through one zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "c" ;
      
      B ::= A . ;
    
      A ::= "a" .* ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           B [0]                  "c"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "b"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "c"[unassigned] [0]
                                            |                                            
                             -------------------------------                             
                             |                             |                             
                           A [0]                  "b"[unassigned] [0]                    
                             |                                                           
                   ---------------------                                                 
                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("nested calling ahead through two zero or more parts parts", () => {
    const bnf = `
        
      S ::= B... "c" ;
      
      B ::= A .* ;
    
      A ::= "a" .* ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                             S [0]                 
                               |                   
                     ---------------------         
                     |                   |         
                   B [0]        "c"[unassigned] [0]
                     |                             
                   A [0]                           
                     |                             
            "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           B [0]                  "c"[unassigned] [0]
                             |                                       
                           A [0]                                     
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                         S [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     B [0]                            "c"[unassigned] [0]
                                       |                                                 
                                     A [0]                                               
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead through one one or more parts part", () => {
    const bnf = `
        
      S ::= A... "c" ;
      
      A ::= "a" .+ ;
        
    `;

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "c"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                         S [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "c"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "b"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("nested calling ahead through one one or more parts part", () => {
    const bnf = `
        
      S ::= B... "c" ;
      
      B ::= A . ;
    
      A ::= "a" .+ ;
    
    `;

    describe("content with four significant tokens", () => {
      const content = "a a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "c"[unassigned] [0]
                                            |                                            
                             -------------------------------                             
                             |                             |                             
                           A [0]                  "b"[unassigned] [0]                    
                             |                                                           
                   ---------------------                                                 
                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("nested calling ahead through two one or more parts parts", () => {
    const bnf = `
        
      S ::= B... "d" ;
      
      B ::= A .+ ;
    
      A ::= "a" .+ ;
    
    `;

    describe("content with four significant tokens", () => {
      const content = "a b c d";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "d"[unassigned] [0]
                                            |                                            
                             -------------------------------                             
                             |                             |                             
                           A [0]                  "c"[unassigned] [0]                    
                             |                                                           
                   ---------------------                                                 
                   |                   |                                                 
          "a"[unassigned] [0] "b"[unassigned] [0]                                        
      
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
