'use strict';

const bnf = `


     document                             ::=   ( rule | axiom | lemma | theorem | metalemma | metatheorem | declaration | verticalSpace | error )+ ;
     
     
     
     rule                                 ::=   "Rule" parenthesisedLabels? <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;

     axiom                                ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> ( unqualifiedStatement | indicativeConditional ) ; 

     lemma                                ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( unqualifiedStatement | indicativeConditional ) proof? ;

     theorem                              ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> ( unqualifiedStatement | indicativeConditional ) proof? ;

     metalemma                            ::=   "Metalemma" parenthesisedLabels? <END_OF_LINE> ( unqualifiedMetastatement | metaIndicativeConditional ) metaproof? ;

     metatheorem                          ::=   "Metatheorem" parenthesisedLabels? <END_OF_LINE> ( unqualifiedMetastatement | metaIndicativeConditional ) metaproof? ;

     declaration                          ::=   "Types" typesDeclaration <END_OF_LINE>

                                            |   "Contexts" contextsDeclaration  <END_OF_LINE>

                                            |   "Variables" variablesDeclaration  <END_OF_LINE>

                                            |   "Constructors" constructorsDeclaration  <END_OF_LINE>

                                            |   "DependentTypes" dependentTypesDeclaration  <END_OF_LINE>

                                            |   "Metavariables" metavariablesDeclaration  <END_OF_LINE>

                                            |   "Abbreviations" abbreviationsDeclaration  <END_OF_LINE>

                                            |   "Type" typeDeclaration  <END_OF_LINE>

                                            |   "Context" contextDeclaration  <END_OF_LINE>

                                            |   "Variable" variableDeclaration  <END_OF_LINE>

                                            |   "Constructor" constructorDeclaration  <END_OF_LINE>

                                            |   "DependentType" dependentTypeDeclaration  <END_OF_LINE>
                                            
                                            |   "Metavariable" metavariableDeclaration  <END_OF_LINE>

                                            |   "Abbreviation" abbreviationDeclaration  <END_OF_LINE>

                                            ;
                                            


     verticalSpace                        ::=   <END_OF_LINE>+ ;



     error                                ::=   . ;

     

     typesDeclaration                     ::=   typeDeclaration ( "," typeDeclaration)+ ;

     contextsDeclaration                  ::=   contextDeclaration ( "," contextDeclaration)+ ;

     variablesDeclaration                 ::=   variableDeclaration ( "," variableDeclaration)+ ;
   
     constructorsDeclaration              ::=   constructorDeclaration ( "," constructorDeclaration)+ ;
   
     dependentTypesDeclaration            ::=   dependentTypeDeclaration ( "," dependentTypeDeclaration)* ;
   
     metavariablesDeclaration             ::=   metavariableDeclaration ( "," metavariableDeclaration)* ;
   
     abbreviationsDeclaration             ::=   abbreviationDeclaration ( "," abbreviationDeclaration)* ;


     typeDeclaration                      ::=   typeName ;
   
     contextDeclaration                   ::=   contextName<NO_WHITESPACE>parenthesisedTypeName? ;
   
     variableDeclaration                  ::=   variableName ;
   
     constructorDeclaration               ::=   constructorName<NO_WHITESPACE>parenthesisedTypeNames?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName ;
   
     dependentTypeDeclaration             ::=   typeName<NO_WHITESPACE>parenthesisedTypeName ;
   
     metavariableDeclaration              ::=   metavariableName<NO_WHITESPACE>parenthesisedTypeName? ;
     
     abbreviationDeclaration              ::=   constructorName "for" constructorName ; 
     
   
        
     premise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;

     premises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;

     conclusion                           ::=   "Conclusion" <END_OF_LINE> qualifiedMetastatement ;

     
     
     metaproof                            ::=   "Proof" <END_OF_LINE> 
     
                                                metastatementDefinition*
     
                                                metaProofDerivation? 
                                                
                                                qualifiedMetastatement ;
                                                
                                                
                                                
     metastatementDefinition              ::=   "let" unqualifiedMetastatement ;                                           
                                                
     metaProofDerivation                  ::=   ( submetalemma | qualifiedMetastatement )+  "Therefore" <END_OF_LINE> ;                                           
     
     submetalemma                         ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 
     
                                                ( "Then" <END_OF_LINE> ( submetalemma | qualifiedMetastatement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> qualifiedMetastatement ;



     metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 
     
                                                "Hence" <END_OF_LINE> qualifiedMetastatement ;



     proof                                ::=   "Proof" <END_OF_LINE> 
     
                                                statementDefinition*
     
                                                proofDerivation? 
                                                
                                                qualifiedStatement ;
                                                
                                                
                                                
     statementDefinition                  ::=   "let" unqualifiedStatement;                                           

     proofDerivation                      ::=   ( sublemma | qualifiedStatement )+ "Therefore" <END_OF_LINE> ;

     sublemma                             ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ 
     
                                                ( "Then" <END_OF_LINE> ( sublemma | qualifiedStatement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> qualifiedStatement ;



     indicativeConditional                ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ 
     
                                                "Hence" <END_OF_LINE> qualifiedStatement ;



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
     


     typeName                             ::=   [unassigned] ;

     contextName                          ::=   [unassigned] ;

     variableName                         ::=   [unassigned] ;

     constructorName                      ::=   [unassigned] ;

     metavariableName                     ::=   [unassigned] ;

     referenceName                        ::=   [unassigned] ;

     labelName                            ::=   [unassigned] ;

     
   
     qualification                        ::= ( "by" | "from" ) reference? ;
     
     

     nonsense                             ::=   ( [unassigned] | [special] | [custom] )+ ;

     
`;

module.exports = bnf;
