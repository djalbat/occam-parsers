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

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiQk5GTGV4ZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIiwiZnJvbUJORiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHRCxPQUFPLENBQUMsT0FBRCxDQUFuQjtBQUFBLElBQ01FLFNBQVMsR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FEekI7QUFBQSxJQUVNRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxrQkFBRCxDQUY1Qjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7QUFFUixJQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0wsU0FBUyxDQUFDSSxXQUFWLEVBRGxCOztJQUdNRSxpQzs7Ozs7Ozs7Ozs7NEJBQ1dQLEcsRUFBSztBQUNsQixVQUFNUSxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QlQsR0FBdkIsQ0FBZjtBQUFBLFVBQ01VLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksaUNBQWlDLEdBQUcsSUFBSUwsaUNBQUosQ0FBc0NHLEtBQXRDLENBRjFDO0FBSUEsYUFBT0UsaUNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxpQ0FBaUMsR0FBR0wsaUNBQWlDLENBQUNNLE9BQWxDLENBQTBDYixHQUExQyxDQUExQztBQUVBLGFBQU9ZLGlDQUFQO0FBQ0Q7Ozs7RUFiNkNWLFk7O0FBZ0JoRFksTUFBTSxDQUFDQyxNQUFQLENBQWNSLGlDQUFkLEVBQWlEO0FBQy9DUCxFQUFBQSxHQUFHLEVBQUhBO0FBRCtDLENBQWpEO0FBSUFnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJWLGlDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXI7XG4iXX0=