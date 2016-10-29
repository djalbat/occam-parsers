# Parser

The Occam proof assistant's parser.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

Supports a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) and parses tokens provided by Occam's [lexers](https://github.com/occam-proof-assistant/Lexers) accordingly. The following, taken from the basic example, shows some features of the variant of extended BNF:

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

One reason is to keep both the BNF parser and lexer as simple as possible. The other reason is that terminal symbols aren't quoted, therefore in this case the `(` and `)` characters aren't reserved. By not quoting terminal symbols the BNF becomes easier to read and write, however a regular expression pattern defining the terminal symbols must be provided in order to allow the parser to distinguish terminal symbols in the absence of quotes.

## Resources

* [Gate lectures by Ravindrababu Ravula on Compiler Design](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Introduction to Grammar and Parsing using the Recursive Descent Parser algorithm ACT talk by Eric Nielsen](https://www.youtube.com/watch?v=9jSSSE2FuLU)
* [Eliminating ambiguity in context free grammars by Rasmus Ejlers Møgelberg](http://itu.dk/people/mogel/SPLC2012/lectures/eliminatingAmbiguity.pdf)
* [BNF and EBNF: What are they and how do they work? by Lars Marius Garshol](http://www.garshol.priv.no/download/text/bnf.html#id2.3.)
* [The Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
