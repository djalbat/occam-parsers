'use strict';

const metastatement = `


     proofAssertion                       ::=   context "⊢" judgement ;
     
     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

     judgement                            ::=   reference "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion 
           
                                            |   contextDefinition 
           
                                            |   subproof 
                                            
                                            |   metavariable 

                                            |   nonsense 

                                            ;

      
`;

const statement = `


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;

     expression                           ::=   term ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   nonsense

                                            ;


`;

const term = `


     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms ;



     term                                 ::=   compoundTerm 
     
                                            |   name
                                            
                                            ;


`;

const customGrammarDefaultBNFMap = {
  metastatement: metastatement,
  statement: statement,
  term: term
};

module.exports = customGrammarDefaultBNFMap;
