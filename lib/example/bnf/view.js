"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers"),
    easyLayout = require("easy-layout");

var BNFParser = require("../../bnf/parser"),
    ExampleView = require("../../example/view"),
    BNFTextarea = require("../common/textarea/bnf"),
    ContentTextarea = require("../common/textarea/content"),
    ParseTreeTextarea = require("../common/textarea/parseTree"),
    MainVerticalSplitter = require("../common/verticalSplitter/main"),
    LexicalEntriesTextarea = require("../common/textarea/lexicalEntries");

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
    className: "bnf"
  }
});
module.exports = BNFExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVhc3lMYXlvdXQiLCJCTkZQYXJzZXIiLCJFeGFtcGxlVmlldyIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJCTkZMZXhlciIsIlNpemVhYmxlRWxlbWVudCIsIkJORkV4YW1wbGVWaWV3IiwiTGV4ZXIiLCJQYXJzZXIiLCJwYXJzZVRyZWUiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJibmYiLCJpbml0aWFsQ29udGVudCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCO0FBQUEsSUFDTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUQxQjs7QUFHQSxJQUFNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxrQkFBRCxDQUF6QjtBQUFBLElBQ01HLFdBQVcsR0FBR0gsT0FBTyxDQUFDLG9CQUFELENBRDNCO0FBQUEsSUFFTUksV0FBVyxHQUFHSixPQUFPLENBQUMsd0JBQUQsQ0FGM0I7QUFBQSxJQUdNSyxlQUFlLEdBQUdMLE9BQU8sQ0FBQyw0QkFBRCxDQUgvQjtBQUFBLElBSU1NLGlCQUFpQixHQUFHTixPQUFPLENBQUMsOEJBQUQsQ0FKakM7QUFBQSxJQUtNTyxvQkFBb0IsR0FBR1AsT0FBTyxDQUFDLGlDQUFELENBTHBDO0FBQUEsSUFNTVEsc0JBQXNCLEdBQUdSLE9BQU8sQ0FBQyxtQ0FBRCxDQU50Qzs7QUFRTSxJQUFFUyxRQUFGLEdBQWVWLE1BQWYsQ0FBRVUsUUFBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JULFVBRHRCLENBQ0VTLGVBREY7O0lBR0FDLGM7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsS0FBSyxHQUFHSCxRQUFkLENBRFMsQ0FDZTs7QUFFeEIsYUFBT0csS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxNQUFNLEdBQUdYLFNBQWYsQ0FEVSxDQUNnQjs7QUFFMUIsYUFBT1csTUFBUDtBQUNEOzs7bUNBRWE7QUFDZCxVQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxVQUFNQyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ08sV0FBVCxFQUFqQjtBQUFBLFVBQ0dDLFNBQVMsR0FBR2YsU0FBUyxDQUFDYyxXQUFWLEVBRGY7QUFBQSxVQUVHRSxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUZiO0FBQUEsVUFHR0MsTUFBTSxHQUFHTCxRQUFRLENBQUNNLFFBQVQsQ0FBa0JILE9BQWxCLENBSFo7QUFBQSxVQUlHSSxJQUFJLEdBQUdMLFNBQVMsQ0FBQ00sS0FBVixDQUFnQkgsTUFBaEIsQ0FKVjs7QUFNQSxVQUFJRSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNsQlIsUUFBQUEsU0FBUyxHQUFHUSxJQUFJLENBQUNFLFdBQUwsQ0FBaUJKLE1BQWpCLENBQVo7QUFDQTs7QUFFRCxhQUFPTixTQUFQO0FBQ0E7OztrQ0FFYVcsVSxFQUFZO0FBQ3pCLFVBQU1DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUVBLGFBQVEsQ0FFUCxxREFGTyxFQUdQO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNDLG9CQUFDLGVBQUQsUUFDQyxrREFERCxFQUVDLG9CQUFDLHNCQUFEO0FBQXdCLFFBQUEsUUFBUTtBQUFoQyxRQUZELEVBR0Msc0NBSEQsRUFJQyxvQkFBQyxXQUFEO0FBQWEsUUFBQSxRQUFRO0FBQXJCLFFBSkQsQ0FERCxFQU9DLG9CQUFDLG9CQUFELE9BUEQsRUFRQztBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDQyw2Q0FERCxFQUVDLG9CQUFDLGlCQUFELE9BRkQsRUFHQywwQ0FIRCxFQUlDLG9CQUFDLGVBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVEO0FBQTFCLFFBSkQsQ0FSRCxDQUhPLENBQVI7QUFvQkE7Ozt3Q0FFb0I7QUFDWixVQUFFRSxHQUFGLEdBQVUxQixTQUFWLENBQUUwQixHQUFGO0FBQUEsVUFDQUMsY0FEQSxHQUNpQkQsR0FEakIsQ0FEWSxDQUVVOztBQUU1QixhQUFPQyxjQUFQO0FBQ0Q7OzttQ0FFcUJKLFUsRUFBWTtBQUFFLGFBQU90QixXQUFXLENBQUMyQixjQUFaLENBQTJCbkIsY0FBM0IsRUFBMkNjLFVBQTNDLENBQVA7QUFBK0Q7Ozs7RUE3RHhFdEIsVzs7QUFnRTdCNEIsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixjQUFkLEVBQThCO0FBQzVCc0IsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRFMsQ0FBOUI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCekIsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZShcIm9jY2FtLWxleGVyc1wiKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKFwiZWFzeS1sYXlvdXRcIik7XG5cbmNvbnN0IEJORlBhcnNlciA9IHJlcXVpcmUoXCIuLi8uLi9ibmYvcGFyc2VyXCIpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKFwiLi4vLi4vZXhhbXBsZS92aWV3XCIpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3RleHRhcmVhL2JuZlwiKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdGV4dGFyZWEvY29udGVudFwiKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZShcIi4uL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWVcIiksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoXCIuLi9jb21tb24vdmVydGljYWxTcGxpdHRlci9tYWluXCIpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIik7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jbGFzcyBCTkZFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCTkZMZXhlcjsgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgUGFyc2VyID0gQk5GUGFyc2VyOyAvLy9cblxuICAgIHJldHVybiBQYXJzZXI7XG4gIH1cblxuXHRnZXRQYXJzZVRyZWUoKSB7XG5cdFx0bGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cblx0XHRjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG5cdFx0XHRcdFx0Ym5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG5cdFx0XHRcdFx0Y29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuXHRcdFx0XHRcdHRva2VucyA9IGJuZkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuXHRcdFx0XHRcdG5vZGUgPSBibmZQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XG5cdFx0XHRwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlVHJlZTtcblx0fVxuXG5cdGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuXHRcdGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PGgxPkJORiBwYXJzZXIgZXhhbXBsZTwvaDE+LFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdDxTaXplYWJsZUVsZW1lbnQ+XG5cdFx0XHRcdFx0PGgyPkxleGljYWwgZW50cmllczwvaDI+XG5cdFx0XHRcdFx0PExleGljYWxFbnRyaWVzVGV4dGFyZWEgcmVhZE9ubHkgLz5cblx0XHRcdFx0XHQ8aDI+Qk5GPC9oMj5cblx0XHRcdFx0XHQ8Qk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cblx0XHRcdFx0PC9TaXplYWJsZUVsZW1lbnQ+XG5cdFx0XHRcdDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdDxoMj5QYXJzZSB0cmVlPC9oMj5cblx0XHRcdFx0XHQ8UGFyc2VUcmVlVGV4dGFyZWEgLz5cblx0XHRcdFx0XHQ8aDI+Q29udGVudDwvaDI+XG5cdFx0XHRcdFx0PENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRdKTtcblx0fVxuXG4gIGdldEluaXRpYWxDb250ZW50KCkge1xuICAgIGNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXIsXG4gICAgICAgICAgaW5pdGlhbENvbnRlbnQgPSBibmY7IC8vL1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEV4YW1wbGVWaWV3LmZyb21Qcm9wZXJ0aWVzKEJORkV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCJcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZVZpZXc7XG4iXX0=