"use strict";

const bnf = `

  expression  ::=  term... "." ;

        term  ::=  "1"
        
                   (
        
                     "+"                       (0)
                     
                     |

                     ( "+" "2" "/" )           (3)
                     
                   ) 
                   
                   term

                |  "2" "/" "3"                  (1)

                |  "3"                          (4)

                ;
      
`;

export default bnf;

/*

        term  ::=  "1"

                   (

                     ( "+" "2" "/" )          (3)

                     |

                     "+"                      (0)

                   )

                   term

                |  "2" "/" "3"                (1)

                |  "3"                        (2)

                ;


    expression ::= term... "." ;

    term       ::= term_ term~* ;

    number     ::= /\d+/ ;

    term_      ::= "(" term ")"

                 | number

                 ;

    term~term  ::= ( "/" (1) | "*" (2) | "+" (3) | "-" (4) ) term ;

    term~      ::= term~term ;
*/