"use strict";

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent} = require("./utilities/parse");

describe.only("Precedence", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  xdescribe("rules with no precedence", () => {
    const bnf = `
    
      S ::= E... "." ;
    
      E ::= . "+" E 
    
          | . "*" E 
    
          | . ;
    
    `;

    describe("nested expressions", () => {
      const content = "1 * 2 + 3.";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                               E [0]                                                          "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "*"[unassigned] [0]                            E [0]                                               
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "+"[unassigned] [0]        E [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]                    
    
        `));
      });
    });
  });

  describe("rules with no precedence", () => {
    const bnf = `
    
      S ::= E... "." ;
    
      E ::= . "+" E (1) 
    
          | . "*" E (2)
    
          | . ;
    
    `;

    describe("nested expressions", () => {
      const content = "1 * 2 + 3.";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                               E [0]                                                          "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "*"[unassigned] [0]                            E [0]                                               
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "+"[unassigned] [0]        E [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]                    
    
        `));
      });
    });
  });
});
