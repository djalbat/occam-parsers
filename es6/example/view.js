"use strict";

import { Element } from "easy";
import { ColumnsDiv } from "easy-layout";

import Heading from "./heading";
import BackLink from "./link/back";
import Paragraph from "./paragraph";
import ColumnDiv from "./div/column";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import RuleNameInput from "./input/ruleName";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

import { findRuleByName } from "../utilities/rule";

export default class View extends Element {
  getTokens() {
    const entries = this.getEntries(),
          content = this.getContent(),
          lexer = this.Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  getParseTree() {
    let parseTree = null;

    const lexicalEntries = this.getLexicalEntries(),
          bnf = this.getBNF(),
          entries = lexicalEntries, ///
          lexer = this.Lexer.fromEntries(entries),
          parser = this.Parser.fromBNF(bnf),
          content = this.getContent(),
          ruleName = this.getRuleName(),
          tokens = lexer.tokenise(content),
          name = ruleName,  ///
          rules = parser.getRules(),
          rule = findRuleByName(name, rules),
          node = parser.parse(tokens, rule);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  keyUpHandler() {
    try {
      const parseTree = this.getParseTree();

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearParseTree();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <Heading>
        {this.heading}
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
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
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <SubHeading>
            Content
          </SubHeading>
          <ContentTextarea onKeyUp={keyUpHandler} />
          <SubHeading>
            Parse tree
          </SubHeading>
          <ParseTreeTextarea />
        </ColumnDiv>
      </ColumnsDiv>,
      <Paragraph>
        <BackLink />
      </Paragraph>

    ]);
  }

  initialise(properties) {
    this.assignContext();

    const { bnf } = this.Parser,
          { entries } = this.Lexer,
          content = this.initialContent, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static tagName = "div";

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise(properties);

    return exampleView
  }
}
