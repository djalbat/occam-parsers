'use strict';

const bnf = `


     document                             ::=   ( rule | axiom | lemma | theorem | conjecture | metalemma | metatheorem | metaconjecture | declaration | verticalSpace | error )+ ;
     
     
     
     rule                                 ::=   "Rule" parenthesisedLabels <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;

     axiom                                ::=   "Axiom" parenthesisedLabels <END_OF_LINE> ( unqualifiedStatement | indicativeConditional ) ; 

     lemma                                ::=   "Lemma" parenthesisedLabels <END_OF_LINE> ( unqualifiedStatement | indicativeConditional ) proof ;

     theorem                              ::=   "Theorem" parenthesisedLabels <END_OF_LINE> ( unqualifiedStatement | indicativeConditional ) proof ;

     conjecture                           ::=   "Conjecture" parenthesisedLabels <END_OF_LINE> ( unqualifiedStatement | indicativeConditional ) ;

     metalemma                            ::=   "Metalemma" parenthesisedLabels <END_OF_LINE> ( unqualifiedMetastatement | metaIndicativeConditional ) metaproof ;

     metatheorem                          ::=   "Metatheorem" parenthesisedLabels <END_OF_LINE> ( unqualifiedMetastatement | metaIndicativeConditional ) metaproof ;

     metaconjecture                       ::=   "Metaconjecture" parenthesisedLabels <END_OF_LINE> ( unqualifiedMetastatement | metaIndicativeConditional ) ;

     declaration                          ::=   "Types" typesDeclaration <END_OF_LINE>

                                            |   "Contexts" contextsDeclaration <END_OF_LINE>

                                            |   "Variables" variablesDeclaration <END_OF_LINE>

                                            |   "Constructors" constructorsDeclaration <END_OF_LINE>

                                            |   "DependentTypes" dependentTypesDeclaration <END_OF_LINE>

                                            |   "Metavariables" metavariablesDeclaration <END_OF_LINE>

                                            |   "Abbreviations" abbreviationsDeclaration <END_OF_LINE>

                                            |   "Type" typeDeclaration <END_OF_LINE>

                                            |   "Context" contextDeclaration <END_OF_LINE>

                                            |   "Variable" variableDeclaration <END_OF_LINE>

                                            |   "Constructor" constructorDeclaration <END_OF_LINE>

                                            |   "DependentType" dependentTypeDeclaration <END_OF_LINE>
                                            
                                            |   "Metavariable" metavariableDeclaration <END_OF_LINE>

                                            |   "Abbreviation" abbreviationDeclaration <END_OF_LINE>

                                            ;
                                            


     typesDeclaration                     ::=   typeDeclaration ( "," typeDeclaration )+ ;

     contextsDeclaration                  ::=   contextDeclaration ( "," contextDeclaration )+ ;

     variablesDeclaration                 ::=   variableDeclaration ( "," variableDeclaration )+ ;
   
     constructorsDeclaration              ::=   constructorDeclaration ( "," constructorDeclaration )+ ;
   
     dependentTypesDeclaration            ::=   dependentTypeDeclaration ( "," dependentTypeDeclaration )* ;
   
     metavariablesDeclaration             ::=   metavariableDeclaration ( "," metavariableDeclaration )* ;
   
     abbreviationsDeclaration             ::=   abbreviationDeclaration ( "," abbreviationDeclaration )* ;



     typeDeclaration                      ::=   typeName ( ":" typeName )? ;
   
     contextDeclaration                   ::=   contextName parenthesisedTypeName? ;
   
     variableDeclaration                  ::=   name ":" typeName ;
   
     constructorDeclaration               ::=   term ":" typeName ;
   
     dependentTypeDeclaration             ::=   typeName parenthesisedTypeName ;
   
     metavariableDeclaration              ::=   metavariableName parenthesisedTypeName? ;
     
     abbreviationDeclaration              ::=   name "for" name ; 
     
   
        
     premise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;

     premises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;

     conclusion                           ::=   "Conclusion" <END_OF_LINE> qualifiedMetastatement ;

     
     
     metaproof                            ::=   "Proof" <END_OF_LINE> 
     
                                                metastatementDefinition*
     
                                                metaProofDerivation? 
                                                
                                                qualifiedMetastatement ;
                                                
                                                

     metaProofDerivation                  ::=   ( metaSublemma | qualifiedMetastatement )+  
     
                                                "Therefore" <END_OF_LINE> ;                                           
     
     metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 
     
                                                "Hence" <END_OF_LINE> qualifiedMetastatement ;

     metaSublemma                         ::=   "Suppose" <END_OF_LINE> 
     
                                                qualifiedMetastatement+ 
     
                                                ( 
                                                
                                                  "Then" <END_OF_LINE> 
                                                  
                                                  ( metaSublemma | qualifiedMetastatement )+ 
                                                
                                                )? 
                                                
                                                "Hence" <END_OF_LINE> qualifiedMetastatement ;



     proof                                ::=   "Proof" <END_OF_LINE> 
     
                                                statementDefinition*
     
                                                proofDerivation? 
                                                
                                                qualifiedStatement ;
                                                
                                                

     proofDerivation                      ::=   ( sublemma | qualifiedStatement )+ 
     
                                                "Therefore" <END_OF_LINE> ;

     indicativeConditional                ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ 
     
                                                "Hence" <END_OF_LINE> qualifiedStatement ;

     sublemma                             ::=   "Suppose" <END_OF_LINE> 
     
                                                qualifiedStatement+ 
     
                                                ( 
                                                
                                                  "Then" <END_OF_LINE> 
                                                  
                                                  ( sublemma | qualifiedStatement )+ 
                                                
                                                )? 
                                                
                                                "Hence" <END_OF_LINE> qualifiedStatement ;



     metastatementDefinition              ::=   "let" unqualifiedMetastatement ;                                           
                                                
     statementDefinition                  ::=   "let" unqualifiedStatement ;                                           



     unqualifiedMetastatement             ::=   metastatement! <END_OF_LINE> ;
     
     qualifiedMetastatement               ::=   metastatement! qualification? <END_OF_LINE> ;
     
     unqualifiedStatement                 ::=   statement! <END_OF_LINE> ;
     
     qualifiedStatement                   ::=   statement! qualification? <END_OF_LINE> ;

     qualification                        ::=   ( "by" | "from" ) reference ;
     
     

     parenthesisedLabels                  ::=   "(" labels ")" ;                    

     labels                               ::=   label ( "," label )* ;

     label                                ::=   labelName parenthesisedTerm? ;



     metavariable                         ::=   metavariableName parenthesisedTerm? ;

     reference                            ::=   referenceName parenthesisedTerm? ;

     context                              ::=   contextName parenthesisedTerm? ;



     parenthesisedTypeNames               ::=   <NO_WHITESPACE>"(" typeNames? <NO_WHITESPACE>")" ;

     parenthesisedTypeName                ::=   <NO_WHITESPACE>"(" typeName <NO_WHITESPACE>")" ;

     parenthesisedTerms                   ::=   <NO_WHITESPACE>"(" terms? <NO_WHITESPACE>")" ;

     parenthesisedTerm                    ::=   <NO_WHITESPACE>"(" term <NO_WHITESPACE>")" ;   

         
     
     typeNames                            ::=   typeName ( "," typeName )* ;

     terms                                ::=   term ( "," term )* ;
     


     typeName                             ::=   [name] ;

     contextName                          ::=   [name] ;

     metavariableName                     ::=   [name] ;

     referenceName                        ::=   [name] ;

     labelName                            ::=   [name] ;

     
   
     name                                 ::=   [name] ;



     nonsense                             ::=   ( [name] | [special] | [custom] )+ ;



     verticalSpace                        ::=   <END_OF_LINE>+ ;



     error                                ::=   . ;

     

`;

module.exports = bnf;
