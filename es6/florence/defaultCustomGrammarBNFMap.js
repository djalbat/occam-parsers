'use strict';

const metastatement = `


     proofAssertion                       ::=   context "⊢" judgement ;
     
     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

     judgement                            ::=   reference "::" metastatementBody ;

     subproof                             ::=   supposition "..." metastatementBody ;

     supposition                          ::=   "[" metastatementBody "]" ;



     metastatementBody                    ::=   ( proofAssertion | contextDefinition | subproof | metavariable ) ; 



     metastatement                        ::=   proofAssertion qualification? <END_OF_LINE> 
           
                                            |   contextDefinition qualification? <END_OF_LINE> 
           
                                            |   subproof qualification? <END_OF_LINE> 
                                            
                                            |   metavariable qualification? <END_OF_LINE> 

                                            |   nonsense qualification? <END_OF_LINE> 

                                            ;

      
`;

const statement = `


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;

     expression                           ::=   term ;



     statement                            ::=   typeAssertion qualification? <END_OF_LINE> 
                                                  
                                            |   equality qualification? <END_OF_LINE> 
                                                  
                                            |   metastatement qualification? <END_OF_LINE>
     
                                            |   nonsense qualification? <END_OF_LINE>

                                            ;


`;

const term = `


     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms ;



     term                                 ::=   compoundTerm 
     
                                            |   name
                                            
                                            ;


`;

const defaultCustomGrammarBNFMap = {
  metastatement: metastatement,
  statement: statement,
  term: term
};

module.exports = defaultCustomGrammarBNFMap;
