"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _bnf = _interopRequireDefault(require("./bnf"));

var _parser = _interopRequireDefault(require("../bnf/parser"));

var _parser2 = _interopRequireDefault(require("../common/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlainParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(PlainParser, _CommonParser);

  function PlainParser() {
    _classCallCheck(this, PlainParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlainParser).apply(this, arguments));
  }

  _createClass(PlainParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
          bnfParser = _parser["default"].fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          plainParser = new PlainParser(rules);

      return plainParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var plainParser = PlainParser.fromBNF(_bnf["default"]);
      return plainParser;
    }
  }]);

  return PlainParser;
}(_parser2["default"]);

exports["default"] = PlainParser;
Object.assign(PlainParser, {
  bnf: _bnf["default"]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJQbGFpblBhcnNlciIsImJuZiIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsInBsYWluUGFyc2VyIiwiZnJvbUJORiIsIkNvbW1vblBhcnNlciIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7NEJBQ0pDLEcsRUFBSztBQUNsQixVQUFNQyxRQUFRLEdBQUdDLHNCQUFTQyxXQUFULEVBQWpCO0FBQUEsVUFDTUMsU0FBUyxHQUFHQyxtQkFBVUYsV0FBVixFQURsQjtBQUFBLFVBRU1HLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCUCxHQUF2QixDQUZmO0FBQUEsVUFHTVEsS0FBSyxHQUFHSixTQUFTLENBQUNLLGVBQVYsQ0FBMEJILE1BQTFCLENBSGQ7QUFBQSxVQUlNSSxXQUFXLEdBQUcsSUFBSVgsV0FBSixDQUFnQlMsS0FBaEIsQ0FKcEI7O0FBTUEsYUFBT0UsV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLFdBQVcsR0FBR1gsV0FBVyxDQUFDWSxPQUFaLENBQW9CWCxlQUFwQixDQUFwQjtBQUVBLGFBQU9VLFdBQVA7QUFDRDs7OztFQWZzQ0UsbUI7OztBQWtCekNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZixXQUFkLEVBQTJCO0FBQ3pCQyxFQUFBQSxHQUFHLEVBQUhBO0FBRHlCLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgcGxhaW5QYXJzZXIgPSBuZXcgUGxhaW5QYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIHBsYWluUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBsYWluUGFyc2VyID0gUGxhaW5QYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIHBsYWluUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGxhaW5QYXJzZXIsIHtcbiAgYm5mXG59KTtcbiJdfQ==