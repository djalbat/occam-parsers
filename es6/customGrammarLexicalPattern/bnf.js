"use strict";

const bnf = `


    document       ::=  lexicalPattern ( verticalSpace | error )* | ( verticalSpace | error )+ ;


    lexicalPattern ::=  [unassigned]+ ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


    error          ::=  . ;


`;

export default bnf;
