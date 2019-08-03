'use strict';

const bnf = `


    document        ::=  ( metaJSON error* ) | error+ ;


    metaJSON        ::=  "{" ( ( repository ( "," dependencies )? ) | ( dependencies "," repository ) ) "}" ;


    repository      ::=  "\\"repository\\"" ":" [string-literal] ;


    dependencies    ::=  "\\"dependencies\\"" ":" "[" ([string-literal] ( "," [string-literal] )*)?  "]" ;


    error           ::=  . ;


`;

module.exports = bnf;
