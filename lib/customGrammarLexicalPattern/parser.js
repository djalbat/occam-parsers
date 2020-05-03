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

var lexers = require("occam-lexers");

var bnf = require("./bnf"),
    BNFParser = require("../bnf/parser"),
    CommonParser = require("../common/parser");

var BNFLexer = lexers.BNFLexer;
var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var CustomGrammarLexicalPatternParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(CustomGrammarLexicalPatternParser, _CommonParser);

  function CustomGrammarLexicalPatternParser() {
    _classCallCheck(this, CustomGrammarLexicalPatternParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarLexicalPatternParser).apply(this, arguments));
  }

  _createClass(CustomGrammarLexicalPatternParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          customGrammarLexicalPatternParser = new CustomGrammarLexicalPatternParser(rules);
      return customGrammarLexicalPatternParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var customGrammarLexicalPatternParser = CustomGrammarLexicalPatternParser.fromBNF(bnf);
      return customGrammarLexicalPatternParser;
    }
  }]);

  return CustomGrammarLexicalPatternParser;
}(CommonParser);

Object.assign(CustomGrammarLexicalPatternParser, {
  bnf: bnf
});
module.exports = CustomGrammarLexicalPatternParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiQk5GTGV4ZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIiwiZnJvbUJORiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHRCxPQUFPLENBQUMsT0FBRCxDQUFuQjtBQUFBLElBQ01FLFNBQVMsR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FEekI7QUFBQSxJQUVNRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxrQkFBRCxDQUY1Qjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7QUFFUixJQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0wsU0FBUyxDQUFDSSxXQUFWLEVBRGxCOztJQUdNRSxpQzs7Ozs7Ozs7Ozs7NEJBQ1dQLEcsRUFBSztBQUNsQixVQUFNUSxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QlQsR0FBdkIsQ0FBZjtBQUFBLFVBQ01VLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksaUNBQWlDLEdBQUcsSUFBSUwsaUNBQUosQ0FBc0NHLEtBQXRDLENBRjFDO0FBSUEsYUFBT0UsaUNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxpQ0FBaUMsR0FBR0wsaUNBQWlDLENBQUNNLE9BQWxDLENBQTBDYixHQUExQyxDQUExQztBQUVBLGFBQU9ZLGlDQUFQO0FBQ0Q7Ozs7RUFiNkNWLFk7O0FBZ0JoRFksTUFBTSxDQUFDQyxNQUFQLENBQWNSLGlDQUFkLEVBQWlEO0FBQy9DUCxFQUFBQSxHQUFHLEVBQUhBO0FBRCtDLENBQWpEO0FBSUFnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJWLGlDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKFwiLi9ibmZcIiksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKFwiLi4vYm5mL3BhcnNlclwiKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoXCIuLi9jb21tb24vcGFyc2VyXCIpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyID0gbmV3IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyLCB7XG4gIGJuZlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuIl19