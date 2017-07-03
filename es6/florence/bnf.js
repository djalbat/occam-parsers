'use strict';

const bnf = `



     document                             ::=   header? verticalSpace? body? ;



     header                               ::=   includeDirective+ ;

     body                                 ::=   ( verticalSpace | assertion | error )+ ;



     includeDirective                     ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE> ;



     assertion                            ::=   rule
                                                                
                                            |   axiom
                                                                
                                            |   lemma
                                                                
                                            |   theorem
                                                                
                                            |   "Type" typeDefinition

                                            |   "Types" typesDefinition

                                            |   "Variable" variableDefinition

                                            |   "Variables" variablesDefinition

                                            |   "Constructor" constructorDefinition

                                            |   "Constructors" constructorsDefinition

                                            |   "Abbreviation" abbreviationDefinition

                                            |   "Abbreviations" abbreviationsDefinition

                                            |   "DependentType" dependentTypeDefinition

                                            |   "DependentTypes" dependentTypesDefinition

                                            |   "Metavariable" metavariableDefinition

                                            |   "Metavariables" metavariablesDefinition

                                            ;
                                                                     
                                                                                                                                          
                                                                     
     rule                                 ::=   "Rule" parenthesisedLabels? <END_OF_LINE> ( premise | premises )? conclusion metaProof? ;

     axiom                                ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) ; 

     lemma                                ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof? ;

     theorem                              ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof? ;



     typesDefinition                      ::=   typeDefinition ( "," typeDefinition)+ ;

     variablesDefinition                  ::=   variableDefinition ( "," variableDefinition)+ ;
   
     constructorsDefinition               ::=   constructorDefinition ( "," constructorDefinition)+ ;
   
     abbreviationsDefinition              ::=   abbreviationDefinition ( "," abbreviationDefinition)+ ;
   
     dependentTypesDefinition             ::=   dependentTypeDefinition ( "," dependentTypeDefinition)* ;
   
     metavariablesDefinition              ::=   metavariableDefinition ( "," metavariableDefinition)* ;
   


     typeDefinition                       ::=   typeName ;
   
     variableDefinition                   ::=   variableName(<NO_WHITESPACE>":"typeName)? ;
   
     constructorDefinition                ::=   constructorName<NO_WHITESPACE>parenthesisedTypeNames?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName ;
   
     abbreviationDefinition               ::=   typeName "for" typeName | constructorName "for" constructorName ;

     dependentTypeDefinition              ::=   typeName<NO_WHITESPACE>parenthesisedTypeName ;
   
     metavariableDefinition               ::=   metavariableName<NO_WHITESPACE>parenthesisedTypeName? ;

   
        
     premise                              ::=   "Premise" <END_OF_LINE> unjustifiedMetastatement ;

     premises                             ::=   "Premises" <END_OF_LINE> unjustifiedMetastatement unjustifiedMetastatement+ ;

     conclusion                           ::=   "Conclusion" <END_OF_LINE> unjustifiedOrJustifiedMetastatement ;

     
     
     metaProof                            ::=   "Proof" <END_OF_LINE> 
     
                                                metaProofDerivation? 
                                                
                                                unjustifiedOrJustifiedMetastatement ;
                                                
     metaProofDerivation                  ::=   ( subrule | unjustifiedOrJustifiedMetastatement )+  "Therefore" <END_OF_LINE> ;                                           
     
     subrule                              ::=   "Suppose" <END_OF_LINE> unjustifiedMetastatement+ 
     
                                                ( "Then" <END_OF_LINE> ( subrule | unjustifiedOrJustifiedMetastatement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedMetastatement ;



     proof                                ::=   "Proof" <END_OF_LINE> 
     
                                                proofDerivation? 
                                                
                                                unjustifiedOrJustifiedStatement ;
                                                
     proofDerivation                      ::=   ( sublemma | unjustifiedOrJustifiedStatement )+ "Therefore" <END_OF_LINE> ;

     sublemma                             ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+ 
     
                                                ( "Then" <END_OF_LINE> ( sublemma | unjustifiedOrJustifiedStatement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedStatement ;



     indicativeConditional                ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+ 
     
                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedStatement ;



     unjustifiedOrJustifiedMetastatement  ::=   unjustifiedMetastatement | justifiedMetastatement ;
     
     unjustifiedMetastatement             ::=   metastatement <END_OF_LINE> ;
     
     justifiedMetastatement               ::=   metastatement "by" reference <END_OF_LINE> ;



     unjustifiedOrJustifiedStatement      ::=   unjustifiedStatement | justifiedStatement ;

     unjustifiedStatement                 ::=   statement <END_OF_LINE> ;

     justifiedStatement                   ::=   statement ( "by" | "from" ) reference <END_OF_LINE> ;
     
     

     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms? ;

     reference                            ::=   referenceName<NO_WHITESPACE>parenthesisedTerms? ;

     context                              ::=   contextName<NO_WHITESPACE>parenthesisedTerms? ;

     label                                ::=   labelName<NO_WHITESPACE>parenthesisedTerms? ;



     metavariable                         ::=   metavariableName<NO_WHITESPACE>parenthesisedTerm? ;

     variable                             ::=   variableName ;



     parenthesisedTypeNames               ::=   "("<NO_WHITESPACE>typeNames<NO_WHITESPACE>")" ;

     parenthesisedTypeName                ::=   "("<NO_WHITESPACE>typeName<NO_WHITESPACE>")" ;

     parenthesisedLabels                  ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")" ;                    

     parenthesisedTerms                   ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")" ;   

     parenthesisedTerm                    ::=   "("<NO_WHITESPACE>term<NO_WHITESPACE>")" ;   



     typeNames                            ::=   typeName ( "," typeName )* ;

     labels                               ::=   label ( "," label )* ;

     terms                                ::=   term ( "," term )* ;
     

              
     typeName                             ::=   name ;
     
     variableName                         ::=   name ;

     constructorName                      ::=   name ;

     metavariableName                     ::=   name ;

     referenceName                        ::=   name ;

     contextName                          ::=   name ;

     labelName                            ::=   name ;

     
   
     name                                 ::=   [unassigned] ;
       

       
     verticalSpace                        ::=   <END_OF_LINE>+ ;

       
       
     error                                ::=   . ;

     
     
`;

module.exports = bnf;
