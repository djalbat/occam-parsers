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

      terminalPart          ::=  significantTokenType

                              |  regularExpression

                              |  terminalSymbol

                              |  endOfLine

                              |  epsilon

                              |  wildcard

                              ;

      choiceOfParts         ::=  "(" part ( "|" part )+ ")" ;

      groupOfParts          ::=  "(" part part+ ")" ;

      ruleName              ::=  [name] ;

      significantTokenType  ::=  [type] ;

      regularExpression     ::=  [regular-expression] ;

      terminalSymbol        ::=  [string-literal] ;

      endOfLine             ::=  "<END_OF_LINE>" ;

      epsilon               ::=  "ε" ;

      wildcard              ::=  "." ;

      quantifier            ::=  optionalQuantifier

                              |  oneOrMoreQuantifier

                              |  zeroOrMoreQuantifier

                              ;

      lookAheadModifier     ::=  <NO_WHITESPACE>"!" ;

      optionalQuantifier    ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier   ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier  ::=  <NO_WHITESPACE>"*" ;

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

Note that no whitespace can only be stipulated for terminal symbols.

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
