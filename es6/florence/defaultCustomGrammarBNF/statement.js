'use strict';

const statementDefaultCustomGrammarBNF = `


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   nonsense

                                            ;


`;

module.exports = statementDefaultCustomGrammarBNF;
