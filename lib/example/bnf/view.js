'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    easyLayout = require('easy-layout');

var BNFParser = require('../../bnf/parser'),
    ExampleView = require('../../example/view'),
    BNFTextarea = require('../common/textarea/bnf'),
    ContentTextarea = require('../common/textarea/content'),
    ParseTreeTextarea = require('../common/textarea/parseTree'),
    LexicalEntriesTextarea = require('../common/textarea/lexicalEntries'),
    MainVerticalSplitter = require('../common/verticalSplitter/main');

var BNFLexer = lexers.BNFLexer,
    SizeableElement = easyLayout.SizeableElement;

var BNFExampleView = function (_ExampleView) {
	_inherits(BNFExampleView, _ExampleView);

	function BNFExampleView() {
		_classCallCheck(this, BNFExampleView);

		return _possibleConstructorReturn(this, (BNFExampleView.__proto__ || Object.getPrototypeOf(BNFExampleView)).apply(this, arguments));
	}

	_createClass(BNFExampleView, [{
		key: 'getLexer',
		value: function getLexer() {
			var Lexer = BNFLexer; ///

			return Lexer;
		}
	}, {
		key: 'getParser',
		value: function getParser() {
			var Parser = BNFParser; ///

			return Parser;
		}
	}, {
		key: 'getParseTree',
		value: function getParseTree() {
			var parseTree = null;

			var bnfLexer = BNFLexer.fromNothing(),
			    bnfParser = BNFParser.fromNothing(),
			    content = this.getContent(),
			    tokens = bnfLexer.tokenise(content),
			    node = bnfParser.parse(tokens);

			if (node !== null) {
				parseTree = node.asParseTree(tokens);
			}

			return parseTree;
		}
	}, {
		key: 'childElements',
		value: function childElements(properties) {
			var keyUpHandler = this.keyUpHandler.bind(this);

			return [React.createElement(
				'h1',
				null,
				'BNF parser example'
			), React.createElement(
				'div',
				{ className: 'columns' },
				React.createElement(
					SizeableElement,
					null,
					React.createElement(
						'h2',
						null,
						'Lexical entries'
					),
					React.createElement(LexicalEntriesTextarea, { readOnly: true }),
					React.createElement(
						'h2',
						null,
						'BNF'
					),
					React.createElement(BNFTextarea, { readOnly: true })
				),
				React.createElement(MainVerticalSplitter, null),
				React.createElement(
					'div',
					{ className: 'column' },
					React.createElement(
						'h2',
						null,
						'Parse tree'
					),
					React.createElement(ParseTreeTextarea, null),
					React.createElement(
						'h2',
						null,
						'Content'
					),
					React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
				)
			)];
		}
	}, {
		key: 'getInitialContent',
		value: function getInitialContent() {
			var bnf = BNFParser.bnf,
			    initialContent = bnf; ///

			return initialContent;
		}
	}], [{
		key: 'fromProperties',
		value: function fromProperties(properties) {
			return ExampleView.fromProperties(BNFExampleView, properties);
		}
	}]);

	return BNFExampleView;
}(ExampleView);

Object.assign(BNFExampleView, {
	defaultProperties: {
		className: 'bnf'
	}
});

