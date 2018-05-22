'use strict';

const bnf = `


    document      ::= metaJSON | error+ ;

    metaJSON      ::= "{" (
     
                           ( repository ( "," dependencies )? ) 
                           
                         | ( ( dependencies "," )? repository )
                            
                      ) "}" ;

    repository    ::= "\\"repository\\"" ":" [stringLiteral] ;

    dependencies  ::= "\\"dependencies\\"" ":" "[" (dependency ( "," dependency )*)?  "]" ;

    dependency    ::= [stringLiteral] ;

    error         ::= . ;


`;

module.exports = bnf;
