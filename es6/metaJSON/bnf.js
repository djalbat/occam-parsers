'use strict';

const bnf = `


    document          ::=  ( metaJSON error* ) | error+ ;


    metaJSON          ::=  "{" ( ( repositoryPair ( "," dependenciesPair )? ) | ( dependenciesPair "," repositoryPair ) ) "}" ;


    dependenciesPair  ::=  "\\"dependencies\\"" ":" dependencies ;
    
    
    repositoryPair    ::=  "\\"repository\\"" ":" repository ;


    dependencies      ::=  "[" (dependency ( "," dependency )*)? "]" ;


    dependency        ::=  [string-literal] ;


    repository        ::=  [string-literal] ;


    error             ::=  . ;


`;

module.exports = bnf;
