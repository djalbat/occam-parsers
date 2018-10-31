'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var BNFParser = require('../../bnf/parser'),
    ExampleView = require('../../example/view');

var BNFLexer = lexers.BNFLexer;

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
		key: 'getTitle',
		value: function getTitle() {
			var title = 'BNF parser example';

			return title;
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
			var title = this.getTitle(),
			    keyUpHandler = this.keyUpHandler.bind(this);

			return [React.createElement(
				'h1',
				null,
				title
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJFeGFtcGxlVmlldyIsIkJORkxleGVyIiwiQk5GRXhhbXBsZVZpZXciLCJMZXhlciIsIlBhcnNlciIsInRpdGxlIiwicGFyc2VUcmVlIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJnZXRUaXRsZSIsImtleVVwSGFuZGxlciIsImJpbmQiLCJibmYiLCJpbml0aWFsQ29udGVudCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNRSxjQUFjRixRQUFRLG9CQUFSLENBRHBCOztJQUdRRyxRLEdBQWFKLE0sQ0FBYkksUTs7SUFFRkMsYzs7Ozs7Ozs7Ozs7NkJBQ087QUFDVCxPQUFNQyxRQUFRRixRQUFkLENBRFMsQ0FDZ0I7O0FBRXpCLFVBQU9FLEtBQVA7QUFDRDs7OzhCQUVXO0FBQ1YsT0FBTUMsU0FBU0wsU0FBZixDQURVLENBQ2lCOztBQUUzQixVQUFPSyxNQUFQO0FBQ0Q7Ozs2QkFFVTtBQUNULE9BQU1DLFFBQVEsb0JBQWQ7O0FBRUEsVUFBT0EsS0FBUDtBQUNEOzs7aUNBRWE7QUFDZCxPQUFJQyxZQUFZLElBQWhCOztBQUVBLE9BQU1DLFdBQVdOLFNBQVNPLFdBQVQsRUFBakI7QUFBQSxPQUNHQyxZQUFZVixVQUFVUyxXQUFWLEVBRGY7QUFBQSxPQUVHRSxVQUFVLEtBQUtDLFVBQUwsRUFGYjtBQUFBLE9BR0dDLFNBQVNMLFNBQVNNLFFBQVQsQ0FBa0JILE9BQWxCLENBSFo7QUFBQSxPQUlHSSxPQUFPTCxVQUFVTSxLQUFWLENBQWdCSCxNQUFoQixDQUpWOztBQU1BLE9BQUlFLFNBQVMsSUFBYixFQUFtQjtBQUNsQlIsZ0JBQVlRLEtBQUtFLFdBQUwsQ0FBaUJKLE1BQWpCLENBQVo7QUFDQTs7QUFFRCxVQUFPTixTQUFQO0FBQ0E7OztnQ0FFYVcsVSxFQUFZO0FBQ3pCLE9BQU1aLFFBQVEsS0FBS2EsUUFBTCxFQUFkO0FBQUEsT0FDR0MsZUFBZSxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURsQjs7QUFHQSxVQUFRLENBRVA7QUFBQTtBQUFBO0FBQUtmO0FBQUwsSUFGTyxFQUdQO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUMsb0JBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDLHlCQUFDLHNCQUFELElBQXdCLGNBQXhCLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEQ7QUFJQyx5QkFBQyxXQUFELElBQWEsY0FBYjtBQUpELEtBREQ7QUFPQyx3QkFBQyxvQkFBRCxPQVBEO0FBUUM7QUFBQTtBQUFBLE9BQUssV0FBVSxRQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUREO0FBRUMseUJBQUMsaUJBQUQsT0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRDtBQUlDLHlCQUFDLGVBQUQsSUFBaUIsU0FBU2MsWUFBMUI7QUFKRDtBQVJELElBSE8sQ0FBUjtBQW9CQTs7O3NDQUVvQjtBQUNaLE9BQUVFLEdBQUYsR0FBVXRCLFNBQVYsQ0FBRXNCLEdBQUY7QUFBQSxPQUNBQyxjQURBLEdBQ2lCRCxHQURqQixDQURZLENBRVU7O0FBRTVCLFVBQU9DLGNBQVA7QUFDRDs7O2lDQUVxQkwsVSxFQUFZO0FBQUUsVUFBT2pCLFlBQVl1QixjQUFaLENBQTJCckIsY0FBM0IsRUFBMkNlLFVBQTNDLENBQVA7QUFBK0Q7Ozs7RUFwRXhFakIsVzs7QUF1RTdCd0IsT0FBT0MsTUFBUCxDQUFjdkIsY0FBZCxFQUE4QjtBQUM1QndCLG9CQUFtQjtBQUNqQkMsYUFBVztBQURNO0FBRFMsQ0FBOUI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUIzQixjQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vYm5mL3BhcnNlcicpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlL3ZpZXcnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCTkZFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCTkZMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IEJORlBhcnNlcjsgIC8vL1xuXG4gICAgcmV0dXJuIFBhcnNlcjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0JORiBwYXJzZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuXHRnZXRQYXJzZVRyZWUoKSB7XG5cdFx0bGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cblx0XHRjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG5cdFx0XHRcdFx0Ym5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG5cdFx0XHRcdFx0Y29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuXHRcdFx0XHRcdHRva2VucyA9IGJuZkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuXHRcdFx0XHRcdG5vZGUgPSBibmZQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XG5cdFx0XHRwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlVHJlZTtcblx0fVxuXG5cdGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpLFxuXHRcdFx0XHRcdGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PGgxPnt0aXRsZX08L2gxPixcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0XHQ8U2l6ZWFibGVFbGVtZW50PlxuXHRcdFx0XHRcdDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuXHRcdFx0XHRcdDxMZXhpY2FsRW50cmllc1RleHRhcmVhIHJlYWRPbmx5IC8+XG5cdFx0XHRcdFx0PGgyPkJORjwvaDI+XG5cdFx0XHRcdFx0PEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG5cdFx0XHRcdDwvU2l6ZWFibGVFbGVtZW50PlxuXHRcdFx0XHQ8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cblx0XHRcdFx0XHQ8aDI+UGFyc2UgdHJlZTwvaDI+XG5cdFx0XHRcdFx0PFBhcnNlVHJlZVRleHRhcmVhIC8+XG5cdFx0XHRcdFx0PGgyPkNvbnRlbnQ8L2gyPlxuXHRcdFx0XHRcdDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XSk7XG5cdH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQk5GUGFyc2VyLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gYm5mOyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhCTkZFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJORkV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlVmlldztcbiJdfQ==