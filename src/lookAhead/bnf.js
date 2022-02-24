"use strict";

const bnf = `

  ABC  ::=  AAB! BC ;

  AAB  ::=  "a" "b" | "a" ;

   BC  ::=  "b" "c" ;
  
`;

export default bnf;