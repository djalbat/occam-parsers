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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

_defineProperty(FlorenceParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJGbG9yZW5jZVBhcnNlciIsImJuZiIsInRlcm1EZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRCTkYiLCJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJDb21tb25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7NEJBR0pDLEcsRUFBSztBQUNsQkEsTUFBQUEsR0FBRywyQkFFQ0EsR0FGRCw2QkFJQ0MsZ0JBSkQsNkJBTUNDLHNCQU5ELDZCQVFDQyxxQkFSRCw2QkFVQ0MseUJBVkQsbUJBQUgsQ0FEa0IsQ0FhZjs7QUFFSCxVQUFNQyxRQUFRLEdBQUdDLHNCQUFTQyxXQUFULEVBQWpCO0FBQUEsVUFDTUMsU0FBUyxHQUFHQyxtQkFBVUYsV0FBVixFQURsQjtBQUFBLFVBRU1HLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCWCxHQUF2QixDQUZmO0FBQUEsVUFHTVksS0FBSyxHQUFHSixTQUFTLENBQUNLLGVBQVYsQ0FBMEJILE1BQTFCLENBSGQ7QUFBQSxVQUlNSSxjQUFjLEdBQUcsSUFBSWYsY0FBSixDQUFtQmEsS0FBbkIsQ0FKdkI7O0FBTUEsYUFBT0UsY0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGNBQWMsR0FBR2YsY0FBYyxDQUFDZ0IsT0FBZixDQUF1QmYsZUFBdkIsQ0FBdkI7QUFFQSxhQUFPYyxjQUFQO0FBQ0Q7Ozs7RUEvQnlDRSxtQjs7OztnQkFBdkJqQixjLFNBQ05DLGUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgQk5GUGFyc2VyIGZyb20gXCIuLi9ibmYvcGFyc2VyXCI7XG5pbXBvcnQgQ29tbW9uUGFyc2VyIGZyb20gXCIuLi9jb21tb24vcGFyc2VyXCI7XG5pbXBvcnQgdGVybURlZmF1bHRCTkYgZnJvbSBcIi4vZGVmYXVsdEJORi90ZXJtXCI7XG5pbXBvcnQgc3RhdGVtZW50RGVmYXVsdEJORiBmcm9tIFwiLi9kZWZhdWx0Qk5GL3N0YXRlbWVudFwiO1xuaW1wb3J0IGV4cHJlc3Npb25EZWZhdWx0Qk5GIGZyb20gXCIuL2RlZmF1bHRCTkYvZXhwcmVzc2lvblwiO1xuaW1wb3J0IG1ldGFzdGF0ZW1lbnREZWZhdWx0Qk5GIGZyb20gXCIuL2RlZmF1bHRCTkYvbWV0YXN0YXRlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgYm5mID0gYFxuICAgIFxuICAgICAgJHtibmZ9XG4gICAgICBcbiAgICAgICR7dGVybURlZmF1bHRCTkZ9XG4gICAgICBcbiAgICAgICR7ZXhwcmVzc2lvbkRlZmF1bHRCTkZ9XG4gICAgICBcbiAgICAgICR7c3RhdGVtZW50RGVmYXVsdEJORn1cbiAgICAgIFxuICAgICAgJHttZXRhc3RhdGVtZW50RGVmYXVsdEJORn1cbiAgICAgIFxuICAgIGA7IC8vL1xuXG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cbiJdfQ==