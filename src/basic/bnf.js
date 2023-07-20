"use strict";

const bnf = `
      
      expression ::= term... "." ;
    
      term       ::= "1" term~term ;
      
      term~term  ::= "+" "2" "."
      
                   | "+" "2" 
                   
                   ;
      
`;

export default bnf;
