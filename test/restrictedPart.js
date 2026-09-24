"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, nodeFromEntriesBnfAndContent, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Restricted part", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("restricted rule name part", () => {
    const bnf = `
    
      S ::= A...  "." ;
      
      A ::= \` B ;
      
      B ::= "a"
      
          | "a" "b"
      
          ;
          
    `;

    describe("requisite content", () => {
      const content = "a b .";

      it.skip("results in a null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe("simulated polynomial operator boundaries", () => {
    const bnf = `
  
      S ::= T... "." ;
      
      T ::= \`A "+" A ;
      
      A ::= . "+" .
      
          | .
                   
          ;
                 
    `;

    describe("content with overlapping operators", () => {
      const content = "1 + 2 .";

      it.only("results in a null node because the first argument commits greedily", () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });});
