"use strict";

const bnf = `

    S ::= BB ;
   
   BB ::= "b"* ;

`;

export default bnf;

/*

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
