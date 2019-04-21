# Parsers

[Occam](https://github.com/jecs-imperial/occam)'s parsers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Features](#features)
- [Building](#building)
- [Contact](#contact)

## Introduction

Three parsers are documented:

* A BNF parser, actually [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).
* A basic parser, for illustrative purposes, and for developing new grammars.
* The Florence parser, namely the parser for the [BNF part](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/bnf.js) of Occam's vernacular.

All parsers share common functionality. The last two parse content according to rules defined in a variant of BNF. The BNF parser on the other hand has its rules hard-coded. These rules can be defined in the self same variant that they implement: 

      document             ::=  ( rule | error )+ ;
      
      rule                 ::=  name "::=" definitions ";" ;
      
      definitions          ::=  definition ( "|" definition )* ;
      
      definition           ::=  part+ ;
      
      noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;
    
      optionalPart         ::=  part<NO_WHITESPACE>"?" ;
                              
      zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;

      oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;
      
      lookAheadPart        ::=  part<NO_WHITESPACE>"!" ;

      groupOfParts         ::=  "(" part part+ ")" ;
      
      choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;
    
      part                 ::=  noWhitespacePart
                    
                             |  optionalPart  
                    
                             |  zeroOrMoreParts
                    
                             |  oneOrMoreParts  
                    
                             |  lookAheadPart

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
    
      name                 ::=  [name] ;

      ruleName             ::=  [name] ;
    
      regularExpression    ::=  [regular-expression] ;
      
      significantTokenType ::=  [type] ;
    
      terminalSymbol       ::=  [string-literal] ;
      
      endOfLine            ::=  "<END_OF_LINE>" ;
      
      epsilon              ::=  "ε" ;
    
      wildcard             ::=  "." ;

      error                ::=  . ;

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parsers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-parsers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Usage

```js
const lexers = require('occam-lexers'),
      parsers = require('occam-parsers';

const { FlorenceLexer } = lexers,
      { FlorenceParser } = parsers;

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

const content = ...,
      tokens = florenceLexer.tokenise(content),
      node = florenceParser.parse(tokens);

...
```

## Examples

There are three examples, one for each parser. To view them, open the `index.html` file in the root of the repository. Each example shows a representation of the parse tree, which is useful for debugging.

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

This uses the BNF part of Occam's vernacular, called Florence.

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

     terms                      ::=   term ( "," term )* ;

### Choosing between parts

The vertical bar symbol `|` is overloaded and can be used in conjunction with brackets to choose between parts as opposed to definitions. For example:

     justifiedStatement         ::=   statement ( "by" | "from" ) reference <END_OF_LINE> ;

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
