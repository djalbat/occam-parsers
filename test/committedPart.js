"use strict";

const { testUtilities } = require("../lib"); ///

const { compareParseTreeStrings, nodeFromEntriesBnfAndContent, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Committed part", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("committed terminal part", () => {
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
                   ------------------------------------------                             
                   |                    |                   |                             
                 A [0]        \`"+"[unassigned] [0]        A [0]                           
                   |                                        |                             
          "1"[unassigned] [0]                      "2"[unassigned] [0]                    
    
        `));
      });
    });
  });

  describe("nested committed terminal part", () => {
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
                   ------------------------------------------                             
                   |                    |                   |                             
                 A [0]        \`"+"[unassigned] [0]        A [0]                           
                   |                                        |                             
          "1"[unassigned] [0]                      "2"[unassigned] [0]                    
    
        `));
      });
    });
  });

  describe("singular committed rule name part", () => {
    const bnf = `
    
      S ::= A...  "." ;
      
      A ::= \`B ;
      
      B ::= "a"
      
          | "a" "b"
      
          ;
          
    `;

    describe("const with three significant tokens", () => {
      const content = "a b .";

      it("results in a null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe("non-singluar committed rule name part", () => {
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

  describe("committed terminal part in intermediate rule", () => {
    const bnf = `
  
      S  ::= T... "." ;
      
      T  ::= T_ T~* ( ) ;
      
      T_ ::= . ;
      
      T~ ::= \`"+" T  (-98) ;
                 
    `;

    describe("content with four significant tokens", () => {
      const content = "x + x .";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                  
                                                        S [0]                             
                                                          |                               
                                   ----------------------------------------------         
                                   |                                            |         
                               T [0] ( )                               "."[unassigned] [0]
                                   |                                                      
                   --------------------------------                                       
                   |                              |                                       
                T_ [0]                      T~ [0] (-98)                                  
                   |                              |                                       
          "x"[unassigned] [0]           ---------------------                             
                                        |                   |                             
                              \`"+"[unassigned] [0]      T [0] ( )                         
                                                            |                             
                                                         T_ [0]                           
                                                            |                             
                                                   "x"[unassigned] [0]
                                                                       
        `));
      });
    });
  });
});
