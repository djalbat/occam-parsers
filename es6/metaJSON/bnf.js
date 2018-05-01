'use strict';

const bnf = `


    document         ::= metaJSON | error+ ;

    metaJSON         ::= "{" 
    
                            "\\"dependencies\\"" ":" 
                            
                            "[" 
                            
                              dependencies? 
                              
                            "]" 
                            
                          "}" ;

    dependencies     ::= dependency ( "," dependency )* ;

    dependency       ::= [string] ;

    error            ::= . ;


`;

module.exports = bnf;
