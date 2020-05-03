"use strict";

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

var LaTeXParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(LaTeXParser, _CommonParser);

  function LaTeXParser() {
    _classCallCheck(this, LaTeXParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(LaTeXParser).apply(this, arguments));
  }

  _createClass(LaTeXParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
          bnfParser = _parser["default"].fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          laTeXParser = new LaTeXParser(rules);

      return laTeXParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var laTeXParser = LaTeXParser.fromBNF(_bnf["default"]);
      return laTeXParser;
    }
  }]);

  return LaTeXParser;
}(_parser2["default"]);

Object.assign(LaTeXParser, {
  bnf: _bnf["default"]
});
module.exports = LaTeXParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJMYVRlWFBhcnNlciIsImJuZiIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImxhVGVYUGFyc2VyIiwiZnJvbUJORiIsIkNvbW1vblBhcnNlciIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7OzRCQUNXQyxHLEVBQUs7QUFDbEIsVUFBTUMsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLFVBQ01DLFNBQVMsR0FBR0MsbUJBQVVGLFdBQVYsRUFEbEI7QUFBQSxVQUVNRyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QlAsR0FBdkIsQ0FGZjtBQUFBLFVBR01RLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQUhkO0FBQUEsVUFJTUksV0FBVyxHQUFHLElBQUlYLFdBQUosQ0FBZ0JTLEtBQWhCLENBSnBCOztBQU1BLGFBQU9FLFdBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxXQUFXLEdBQUdYLFdBQVcsQ0FBQ1ksT0FBWixDQUFvQlgsZUFBcEIsQ0FBcEI7QUFFQSxhQUFPVSxXQUFQO0FBQ0Q7Ozs7RUFmdUJFLG1COztBQWtCMUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZixXQUFkLEVBQTJCO0FBQ3pCQyxFQUFBQSxHQUFHLEVBQUhBO0FBRHlCLENBQTNCO0FBSUFlLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuXG5jbGFzcyBMYVRlWFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgbGFUZVhQYXJzZXIgPSBuZXcgTGFUZVhQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGxhVGVYUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGxhVGVYUGFyc2VyID0gTGFUZVhQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGxhVGVYUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGFUZVhQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYVRlWFBhcnNlcjtcbiJdfQ==