"use strict";

const { testUtilities } = require("../lib"); ///

const { compareParseTreeStrings, nodeFromEntriesBnfAndContent, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe.skip("Precedence", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("isolated part", () => {
    const bnf = `
    
      S ::= T... "." ;
          
      A ::= . ;
      
      B ::= . ;
      
      T ::= . "(" (T) ")" (3)
      
          | A "u" B (2) 
          
          ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "f(A u B).";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
        
                                                                                                        S [0]                                          
                                                                                                          |                                            
                                                                       -----------------------------------------------------------------------         
                                                                       |                                                                     |         
                                                                   T [0] (3)                                                        "."[unassigned] [0]
                                                                       |                                                                               
                     -----------------------------------------------------------------------------------------------------                             
                     |                   |                                       |                                       |                             
            "f"[unassigned] [0] "("[unassigned] [0]                            T [0]                            ")"[unassigned] [0]                    
                                                                                 |                                                                     
                                                             -----------------------------------------                                                 
                                                             |                   |                   |                                                 
                                                           A [0]        "u"[unassigned] [0]        B [0]                                               
                                                             |                                       |                                                 
                                                    "A"[unassigned] [0]                     "B"[unassigned] [0]                                        
    
        `));
      });
    });
  });

  describe("left association", () => {
    const bnf = `
  
      S ::= E... "." ;
      
      E ::= T "+" T     (-100) ;
      
      T ::= . "+" .     (-100)
      
          | .  
          
          ;
        
    `;

    describe("correctly nested terms", () => {
      const content = "x + y + z.";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
        
                                                                                              S [0]                                
                                                                                                |                                  
                                                                       ---------------------------------------------------         
                                                                       |                                                 |         
                                                                 E [0] (-100)                                   "."[unassigned] [0]
                                                                       |                                                           
                                         -------------------------------------------------------------                             
                                         |                                       |                   |                             
                                   T [0] (-100)                         "+"[unassigned] [0]        T [0]                           
                                         |                                                           |                             
                     -----------------------------------------                              "z"[unassigned] [0]                    
                     |                   |                   |                                                                     
            "x"[unassigned] [0] "+"[unassigned] [0] "y"[unassigned] [0]
                                                                        
        `));
      });
    });
  });

  describe("right association", () => {
    const bnf = `
  
      S ::= E... "." ;
      
      E ::= T "+" T     (100) ;
      
      T ::= . "+" .     (100)
      
          | .  
          
          ;
        
    `;

    describe("correctly nested terms", () => {
      const content = "x + y + z.";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                              
                                                                                  S [0]                                          
                                                                                    |                                            
                                                 -----------------------------------------------------------------------         
                                                 |                                                                     |         
                                            E [0] (100)                                                       "."[unassigned] [0]
                                                 |                                                                               
                   -------------------------------------------------------------                                                 
                   |                   |                                       |                                                 
                 T [0]        "+"[unassigned] [0]                         T [0] (100)                                            
                   |                                                           |                                                 
          "x"[unassigned] [0]                              -----------------------------------------                             
                                                           |                   |                   |                             
                                                  "y"[unassigned] [0] "+"[unassigned] [0] "z"[unassigned] [0]                    
                                                                    
      `));
      });
    });
  });

  describe("definitions with direct precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . "+" T (1) 
    
          | . "*" T (2)
    
          | . ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

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

  describe("part choices with direct precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . ( "+" (1) | "*" (2) ) T 
    
          | . ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

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

  describe("part choices with indirect precedence", () => {
    const bnf = `
    
      S ::= T... "." ;
    
      T ::= . ( "+" (1) | "*" (2) ) A 
    
          | . ;
    
      A ::= T ( ) ;
    
    `;

    describe("correctly nested expressions", () => {
      const content = "1 + 2 * 3.";

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
