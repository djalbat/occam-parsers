"use strict";

const { testUtilities } = require("../lib"); ///

const { compareParseTreeStrings, parseTreeStringFromEntriesBnfAndContent } = testUtilities;

describe("Rewriting", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a choice of parts part with two terminal parts", () => {
    const bnf = `
    
      step          ::=  ( statement ... "." ) ;
    
      statement     ::=  "¬"<NO_WHITESPACE>metaArgument (10)

                      |  "(" (metaArgument) ")" 
                                                        
                      |  equality
                                                        
                      |  metavariable
      
                      ;
      
      equality      ::=  term ( "=" | "!=" ) \` term ;
      
      metaArgument  ::=  statement ( ) ;
      
      argument      ::=  term ( ) ;
      
      term          ::=  "(" (argument) ")"
      
                      |  variable
                                             
                      ;
      
      metavariable  ::=  /[A-Z]/ ;
      
      variable      ::=  /[a-z]/ ;

    `;

    describe("content with several tokens", () => {
      const content = "¬(x=y).";

      it("results in the requisite parse tree" , () => {
        const parseTreeString = parseTreeStringFromEntriesBnfAndContent(entries, bnf, content);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
    
                                                                                                      step [0]                                                       
                                                                                                          |                                                          
                                                         ---------------------------------------------------------------------------------------------------         
                                                         |                                                                                                 |         
                                                statement [0] (10)                                                                                "."[unassigned] [0]
                                                         |                                                                                                           
                   -----------------------------------------------------------------------------                                                                     
                   |                 |                                                         |                                                                     
          "¬"[unassigned] [0] <NO_WHITESPACE>                                        metaArgument [0] ( )                                                            
                                                                                               |                                                                     
                                                                                         statement [0]                                                               
                                                                                               |                                                                     
                                                       ---------------------------------------------------------------------------------                             
                                                       |                                       |                                       |                             
                                              "("[unassigned] [0]                   metaArgument [0] (( ))                    ")"[unassigned] [0]                    
                                                                                               |                                                                     
                                                                                         statement [0]                                                               
                                                                                               |                                                                     
                                                                                         equality [0]                                                                
                                                                                               |                                                                     
                                                                           -----------------------------------------                                                 
                                                                           |                   |                   |                                                 
                                                                       term [0]       "="[unassigned] [0]      term [0]                                              
                                                                           |                                       |                                                 
                                                                     variable [0]                            variable [0]                                            
                                                                           |                                       |                                                 
                                                                  "x"[unassigned] [0]                     "y"[unassigned] [0]
          
        `));
      });
    });
  });
});
