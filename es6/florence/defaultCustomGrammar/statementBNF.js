'use strict';

const statementBNF = `


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   nonsense

                                            ;


`;

module.exports = statementBNF;