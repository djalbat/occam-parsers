'use strict';

const statementDefaultCustomGrammarBNF = `


     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   nonsense

                                            ;


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;


`;

module.exports = statementDefaultCustomGrammarBNF;
