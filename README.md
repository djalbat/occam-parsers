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


      document              ::=  ( rule | error )+ ;

      rule                  ::=  name "::=" definitions ";" ;

      name                  ::=  [name] ;

      definitions           ::=  definition ( "|" definition )* ;

      definition            ::=  part+ ;

      part                  ::=  nonTerminalPart quantifier*

                              |  "<NO_WHITESPACE>"? terminalPart quantifier*

                              ;

      nonTerminalPart       ::=  choiceOfParts

                              |  groupOfParts

                              |  ruleName lookAheadModifier?

                              ;

      terminalPart          ::=  regularExpression

                              |  significantTokenType

                              |  terminalSymbol

                              |  endOfLine

                              |  epsilon

                              |  wildcard

                              ;

      choiceOfParts         ::=  "(" part ( "|" part )+ ")" ;

      groupOfParts          ::=  "(" part part+ ")" ;

      ruleName              ::=  [name] ;

      regularExpression     ::=  [regular-expression] ;

      significantTokenType  ::=  [type] ;

      terminalSymbol        ::=  [string-literal] ;

      endOfLine             ::=  "<END_OF_LINE>" ;

      epsilon               ::=  "ε" ;

      wildcard              ::=  "." ;

      quantifier            ::=  optionalQuantifier

                              |  zeroOrMoreQuantifier

                              |  oneOrMoreQuantifier

                              ;

      optionalQuantifier    ::=  <NO_WHITESPACE>"?" ;

      zeroOrMoreQuantifier  ::=  <NO_WHITESPACE>"*" ;

      oneOrMoreQuantifier   ::=  <NO_WHITESPACE>"+" ;

      lookAheadModifier     ::=  <NO_WHITESPACE>"!" ;

      error                 ::=  . ;

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

```
  expression    ::= expression_ expression~

                  | expression_

                  ;

  expression_   ::= "(" expression ")"

                  | term

                  ;

  expression~   ::= operator expression expression~? ;

  operator      ::= "+"

                  | "-"

                  | "/"

                  | "*"

                  ;

  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;
```
...the expression `1+2/3` gives the following parse tree:

```
                                                         expression(0-6)
                                                                |
                                       --------------------------------------------------
                                       |                                                |
                               expression_(0-4)                                 expression~(5-6)
                                       |                                                |
       -----------------------------------------------------------              -----------------
       |                           |                             |              |               |
([terminal](0)              expression(1-3)               )[terminal](4)   operator(5)    expression(6)
                                   |                                            |               |
                       -------------------------                         /[terminal](5)  expression_(6)
                       |                       |                                                |
                expression_(1)         expression~(2-3)                                      term(6)
                       |                       |                                                |
                    term(1)            -----------------                                naturalNumber(6)
                       |               |               |                                        |
               naturalNumber(1)   operator(2)    expression(3)                            3[terminal](6)
                       |               |               |
                1[terminal](1)  +[terminal](2)  expression_(3)
                                                       |
                                                    term(3)
                                                       |
                                               naturalNumber(3)
                                                       |
                                                2[terminal](3)
```
A more intuitive BNF would be the following:

```
  expression    ::= "(" expression ")"

                  | expression operator expression

                  | term

                  ;

  operator      ::= "+"

                  | "-"

                  | "/"

                  | "*"

                  ;

  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;
```
For an explanation of why this will not work, see Occam's [grammar utilities](https://github.com/jecs-imperial/occam-grammar-utilities).

### Florence example

The following and similar simple rules will parse:

```
Rule (Transitivity)
  Premises
    A = B
    B = C
  Conclusion
    A = C
```
Anything involving terms is unlikely to parse because of the lack of user defined custom grammars. For an explanation, see Occam's [custom grammars](https://github.com/jecs-imperial/occam-custom-grammars).

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


### Look-ahead

Consider the following rules:

      ABC  ::=  AAB BC ;

      AAB  ::=  "a" "b" | "a";

       BC  ::=  "b" "c" ;

This will not parse the tokens `a`, `b`, `c` because the first definition of the `AAB` rule will parse the `a` and `b` tokens, leaving only the `c` token for the `BC` rule to parse. This situation can be addressed by making the `AAB` rule look ahead, that is, try each of its definitions in turn until one is found that allows the next rule to parse. The look-ahead modifier is an exclamation mark, thus the rules above become:

      ABC  ::=  AAB! BC ;

      AAB  ::=  "a" "b" | "a";

       BC  ::=  "b" "c" ;

Now the `ABC` rule will indeed parse the tokens `a`, `b`, `c`, because the second definition of the `AAB` rule will be tried after the first definition fails to allow the `BC` rule to parse.

It seems that the parser parses with roughly linear complexity as a function of the length of the input, however it is most likely that look-ahead parses take exponential time. For this reason, look-ahead should be used sparingly.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
