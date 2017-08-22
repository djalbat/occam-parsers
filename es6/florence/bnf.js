'use strict';

const bnf = `


     document                             ::=   ( rule | axiom | lemma | theorem | declaration | verticalSpace | error )+ ;
     
     
     
     rule                                 ::=   "Rule" parenthesisedLabels? <END_OF_LINE> ( premise | premises )? conclusion metaProof? ;

     axiom                                ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> ( statement | indicativeConditional ) ; 

     lemma                                ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( statement | indicativeConditional ) proof? ;

     theorem                              ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> ( statement | indicativeConditional ) proof? ;

     declaration                          ::=   "Types" typesDeclaration <END_OF_LINE>

                                            |   "Contexts" contextsDeclaration  <END_OF_LINE>

                                            |   "Variables" variablesDeclaration  <END_OF_LINE>

                                            |   "Constructors" constructorsDeclaration  <END_OF_LINE>

                                            |   "Abbreviations" abbreviationsDeclaration  <END_OF_LINE>

                                            |   "DependentTypes" dependentTypesDeclaration  <END_OF_LINE>

                                            |   "Metavariables" metavariablesDeclaration  <END_OF_LINE>

                                            |   "Type" typeDeclaration  <END_OF_LINE>

                                            |   "Context" contextDeclaration  <END_OF_LINE>

                                            |   "Variable" variableDeclaration  <END_OF_LINE>

                                            |   "Constructor" constructorDeclaration  <END_OF_LINE>

                                            |   "Abbreviation" abbreviationDeclaration  <END_OF_LINE>

                                            |   "DependentType" dependentTypeDeclaration  <END_OF_LINE>
                                            
                                            |   "Metavariable" metavariableDeclaration  <END_OF_LINE>

                                            ;
                                            


     verticalSpace                        ::=   <END_OF_LINE>+ ;



     error                                ::=   . ;

     

     typesDeclaration                     ::=   typeDeclaration ( "," typeDeclaration)+ ;

     contextsDeclaration                  ::=   contextDeclaration ( "," contextDeclaration)+ ;

     variablesDeclaration                 ::=   variableDeclaration ( "," variableDeclaration)+ ;
   
     constructorsDeclaration              ::=   constructorDeclaration ( "," constructorDeclaration)+ ;
   
     abbreviationsDeclaration             ::=   abbreviationDeclaration ( "," abbreviationDeclaration)+ ;
   
     dependentTypesDeclaration            ::=   dependentTypeDeclaration ( "," dependentTypeDeclaration)* ;
   
     metavariablesDeclaration             ::=   metavariableDeclaration ( "," metavariableDeclaration)* ;
   


     typeDeclaration                      ::=   typeName ;
   
     contextDeclaration                   ::=   contextName<NO_WHITESPACE>parenthesisedTypeName? ;
   
     variableDeclaration                  ::=   variableName ;
   
     constructorDeclaration               ::=   constructorName<NO_WHITESPACE>parenthesisedTypeNames?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName ;
   
     abbreviationDeclaration              ::=   name "for" name ;

     dependentTypeDeclaration             ::=   typeName<NO_WHITESPACE>parenthesisedTypeName ;
   
     metavariableDeclaration              ::=   metavariableName<NO_WHITESPACE>parenthesisedTypeName? ;

   
        
     premise                              ::=   "Premise" <END_OF_LINE> metastatement ;

     premises                             ::=   "Premises" <END_OF_LINE> metastatement metastatement+ ;

     conclusion                           ::=   "Conclusion" <END_OF_LINE> metastatement ;

     
     
     metaProof                            ::=   "Proof" <END_OF_LINE> 
     
                                                metastatementDefinition*
     
                                                metaProofDerivation? 
                                                
                                                metastatement ;
                                                
     metastatementDefinition              ::=   "let" metastatement ;                                           
                                                
     metaProofDerivation                  ::=   ( subrule | metastatement )+  "Therefore" <END_OF_LINE> ;                                           
     
     subrule                              ::=   "Suppose" <END_OF_LINE> metastatement+ 
     
                                                ( "Then" <END_OF_LINE> ( subrule | metastatement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> metastatement ;



     proof                                ::=   "Proof" <END_OF_LINE> 
     
                                                statementDefinition*
     
                                                proofDerivation? 
                                                
                                                statement ;
                                                
     statementDefinition                  ::=   "let" statement ;                                           

     proofDerivation                      ::=   ( sublemma | statement )+ "Therefore" <END_OF_LINE> ;

     sublemma                             ::=   "Suppose" <END_OF_LINE> statement+ 
     
                                                ( "Then" <END_OF_LINE> ( sublemma | statement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> statement ;



     indicativeConditional                ::=   "Suppose" <END_OF_LINE> statement+ 
     
                                                "Hence" <END_OF_LINE> statement ;



     metavariable                         ::=   metavariableName<NO_WHITESPACE>parenthesisedTerm? ;

     reference                            ::=   referenceName<NO_WHITESPACE>parenthesisedTerm? ;

     context                              ::=   contextName<NO_WHITESPACE>parenthesisedTerm? ;

     label                                ::=   labelName<NO_WHITESPACE>parenthesisedTerm? ;



     parenthesisedTypeNames               ::=   "("<NO_WHITESPACE>typeNames<NO_WHITESPACE>")" ;

     parenthesisedLabels                  ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")" ;                    

     parenthesisedTerms                   ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")" ;   



     parenthesisedTypeName                ::=   "("<NO_WHITESPACE>typeName<NO_WHITESPACE>")" ;

     parenthesisedTerm                    ::=   "("<NO_WHITESPACE>term<NO_WHITESPACE>")" ;   

         
     
     typeNames                            ::=   typeName ( "," typeName )* ;

     labels                               ::=   label ( "," label )* ;

     terms                                ::=   term ( "," term )* ;
     


     typeName                             ::=   name ;

     contextName                          ::=   name ;

     variableName                         ::=   name ;

     constructorName                      ::=   name ;

     metavariableName                     ::=   name ;

     referenceName                        ::=   name ;

     labelName                            ::=   name ;

     
   
     name                                 ::=   [unassigned] ;

       

     qualification                        ::=   ( "by" | "from" ) reference? ;

       

     nonsense                             ::=   ( [unassigned] | [special] )+ ;

     
`;

module.exports = bnf;
