"use strict";

import { BasicParser } from "../../index";  ///

import View from "../view";
import BasicLexer from "../basic/lexer";

export default class BasicView extends View {
  getTokens(content) {
    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          basicLexer = BasicLexer.fromEntries(entries),
          tokens = basicLexer.tokenise(content);

    return tokens;
  }

  getNode(tokens) {
    const bnf = this.getBNF(),
          basicParser = BasicParser.fromBNF(bnf),
          node = basicParser.parse(tokens);

    return node;
  }

  initialise() {
    this.assignContext();

    const { initialLexicalEntries, initialContent, initialBNF } = this.constructor,
          lexicalEntries = initialLexicalEntries, ///
          content = initialContent, ///
          bnf = initialBNF; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static initialBNF = `
  
  S   ::= A... <END_OF_LINE> ;
  
  A   ::= T ":" . ;
  
  T   ::= T_ T~* ;
  
  B   ::= T_ T~* B~T ;
  
  V   ::= . ;
  
  T_  ::= V ;
  
  T~B ::= ":" B ;
  
  B~T ::= ε ;
  
  T~  ::= B~T B~* T~B ;
  
  B~  ::= T~B T~* B~T ;

`;

  static initialContent = `f:A:M
`;

  static initialLexicalEntries = [
    {
      "unassigned": "."
    }
  ];

  static defaultProperties = {
    className: "basic"
  };
}
