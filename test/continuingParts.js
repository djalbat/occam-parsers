"use strict";

const { testUtilities } = require("../lib"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Continuing parts", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a terminal part followed by a continuing part", () => {
    const bnf = `S   ::= "a" T... "." ;

T   ::= . ;
          
`;

    describe("content with three significant tokens", () => {
      const content = "a b .";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                
                                       S [0]                           
                                         |                             
                     -----------------------------------------         
                     |                   |                   |         
            "a"[unassigned] [0]        T [0]        "."[unassigned] [0]
                                         |                             
                                "b"[unassigned] [0]                    
    
        `));
      });
    });
  });
});
