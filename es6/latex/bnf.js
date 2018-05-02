'use strict';

const bnf = `


    document                        ::=   ( maths | everythingElse )+ ;
    
    
    
    maths                           ::=   dollarDelimitedInlineMaths
     
                                      |   bracketDelimitedInlineMaths 
    
                                      |   dollarDelimitedDisplayMaths 
    
                                      |   bracketDelimitedDisplayMaths
                                      
                                      ; 



    dollarDelimitedInlineMaths      ::=   dollarDelimiter [unassigned]+ dollarDelimiter ; 

    dollarDelimitedDisplayMaths     ::=   doubleDollarDelimiter [unassigned]+ doubleDollarDelimiter ; 

    bracketDelimitedInlineMaths     ::=   openingBracketDelimiter [unassigned]+ closingBracketDelimiter ; 
    
    bracketDelimitedDisplayMaths    ::=   openingSquareBracketDelimiter [unassigned]+ closingSquareBracketDelimiter ;
    

    
    dollarDelimiter                 ::=   "$" ;
 
    doubleDollarDelimiter           ::=   "$$" ;
    

    
    openingBracketDelimiter         ::=   "\\(" ;

    closingBracketDelimiter         ::=   "\\)" ;

    openingSquareBracketDelimiter   ::=   "\\[" ;
    
    closingSquareBracketDelimiter   ::=   "\\]" ;



    everythingElse                  ::=   .+ ;


`;

module.exports = bnf;
