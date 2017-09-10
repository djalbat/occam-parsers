'use strict';

const termBNF = `


     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms ;



     term                                 ::=   compoundTerm 
     
                                            |   name
                                            
                                            ;


`;

module.exports = termBNF;