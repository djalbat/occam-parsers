"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, nodeFromEntriesBnfAndContent, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Backticks", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("genuine backticks", () => {
    const bnf = `
    
      S ::= A...  "." ;
      
      A ::= \` B ;
      
      B ::= "a"
      
          | "a" "b"
      
          ;
          
    `;

    describe("content with a backtick", () => {
      const content = "a b .";

      it.only("results in a null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });
});