module.exports = BNFExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiQk5GUGFyc2VyIiwiRXhhbXBsZVZpZXciLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQk5GTGV4ZXIiLCJTaXplYWJsZUVsZW1lbnQiLCJCTkZFeGFtcGxlVmlldyIsIkxleGVyIiwiUGFyc2VyIiwicGFyc2VUcmVlIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYm5mIiwiaW5pdGlhbENvbnRlbnQiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxZQUFZRixRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUcsY0FBY0gsUUFBUSxvQkFBUixDQURwQjtBQUFBLElBRU1JLGNBQWNKLFFBQVEsd0JBQVIsQ0FGcEI7QUFBQSxJQUdNSyxrQkFBa0JMLFFBQVEsNEJBQVIsQ0FIeEI7QUFBQSxJQUlNTSxvQkFBb0JOLFFBQVEsOEJBQVIsQ0FKMUI7QUFBQSxJQUtNTyx5QkFBeUJQLFFBQVEsbUNBQVIsQ0FML0I7QUFBQSxJQU1NUSx1QkFBdUJSLFFBQVEsaUNBQVIsQ0FON0I7O0FBUU0sSUFBRVMsUUFBRixHQUFlVixNQUFmLENBQUVVLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCVCxVQUR0QixDQUNFUyxlQURGOztJQUdBQyxjOzs7Ozs7Ozs7Ozs2QkFDTztBQUNULE9BQU1DLFFBQVFILFFBQWQsQ0FEUyxDQUNlOztBQUV4QixVQUFPRyxLQUFQO0FBQ0Q7Ozs4QkFFVztBQUNWLE9BQU1DLFNBQVNYLFNBQWYsQ0FEVSxDQUNnQjs7QUFFMUIsVUFBT1csTUFBUDtBQUNEOzs7aUNBRWE7QUFDZCxPQUFJQyxZQUFZLElBQWhCOztBQUVBLE9BQU1DLFdBQVdOLFNBQVNPLFdBQVQsRUFBakI7QUFBQSxPQUNHQyxZQUFZZixVQUFVYyxXQUFWLEVBRGY7QUFBQSxPQUVHRSxVQUFVLEtBQUtDLFVBQUwsRUFGYjtBQUFBLE9BR0dDLFNBQVNMLFNBQVNNLFFBQVQsQ0FBa0JILE9BQWxCLENBSFo7QUFBQSxPQUlHSSxPQUFPTCxVQUFVTSxLQUFWLENBQWdCSCxNQUFoQixDQUpWOztBQU1BLE9BQUlFLFNBQVMsSUFBYixFQUFtQjtBQUNsQlIsZ0JBQVlRLEtBQUtFLFdBQUwsQ0FBaUJKLE1BQWpCLENBQVo7QUFDQTs7QUFFRCxVQUFPTixTQUFQO0FBQ0E7OztnQ0FFYVcsVSxFQUFZO0FBQ3pCLE9BQU1DLGVBQWUsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7O0FBRUEsVUFBUSxDQUVQO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTyxFQUdQO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUMsb0JBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDLHlCQUFDLHNCQUFELElBQXdCLGNBQXhCLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEQ7QUFJQyx5QkFBQyxXQUFELElBQWEsY0FBYjtBQUpELEtBREQ7QUFPQyx3QkFBQyxvQkFBRCxPQVBEO0FBUUM7QUFBQTtBQUFBLE9BQUssV0FBVSxRQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUREO0FBRUMseUJBQUMsaUJBQUQsT0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRDtBQUlDLHlCQUFDLGVBQUQsSUFBaUIsU0FBU0QsWUFBMUI7QUFKRDtBQVJELElBSE8sQ0FBUjtBQW9CQTs7O3NDQUVvQjtBQUNaLE9BQUVFLEdBQUYsR0FBVTFCLFNBQVYsQ0FBRTBCLEdBQUY7QUFBQSxPQUNBQyxjQURBLEdBQ2lCRCxHQURqQixDQURZLENBRVU7O0FBRTVCLFVBQU9DLGNBQVA7QUFDRDs7O2lDQUVxQkosVSxFQUFZO0FBQUUsVUFBT3RCLFlBQVkyQixjQUFaLENBQTJCbkIsY0FBM0IsRUFBMkNjLFVBQTNDLENBQVA7QUFBK0Q7Ozs7RUE3RHhFdEIsVzs7QUFnRTdCNEIsT0FBT0MsTUFBUCxDQUFjckIsY0FBZCxFQUE4QjtBQUM1QnNCLG9CQUFtQjtBQUNqQkMsYUFBVztBQURNO0FBRFMsQ0FBOUI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJ6QixjQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9ibmYvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dGFyZWEvYm5mJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBMZXhpY2FsRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNsYXNzIEJORkV4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBMZXhlciA9IEJORkxleGVyOyAvLy9cblxuICAgIHJldHVybiBMZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICBjb25zdCBQYXJzZXIgPSBCTkZQYXJzZXI7IC8vL1xuXG4gICAgcmV0dXJuIFBhcnNlcjtcbiAgfVxuXG5cdGdldFBhcnNlVHJlZSgpIHtcblx0XHRsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuXHRcdGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcblx0XHRcdFx0XHRibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcblx0XHRcdFx0XHRjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG5cdFx0XHRcdFx0dG9rZW5zID0gYm5mTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG5cdFx0XHRcdFx0bm9kZSA9IGJuZlBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcblx0XHRcdHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VUcmVlO1xuXHR9XG5cblx0Y2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG5cdFx0Y29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHQ8aDE+Qk5GIHBhcnNlciBleGFtcGxlPC9oMT4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cblx0XHRcdFx0PFNpemVhYmxlRWxlbWVudD5cblx0XHRcdFx0XHQ8aDI+TGV4aWNhbCBlbnRyaWVzPC9oMj5cblx0XHRcdFx0XHQ8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSByZWFkT25seSAvPlxuXHRcdFx0XHRcdDxoMj5CTkY8L2gyPlxuXHRcdFx0XHRcdDxCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuXHRcdFx0XHQ8L1NpemVhYmxlRWxlbWVudD5cblx0XHRcdFx0PE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0PGgyPlBhcnNlIHRyZWU8L2gyPlxuXHRcdFx0XHRcdDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuXHRcdFx0XHRcdDxoMj5Db250ZW50PC9oMj5cblx0XHRcdFx0XHQ8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdF0pO1xuXHR9XG5cbiAgZ2V0SW5pdGlhbENvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBibmYgfSA9IEJORlBhcnNlcixcbiAgICAgICAgICBpbml0aWFsQ29udGVudCA9IGJuZjsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQk5GRXhhbXBsZVZpZXcsIHByb3BlcnRpZXMpO31cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2JuZidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZVZpZXc7XG4iXX0=