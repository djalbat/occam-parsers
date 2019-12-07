'use strict';

const statementDefaultBNF = `statement                           ::=   typeAssertion 
                                                  
                                       |   equality 
                                              
                                       |   nonsense

                                       ;


typeAssertion                        ::=   expression ":" typeName ;

equality                             ::=   expression "=" expression ;`;

module.exports = statementDefaultBNF;
