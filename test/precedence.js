"use strict";

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent} = require("./utilities/parse");

describe.only("Precedence", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("rules with no precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . "+" T 
    
          | . "*" T 
    
          | . ;
    
    `;

    describe("singluar expression", () => {
      const content = "1 + 2.";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                                         S [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     T [0]                            "."[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "1"[unassigned] [0] "+"[unassigned] [0]        T [0]                           
                                                           |                             
                                                  "2"[unassigned] [0]                    
    
        `));
      });
    });

    describe("nested expressions", () => {
      const content = "1 * 2 + 3.2";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                               T [0]                                                          "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "*"[unassigned] [0]                            T [0]                                               
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "+"[unassigned] [0]        T [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]                    
    
        `));
      });
    });
  });
});
