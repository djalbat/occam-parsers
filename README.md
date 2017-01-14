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

Supports a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) and parses tokens provided by Occam's [lexers](https://github.com/occam-proof-assistant/Lexers) accordingly. The following, taken from the basic example, shows some features of this variant:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

      operator                   ::= + | - | * | /

      term                       ::= naturalNumber

                                   | parenthesizedExpr

      naturalNumber              ::= /^\d+$/

      parenthesizedExpr          ::= ( expr )

Note that grouping is not allowed. You cannot do this:

      expr                       ::= term (operator term)*

Instead you have to do this:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

One reason for this is to keep both the BNF parser and lexer as simple as possible. The other reason is that terminal symbols aren't quoted, and so in this case the `(` and `)` characters aren't reserved. By not quoting terminal symbols the BNF becomes easier to read and write, however a regular expression defining the terminal symbols must be provided to the parser in order to allow it to distinguish terminal symbols in the absence of quotes.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parsers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Parsers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

There are three examples. They show a representation of the parse tree, which is useful for writing and debugging grammars. For example, here is the parse tree corresponding to the expression `1+(2*3)` given the grammar in the introduction:

                                expr
                                  |
                  ---------------------------------
                  |                               |
                term                      operatorThenTerm
                  |                               |
            naturalNumber      ---------------------------------------
                  |            |                                     |
             1[terminal]   operator                                term
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
                                                   2[terminal]   operator       term
                                                                     |            |
                                                                *[terminal] naturalNumber
                                                                                  |
                                                                             3[terminal]

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

This uses the [BNF grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/grammar.js) of Occam's Florence specification language. The following inference rule and proof from propositional logic will parse...

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

This uses the [BNF grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/gallina/grammar.js) of the Gallina specification language. Bear in mind that this is not the same as the official Gallina specification, which uses a different variant of extended BNF.

The following nonsensical axiom will parse...

    Axiom (ident : 10).

...and will result in the following parse tree:

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

            | <: term term'

            | :> term'

            | -> term term'

            | arg+ term'

            | % ident term'

            | ε

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

This can be done with a symbol that is identical to the token type in question, contained within square brackets. Recall that the [lexical grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/grammar.js) of the Florence specification language defines `unassigned` tokens. These are used in the production for labels in the BNF grammar:

    label ::= [unassigned]

### Matching end of line tokens

This can be done with the `<END_OF_LINE>` special symbol, which will also bind to operators. For example the production for axioms in the Florence specification language:

    axiom ::= Axiom parenthesisedLabels? ↲ localVariable(s)? premise(s)? conclusion

    ↲     ::=   <END_OF_LINE>+

### Matching no whitespace

This can be done with the `<NO_WHITESPACE>` special symbol. Examples are the `access_ident` and `qualid` productions in the Gallina BNF grammar:

    access_ident ::= .<NO_WHITESPACE>ident

    qualid       ::= ident<NO_WHITESPACE>access_ident*

The `<NO_WHITESPACE>` special symbol will bind more tightly to the symbol to its right than any operator and will therefore be used repeatedly. Since a `term` can be a `qualid` the following nonsensical axiom will parse:

    Axiom (ident : a.b.c).

### Mappings

Mappings allow the parse tree to be simplified by throwing away needless nodes. For example, given the following mappings...

    mappings = {
      'part': TransparentNode,
      'label': LabelNode,
      'rule': MissingFirstChildNode,
      'premise': TransparentThenSecondNode,
      'premises': TransparentThenMissingFirstNode,
      'conclusion': MissingFirstChildNode,
      'endsOfLines': MissingNode,
      'commaThenLabel': TransparentThenSecondNode,
      'parenthesisedLabels': TransparentThenSecondNode,
      '(labelled)statement': TransparentNode
    }

...the following rule will parse...

    Rule (PrincipleOfExplosion)
      Premise
        ⌐P
      Conclusion
        P=>Q

...and result in the much simplified parse tree. Note by the way the mistake in the parsing of the conclusion statement, because the implies symbols `=>` are missing from the Florence grammar:

                                                  document
                                                      |
                                                    rule
                                                      |
                             --------------------------------------------------
                             |                     |                          |
                          labels              premise(s)                 conclusion
                             |                     |                          |
                PrincipleOfExplosion[label]    statement                  statement
                                                   |                          |
                                                symbol           ---------------------------
                                                   |             |            |            |
                                            ⌐P[unassigned]    symbol       symbol       symbol
                                                                 |            |            |
                                                           P[unassigned] =[special] >Q[unassigned]

Mappings to the `MissingNode` class, for example, will result in the corresponding node and all its child nodes being removed from the parse tree. Mappings to the `TransparentNode` class similarly results in the corresponding node being removed from the parse tree, however the child nodes remain and are effectively moved up to replace the removed node.

Custom nodes can also be defined. The following `LabelNode` class acts transparently but also adjusts the type of the underlying significant token:

    class LabelNode {
      static fromNodes(nodes, productionName) {
        var childNodes = nodes, ///
            firstChildNode = first(childNodes),
            terminalNode = firstChildNode,  ///
            significantToken = terminalNode.getSignificantToken(),
            significantTokenType = 'label'; ///

        significantToken.setType(significantTokenType);

        nodes = [terminalNode]; ///

        return nodes;
      }
    }

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
