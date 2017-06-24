'use strict';

const termDefaultCustomGrammar = `


     term                                 ::=   compoundTerm 
     
                                            |   variable
                                            
                                            ;



     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms? ;



     variable                             ::=   variableName ;
     
     

`;

module.exports = termDefaultCustomGrammar;
