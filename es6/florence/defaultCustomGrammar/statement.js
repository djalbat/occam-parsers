'use strict';

const statementDefaultCustomGrammar = `

     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   expression
                                            
                                            ;



     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;

     expression                           ::=   term ;

`;

module.exports = statementDefaultCustomGrammar;
