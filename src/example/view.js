"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import BNFTextarea from "./view/textarea/bnf";
import RuleNameInput from "./view/input/ruleName";
import TokensTextarea from "./view/textarea/tokens";
import ContentTextarea from "./view/textarea/content";
import ParseTreeTextarea from "./view/textarea/parseTree";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

class View extends Element {
  keyUpHandler = (event, element) => {
    // try {
      const content = this.getContent(),
            tokens = this.getTokens(content),
            node = this.getNode(tokens);

      this.setTokens(tokens);

      if (node !== null) {
        const parseTree = node.asParseTree(tokens);

        this.setParseTree(parseTree);
      } else {
        this.clearParseTree();
      }
    // } catch (error) {
    //   console.log(error);
    //
    //   this.clearTokens();
    //
    //   this.clearParseTree();
    // }
  }

  getTokens(content) {
    const { Lexer } = this.constructor,
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          lexer = Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  getNode(tokens) {
    const { Parser } = this.constructor,
          bnf = this.getBNF(),
          parser = Parser.fromBNF(bnf),
          ruleName = this.getRuleName(),
          ruleMap = parser.getRuleMap(),
          rule = ruleMap[ruleName],
          node = parser.parse(tokens, rule);

    return node;
  }

  childElements() {
    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical entries
            </SubHeading>
            <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Rule name
            </SubHeading>
            <RuleNameInput onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
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