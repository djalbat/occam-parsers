'use strict';

const bnf = `


    document                        ::=   ( maths | everythingElse )+ ;
    
    
    maths                           ::=   dollarDelimitedInlineMaths
     
                                      |   bracketDelimitedInlineMaths 
    
                                      |   dollarDelimitedDisplayMaths 
    
                                      |   bracketDelimitedDisplayMaths
                                      
                                      ; 


    dollarDelimitedInlineMaths      ::=   "$" [unassigned]+ "$" ; 

    bracketDelimitedInlineMaths     ::=   "\\(" [unassigned]+ "\\)" ; 
    
    dollarDelimitedDisplayMaths     ::=   "$$" [unassigned]+ "$$" ; 

    bracketDelimitedDisplayMaths    ::=   "\\[" [unassigned]+ "\\]" ; 
 

    everythingElse                  ::=   .+ ;


`;

module.exports = bnf;
