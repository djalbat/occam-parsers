"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import RuleNameInput from "./input/ruleName";
import TokensTextarea from "./textarea/tokens";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

class View extends Element {
  getTokens() {
    const { Lexer } = this.constructor,
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          lexer = Lexer.fromEntries(entries),
          content = this.getContent(),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  getParseTree(tokens) {
    let parseTree = null;

    const { Parser } = this.constructor,
          bnf = this.getBNF(),
          parser = Parser.fromBNF(bnf),
          ruleName = this.getRuleName(),
          ruleMap = parser.getRuleMap(),
          rule = ruleMap[ruleName],
          node = parser.parse(tokens, rule);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  keyUpHandler(event, element) {
    // try {
      const tokens = this.getTokens(),
            parseTree = this.getParseTree(tokens);

      this.setTokens(tokens);

      this.setParseTree(parseTree);
    // } catch (error) {
    //   console.log(error);
    //
    //   this.clearTokens();
    //
    //   this.clearParseTree();
    // }
  }

  childElements() {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical entries
            </SubHeading>
            <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Rule name
            </SubHeading>
            <RuleNameInput onKeyUp={keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Tokens
            </SubHeading>
            <TokensTextarea />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { Lexer, Parser, initialContent } = this.constructor,
          { bnf } = Parser,
          { entries } = Lexer,
          content = initialContent, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;