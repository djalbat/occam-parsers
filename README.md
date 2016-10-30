# Parser

The Occam proof assistant's parser.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Features](#features)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

Supports a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) and parses tokens provided by Occam's [lexers](https://github.com/occam-proof-assistant/Lexers) accordingly. The following, taken from the basic example, shows some features of this variant:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

      operator                   ::= + | - | * | /

      term                       ::= naturalNumber

                                   | parenthesizedExpr

      naturalNumber              ::= /^\\d+$/

      parenthesizedExpr          ::= ( expr )

Note that grouping is not allowed. You cannot do this:

      expr                       ::= term (operator term)*

Instead you have to do this:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

One reason for this is to keep both the BNF parser and lexer as simple as possible. The other reason is that terminal symbols aren't quoted, and so in this case the `(` and `)` characters aren't reserved. By not quoting terminal symbols the BNF becomes easier to read and write, however a regular expression defining the terminal symbols must be provided to the parser in order to allow it to distinguish terminal symbols in the absence of quotes.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parser

You can also clone the repository with [git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Parser.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

Although there is only one parser, aside from the internal BNF parser that is, just like the [Lexers](https://github.com/occam-proof-assistant/Lexers) project there are three examples. Unlike the Lexers project, however, the examples are a little edifying. They show a representation of the parse tree, which is useful for writing and debugging grammars. For example, here is the parse tree corresponding to the expression `1+(2*3)` given the grammar in the introduction:

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

### Basic example

Both the grammar and the terminal symbols regular expression pattern can be changed dynamically. The terminal symbols regular expression is passed to both the parser and the lexer. The lexer uses it to split up the content into tokens, the parser uses it to distinguish terminal symbols in the grammar. For example, each of the arithmetic symbols on the right hand side of the `operator` production can be found in the terminal symbols regular expression pattern.

### Florence example

This uses the [BNF grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Parser/master/es6/grammar/florence.js) of Occam's Florence specification language. The following inference rule and proof from propositional logic will parse...

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

...as will the following well known theorem and proof:

    Theorem (TheSquareRootOfTwoIsIrrational)
      Conclusion
        ¬∃r (r:IrreducibleFraction ∧ r=√2)
      Proof
        Suppose
          ∃r (r:IrreducibleFraction ∧ r=√2)
        Then
          r:IrreducibleFraction ∧ r=√2
        Hence
          r:IrreducibleFraction
        ∃r (r:IrreducibleFraction ∧ r=√2)=>r:IrreducibleFraction

        Suppose
          ∃r (r:IrreducibleFraction ∧ r=√2)
        Then
          r=√2
          p/q=r
          p/q=√2
          p=q√2
          p²=2q²
          p²:EvenNumber
          p²:SquareNumber
          p:EvenNumber by TheSquareRootOfAnEvenSquareNumberIsEven
          2|p
          p=2m
          p²=4m²
          2q²=4m²
          q²=2m²
          q²=2n
          q²:EvenNumber
          q²:SquareNumber
          q:EvenNumber by TheSquareRootOfAnEvenSquareNumberIsEven
          2|q
          2|p ∧ 2|q
          ∃s:Nat s|p ∧ s|q ∧ s≠1
        Hence
          ¬r:IrreducibleFraction
        ∃r (r:IrreducibleFraction ∧ r=√2)=>¬r:IrreducibleFraction

      Therefore
        ¬∃r (r:IrreducibleFraction ∧ r=√2) by ProofByNegation

### Gallina example

This uses the [BNF grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Parser/master/es6/grammar/gallina.js) of the Gallina specification language. Bear in mind that this is not the same as the official Gallina specification, which uses a different variant of extended BNF.

The following nonsensical axiom will parse...

    Axiom (ident : 10).

..., resulting in the following parse tree:

                                                      sentence
                                                          |
                                                     assumption
                                                          |
                    ----------------------------------------------------------------------------
                    |                                       |                                  |
           assumption_keyword                            assums                           .[special]
                    |                                       |
             Axiom[keyword]                          assumInBrackets
                                                            |
                                   --------------------------------------------------
                                   |                        |                       |
                              ([special]                  assum                )[special]
                                                            |
                                               --------------------------
                                               |           |            |
                                         ident[ident] :[special]      term
                                                                        |
                                                                    --------
                                                                    |      |
                                                                 10[num] term'
                                                                           |
                                                                           ε

Those familiar with recursive descent parsers should recognise a `term` production that avoids left recursion:

    term' ::= : term term'

            |   <: term term'

            |   :> term'

            |   -> term term'

            |   arg+ term'

            |   % ident term'

            |   ε

The Gallina grammar is very much a work in progress for two reasons. Firstly, the official specification is somewhat informal and appears to be incomplete or at least a little out of date. Secondly, the Coq proof assistant supports extensible grammars. Eventually the Occam proof assistant will support these, too.

## Features

Aside from the aforementioned support for terminal symbols that do not require quotes, the BNF grammar has the following features:

### Operators

- `*` zero or more
- `+` one or more
- `?` optional

These bind tightly to symbols and can therefore be re-used as terminal symbols in their own right. Recall the grammar in the introduction, which re-uses `*` and `+` as terminal symbols.

### Regular expressions

These are probably best avoided in production grammars but are useful for illustrative purposes. Note that the regular expression for natural numbers finds its way both into the BNF grammar and the terminal symbols regular expression in the basic example. In the BNF grammar the regular expression includes leading and trailing anchors:

    /^\d+$/

Recall that the terminal symbols regular expression is also passed to the lexer, which will pick out matching content as individual tokens. Hence the anchors in the BNF grammar's regular expression are matched although they are not strictly needed.

### Matching token types

This can be done with a symbol that is identical to the token type in question. Recall that the [lexical grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js) of the Florence specification language defines `unassigned` tokens. These are used in the production for labels in the BNF grammar:

     label ::= unassigned

Note that there is a possibility of overloading a symbol in these cases and that this is best avoided. A production called `unassigned`, for example, may not give the desired behaviour.

### Matching end of line tokens

This can be done with the `<END_OF_LINE>` special symbol, which will also bind to operators. For example the production for theorem declarations in the Florence specification language:

    theoremDeclaration ::= Theorem parenthesisedLabel? <END_OF_LINE>+

### Matching no whitespace

This can be done with the `<NO_WHITESPACE>` special symbol. Examples are the `access_ident` and `qualid` productions in the Gallina BNF grammar:

    access_ident ::= .<NO_WHITESPACE>ident

    qualid       ::= ident<NO_WHITESPACE>access_ident*

The `<NO_WHITESPACE>` special symbol will bind more tightly to the symbol to its right than any operator and will therefore be used repeatedly. Since a `term` can be a `qualid` the following nonsensical axiom will parse:

    Axiom (ident : a.b.c).

The relevant part of the parse tree is as follows:

                                                             term
                                                               |
                                                ------------------------------
                                                |                            |
                                             qualid                        term'
                                                |                            |
                              ------------------------------------           ε
                              |              |                   |
                          a[ident]     access_ident        access_ident
                                             |                   |
                                        -----------         -----------
                                        |         |         |         |
                                   .[special] b[ident] .[special] c[ident]

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

The Florence and Gallina grammars are defined in the `grammar.js` files found in the `es6/florence` and `es6/gallina` directories, respectively.

## Resources

* [The Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html)
* [Gate lectures by Ravindrababu Ravula on Compiler Design](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Eliminating ambiguity in context free grammars by Rasmus Ejlers Møgelberg](http://itu.dk/people/mogel/SPLC2012/lectures/eliminatingAmbiguity.pdf)
* [BNF and EBNF: What are they and how do they work? by Lars Marius Garshol](http://www.garshol.priv.no/download/text/bnf.html#id2.3.)
* [Introduction to Grammar and Parsing using the Recursive Descent Parser algorithm ACT talk by Eric Nielsen](https://www.youtube.com/watch?v=9jSSSE2FuLU)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
