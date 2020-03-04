'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers'),
    easyLayout = require('easy-layout');

var BNFParser = require('../../bnf/parser'),
    ExampleView = require('../../example/view'),
    BNFTextarea = require('../common/textarea/bnf'),
    ContentTextarea = require('../common/textarea/content'),
    ParseTreeTextarea = require('../common/textarea/parseTree'),
    MainVerticalSplitter = require('../common/verticalSplitter/main'),
    LexicalEntriesTextarea = require('../common/textarea/lexicalEntries');

var BNFLexer = lexers.BNFLexer,
    SizeableElement = easyLayout.SizeableElement;

var BNFExampleView = /*#__PURE__*/function (_ExampleView) {
  _inherits(BNFExampleView, _ExampleView);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _possibleConstructorReturn(this, _getPrototypeOf(BNFExampleView).apply(this, arguments));
  }

  _createClass(BNFExampleView, [{
    key: "getLexer",
    value: function getLexer() {
      var Lexer = BNFLexer; ///

      return Lexer;
    }
  }, {
    key: "getParser",
    value: function getParser() {
      var Parser = BNFParser; ///

      return Parser;
    }
  }, {
    key: "getParseTree",
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
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [React.createElement("h1", null, "BNF parser example"), React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Lexical entries"), React.createElement(LexicalEntriesTextarea, {
        readOnly: true
      }), React.createElement("h2", null, "BNF"), React.createElement(BNFTextarea, {
        readOnly: true
      })), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Parse tree"), React.createElement(ParseTreeTextarea, null), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })))];
    }
  }, {
    key: "getInitialContent",
    value: function getInitialContent() {
      var bnf = BNFParser.bnf,
          initialContent = bnf; ///

      return initialContent;
    }
  }], [{
    key: "fromProperties",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVhc3lMYXlvdXQiLCJCTkZQYXJzZXIiLCJFeGFtcGxlVmlldyIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJCTkZMZXhlciIsIlNpemVhYmxlRWxlbWVudCIsIkJORkV4YW1wbGVWaWV3IiwiTGV4ZXIiLCJQYXJzZXIiLCJwYXJzZVRyZWUiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJibmYiLCJpbml0aWFsQ29udGVudCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCO0FBQUEsSUFDTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUQxQjs7QUFHQSxJQUFNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxrQkFBRCxDQUF6QjtBQUFBLElBQ01HLFdBQVcsR0FBR0gsT0FBTyxDQUFDLG9CQUFELENBRDNCO0FBQUEsSUFFTUksV0FBVyxHQUFHSixPQUFPLENBQUMsd0JBQUQsQ0FGM0I7QUFBQSxJQUdNSyxlQUFlLEdBQUdMLE9BQU8sQ0FBQyw0QkFBRCxDQUgvQjtBQUFBLElBSU1NLGlCQUFpQixHQUFHTixPQUFPLENBQUMsOEJBQUQsQ0FKakM7QUFBQSxJQUtNTyxvQkFBb0IsR0FBR1AsT0FBTyxDQUFDLGlDQUFELENBTHBDO0FBQUEsSUFNTVEsc0JBQXNCLEdBQUdSLE9BQU8sQ0FBQyxtQ0FBRCxDQU50Qzs7QUFRTSxJQUFFUyxRQUFGLEdBQWVWLE1BQWYsQ0FBRVUsUUFBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JULFVBRHRCLENBQ0VTLGVBREY7O0lBR0FDLGM7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsS0FBSyxHQUFHSCxRQUFkLENBRFMsQ0FDZTs7QUFFeEIsYUFBT0csS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxNQUFNLEdBQUdYLFNBQWYsQ0FEVSxDQUNnQjs7QUFFMUIsYUFBT1csTUFBUDtBQUNEOzs7bUNBRWE7QUFDZCxVQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxVQUFNQyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ08sV0FBVCxFQUFqQjtBQUFBLFVBQ0dDLFNBQVMsR0FBR2YsU0FBUyxDQUFDYyxXQUFWLEVBRGY7QUFBQSxVQUVHRSxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUZiO0FBQUEsVUFHR0MsTUFBTSxHQUFHTCxRQUFRLENBQUNNLFFBQVQsQ0FBa0JILE9BQWxCLENBSFo7QUFBQSxVQUlHSSxJQUFJLEdBQUdMLFNBQVMsQ0FBQ00sS0FBVixDQUFnQkgsTUFBaEIsQ0FKVjs7QUFNQSxVQUFJRSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNsQlIsUUFBQUEsU0FBUyxHQUFHUSxJQUFJLENBQUNFLFdBQUwsQ0FBaUJKLE1BQWpCLENBQVo7QUFDQTs7QUFFRCxhQUFPTixTQUFQO0FBQ0E7OztrQ0FFYVcsVSxFQUFZO0FBQ3pCLFVBQU1DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUVBLGFBQVEsQ0FFUCxxREFGTyxFQUdQO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNDLG9CQUFDLGVBQUQsUUFDQyxrREFERCxFQUVDLG9CQUFDLHNCQUFEO0FBQXdCLFFBQUEsUUFBUTtBQUFoQyxRQUZELEVBR0Msc0NBSEQsRUFJQyxvQkFBQyxXQUFEO0FBQWEsUUFBQSxRQUFRO0FBQXJCLFFBSkQsQ0FERCxFQU9DLG9CQUFDLG9CQUFELE9BUEQsRUFRQztBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDQyw2Q0FERCxFQUVDLG9CQUFDLGlCQUFELE9BRkQsRUFHQywwQ0FIRCxFQUlDLG9CQUFDLGVBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVEO0FBQTFCLFFBSkQsQ0FSRCxDQUhPLENBQVI7QUFvQkE7Ozt3Q0FFb0I7QUFDWixVQUFFRSxHQUFGLEdBQVUxQixTQUFWLENBQUUwQixHQUFGO0FBQUEsVUFDQUMsY0FEQSxHQUNpQkQsR0FEakIsQ0FEWSxDQUVVOztBQUU1QixhQUFPQyxjQUFQO0FBQ0Q7OzttQ0FFcUJKLFUsRUFBWTtBQUFFLGFBQU90QixXQUFXLENBQUMyQixjQUFaLENBQTJCbkIsY0FBM0IsRUFBMkNjLFVBQTNDLENBQVA7QUFBK0Q7Ozs7RUE3RHhFdEIsVzs7QUFnRTdCNEIsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixjQUFkLEVBQThCO0FBQzVCc0IsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRFMsQ0FBOUI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCekIsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IEJORlBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3JyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcycpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY2xhc3MgQk5GRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IExleGVyID0gQk5GTGV4ZXI7IC8vL1xuXG4gICAgcmV0dXJuIExleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IFBhcnNlciA9IEJORlBhcnNlcjsgLy8vXG5cbiAgICByZXR1cm4gUGFyc2VyO1xuICB9XG5cblx0Z2V0UGFyc2VUcmVlKCkge1xuXHRcdGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG5cdFx0Y29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuXHRcdFx0XHRcdGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuXHRcdFx0XHRcdGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcblx0XHRcdFx0XHR0b2tlbnMgPSBibmZMZXhlci50b2tlbmlzZShjb250ZW50KSxcblx0XHRcdFx0XHRub2RlID0gYm5mUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xuXHRcdFx0cGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJzZVRyZWU7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcblx0XHRjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxoMT5CTkYgcGFyc2VyIGV4YW1wbGU8L2gxPixcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0XHQ8U2l6ZWFibGVFbGVtZW50PlxuXHRcdFx0XHRcdDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuXHRcdFx0XHRcdDxMZXhpY2FsRW50cmllc1RleHRhcmVhIHJlYWRPbmx5IC8+XG5cdFx0XHRcdFx0PGgyPkJORjwvaDI+XG5cdFx0XHRcdFx0PEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG5cdFx0XHRcdDwvU2l6ZWFibGVFbGVtZW50PlxuXHRcdFx0XHQ8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cblx0XHRcdFx0XHQ8aDI+UGFyc2UgdHJlZTwvaDI+XG5cdFx0XHRcdFx0PFBhcnNlVHJlZVRleHRhcmVhIC8+XG5cdFx0XHRcdFx0PGgyPkNvbnRlbnQ8L2gyPlxuXHRcdFx0XHRcdDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XSk7XG5cdH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQk5GUGFyc2VyLFxuICAgICAgICAgIGluaXRpYWxDb250ZW50ID0gYm5mOyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsQ29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhCTkZFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJORkV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlVmlldztcbiJdfQ==