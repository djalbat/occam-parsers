"use strict";

const bnf = `


    document                        ::=   ( delimitedLaTeX | everythingElse )+ ;
    
    
    
    delimitedLaTeX                  ::=   dollarDelimiter inlineLaTeX dollarDelimiter 
    
                                      |   doubleDollarDelimiter displayLaTeX doubleDollarDelimiter 
    
                                      |   openingBracketDelimiter inlineLaTeX closingBracketDelimiter 
    
                                      |   openingSquareBracketDelimiter displayLaTeX closingSquareBracketDelimiter 
                                      
                                      ;
    

    
    inlineLaTeX                     ::=   [unassigned]* ;

    displayLaTeX                    ::=   [unassigned]* ;



    dollarDelimiter                 ::=   "$" ;
 
    doubleDollarDelimiter           ::=   "$$" ;
    

    
    openingBracketDelimiter         ::=   "\\(" ;

    closingBracketDelimiter         ::=   "\\)" ;

    openingSquareBracketDelimiter   ::=   "\\[" ;
    
    closingSquareBracketDelimiter   ::=   "\\]" ;
    
    
    
    everythingElse                  ::=   . ;


`;

export default bnf;
