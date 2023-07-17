"use strict";

const bnf = `


      
     expression ::= term ;

          term  ::=  "2" "/" term (4) 
                            
                  |  "2" "*" term (3) 
                            
                  |  "1" "+" term (2) 
                            
                  |  "1" "-" term (1) 
                            
                  |  number            
      
                  ;
                  
         number ::= /\\d+/ ;
                  
      
`;

export default bnf;
