"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe.only("Left recursion", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("an indirectly repeated rule that is non-producing", () => {
    const bnf = `
    
      S   ::= A... "." ;
      
      A   ::= A_ A~* ;
      
      B   ::= A_ A~* B~A ;
      
      C   ::= . ;
      
      A_  ::= C ;
      
      A~B ::= "=" C ;
      
      B~A ::= ( "," A )*
      
            | ε
      
            ;
      
      A~  ::= B~A B~* A~B ;
      
      B~  ::= A~B A~* B~A ;
    
    `;

    describe("content with the requisite significant tokens", () => {
      const content = "a = R .";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
    
        `));
      });
    });
  });
});
