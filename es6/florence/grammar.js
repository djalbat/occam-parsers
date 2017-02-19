'use strict';

var grammar = `

    document                                  ::=   header? verticalSpace? body?
                                              
                                              
                                              
    header                                    ::=   includeDirective+
    
    includeDirective                          ::=   'include'<NO_WHITESPACE>'('<NO_WHITESPACE>[string]<NO_WHITESPACE>')' <END_OF_LINE>
                                              
                                              
    body                                      ::=   part+  
        
    part                                      ::=   rule | axiom | theorem | lemma | verticalSpace | error
    
    
    
    rule                                      ::=   'Rule' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof?
    
    axiom                                     ::=   'Axiom' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion
    
    theorem                                   ::=   'Theorem' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof
        
    lemma                                     ::=   'Lemma' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof    
    
    
    
    parenthesisedLabels                       ::=   '('<NO_WHITESPACE>labels<NO_WHITESPACE>')'
    
    labels                                    ::=   label<NO_WHITESPACE>commaThenLabel*
    
    commaThenLabel                            ::=   ','<NO_WHITESPACE>label
    
    
    
    premise(s)                                ::=   premise | premises
    
    premise                                   ::=   'Premise' <END_OF_LINE> (un)labelledStatement
    
    premises                                  ::=   'Premises' <END_OF_LINE> (un)labelledStatement (un)labelledStatement+
    
    conclusion                                ::=   'Conclusion' <END_OF_LINE> (un)labelledStatement
    
    proof                                     ::=   'Proof' <END_OF_LINE> subLemmaOr(un)labelledStatement* therefore
    
    therefore                                 ::=   'Therefore' <END_OF_LINE> (un)labelledStatement
    
    
    
    subLemmaOr(un)labelledStatement           ::=   subLemma | (un)labelledStatement
    
    subLemma                                  ::=   suppose then? hence verticalSpace?
    
    
    
    suppose                                   ::=   'Suppose' <END_OF_LINE> unlabelledStatement+
    
    then                                      ::=   'Then' <END_OF_LINE> subLemmaOr(un)labelledStatement+
    
    hence                                     ::=   'Hence' <END_OF_LINE> (un)labelledStatement
    
    
    
    (un)labelledStatement                     ::=   unlabelledStatement | labelledStatement
    
    labelledStatement                         ::=   statement 'by' label <END_OF_LINE>  
    
    unlabelledStatement                       ::=   statement <END_OF_LINE>  
    
    statement                                 ::=   specialOrUnassigned+ 
    
    specialOrUnassigned                       ::=   [special] | [unassigned]
    
    
    
    label                                     ::=   [unassigned]
     
     
     
    verticalSpace                             ::=   <END_OF_LINE>+
    
    
    
    error                                     ::=   *
    
`;

module.exports = grammar;
