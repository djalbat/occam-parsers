"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, nodeFromEntriesBnfAndContent, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Precedence", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("definitions with direct precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . "+" T (1) 
    
          | . "*" T (2)
    
          | . ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

      it("results in a non-null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                             T [0] (1)                                                        "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "+"[unassigned] [0]                          T [0] (2)                                             
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "*"[unassigned] [0]        T [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]                                                                                                              
    
        `));
      });
    });

    describe("incorrectly nested expressions", () => {
      const content = "1 * 2 + 3.";

      it("results in null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe("definitions with indirect precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . "+" A (1) 
    
          | . "*" A (2)
    
          | . ;
    
      A ::= T ( ) ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

      it("results in a non-null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                             T [0] (1)                                                        "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "+"[unassigned] [0]                          A [0] ( )                                             
                                                                               |                                                 
                                                                           T [0] (2)                                             
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "*"[unassigned] [0]      A [0] ( )                         
                                                                                                   |                             
                                                                                                 T [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]                    
    
        `));
      });
    });

    describe("incorrectly nested expressions", () => {
      const content = "1 * 2 + 3.";

      it("results in null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe.skip("part choices with direct precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . ( "+" (1) | "*" (2) ) T 
    
          | . ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

      it("results in a non-null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it.skip("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                            
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                             T [0] (1)                                                        "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "+"[unassigned] [0]                          T [0] (2)                                             
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "*"[unassigned] [0]        T [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]                    
    
        `));
      });
    });

    describe("incorrectly nested expressions", () => {
      const content = "1 * 2 + 3.";

      it("results in null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });

  describe.skip("part choices with indirect precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . ( "+" (1) | "*" (2) ) A 
    
          | . ;
    
      A ::= T ( ) ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

      it("results in a non-null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNotNull(node);
      });

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                             T [0] (1)                                                        "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
          "1"[unassigned] [0] "+"[unassigned] [0]                          A [0] ( )                                             
                                                                               |                                                 
                                                                           T [0] (2)                                             
                                                                               |                                                 
                                                           -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "2"[unassigned] [0] "*"[unassigned] [0]      A [0] ( )                         
                                                                                                   |                             
                                                                                                 T [0]                           
                                                                                                   |                             
                                                                                          "3"[unassigned] [0]
                                                                                                              
        `));
      });
    });

    describe("incorrectly nested expressions", () => {
      const content = "1 * 2 + 3.";

      it("results in null node" , () => {
        const node = nodeFromEntriesBnfAndContent(entries, bnf, content);

        assert.isNull(node);
      });
    });
  });
});
