"use strict";

const bnf = `


    document  ::=  string+ error*
     
                |  error
                     
                ;


    string    ::=  <NO_WHITESPACE>[unassigned] <END_OF_LINE> ;


    error.    ::=  . ;

`;

export default bnf;
