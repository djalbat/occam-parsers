"use strict";

const { testUtilities } = require("../lib"); ///

const { compareParseTreeStrings, nodeFromEntriesBnfAndContent, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Committed part", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("singular committed rule name part", () => {
    const bnf = `
    
      S ::= A...  "." ;
      
      A ::= \`B ;
      
      B ::= "a"
      
          | "a" "b"
      
          ;
          
    `;

    describe("requisite with three significant tokens", () => {
      const content = "a b .";

      it("results in a null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe("rule name part followed by other parts", () => {
    const bnf = `
  
      S ::= T... "." ;
      
      T ::= \`A "+" A ;
      
      A ::= . "+" .
      
          | .
                   
          ;
                 
    `;

    describe("content with four significant tokens", () => {
      const content = "1 + 2 .";

      it("results in a null node", () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe("rule name part with nested continuations", () => {
    const bnf = `
  
      S ::= T... "." ;
      
      T ::= A \`"+" A ;
      
      A ::= . "+" .
      
          | .
                   
          ;
                 
    `;

    describe("content with four significant tokens", () => {
      const content = "1 + 2 .";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                         S [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     T [0]                            "."[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
                 A [0]        "+"[unassigned] [0]        A [0]                           
                   |                                       |                             
          "1"[unassigned] [0]                     "2"[unassigned] [0]                    
    
        `));
      });
    });
  });

  describe("rule name part with nested continuations", () => {
    const bnf = `
  
      S ::= T... "." ;
      
      T ::= A (\`"+" A)+ ;
      
      A ::= . "+" .
      
          | .
                   
          ;
                 
    `;

    describe("content with four significant tokens", () => {
      const content = "1 + 2 .";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                         S [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     T [0]                            "."[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
                 A [0]        "+"[unassigned] [0]        A [0]                           
                   |                                       |                             
          "1"[unassigned] [0]                     "2"[unassigned] [0]                    
    
        `));
      });
    });
  });
});
