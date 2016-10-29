'use strict';

var grammar = `

    document                        ::=   assertion*

    assertion                       ::=   rule | theorem | lemma
    
    
    
    theorem                         ::=   theoremDeclaration premise(s)? conclusion proof
    
    theoremDeclaration              ::=   Theorem parenthesisedLabel? <END_OF_LINE>+
    
    
    
    lemma                           ::=   lemmaDeclaration premise(s)? conclusion proof
    
    lemmaDeclaration                ::=   Lemma parenthesisedLabel? <END_OF_LINE>+
    
    
    
    rule                            ::=   ruleDeclaration premise(s)? conclusion proof?
    
    ruleDeclaration                 ::=   Rule parenthesisedLabel? <END_OF_LINE>+
    
    
    
    premise(s)                      ::=   premise | premises
    
    premise                         ::=   premiseDeclaration (labelled)statement
    
    premises                        ::=   premisesDeclaration (labelled)statement (labelled)statement+
    
    premiseDeclaration              ::=   Premise <END_OF_LINE>+
    
    premisesDeclaration             ::=   Premises <END_OF_LINE>+
    
    

    conclusion                      ::=   conclusionDeclaration statement
    
    conclusionDeclaration           ::=   Conclusion <END_OF_LINE>+
    
    

    proof                           ::=   proofDeclaration subLemmaOr(labelled)statement* therefore
    
    proofDeclaration                ::=   Proof <END_OF_LINE>+
    
    

    therefore                       ::=   thereforeDeclaration (labelled)statement
    
    thereforeDeclaration            ::=   Therefore <END_OF_LINE>+
    
    

    subLemmaOr(labelled)statement   ::=   subLemma | (labelled)statement

    subLemma                        ::=   suppose then? hence
    
    

    suppose                         ::=   supposeDeclaration supposition+
    
    supposeDeclaration              ::=   Suppose <END_OF_LINE>+
    
    supposition                     ::=   statement
    
    then                            ::=   thenDeclaration subLemmaOr(labelled)statement+
    
    thenDeclaration                 ::=   Then <END_OF_LINE>+
    
    hence                           ::=   henceDeclaration (labelled)statement
    
    henceDeclaration                ::=   Hence <END_OF_LINE>+
    
    
    
    (labelled)statement             ::=   labelledStatement | statement
    
    labelledStatement               ::=   symbol+ by label <END_OF_LINE>+
    
    statement                       ::=   symbol+ <END_OF_LINE>+
    
    symbol                          ::=   unassigned
                                      
                                      |   { 
                                      
                                      |   } 
                                      
                                      |   = 
                                      
                                      |   : 
    
                                      |   ( 
                                      
                                      |   )
    
    
    
    parenthesisedLabel              ::=   (<NO_WHITESPACE>label<NO_WHITESPACE>)

    label                           ::=   unassigned
                                      
    unassignedOrKeyword             ::=   unassigned | keyword                                      
    
`;

module.exports = grammar;
