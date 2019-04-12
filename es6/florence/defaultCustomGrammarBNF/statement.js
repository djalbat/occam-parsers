'use strict';

const statementDefaultCustomGrammarBNF = `


     statement                            ::=   typeAssertion qualification? <END_OF_LINE> 
                                                  
                                            |   equality qualification? <END_OF_LINE> 
                                                  
                                            |   nonsense qualification? <END_OF_LINE>

                                            ;


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;


`;

module.exports = statementDefaultCustomGrammarBNF;
