'use strict';

var grammar = `

    document                                  ::=   header? verticalSpace? body?

     
     
    header                                    ::=   includeDirective+
    
    includeDirective                          ::=   'include'<NO_WHITESPACE>'('<NO_WHITESPACE>[string]<NO_WHITESPACE>')' <END_OF_LINE>
    
    
    
    body                                      ::=   partOrVerticalSpace+
        
    partOrVerticalSpace                       ::=   part | verticalSpace
    
    
    
    part                                      ::=   rule | axiom | theorem | lemma | errors
    
    
    
    rule                                      ::=   'Rule' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof?
    
    axiom                                     ::=   'Axiom' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion
    
    theorem                                   ::=   'Theorem' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof
        
    lemma                                     ::=   'Lemma' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof    
    
    
    
    premise(s)                                ::=   premise | premises
    
    premise                                   ::=   'Premise' <END_OF_LINE> (labelled)Statement
    
    premises                                  ::=   'Premises' <END_OF_LINE> (labelled)Statement (labelled)Statement+

    conclusion                                ::=   'Conclusion' <END_OF_LINE> (labelled)Statement

    proof                                     ::=   'Proof' <END_OF_LINE> subLemmaOr(labelled)Statement* therefore

    therefore                                 ::=   'Therefore' <END_OF_LINE> (labelled)Statement
    
    

    subLemmaOr(labelled)Statement             ::=   subLemma | (labelled)Statement

    subLemma                                  ::=   suppose then? hence verticalSpace?
    
    

    suppose                                   ::=   'Suppose' <END_OF_LINE> statement+
    
    then                                      ::=   'Then' <END_OF_LINE> subLemmaOr(labelled)Statement+
    
    hence                                     ::=   'Hence' <END_OF_LINE> (labelled)Statement
    
    
    
    
    (labelled)Statement                       ::=   labelledStatementOrStatement <END_OF_LINE>
    
    labelledStatementOrStatement              ::=   labelledStatement | statement  
    
    labelledStatement                         ::=   statement 'by' label
    
    statement                                 ::=   specialOrUnassigned+ 
    
    specialOrUnassigned                       ::=   [special] | [unassigned]
    
    
    
    parenthesisedLabels                       ::=   '('<NO_WHITESPACE>labels<NO_WHITESPACE>')'
    
    labels                                    ::=   label<NO_WHITESPACE>commaThenLabel*
    
    commaThenLabel                            ::=   ','<NO_WHITESPACE>label

    label                                     ::=   [unassigned]
    
    
    
    errors                                    ::=   errorsThenEndOfLine+
    
    errorsThenEndOfLine                       ::=   error+ <END_OF_LINE>
    
    error                                     ::=   [string] | [special] | [include] | [keyword] | [unassigned]
     
     
     
    verticalSpace                             ::=   <END_OF_LINE>+

`;

module.exports = grammar;
