"use strict";

const { BNFLexer } = require("occam-lexers"),
      { BNFParser, testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromNodeAndTokens } = testUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

describe("BNF", () => {
  describe("a BNF rule", () => {
    describe("content with a single rule", () => {
      const content = `

      A  ::=  B ;

`;

      it.only("results in the requisite parse tree" , () => {
        const tokens = bnfLexer.tokenise(content),
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
          "A"[name] [2]                      definition [2]                    
                                                    |                          
                                                part [2]                       
                                                    |                          
                                           nonTerminalPart [2]                 
                                                    |                          
                                              ruleName [2]                     
                                                    |                          
                                              "B"[name] [2]                    
    
        `));
      });
    });
  });
});
