"use strict";

const bnf = `

        expression  ::=  term... "." ;

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
      
`;

export default bnf;
