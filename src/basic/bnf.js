"use strict";

const bnf = `
      
      expression ::= term "." ;
    
      term       ::= /\\d+/ term~term* ;
      
      term~term  ::= "+" term (2) ;
      
`;

export default bnf;
