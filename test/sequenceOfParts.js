"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Sequence of parts", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a sequence of parts part with two terminal parts", () => {
    const bnf = `
    
      S ::= ( . . ) ;
    
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
          "a"[unassigned] [0] "a"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a sequence of parts part with a terminal part followed by an optional part", () => {
    const bnf = `
    
      S ::= ( . .? ) ;
    
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

    describe("content with two significant tokens", () => {
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
  });

  describe("a sequence of parts part with an optional part follweed by a terminal part", () => {
    const bnf = `
    
      S ::= ( .? . ) ;
    
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
          "a"[unassigned] [0] "a"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a terminal part followed by a sequence of parts part with two terminal parts", () => {
    const bnf = `
    
      S ::= . ( . . ) ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                     S [0]                           
                                       |                             
                   -----------------------------------------         
                   |                   |                   |         
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a sequence of parts part with two terminal parts followed by a terminal part", () => {
    const bnf = `
    
      S ::= ( . . ) . ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                     S [0]                           
                                       |                             
                   -----------------------------------------         
                   |                   |                   |         
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a sequence of parts part with a terminal part and a rule name part", () => {
    const bnf = `
    
      S ::= ( . B ) ;
    
      B ::= . ;
    
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
          "a"[unassigned] [0]        B [0]       
                                       |         
                              "a"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("a sequence of parts part with a terminal part and a nested seuqence of parts", () => {
    const bnf = `
    
      S ::= ( . ( . . ) ) ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                     S [0]                           
                                       |                             
                   -----------------------------------------         
                   |                   |                   |         
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]
    
        `));
      });
    });
  });

  describe("calling ahead from a sequence of parts part with two terminal parts to a terminal part", () => {
    const bnf = `
    
      S ::= A... . ;
      
      A ::= ( . . ) ;
    
    `;

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

  describe("calling ahead from a sequence of parts part with a terminal part followed by an optional part to a terminal part", () => {
    const bnf = `
    
      S ::= A... . ;
      
      A ::= ( . .? ) ;
    
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

  describe("calling ahead from a sequence of parts part with a terminal part followed by an optional part to an optional part", () => {
    const bnf = `
    
      S ::= A... .? ;
      
      A ::= ( . .? ) ;
    
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

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                           S [0]                 
                             |                   
                           A [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "a"[unassigned] [0]
      
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

  describe("calling ahead from a terminal part through a sequence of parts part with a terminal part and a rule name part to an optional part", () => {
    const bnf = `
    
      S ::= B... "b"? ;
      
      B ::= ( . A ) ;
    
      A ::= .+ ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                                                    
                                S [0]                                
                                  |                                  
                                B [0]                                
                                  |                                  
                   -------------------------------                   
                   |                             |                   
          "a"[unassigned] [0]                  A [0]                 
                                                 |                   
                                       ---------------------         
                                       |                   |         
                              "a"[unassigned] [0] "b"[unassigned] [0]
      
        `));
      });
    });

    describe("content with four significant tokens", () => {
      const content = "a a a b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                                                    
                                     S [0]                                               
                                       |                                                 
                                     B [0]                                               
                                       |                                                 
                   -----------------------------------------                             
                   |                                       |                             
          "a"[unassigned] [0]                            A [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                   |                   |         
                              "a"[unassigned] [0] "a"[unassigned] [0] "b"[unassigned] [0]

        `));
      });
    });
  });

  describe("calling ahead from a terminal part to a terminal part in a sequence of parts", () => {
    const bnf = `
    
      S ::= ( A... . ) ;
    
      A ::= . ;
    
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

  describe("calling ahead from a terminal part through an optional part to a terminal part in a sequence of parts", () => {
    const bnf = `
    
      S ::= ( A... . ) ;
    
      A ::= . .? ;
    
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

  describe("calling ahead from a terminal part through an optional part to an optional part in a sequence of parts", () => {
    const bnf = `
    
      S ::= ( A... .? ) ;
    
      A ::= . .? ;
    
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

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                                                    
                           S [0]                 
                             |                   
                           A [0]                 
                             |                   
                   ---------------------         
                   |                   |         
          "a"[unassigned] [0] "a"[unassigned] [0]
      
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
