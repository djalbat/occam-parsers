"use strict";

const bnf = `

  ABC  ::=  AAB! ;

  AAB  ::=  "a" "b"+ "b" "c" ;
   
`;

export default bnf;