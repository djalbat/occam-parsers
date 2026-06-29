"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Missingi rule", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a choice of parts part with two terminal parts", () => {
    const bnf = `

      S   ::= T... "." ;
      
      T   ::= T_ T~* ;
      
      A   ::= "\`" .* "\`" ;
      
      T_  ::= X 
      
            | .
      
            ;
      
      T~T ::= <NO_WHITESPACE> A ;
      
      T~  ::= T~T ;
                
    `;

    describe("content with several significant tokens", () => {
      const content = "w\`p\`.";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                                                           S [0]                                             
                                                                             |                                               
                                      ------------------------------------------------------------------------------         
                                      |                                                                            |         
                                    T [0]                                                                 "."[unassigned] [0]
                                      |                                                                                      
                   --------------------------------------                                                                    
                   |                                    |                                                                    
                T_ [0]                               T~ [0]                                                                  
                   |                                    |                                                                    
          "w"[unassigned] [0]                        T~T [0]                                                                 
                                                        |                                                                    
                                     ---------------------------------------                                                 
                                     |                                     |                                                 
                              <NO_WHITESPACE>                            A [0]                                               
                                                                           |                                                 
                                                       -----------------------------------------                             
                                                       |                   |                   |                             
                                              "\`"[unassigned] [0] "p"[unassigned] [0] "\`"[unassigned] [0]                    
    
        `));
      });
    });
  });
});
