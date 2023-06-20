"use strict";

const bnf = `

        expression  ::=  term... "." ;

              term  ::=  "1" "+" "2" "/" term       (3)

                      |  "1" "+" term               (0)

                      |  "2" "/" "3"                (1)

                      |  "3"                        (2)

                      ;
      
`;

export default bnf;
