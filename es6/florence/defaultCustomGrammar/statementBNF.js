'use strict';

const statementBNF = `


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;

     expression                           ::=   term ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   nonsense

                                            ;


`;

module.exports = statementBNF;