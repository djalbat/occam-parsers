'use strict';

const grammar = `



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

                                            |   "QualifiedMetavariable" qualifiedMetavariableDefinition

                                            |   "QualifiedMetavariables" qualifiedMetavariablesDefinition
                                                                
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
   
     qualifiedMetavariablesDefinition     ::=   qualifiedMetavariableDefinition ( "," qualifiedMetavariableDefinition)* ;
   


     typeDefinition                       ::=   typeName ;
   
     variableDefinition                   ::=   variableName(<NO_WHITESPACE>":"typeName)? ;
   
     constructorDefinition                ::=   constructorName<NO_WHITESPACE>parenthesisedTypeNames?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName ;
   
     abbreviationDefinition               ::=   typeName "for" typeName | constructorName "for" constructorName ;

     dependentTypeDefinition              ::=   dependentTypeName<NO_WHITESPACE>"("<NO_WHITESPACE>typeName<NO_WHITESPACE>")" ;
   
     metavariableDefinition               ::=   metavariableName ;

     qualifiedMetavariableDefinition      ::=   qualifiedMetavariableName<NO_WHITESPACE>"("<NO_WHITESPACE>typeName<NO_WHITESPACE>")" ;
   
   
        
     premise                              ::=   "Premise" <END_OF_LINE> unjustifiedMetastatement ;

     premises                             ::=   "Premises" <END_OF_LINE> unjustifiedMetastatement unjustifiedMetastatement+ ;

     conclusion                           ::=   "Conclusion" <END_OF_LINE> unjustifiedOrJustifiedMetastatement ;

     
     
     metaProof                            ::=   "Proof" <END_OF_LINE> ( subRule | unjustifiedOrJustifiedMetastatement )+ 
                                                
                                                "Therefore" <END_OF_LINE> unjustifiedOrJustifiedMetastatement ;
     
     subRule                              ::=   "Suppose" <END_OF_LINE> unjustifiedMetastatement+ 
     
                                                ( "Then" <END_OF_LINE> ( subRule | unjustifiedOrJustifiedMetastatement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedMetastatement verticalSpace? ;



     proof                                ::=   "Proof" <END_OF_LINE> ( subLemma | unjustifiedOrJustifiedStatement )+ 
     
                                                "Therefore" <END_OF_LINE> unjustifiedOrJustifiedStatement ;

     subLemma                             ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+ 
     
                                                ( "Then" <END_OF_LINE> ( subLemma | unjustifiedOrJustifiedStatement )+ )? 
                                                
                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedStatement verticalSpace? ;



     indicativeConditional                ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+ 
     
                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedStatement ;



     unjustifiedOrJustifiedMetastatement  ::=   unjustifiedMetastatement | justifiedMetastatement ;
     
     unjustifiedMetastatement             ::=   metastatement <END_OF_LINE> ;
     
     justifiedMetastatement               ::=   metastatement "by" reference <END_OF_LINE> ;



     unjustifiedOrJustifiedStatement      ::=   unjustifiedStatement | justifiedStatement ;

     unjustifiedStatement                 ::=   statement <END_OF_LINE> ;

     justifiedStatement                   ::=   statement ( "by" | "from" ) reference <END_OF_LINE> ;
     
     

     reference                            ::=   referenceName<NO_WHITESPACE>parenthesisedTerms? ;

     context                              ::=   contextName<NO_WHITESPACE>parenthesisedTerms? ;

     label                                ::=   labelName<NO_WHITESPACE>parenthesisedTerms? ;



     parenthesisedTypeNames               ::=   "("<NO_WHITESPACE>typeNames<NO_WHITESPACE>")" ;

     parenthesisedLabels                  ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")" ;                    

     parenthesisedTerms                   ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")" ;   



     typeNames                            ::=   typeName ( "," typeName )* ;

     labels                               ::=   label ( "," label )* ;

     terms                                ::=   term ( "," term )* ;
     

              
     variableName                         ::=   name ;

     constructorName                      ::=   name ;

     dependentTypeName                    ::=   name ;

     metavariableName                     ::=   name ;

     qualifiedMetavariableName            ::=   name ;

     referenceName                        ::=   name ;

     contextName                          ::=   name ;

     labelName                            ::=   name ;

     typeName                             ::=   name ;
     
     
   
     name                                 ::=   [unassigned] ;
       

       
     verticalSpace                        ::=   <END_OF_LINE>+ ;

       
       
     error                                ::=   . ;

     
     
`;

module.exports = grammar;
