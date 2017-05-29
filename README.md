# Parsers

The Occam proof assistant's parsers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Features](#features)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

There are three parsers in all:

* A primitive to parse a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form), hardly a parser at all in fact.
* A basic parser, for illustrative purposes.
* The main parser, namely the parser for the BNF grammar part of Occam's vernacular, called Florence.

All parsers bar the primitive parser share common patterns and functionality. The last two parse content according to productions defined in the aforementioned variant of extended BNF. The following, taken from the basic example, shows some features of this variant:

    expression                 ::= term operatorThenTerm*
    
    operatorThenTerm           ::= operator term
    
    operator                   ::= '+' | '-' | '*' | '/'
    
    term                       ::= naturalNumber | parenthesizedExpression
    
    naturalNumber              ::= /^\\d+$/
    
    parenthesizedExpression    ::= '(' expression ')'

Note that grouping is not allowed. You cannot do this:

    expression                 ::= term (operator term)*

Instead you have to do this:

    expression                 ::= term operatorThenTerm*
    
    operatorThenTerm           ::= operator term

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parsers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Parsers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

There are two examples. To view them, open the `examples.html` file in the project's root directory. Each example shows a representation of the parse tree, which is useful for writing and debugging grammars.

### Basic example

Both the lexical and BNF grammars as well as the content can be changed dynamically. Here is the parse tree produced by the basic parser corresponding to the expression `1+(2*3)`, given the grammar in the introduction:

                              expression
                                  |
                  ---------------------------------
                  |                               |
                term                      operatorThenTerm
                  |                               |
            naturalNumber      ---------------------------------------
                  |            |                                     |
             1[terminal]   operator                                term
                               |                                     |
                          +[terminal]                     parenthesizedExpression
                                                                     |
                                           -----------------------------------------------------
                                           |                      |                            |
                                      ([terminal]             expression                  )[terminal]
                                                                  |
                                                        ---------------------
                                                        |                   |
                                                      term          operatorThenTerm
                                                        |                   |
                                                  naturalNumber      --------------
                                                        |            |            |
                                                   2[terminal]   operator       term
                                                                     |            |
                                                                *[terminal] naturalNumber
                                                                                  |
                                                                             3[terminal]

### Florence example

This uses the [BNF grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/grammar.js) of Occam's vernacular, called Florence. The following inference rule and proof from propositional logic should parse, for example:

    Rule (NegationOfConjunctionOfNegationsImpliesDisjunction)
      Premise
        ¬(¬P∧¬Q)
      Conclusion
        P∨Q
      Proof
        Suppose
          Q
        Hence
          P∨Q
        Q=>P∨Q
        Suppose
          ¬Q
        Then
          Suppose
            ¬P
          Hence
            ¬P∧¬Q
          ¬P=>(¬P∧¬Q)
          ¬(¬P∧¬Q)
          ¬¬P by ModusTollens
          P by DoubleNegationElimination
        Hence
          P∨Q
        ¬Q=>P∨Q
        Q∨¬Q by LawOfTheExcludedMiddle
      Therefore
        P∨Q by DisjunctionElimination
        
## Features

### Operators

- `*` zero or more
- `+` one or more
- `?` optional

These bind tightly to symbols and can therefore be re-used as terminal symbols in their own right. Recall the grammar in the introduction, which re-uses `*` and `+` as terminal symbols.

### Regular expressions

A regular expression is distinguished by the usual leading and trailing anchors:

    /^\d+$/

### Matching significant token types

This can be done with a symbol that is identical to the significant token type in question, contained within square brackets:

    label                ::= [unassigned]

### Matching end of line tokens

This can be done with the `<END_OF_LINE>` special symbol:

    verticalSpace        ::=   <END_OF_LINE>+

The `<END_OF_LINE>` special symbol will bind more tightly to the symbol to its right than any operator.

### Matching no whitespace

This can be done with the `<NO_WHITESPACE>` special symbol:

    parenthesisedLabels  ::=   '('<NO_WHITESPACE>labels<NO_WHITESPACE>')'

The `<NO_WHITESPACE>` special symbol will also bind more tightly to the symbol to its right than any operator.

### Mappings

Mappings allow specific classes to be associated with with certain production names. They can be used to prune the parse tree as it is generated by discarding needless nodes.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Resources

* [Notes on Formal Language Theory and Parsing](http://www.cs.nuim.ie/~jpower/Courses/Previous/parsing/node1.html)
* [Gate lectures by Ravindrababu Ravula on Compiler Design](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Eliminating ambiguity in context free grammars by Rasmus Ejlers Møgelberg](http://itu.dk/people/mogel/SPLC2012/lectures/eliminatingAmbiguity.pdf)
* [BNF and EBNF: What are they and how do they work? by Lars Marius Garshol](http://www.garshol.priv.no/download/text/bnf.html#id2.3.)
* [Introduction to Grammar and Parsing using the Recursive Descent Parser algorithm ACT talk by Eric Nielsen](https://www.youtube.com/watch?v=9jSSSE2FuLU)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
