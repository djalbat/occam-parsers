'use strict';

var grammar = `

    rule                            ::=   ruleDeclaration premise(s) conclusion proof?
    
    ruleDeclaration                 ::=   Rule /\\([^)]+\\)/ <END_OF_LINE>
    
    
    
    premise(s)                      ::=   premise | premises
    
    premise                         ::=   premiseDeclaration (qualified)statement
    
    premises                        ::=   premisesDeclaration (qualified)statement+
    
    premiseDeclaration              ::=   Premise <END_OF_LINE>
    
    premisesDeclaration             ::=   Premises <END_OF_LINE>
    
    

    conclusion                      ::=   conclusionDeclaration statement
    
    conclusionDeclaration           ::=   Conclusion <END_OF_LINE>
    
    

    proof                           ::=   proofDeclaration subLemmaOr(qualified)statement* statement
    
    proofDeclaration                ::=   Proof <END_OF_LINE>
    
    

    subLemmaOr(qualified)statement  ::=   subLemma | (qualifed)statement

    subLemma                        ::=   suppose then? hence
    
    suppose                         ::=   supposeDeclaration statement
    
    supposeDeclaration              ::=   Suppose <END_OF_LINE>
    
    then                            ::=   thenDeclaration (qualified)statement+
    
    thenDeclaration                 ::=   Then <END_OF_LINE>
    
    hence                           ::=   henceDeclaration statement
    
    henceDeclaration                ::=   Hence <END_OF_LINE>
    
    

    (qualified)statement            ::=   qualifiedStatement | statement
    
    qualifiedStatement              ::=   statement by label
    
    statement                       ::=   undefined+ <END_OF_LINE>
    
    
    
`;

module.exports = grammar;



