# Parser

The Occam proof assistant's parser.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

Supports a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) and parses tokens provided by Occam's [lexers](https://github.com/occam-proof-assistant/Lexers) accordingly. The following, taken from the basic example, shows some features of this variant:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

      operator                   ::= + | - | * | /

      term                       ::= naturalNumber

                                   | parenthesizedExpr

      naturalNumber              ::= /\\d+/

      parenthesizedExpr          ::= ( expr )

Note that grouping is not allowed. You cannot do this:

      expr                       ::= term (operator term)*

Instead you have to do this:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

One reason for this is to keep both the BNF parser and lexer as simple as possible. The other reason is that terminal symbols aren't quoted, so in this case for example the `(` and `)` characters aren't reserved. By not quoting terminal symbols the BNF becomes easier to read and write, however a regular expression pattern defining the terminal symbols must be provided in order to allow the parser to distinguish terminal symbols in the absence of quotes.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parser

You can also clone the repository with [git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Parser.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

Although there is only one parser, aside from the internal BNF parser that is, just like the [Lexers](https://github.com/occam-proof-assistant/Lexers) project there are three examples. Unlike the Lexers project, however, the examples are a little edifying. They show a representation of the parse tree, which is useful both for writing and debugging grammars. Here is the parse tree corresponding to the expression `1+(2*3)` given the intial grammar in the basic example:

                        expr
                          |
          ---------------------------------
          |                               |
        term                      operatorThenTerm
          |                               |
    naturalNumber      ---------------------------------------
          |            |                                     |
      1[regexp]    operator                                term
                       |                                     |
                  +[terminal]                        parenthesizedExpr
                                                             |
                                   -----------------------------------------------------
                                   |                      |                            |
                              ([terminal]               expr                      )[terminal]
                                                          |
                                                ---------------------
                                                |                   |
                                              term          operatorThenTerm
                                                |                   |
                                          naturalNumber      --------------
                                                |            |            |
                                            2[regexp]    operator       term
                                                             |            |
                                                        *[terminal] naturalNumber
                                                                          |
                                                                      3[regexp]

To view the examples, open the `examples.html` file in the project's root directory.

## Resources

* [Gate lectures by Ravindrababu Ravula on Compiler Design](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Introduction to Grammar and Parsing using the Recursive Descent Parser algorithm ACT talk by Eric Nielsen](https://www.youtube.com/watch?v=9jSSSE2FuLU)
* [Eliminating ambiguity in context free grammars by Rasmus Ejlers Møgelberg](http://itu.dk/people/mogel/SPLC2012/lectures/eliminatingAmbiguity.pdf)
* [BNF and EBNF: What are they and how do they work? by Lars Marius Garshol](http://www.garshol.priv.no/download/text/bnf.html#id2.3.)
* [The Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
