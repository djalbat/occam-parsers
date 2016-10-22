'use strict';

var grammar = `

    
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
    
    

    proof                           ::=   proofDeclaration subLemmaOr(labelled)statement* hence
    
    proofDeclaration                ::=   Proof <END_OF_LINE>+
    
    

    subLemmaOr(labelled)statement   ::=   subLemma | (labelled)statement

    subLemma                        ::=   suppose then? hence
    
    suppose                         ::=   supposeDeclaration statement
    
    supposeDeclaration              ::=   Suppose <END_OF_LINE>+
    
    then                            ::=   thenDeclaration (labelled)statement+
    
    thenDeclaration                 ::=   Then <END_OF_LINE>+
    
    hence                           ::=   henceDeclaration statement
    
    henceDeclaration                ::=   Hence <END_OF_LINE>+
    
    
    
    parenthesisedLabel              ::=   (<NO_WHITESPACE>label<NO_WHITESPACE>)

    (labelled)statement             ::=   labelledStatement | statement
    
    labelledStatement               ::=   unassigned+ by label <END_OF_LINE>+
    
    statement                       ::=   unassigned+ <END_OF_LINE>+
    
    label                           ::=   unassigned
    
`;

module.exports = grammar;
