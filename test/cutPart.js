"use strict";

const { testUtilities } = require("../lib"); ///

const { nodeFromEntriesBnfAndContent } = testUtilities;

describe("Cut part", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

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

    describe("valid derivations", () => {
      it.only("parses base A ('e')", () => {
        const content = "e.",
              node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("parses base B transitioned to A ('d g')", () => {
        const content = "d g.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("parses mutual cycle once ('e h g')", () => {
        const content = "e h g.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("parses direct left recursion on B ('d f g')", () => {
        const content = "d f g.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("parses compound loops ('e h f g h f g')", () => {
        const content = "e h f g h f g.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("parses multiple chained A statements", () => {
        const content = "e.d g.e h g.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });
    });

    describe("syntax errors with cuts", () => {
      it("fails instantaneously on committed base prefix ('d x')", () => {
        const content = "d x.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });

      it("fails instantaneously after inlined cycle cut ('e h x')", () => {
        const content = "e h x.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });

      it("fails instantaneously after repetition steps without Catalan search ('d f f f x')", () => {
        const content = "d f f f x.";
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe.skip("cut part inside repetition", () => {
    const bnf = `
    
       S ::= T... "." ;
  
       T ::= . A? ;
  
       A ::= B? B ;
  
       B ::= "+" \` T ;
                              
    `;

    describe("content that does parse", () => {
      const content = "x + x.";

      it("parses instantaneously", () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });
    });
  });

  describe.skip("cut part inside repetition", () => {
    const bnf = `
    
      S ::= ( T ... "." ) ;
      
      T ::= . (A A?)? ;
      
      A ::= "+" \` T ;
    
    `;

    describe("content that does not parse", () => {
      const content = "x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x=";

      it("parses instantaneously", () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe.skip("cut part after a terminal in a definition", () => {
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

  describe.skip("two cut parts after terminals in definitions", () => {
    const bnf = `
  
      S ::= T... "." ;
      
      T ::= . "+" . "+" \` T
      
          | . "+" \` T
      
          | .
                   
          ;
                 
    `;

    describe("content that will not parse instantly", () => {
      const content = "x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x=";

      it("fails to parse" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe.skip("cut part after a terminal in a choice of part part", () => {
    const bnf = `
  
      S ::= T... "." ;
      
      T ::= "x" ( ( "+" \` "y" )
      
                | ( "+" "z" ) )
                   
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

  describe.skip("two cut parts after terminals in a choice of parts part", () => {
    const bnf = `
  
      S ::= T... "." ;
      
      T ::= ( ( . "+" . "+" \` T )
      
            | ( . "+" \` T )
      
            | . )
                   
          ;
                 
    `;

    describe("content that will not parse instantly", () => {
      const content = "x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x=";

      it("fails to parse" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });
});
