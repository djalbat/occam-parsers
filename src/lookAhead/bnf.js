"use strict";

const bnf = `

  ABC  ::=  AAB! BC ;

  AAB  ::=  "a" "b"+ ;

   BC  ::=  "b" "c" ;
   
`;

export default bnf;