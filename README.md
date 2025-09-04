# Occam Parsers

[Occam](https://github.com/djalbat/occam)'s parsers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Usage](#usage)
- [Features](#features)
- [Building](#building)
- [Contact](#contact)

## Introduction

Three parsers are documented:

* A BNF parser, actually a variant of [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).
* A basic parser, for illustrative purposes, and for developing new grammars.
* The common parser, which can be extended.

All parsers share common functionality. The last two parse content according to rules defined in the aforementioned variant of extended BNF. The BNF parser on the other hand has its rules hard-coded. These rules can be defined in the self same variant that they implement:

      document                 ::=  ( rule | error )+ ;

      rule                     ::=  name opacityModifier? "::=" definitions ";" ;

      name                     ::=  [name] ;

      definitions              ::=  definition ( "|" definition )* ;

      definition               ::=  part+ precedence? ;
 
      part                     ::=  nonTerminalPart quantifier*

                                 |  terminalPart quantifier*
                              
                                 ;

      nonTerminalPart          ::=  choiceOfParts

                                 |  sequenceOfParts

                                 |  ruleName callAheadModifier?

                                 ;

      terminalPart             ::=  significantTokenType
  
                                 |  regularExpression
 
                                 |  stringLiteral
  
                                 |  endOfLine
  
                                 |  wildcard
  
                                 |  epsilon

                                 |  noWhitespace
  
                                 |  startOfContent

                                 ;
                              
      startOfContentPart       ::+  "<START_OF_CONTENT>"; 
      
      noWhitespacePart         ::=  "<NO_WHITESPACE>" ;                              

      sequenceOfParts          ::=  "(" part part+ ")" ;

      choiceOfParts            ::=  "(" part precedence? ( "|" part precedence? )+ ")" ;

      ruleName                 ::=  [name] ;

      significantTokenType     ::=  [type] ;

      regularExpression        ::=  [regular-expression] ;

      stringLiteral            ::=  [string-literal] ;

      precedence               ::=  "(" [number]? ")" ;
      
      endOfLine                ::=  "<END_OF_LINE>" ;
      
      wildcard                 ::=  "." ;

      epsilon                  ::=  "ε" ;

      quantifier               ::=  optionalQuantifier
 
                                 |  oneOrMoreQuantifier
  
                                 |  zeroOrMoreQuantifier
  
                                 ;

      opacityModifier          ::=  <NO_WHITESPACE>( "." | ".." );

      callAheadModifier        ::=  <NO_WHITESPACE>"..." ;

      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;

      error.                   ::=  . ;

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parsers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-parsers.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Examples

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The examples will then be available at the following URL:

http://localhost:8888

The source for the examples can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the examples whilst reading what follows. You can rebuild them on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Import the requisite parser and its corresponding lexer from this package and the `occam-lexers` package, respectively. Then call their `fromNothing(...)` factory methods.

```
import { BasicLexer } from "occam-lexers";
import { BasicParser } from "occam-parsers"

const basicLexer = BasicLexer.fromNothing(),
      basicParser = BasicParser.fromNothing();

const content = `

        ...

      `,
      tokens = basicLexer.tokenise(content),
      node = basicParser.parse(tokens);

...
```
The tokens returned from the lexers's `tokenise(...)` method can be passed directly to the parser's `parse(...)` method, which itself returns a node or `null`.

## Features

### Quantifiers

- `*` zero or more
- `+` one or more
- `?` optional

These bind tightly to the symbols to their left and can be chained. Take note that both the `*+` and `?+` chains will cause an infinite loop and must be avoided.

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

     parenthesisedTerms         ::=   <NO_WHITESPACE>"(" terms <NO_WHITESPACE>")" ;

It is conventional to leave no whitespace between the symbol and its subsequent part.

### Sequences of parts

This can be done with the brackets. For example:

     terms                      ::=   term ( "," term )* ;

### Choosing between parts

The vertical bar symbol `|` is overloaded and can be used in conjunction with brackets to choose between parts as opposed to definitions. For example:

     justifiedStatement         ::=   statement ( "by" | "from" ) reference <END_OF_LINE> ;


### Look-ahead

Consider the following rules:

      ABC  ::=  AAB BC ;

      AAB  ::=  "a" "b" | "a" ;

       BC  ::=  "b" "c" ;

These will not parse the tokens `a`, `b`, `c` because the first definition of the `AAB` rule will parse the `a` and `b` tokens, leaving only the `c` token for the `BC` rule to parse. This situation can be addressed by making the `AAB` rule call ahead, that is, try each of its definitions in turn until one is found that allows the remainder of the parent rule to parse. The call-ahead modifier is an ellipsis, thus the rules above become:

      ABC  ::=  AAB... BC ;

      AAB  ::=  "a" "b" | "a" ;

       BC  ::=  "b" "c" ;

Now the `ABC` rule will indeed parse the tokens `a`, `b`, `c`, because the second definition of the `AAB` rule will be tried after the first definition fails to allow the `BC` rule name part to parse.

Also bear in mind that call-ahead is carried out to arbitrary depth and this it affects the behaviour of the `?`, `*` and `+` quantifiers, which become lazy. For example:

    ABC  ::=  AAB... ;

    AAB  ::=  "a" "b"+ "b" "c" ;

Here the call-ahead modifier on the `AAB` rule name part forces the `+` quantifier on the `"b"` terminal part to be lazy, allowing the following to parse:

    a b b b c

Without call-ahead, the `"b"+` part would consume all of the `b` tokens, leaving none for the subsequent `"b"` terminal part.

It seems that the parser parses in time that is roughly directly proportional to the length of the input. However, on the ohter hand it is most likely that call-ahead takes exponential time given its nested nature. For this reason, call-ahead should be used sparingly.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Contact

* james.smith@djalbat.com

