"use strict";

const bnf = `

   S ::= AB... "b" ;
  
  AB ::= "a" "b"? 
  
       | "a"
       
       ; 
  
   
`;

export default bnf;

/*

        term  ::=  "1" "+" "2" "/" term   (4)

                |  "1" "+" term           (0)

                |  "2" "/" "3"            (1)

                |  "3"                    (3)

                ;


  expression  ::=  term... "." ;

        term  ::=  "1"

                   (

                     ( "+" "2" "/" )   (4)

                     |

                     "+"               (0)

                   )

                   term

                |  "2" "/" "3"         (1)

                |  "3"                 (3)

                ;

*/