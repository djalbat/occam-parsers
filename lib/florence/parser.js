"use strict";

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

Object.assign(FlorenceParser, {
  bnf: _bnf["default"]
});
module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJGbG9yZW5jZVBhcnNlciIsImJuZiIsInRlcm1EZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRCTkYiLCJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJDb21tb25QYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozs0QkFDV0MsRyxFQUFLO0FBQ2xCQSxNQUFBQSxHQUFHLDJCQUVDQSxHQUZELDZCQUlDQyxnQkFKRCw2QkFNQ0Msc0JBTkQsNkJBUUNDLHFCQVJELDZCQVVDQyx5QkFWRCxtQkFBSCxDQURrQixDQWFmOztBQUVILFVBQU1DLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxVQUNNQyxTQUFTLEdBQUdDLG1CQUFVRixXQUFWLEVBRGxCO0FBQUEsVUFFTUcsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJYLEdBQXZCLENBRmY7QUFBQSxVQUdNWSxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0ssZUFBVixDQUEwQkgsTUFBMUIsQ0FIZDtBQUFBLFVBSU1JLGNBQWMsR0FBRyxJQUFJZixjQUFKLENBQW1CYSxLQUFuQixDQUp2Qjs7QUFNQSxhQUFPRSxjQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsY0FBYyxHQUFHZixjQUFjLENBQUNnQixPQUFmLENBQXVCZixlQUF2QixDQUF2QjtBQUVBLGFBQU9jLGNBQVA7QUFDRDs7OztFQTdCMEJFLG1COztBQWdDN0JDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbkIsY0FBZCxFQUE4QjtBQUM1QkMsRUFBQUEsR0FBRyxFQUFIQTtBQUQ0QixDQUE5QjtBQUlBbUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckIsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgQk5GUGFyc2VyIGZyb20gXCIuLi9ibmYvcGFyc2VyXCI7XG5pbXBvcnQgQ29tbW9uUGFyc2VyIGZyb20gXCIuLi9jb21tb24vcGFyc2VyXCI7XG5pbXBvcnQgdGVybURlZmF1bHRCTkYgZnJvbSBcIi4vZGVmYXVsdEJORi90ZXJtXCI7XG5pbXBvcnQgc3RhdGVtZW50RGVmYXVsdEJORiBmcm9tIFwiLi9kZWZhdWx0Qk5GL3N0YXRlbWVudFwiO1xuaW1wb3J0IGV4cHJlc3Npb25EZWZhdWx0Qk5GIGZyb20gXCIuL2RlZmF1bHRCTkYvZXhwcmVzc2lvblwiO1xuaW1wb3J0IG1ldGFzdGF0ZW1lbnREZWZhdWx0Qk5GIGZyb20gXCIuL2RlZmF1bHRCTkYvbWV0YXN0YXRlbWVudFwiO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGJuZiA9IGBcbiAgICBcbiAgICAgICR7Ym5mfVxuICAgICAgXG4gICAgICAke3Rlcm1EZWZhdWx0Qk5GfVxuICAgICAgXG4gICAgICAke2V4cHJlc3Npb25EZWZhdWx0Qk5GfVxuICAgICAgXG4gICAgICAke3N0YXRlbWVudERlZmF1bHRCTkZ9XG4gICAgICBcbiAgICAgICR7bWV0YXN0YXRlbWVudERlZmF1bHRCTkZ9XG4gICAgICBcbiAgICBgOyAvLy9cblxuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==