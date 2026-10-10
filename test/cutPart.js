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

  describe("cut-pruned rewritten left-recursion", () => {
    const bnf = `
  
      S   ::= ( A... "." ) ;
  
      A   ::= B \` A~
      
            | A_
            
            ;
  
      B   ::= B_ B~* ;
  
      A_  ::= "e" ;
  
      A~  ::= "g" ;
  
      B_  ::= A_ "h" \`
      
            | "d" \`
            
            ;
  
      B~  ::= A~ "h" \`
      
            | "f" \`
            
            ;
    
    `;

    it("parses the A rule", () => {
      const content = "e.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNotNull(node);
    });

    it("parses rule B transitioned from A", () => {
      const content = "d g.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNotNull(node);
    });

    it("parses a mutual cycle once", () => {
      const content = "e h g.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNotNull(node);
    });

    it("direct left recursion on the B rule", () => {
      const content = "d f g.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNotNull(node);
    });

    it("parses compound loops", () => {
      const content = "e h f g h f g.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNotNull(node);
    });

    it("parses multiple chained statements", () => {
      const content = "e.d g.e h g.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNotNull(node);
    });

    it("fails on the committed base prefix", () => {
      const content = "d x.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNull(node);
    });

    it("fails after an inlined cycle cut", () => {
      const content = "e h x.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNull(node);
    });

    it("fails after repetition steps without Catalan search", () => {
      const content = "d f f f x.",
            node = nodeFromEntriesBnfAndContent(entries, bnf, content);

      assert.isNull(node);
    });
  });
});
