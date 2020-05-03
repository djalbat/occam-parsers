"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _bnf = _interopRequireDefault(require("./bnf"));

var _parser = _interopRequireDefault(require("../bnf/parser"));

var _parser2 = _interopRequireDefault(require("../common/parser"));

var _term = _interopRequireDefault(require("./defaultBNF/term"));

var _statement = _interopRequireDefault(require("./defaultBNF/statement"));

var _expression = _interopRequireDefault(require("./defaultBNF/expression"));

var _metastatement = _interopRequireDefault(require("./defaultBNF/metastatement"));

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

var FlorenceParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceParser).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(_term["default"], "\n      \n      ").concat(_expression["default"], "\n      \n      ").concat(_statement["default"], "\n      \n      ").concat(_metastatement["default"], "\n      \n    "); ///

      var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
          bnfParser = _parser["default"].fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var florenceParser = FlorenceParser.fromBNF(_bnf["default"]);
      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(_parser2["default"]);

exports["default"] = FlorenceParser;
Object.assign(FlorenceParser, {
  bnf: _bnf["default"]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJGbG9yZW5jZVBhcnNlciIsImJuZiIsInRlcm1EZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRCTkYiLCJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJDb21tb25QYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7OzRCQUNKQyxHLEVBQUs7QUFDbEJBLE1BQUFBLEdBQUcsMkJBRUNBLEdBRkQsNkJBSUNDLGdCQUpELDZCQU1DQyxzQkFORCw2QkFRQ0MscUJBUkQsNkJBVUNDLHlCQVZELG1CQUFILENBRGtCLENBYWY7O0FBRUgsVUFBTUMsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLFVBQ01DLFNBQVMsR0FBR0MsbUJBQVVGLFdBQVYsRUFEbEI7QUFBQSxVQUVNRyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QlgsR0FBdkIsQ0FGZjtBQUFBLFVBR01ZLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQUhkO0FBQUEsVUFJTUksY0FBYyxHQUFHLElBQUlmLGNBQUosQ0FBbUJhLEtBQW5CLENBSnZCOztBQU1BLGFBQU9FLGNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxjQUFjLEdBQUdmLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJmLGVBQXZCLENBQXZCO0FBRUEsYUFBT2MsY0FBUDtBQUNEOzs7O0VBN0J5Q0UsbUI7OztBQWdDNUNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbkIsY0FBZCxFQUE4QjtBQUM1QkMsRUFBQUEsR0FBRyxFQUFIQTtBQUQ0QixDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBCTkZQYXJzZXIgZnJvbSBcIi4uL2JuZi9wYXJzZXJcIjtcbmltcG9ydCBDb21tb25QYXJzZXIgZnJvbSBcIi4uL2NvbW1vbi9wYXJzZXJcIjtcbmltcG9ydCB0ZXJtRGVmYXVsdEJORiBmcm9tIFwiLi9kZWZhdWx0Qk5GL3Rlcm1cIjtcbmltcG9ydCBzdGF0ZW1lbnREZWZhdWx0Qk5GIGZyb20gXCIuL2RlZmF1bHRCTkYvc3RhdGVtZW50XCI7XG5pbXBvcnQgZXhwcmVzc2lvbkRlZmF1bHRCTkYgZnJvbSBcIi4vZGVmYXVsdEJORi9leHByZXNzaW9uXCI7XG5pbXBvcnQgbWV0YXN0YXRlbWVudERlZmF1bHRCTkYgZnJvbSBcIi4vZGVmYXVsdEJORi9tZXRhc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgYm5mID0gYFxuICAgIFxuICAgICAgJHtibmZ9XG4gICAgICBcbiAgICAgICR7dGVybURlZmF1bHRCTkZ9XG4gICAgICBcbiAgICAgICR7ZXhwcmVzc2lvbkRlZmF1bHRCTkZ9XG4gICAgICBcbiAgICAgICR7c3RhdGVtZW50RGVmYXVsdEJORn1cbiAgICAgIFxuICAgICAgJHttZXRhc3RhdGVtZW50RGVmYXVsdEJORn1cbiAgICAgIFxuICAgIGA7IC8vL1xuXG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZVBhcnNlciwge1xuICBibmZcbn0pO1xuIl19