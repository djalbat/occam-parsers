'use strict';

const termDefaultBNF = `


     term                                 ::=   [custom]<NO_WHITESPACE>parenthesisedTerms? 
     
                                            |   name
                                             
                                            ; 
                                            
                                            
`;

module.exports = termDefaultBNF;
