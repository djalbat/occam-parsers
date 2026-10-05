"use strict";

const { testUtilities } = require("../lib"); ///

const { nodeFromEntriesBnfAndContent } = testUtilities;

describe("Cut part", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("cut part inside repetition", () => {
    const bnf = `
    
       S ::= T... "." ;
  
       T ::= . A? ;
  
       A ::= B? B ;
  
       B ::= "+" \` T ;
                              
    `;

    describe("content that does parse", () => {
      const content = "x + x.";

      it.only("parses instantaneously", () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });
    });
  });

  describe("cut part inside repetition", () => {
    const bnf = `
    
       S ::= T... "." ;
  
       T ::= . (A* A)* ;
  
       A ::= "+" \` T ;
                              
    `;

    describe("content that does not parse", () => {
      const content = "x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x + x=";

      it("parses instantaneously", () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe("cut part after a terminal in a definition", () => {
    const bnf = `
  
      S ::= T... "." ;
      
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

  describe("two cut parts after terminals in definitions", () => {
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

  describe("cut part after a terminal in a choice of part part", () => {
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

  describe("two cut parts after terminals in a choice of parts part", () => {
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
