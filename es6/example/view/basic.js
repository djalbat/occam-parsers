"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

const entries = [

  { "bracket": "^(?:\\(|\\))" },

  { "special": "^(?:=>|EOL|EOF)" },

  { "unassigned": "^." }

];

const bnf = `

    unqualifiedStatement ::= "X" _statement! "EOL";
    
    _statement           ::= "a" ;
                           
    dummy                ::= "(" . ")" ;

    expression           ::= "(" . ")" "=>" . ;
    
    statement            ::= _statement ;
  
  `;

export default class BasicView extends View {
  Lexer = class extends BasicLexer {
    static entries = entries;
  };

  Parser = class extends BasicParser {
    static bnf = bnf;
  };

  heading = "Basic parser example";

  initialContent = `X a
          
    EOL
    
   `; ///`"(1+2)/3";

  static defaultProperties = {
    className: "basic"
  };
}
