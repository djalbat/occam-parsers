'use strict';

var grammar = `

    rule                            ::=   ruleDeclaration premise(s) conclusion proof?
    
    ruleDeclaration                 ::=   Rule parenthesisedLabel <END_OF_LINE>
    
    parenthesisedLabel              ::=   /\\([^)]+\\)/
    
    
    
    premise(s)                      ::=   premise | premises
    
    premise                         ::=   premiseDeclaration (labelled)statement
    
    premises                        ::=   premisesDeclaration (labelled)statement+
    
    premiseDeclaration              ::=   Premise <END_OF_LINE>
    
    premisesDeclaration             ::=   Premises <END_OF_LINE>
    
    

    conclusion                      ::=   conclusionDeclaration statement
    
    conclusionDeclaration           ::=   Conclusion <END_OF_LINE>
    
    

    proof                           ::=   proofDeclaration subLemmaOr(labelled)statement* statement
    
    proofDeclaration                ::=   Proof <END_OF_LINE>
    
    

    subLemmaOr(labelled)statement   ::=   subLemma | (labelled)statement

    subLemma                        ::=   suppose then? hence
    
    suppose                         ::=   supposeDeclaration statement
    
    supposeDeclaration              ::=   Suppose <END_OF_LINE>
    
    then                            ::=   thenDeclaration (labelled)statement+
    
    thenDeclaration                 ::=   Then <END_OF_LINE>
    
    hence                           ::=   henceDeclaration statement
    
    henceDeclaration                ::=   Hence <END_OF_LINE>
    
    

    (labelled)statement             ::=   labelledStatement | statement
    
    labelledStatement               ::=   undefined+ by label <END_OF_LINE>
    
    statement                       ::=   undefined+ <END_OF_LINE>
    
    label                           ::=   /[^)]+/
    
    
`;

module.exports = grammar;
