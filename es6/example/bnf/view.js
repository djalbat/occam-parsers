'use strict';

const lexers = require('occam-lexers');

const BNFParser = require('../../bnf/parser'),
      ExampleView = require('../../example/view');

const { BNFLexer } = lexers;

class BNFExampleView extends ExampleView {
  getLexer() {
    const Lexer = BNFLexer;  ///

    return Lexer;
  }

  getParser() {
    const Parser = BNFParser;  ///

    return Parser;
  }

  getTitle() {
    const title = 'BNF parser example';

    return title;
  }

	getParseTree() {
		let parseTree = null;

		const bnfLexer = BNFLexer.fromNothing(),
					bnfParser = BNFParser.fromNothing(),
					content = this.getContent(),
					tokens = bnfLexer.tokenise(content),
					node = bnfParser.parse(tokens);

		if (node !== null) {
			parseTree = node.asParseTree(tokens);
		}

		return parseTree;
	}

	childElements(properties) {
		const title = this.getTitle(),
					keyUpHandler = this.keyUpHandler.bind(this);

		return ([

			<h1>{title}</h1>,
			<div className="columns">
				<SizeableElement>
					<h2>Lexical entries</h2>
					<LexicalEntriesTextarea readOnly />
					<h2>BNF</h2>
					<BNFTextarea readOnly />
				</SizeableElement>
				<MainVerticalSplitter />
				<div className="column">
					<h2>Parse tree</h2>
					<ParseTreeTextarea />
					<h2>Content</h2>
					<ContentTextarea onKeyUp={keyUpHandler} />
				</div>
			</div>

		]);
	}

  getInitialContent() {
    const { bnf } = BNFParser,
          initialContent = bnf; ///

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BNFExampleView, properties);}
}

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
