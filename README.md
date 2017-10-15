# Parsers

The Occam proof assistant's parsers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Features](#features)
- [Examples](#examples)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

There are three parsers in all:


* A BNF parser, actually [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).
* A basic parser, for illustrative purposes, and for developing new grammars.
* The main parser, namely the parser for the [BNF part](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/bnf.js) of Occam's vernacular, called Florence.

All parsers share common functionality. The last two parse content according to rules defined in a variant of BNF. The BNF parser on the other hand has its rules hard-coded. These rules can be defined in the self same variant that they implement: 

      rules                ::=  rule+ ;
      
      rule                 ::=  ruleName "::=" definitions ";" ;
      
      definitions          ::=  definition ( "|" definition )* ;
      
      definition           ::=  part+ ;
      
      noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;
    
      optionalPart         ::=  part<NO_WHITESPACE>"?" ;
                              
      zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;
                              
      oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;
      
      groupOfParts         ::=  "(" part+ ")" ;
      
      choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;
    
      part                 ::=  noWhitespacePart
                    
                             |  optionalPart  
                    
                             |  zeroOrMoreParts  
                    
                             |  oneOrMoreParts  
                    
                             |  groupOfParts  
                               
                             |  choiceOfParts  
                               
                             |  ruleName  
                    
                             |  regularExpression 
                    
                             |  significantTokenType 
    
                             |  terminalSymbol
                              
                             |  endOfLine
                    
                             |  epsilon
    
                             |  wildcard
                                  
                             ;
    
      ruleName             ::=  [name] ;
    
      regularExpression    ::=  [regularExpression] ;
      
      significantTokenType ::=  [type] ;
    
      terminalSymbol       ::=  [string] ;
      
      endOfLine            ::=  "<END_OF_LINE>" ;
      
      epsilon              ::=  "ε" ;
    
      wildcard             ::=  "." ;

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parsers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Parsers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Features

### Operators

- `*` zero or more
- `+` one or more
- `?` optional

These bind tightly to the symbols to their left and can be chained. However, both the `*+` and `?+` chains will cause an infinite loop and must be avoided. 

### Regular expressions

A regular expression is distinguished by the usual leading and trailing forward slashes:

    /\d+/
    
### Matching significant token types

This can be done with a symbol that is identical to the significant token type in question, contained within square brackets. For example:

     name                       ::=   [unassigned] ;

### Matching end of line tokens

This can be done with a special `<END_OF_LINE>` special symbol. For example:

     verticalSpace              ::=   <END_OF_LINE>+ ;

### Matching no whitespace

This can be done with the `<NO_WHITESPACE>` special symbol. For example:

     parenthesisedTerms         ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")" ;
        
### Grouping parts

This can be done with the brackets. For example:

     terms                      ::=   term ( "," term)* ;

### Choosing between parts

The vertical bar symbol `|` is overloaded and can be used in conjunction with brackets to choose between parts as opposed to definitions. For example:
  
     justifiedStatement         ::=   statement ( "by" | "from" ) reference <END_OF_LINE> ;


## Examples

There are three examples, one for each parser. To view them, open the `index.html` file in the `examples` directory. Each example shows a representation of the parse tree, which is useful for debugging.

### BNF example

Both the lexical patterns and BNF textareas are read-only. The content textarea initially shows the BNF parser's own BNF and so the example demonstrates, initially at least, that the BNF parser can parse its own BNF.

### Basic example

Both the lexical patterns and BNF as well as the content can be changed. Given the following BNF, for example...

      expression    ::= "(" expression ")" expression~
    
                      | term expression~ ;
    
      operator      ::= "+"
    
                      | "-"
    
                      | "/"
    
                      | "*" ;
    
      term          ::= naturalNumber ;
    
      naturalNumber ::= /\\d+/ ;
    
      expression~   ::= operator expression expression~
    
                      | ε ;
    
...the expression `1+2/3` gives the following parse tree:

                          expression(1-1)                                                     
                                 |                                                            
                 ---------------------------------                                            
                 |                               |                                            
             term(1-1)                   expression~(1-1)                                     
                 |                               |                                            
        naturalNumber(1-1)        -------------------------------                             
                 |                |                             |                             
          1[terminal](1)    operator(1-1)                expression(1-1)                      
                                  |                             |                             
                           +[terminal](1)          ---------------------------                
                                                   |                         |                
                                               term(1-1)             expression~(1-1)         
                                                   |                         |                
                                          naturalNumber(1-1)        ------------------        
                                                   |                |                |        
                                            2[terminal](1)    operator(1-1)   expression(1-1) 
                                                                    |                |        
                                                             /[terminal](1)      term(1-1)    
                                                                                     |        
                                                                            naturalNumber(1-1)
                                                                                     |        
                                                                              3[terminal](1)  

### Florence example

This uses the BNF part of Occam's vernacular, called Florence. There are also three adjunct, default custom grammars for metastatements, statements and terms:

* [es6/florence/defaultCustomGrammar/metastatementBNF.js](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/defaultCustomGrammar/metastatementBNF.js)
* [es6/florence/defaultCustomGrammar/statementBNF.js](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/defaultCustomGrammar/statementBNF.js)
* [es6/florence/defaultCustomGrammar/termBNF.js](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/defaultCustomGrammar/termBNF.js)

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Resources

* [Gate Lectures on Compiler Design by Ravindrababu Ravula](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Notes on Formal Language Theory and Parsing by James Power](http://www.cs.nuim.ie/~jpower/Courses/Previous/parsing)
* [Eliminating ambiguity in context free grammars by Rasmus Ejlers Møgelberg](http://itu.dk/people/mogel/SPLC2012/lectures/eliminatingAmbiguity.pdf)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
