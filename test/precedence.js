"use strict";

const { compareParseTreeStrings, nodeFromEntriesBnfAndContent, parseTreeStringFromEntriesBnfAndContent } = require("./utilities/parse");

describe.only("Precedence", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("rules with direct precedence", () => {
    const bnf = `
    
      S ::= E... "." ;
    
      E ::= . "+" E (1) 
    
          | . "*" E (2)
    
          | . ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

      it("results in a non-null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                             E [0] (1)                                                        "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "+"[unassigned] [0]                          E [0] (2)                                             
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "*"[unassigned] [0]        E [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]                    
    
        `));
      });
    });

    describe("incorrectly nested expressions", () => {
      const content = "1 * 2 + 3.";

      it("results in null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });
});
