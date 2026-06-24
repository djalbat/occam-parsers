"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Unpalatble nodes", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a non-producing definition", () => {
    const bnf = `
    
      S ::= A... "c" ;
      
      A ::= B "b" ;
      
      B ::= "a"?
      
          | ε 
          
          ;
      
    `;

    describe("content with the requisite significant tokens", () => {
      const content = "b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                   
                             |                     
                --------------------------         
                |                        |         
              A [0]             "c"[unassigned] [0]
                |                                  
          ------------                             
          |          |                             
          B "b"[unassigned] [0]                    
          |                                        
          ε                                        
    
        `));
      });
    });
  });
});
