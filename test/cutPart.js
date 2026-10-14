"use strict";

const { testUtilities } = require("../lib"); ///

const { nodeFromEntriesBnfAndContent } = testUtilities;

describe("Cut part", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("cut part after a terminal in a definition", () => {
    const bnf = `
  
      S ::= ( T... "." ) ;
      
      T ::= "x" "+" \` "y"
      
          | "x" "+" "z"
                   
          ;
                 
    `;

    describe("content that will not parse", () => {
      const content = "x + z.";

      it("fails to parse" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });
});
