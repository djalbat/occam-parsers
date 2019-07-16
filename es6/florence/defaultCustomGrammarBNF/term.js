'use strict';

const termDefaultCustomGrammarBNF = `


     term                                 ::=   [custom]<NO_WHITESPACE>parenthesisedTerms? 
     
                                            |   name
                                             
                                            ; 
                                            
                                            
`;

module.exports = termDefaultCustomGrammarBNF;
