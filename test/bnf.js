"use strict";

const { BNFLexer } = require("occam-lexers"),
      { BNFParser, testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromNodeAndTokens } = testUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

describe("BNF", () => {
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
});
