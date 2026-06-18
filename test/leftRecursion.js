"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Left recursion", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("an indirectly repeated rule that is non-producing", () => {
    const bnf = `
    
      S ::= A... "." ;
      
      A ::= B "b" ;
      
      B ::= ","?
      
          | ε
      
          ;
      
    `;

    describe("content with the requisite significant tokens", () => {
      const content = "b.";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
    
        `));
      });
    });
  });
});
