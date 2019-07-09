'use strict';

const termDefaultCustomGrammarBNF = `


     term                                 ::=   name<NO_WHITESPACE>parenthesisedTerms

                                            |   name
                                             
                                            ;
                                            
                                            
`;

module.exports = termDefaultCustomGrammarBNF;
