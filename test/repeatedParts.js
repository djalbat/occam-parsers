"use strict";

const { testUtilities } = require("../lib/index"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe.skip("Repeated parts", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a terminal part", () => {
    const bnf = `
    
      S ::= "a" ;
    
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
  });

  describe("an optional part", () => {
    const bnf = `
    
      S ::= "a" .? ;
    
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

  describe("a zero or more parts part", () => {
    const bnf = `
    
      S ::= "a" .* ;
    
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

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                     S [0]                           
                                       |                             
                   -----------------------------------------         
                   |                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0] "c"[unassigned] [0]
      
        `));
      });
    });
  });

  describe("a one or more parts part", () => {
    const bnf = `
    
      S ::= "a" .+ ;
    
    `;

    describe("content with two significant tokens", () => {
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

    describe("content with three significant tokens", () => {
      const content = "a b c";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                     S [0]                           
                                       |                             
                   -----------------------------------------         
                   |                   |                   |         
          "a"[unassigned] [0] "b"[unassigned] [0] "c"[unassigned] [0]
      
        `));
      });
    });
  });

  describe("contiunation to a terminal part", () => {
    const bnf = `
    
      S ::= A... "b" ;
      
      A ::= "a" ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a b";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                   ---------------------         
                   |                   |         
                 A [0]        "b"[unassigned] [0]
                   |                             
          "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("contiunation to an optional part", () => {
    const bnf = `
    
      S ::= A... "a"? ;
      
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

  describe("contiunation to a zero or more parts part", () => {
    const bnf = `
    
      S ::= A... "a"* ;
      
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
                   -----------------------------------------         
                   |                   |                   |         
                 A [0]        "a"[unassigned] [0] "a"[unassigned] [0]
                   |                                                 
          "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("contiunation to a one or more parts part", () => {
    const bnf = `
    
      S ::= A... "a"+ ;
      
      A ::= "a" ;
    
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
                   -----------------------------------------         
                   |                   |                   |         
                 A [0]        "a"[unassigned] [0] "a"[unassigned] [0]
                   |                                                 
          "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("contiunation from an optional part to a terminal part", () => {
    const bnf = `
    
      S ::= A... "a" ;
      
      A ::= "a"? ;
    
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

  describe("contiunation from a zero or more parts part to a terminal part", () => {
    const bnf = `
    
      S ::= A... "a" ;
      
      A ::= "a"* ;
    
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

  describe("contiunation from a one or more parts part to a terminal part", () => {
    const bnf = `
    
      S ::= A... "a" ;
      
      A ::= "a"+ ;
    
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

  describe("nested contiunation through an optional part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A . ;
    
      A ::= "a" .? ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("nested contiunation through a zero or more parts part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A . ;
    
      A ::= "a" .* ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("nested contiunation through a one or more parts part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A . ;
    
      A ::= "a" .+ ;
    
    `;

    describe("content with four significant tokens", () => {
      const content = "a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("nested contiunation through an optional part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A . ;
    
      A ::= "a" .? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("nested contiunation through a zero or more parts part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A . ;
    
      A ::= "a" .* ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("nested contiunation through a one or more parts part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A . ;
    
      A ::= "a" .+ ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                          S [0]                      
                                            |                        
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("nested contiunation through an optional part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A . ;
    
      A ::= "a" .? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("nested contiunation through a zero or more parts part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A . ;
    
      A ::= "a" .* ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("nested contiunation through a one or more parts part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A . ;
    
      A ::= "a" .+ ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                          S [0]                      
                                            |                        
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("nested contiunation through an optional part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A . ;
    
      A ::= "a" .? ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
        
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("nested contiunation through a zero or more parts part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A . ;
    
      A ::= "a" .* ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("nested contiunation through a one or more parts part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A . ;
    
      A ::= "a" .+ ;
    
    `;

    describe("content with four significant tokens", () => {
      const content = "a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a terminal part through a terminal part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A... . ;
    
      A ::= "a" ;
    
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
                           B [0]                  "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a terminal part through a terminal part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A... . ;
    
      A ::= "a" ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                 
                             |                   
                           B [0]                 
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
                           B [0]                  "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a terminal part through a terminal part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A... . ;
    
      A ::= "a" ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                 
                             |                   
                           B [0]                 
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                           B [0]                  "a"[unassigned] [0] "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a terminal part through a terminal part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A... . ;
    
      A ::= "a" ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                           B [0]                  "a"[unassigned] [0] "a"[unassigned] [0]
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

  describe("doubly nested contiunation from an optional part through a terminal part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A... . ;
    
      A ::= "a" "a"? ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("doubly nested contiunation from an optional part through a terminal part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A... . ;
    
      A ::= "a" "a"? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("doubly nested contiunation from an optional part through a terminal part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A... . ;
    
      A ::= "a" "a"? ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("doubly nested contiunation from an optional part through a terminal part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A... . ;
    
      A ::= "a" "a"? ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

    describe("content with five significant tokens", () => {
      const content = "a a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                                                                      S [0]                                  
                                                                        |                                    
                                            --------------------------------------------------------         
                                            |                                  |                   |         
                                          B [0]                       "a"[unassigned] [0] "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a zero or more parts part through a terminal part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A... . ;
    
      A ::= "a" "a"* ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a zero or more parts part through a terminal part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A... . ;
    
      A ::= "a" "a"* ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a zero or more parts part through a terminal part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A... . ;
    
      A ::= "a" "a"* ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a zero or more parts part through a terminal part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A... . ;
    
      A ::= "a" "a"* ;
    
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

    describe("content with five significant tokens", () => {
      const content = "a a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                            
                                                                             S [0]                           
                                                                               |                             
                                                           -----------------------------------------         
                                                           |                                       |         
                                                         B [0]                            "a"[unassigned] [0]
                                                           |                                                 
                                       -----------------------------------------                             
                                       |                                       |                             
                                     A [0]                            "a"[unassigned] [0]                    
                                       |                                                                     
                   -----------------------------------------                                                 
                   |                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a one or more parts part through a terminal part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A... . ;
    
      A ::= "a" "a"+ ;
    
    `;

    describe("content with four significant tokens", () => {
      const content = "a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

    describe("content with five significant tokens", () => {
      const content = "a a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                                             S [0]                           
                                                                               |                             
                                                           -----------------------------------------         
                                                           |                                       |         
                                                         B [0]                            "a"[unassigned] [0]
                                                           |                                                 
                                       -----------------------------------------                             
                                       |                                       |                             
                                     A [0]                            "a"[unassigned] [0]                    
                                       |                                                                     
                   -----------------------------------------                                                 
                   |                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a one or more parts part through a terminal part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A... . ;
    
      A ::= "a" "a"+ ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                          S [0]                      
                                            |                        
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a one or more parts part through a terminal part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A... . ;
    
      A ::= "a" "a"+ ;
    
    `;

    describe("content with three significant tokens", () => {
      const content = "a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                          S [0]                      
                                            |                        
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a one or more parts part through a terminal part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A... . ;
    
      A ::= "a" "a"+ ;
    
    `;

    describe("content with four significant tokens", () => {
      const content = "a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                            S [0]                        
                                                              |                          
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

    describe("content with five significant tokens", () => {
      const content = "a a a a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                            
                                                                             S [0]                           
                                                                               |                             
                                                           -----------------------------------------         
                                                           |                                       |         
                                                         B [0]                            "a"[unassigned] [0]
                                                           |                                                 
                                       -----------------------------------------                             
                                       |                                       |                             
                                     A [0]                            "a"[unassigned] [0]                    
                                       |                                                                     
                   -----------------------------------------                                                 
                   |                   |                   |                                                 
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                                        
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a terminal part through an optional part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A... .? ;
    
      A ::= "a" ;
    
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
                 B [0]        "a"[unassigned] [0]
                   |                             
                 A [0]                           
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
                           B [0]                  "a"[unassigned] [0]
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

  describe("doubly nested contiunation from an optional part through a zero or more parts part to a terminal part", () => {
    const bnf = `
        
      S ::= B... "a" ;
      
      B ::= A... .* ;
    
      A ::= "a" "a"? ;
    
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
                 B [0]        "a"[unassigned] [0]
                   |                             
                 A [0]                           
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                           A [0]                                     
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
                                            ------------------------------------         
                                            |                                  |         
                                          B [0]                       "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a zero or more part through a one or more parts part to an optional part", () => {
    const bnf = `
        
      S ::= B... "a"? ;
      
      B ::= A... .+ ;
    
      A ::= "a" "a"* ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                           S [0]                 
                             |                   
                           B [0]                 
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
                                          B [0]                      
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
                                                         B [0]                           
                                                           |                             
                                       -----------------------------------------         
                                       |                                       |         
                                     A [0]                            "a"[unassigned] [0]
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });

  describe("doubly nested contiunation from a terminal part through an optional part to a zero or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"* ;
      
      B ::= A... .? ;
    
      A ::= "a" ;
    
    `;

    describe("content with two significant tokens", () => {
      const content = "a a";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                           S [0]                 
                             |                   
                           B [0]                 
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                   ---------------------                             
                   |                   |                             
                 A [0]        "a"[unassigned] [0]                    
                   |                                                 
          "a"[unassigned] [0]                                        
      
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
                           B [0]                  "a"[unassigned] [0] "a"[unassigned] [0]
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

  describe("doubly nested contiunation from a one or more parts part through a zero or more parts part to a one or more parts part", () => {
    const bnf = `
        
      S ::= B... "a"+ ;
      
      B ::= A... .* ;
    
      A ::= "a"+ ;
    
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
                 B [0]        "a"[unassigned] [0]
                   |                             
                 A [0]                           
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
                           B [0]                  "a"[unassigned] [0]
                             |                                       
                           A [0]                                     
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
                                       -----------------------------------------         
                                       |                                       |         
                                     B [0]                            "a"[unassigned] [0]
                                       |                                                 
                                     A [0]                                               
                                       |                                                 
                   -----------------------------------------                             
                   |                   |                   |                             
          "a"[unassigned] [0] "a"[unassigned] [0] "a"[unassigned] [0]                    
      
        `));
      });
    });
  });
});
