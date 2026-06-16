"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Choice of parts", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a choice of parts part with two terminal parts", () => {
    const bnf = `
    
      S ::= ( "a" | "b" ) ;
    
    `;

    describe("content with one significant token", () => {
      const content = "a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                 S [0]       
                   |         
          "a"[unassigned] [0]
    
        `));
      });
    });

    describe("content with one significant token", () => {
      const content = "b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                 S [0]       
                   |         
          "b"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a choice of parts part with a terminal part and a rule part", () => {
    const bnf = `
    
      S ::= ( A | "b" ) ;
    
      A ::= "a" ;
    
    `;

    describe("content with one significant token", () => {
      const content = "a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                 S [0]       
                   |         
                 A [0]       
                   |         
          "a"[unassigned] [0]
    
        `));
      });
    });

    describe("content with one significant token", () => {
      const content = "b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                 S [0]       
                   |         
          "b"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a terminal part follwed by a choice of parts part with two terminal parts", () => {
    const bnf = `
    
      S ::= . ( "a" | "b" ) ;
    
    `;

    describe("content with two significant token", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "a"[unassigned] [0]
    
        `));
      });
    });

    describe("content with two significant token", () => {
      const content = "a b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a choice of parts part with two terminal parts followed by a terminal part", () => {
    const bnf = `
    
      S ::= ( "a" | "b" ) . ;
    
    `;

    describe("content with two significant token", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "a"[unassigned] [0]
    
        `));
      });
    });

    describe("content with two significant token", () => {
      const content = "b b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "b"[unassigned] [0] "b"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a choice of parts part with a terminal part and a nested choice of parts part", () => {
    const bnf = `
    
      S ::= ( "a" | ( "b" | "c" ) ) ;
    
    `;

    describe("content with one significant token", () => {
      const content = "a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                 S [0]       
                   |         
          "a"[unassigned] [0]
    
        `));
      });
    });

    describe("content with one significant token", () => {
      const content = "b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                 S [0]       
                   |         
          "b"[unassigned] [0]
    
        `));
      });
    });

    describe("content with one significant token", () => {
      const content = "c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                 S [0]       
                   |         
          "c"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("calling ahead from a choice of parts part with two terminal parts to a terminal part", () => {
    const bnf = `
    
      S ::= A... . ;
      
      A ::= ( . | . ) ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "a"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead from a choice of parts part with one terminal part and one optional part through a terminal part to an optional part", () => {
    const bnf = `
    
      S ::= A... . ;
      
      A ::= ( . | .? ) . ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "a"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead from a choice of parts part with one terminal part and zero or more parts part through a terminal part to a one ore more parts part", () => {
    const bnf = `
    
      S ::= A... .+ ;
      
      A ::= ( . | .* ) . ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "a"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                            
                                                    S [0]                                
                                                      |                                  
                             ---------------------------------------------------         
                             |                             |                   |         
                           A [0]                  "a"[unassigned] [0] "a"[unassigned] [0]
                             |                                                           
                   ---------------------                                                 
                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("calling ahead from a choice of parts part with one terminal part and zero or more parts part through a terminal part to a one ore more parts part", () => {
    const bnf = `
    
      S ::= A... .+ ;
      
      A ::= ( . | .* ) . ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "a"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                            
                                                    S [0]                                
                                                      |                                  
                             ---------------------------------------------------         
                             |                             |                   |         
                           A [0]                  "a"[unassigned] [0] "a"[unassigned] [0]
                             |                                                           
                   ---------------------                                                 
                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("calling ahead from a choice of parts part with one rule name part and one terminal part through a terminal part to a terminal part.", () => {
    const bnf = `
    
      S ::= ( A... | "b" ) "c" ;
      
      A ::= "a" ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                            
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "c"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead from a choice of parts part with one rule name part and one terminal part through a choice of parts part to a terminal part.", () => {
    const bnf = `
    
      S ::= ( A... | "b" ) "c" ;
      
      A ::= ( "a" | "b" ) ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                            
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "c"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("calling ahead from a choice of parts part with one rule name part and one terminal part through a choice of parts part and an optional part to a terminal part.", () => {
    const bnf = `
    
      S ::= ( A... | . ) . ;
      
      A ::= ( .? | . ) .? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                      
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "a"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                                
                                          S [0]                      
                                            |                        
                             -------------------------------         
                             |                             |         
                           A [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });
});
