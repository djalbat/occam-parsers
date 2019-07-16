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

* A BNF parser, actually a variant of [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).
* A basic parser, for illustrative purposes, and for developing new grammars.
* The Florence parser, namely the parser for the [BNF part](https://raw.githubusercontent.com/jecs-imperial/occam-parsers/master/es6/florence/bnf.js) of Occam's vernacular.

All parsers share common functionality. The last two parse content according to rules defined in the aforementioned variant of extended BNF. The BNF parser on the other hand has its rules hard-coded. These rules can be defined in the self same variant that they implement:

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

const content = `

        ...

      `,
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

You will need to explicitly define the lexical entry for custom tokens in order to get anything involving terms to parse. Try the following in the lexical entries textarea:

```
[
  {
    "custom": "(?:zero|one|successor)"
  },

  ...
]
```

Now at least the following and similar will parse:

```
Axiom (TheSuccessorOfZeroEqualsOne)
  successor(zero)=one
```

## Features

### Operators

- `*` zero or more
- `+` one or more
- `?` optional
- `!` look-ahead

These bind tightly to the symbols to their left and can be chained. Take note that both the `*+` and `?+` chains will cause an infinite loop and must be avoided. Also note that, although the BNF allows the `!` operator to be bound to any part, in practice it is ignored unless bound to a rule name part. The look-ahead functionality is described in more detail below.

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


### Look-ahead for rules

The following lexical entries...

    [
      {
        "letter": "a|b|c|d|e"
      },
      {
        "unassigned": "^.*$"
      }
    ]

...and the following BNF...

    abcde  ::=  aab! cccd e ;

      aab  ::=  "a" | "a" "b" ;

     cccd  ::=  "c" "c" | "c" "d" ;

        e  ::=  "e" ;

...will parse the string `a b c d e`, resulting in the following parse tree:

                                                   abcde(0-8)
                                                        |
                                 ----------------------------------------------
                                 |                         |                  |
                             aab(0-2)                  cccd(4-6)            e(8)
                                 |                         |                  |
                          --------------            --------------      e[letter](8)
                          |            |            |            |
                    a[letter](0) b[letter](2) c[letter](4) d[letter](6)

Note the presence of the `!` operator for the `aab` rule part in the BNF, making it look-ahead. Without it, the string will not be parsed because the `aab` rule's first definition parses the first "a" character of the string but does not permit the rule specified by the next part, namely the `cccd` rule, to parse the remainder. With look-ahead, each definition of the `aab` rule is tried until one is found that does permit progress on to the next part. In this case the second definition of the first rule permits the second `cccd` rule to be parsed. Note also that the second of the `cccd` rule's definitions is the one that is utilised. This is not because of look-ahead, but because the first definition "c" "c" simply will not parse that part of the string that remains.

It appears that without look-ahead the parser's complexity is roughly linear. With look-ahead, it is more that likely to be exponential. Therefore it is recommended that you avoid look-ahead until all the other options have been exhausted. It is worth pointing out that it makes an appearance out of necessity only a few times in the Florence BNF.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
