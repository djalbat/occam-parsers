'use strict';

const bnf = `document                             ::=   ( rule | axiom | lemma | theorem | conjecture | metalemma | metatheorem | metaconjecture | declaration | verticalSpace | error )+ ;



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
 
                                       |   "DisjointTypes" disjointTypesDeclaration <END_OF_LINE>
 
                                       |   "Metavariables" metavariablesDeclaration <END_OF_LINE>
 
                                       |   "Abbreviations" abbreviationsDeclaration <END_OF_LINE>

                                       |   "Type" typeDeclaration <END_OF_LINE>
 
                                       |   "Context" contextDeclaration <END_OF_LINE>
 
                                       |   "Variable" variableDeclaration <END_OF_LINE>
 
                                       |   "Constructor" constructorDeclaration <END_OF_LINE>
 
                                       |   "DependentType" dependentTypeDeclaration <END_OF_LINE>
                                       
                                       |   "DisjointType" disjointTypeDeclaration <END_OF_LINE>
                                       
                                       |   "Metavariable" metavariableDeclaration <END_OF_LINE>
 
                                       |   "Abbreviation" abbreviationDeclaration <END_OF_LINE>
 
                                       ;
                                      


typesDeclaration                     ::=   typeName ( "," typeName )+ ( ":" typeNames )? ;

contextsDeclaration                  ::=   contextDeclaration ( "," contextDeclaration )+ ;

variablesDeclaration                 ::=   name ( "," name )+ ":" typeNames ;

constructorsDeclaration              ::=   term ( "," term )+ ":" typeNames ;

dependentTypesDeclaration            ::=   dependentTypeDeclaration ( "," dependentTypeDeclaration )+ ;

disjointTypesDeclaration             ::=   typeName ( "," typeName )+ ":" typeName ( "," typeName )+ ;

metavariablesDeclaration             ::=   metavariableDeclaration ( "," metavariableDeclaration )+ ;

abbreviationsDeclaration             ::=   abbreviationDeclaration ( "," abbreviationDeclaration )+;



typeDeclaration                      ::=   typeName ( ":" typeNames )? ;

contextDeclaration                   ::=   contextName parenthesisedTypeName? ;

variableDeclaration                  ::=   name ( ":" typeNames )? ;

constructorDeclaration               ::=   term ( ":" typeNames )? ;

dependentTypeDeclaration             ::=   typeName parenthesisedTypeName ;

disjointTypeDeclaration              ::=   typeName ":" typeName ( "," typeName )+ ;

metavariableDeclaration              ::=   metavariableName parenthesisedTypeName? ;

abbreviationDeclaration              ::=   [custom] "for" [custom] 

                                       |   name "for" name
                                       
                                       ; 


  
premise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;

premises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;

conclusion                           ::=   "Conclusion" <END_OF_LINE> qualifiedMetastatement ;



metaproof                            ::=   "Proof" <END_OF_LINE> 

                                           metastatementDefinition*

                                           metaProofDerivation? 
                                          
                                           qualifiedMetastatement ;
                                          
                                          

metaProofDerivation                  ::=   ( metaSublemma | qualifiedStatement | qualifiedMetastatement )+  

                                           "Therefore" <END_OF_LINE> ;                                           

metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 

                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;

metaSublemma                         ::=   "Suppose" <END_OF_LINE> 

                                           ( metaSublemma | qualifiedStatement | qualifiedMetastatement )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( metaSublemma | qualifiedStatement | qualifiedMetastatement )+ 
                                          
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



parenthesisedTypeNames               ::=   <NO_WHITESPACE>"(" typeNames? ")" ;

parenthesisedTypeName                ::=   <NO_WHITESPACE>"(" typeName ")" ;

parenthesisedTerms                   ::=   <NO_WHITESPACE>"(" terms? ")" ;

parenthesisedTerm                    ::=   <NO_WHITESPACE>"(" term ")" ;   

   

typeNames                            ::=   typeName ( "," typeName )* ;

terms                                ::=   term ( "," term )* ;



typeName                             ::=   [name] ;

contextName                          ::=   [name] ;

metavariableName                     ::=   [name] ;

referenceName                        ::=   [name] ;

labelName                            ::=   [name] ;



name                                 ::=   [name] ;



nonsense                             ::=   ( [name] | [custom] | [special] | [unassigned] )+ ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;`;

module.exports = bnf;
