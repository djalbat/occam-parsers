"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _bnf = _interopRequireDefault(require("./bnf"));

var _parser = _interopRequireDefault(require("../bnf/parser"));

var _parser2 = _interopRequireDefault(require("../common/parser"));

var _term = _interopRequireDefault(require("./defaultCustomGrammarBNF/term"));

var _statement = _interopRequireDefault(require("./defaultCustomGrammarBNF/statement"));

var _expression = _interopRequireDefault(require("./defaultCustomGrammarBNF/expression"));

var _metastatement = _interopRequireDefault(require("./defaultCustomGrammarBNF/metastatement"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJGbG9yZW5jZVBhcnNlciIsImJuZiIsInRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsInN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7OzRCQUdKQyxHLEVBQUs7QUFDbEJBLE1BQUFBLEdBQUcsMkJBRUNBLEdBRkQsNkJBSUNDLGdCQUpELDZCQU1DQyxzQkFORCw2QkFRQ0MscUJBUkQsNkJBVUNDLHlCQVZELG1CQUFILENBRGtCLENBYWY7O0FBRUgsVUFBTUMsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLFVBQ01DLFNBQVMsR0FBR0MsbUJBQVVGLFdBQVYsRUFEbEI7QUFBQSxVQUVNRyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QlgsR0FBdkIsQ0FGZjtBQUFBLFVBR01ZLEtBQUssR0FBR0osU0FBUyxDQUFDSyxlQUFWLENBQTBCSCxNQUExQixDQUhkO0FBQUEsVUFJTUksY0FBYyxHQUFHLElBQUlmLGNBQUosQ0FBbUJhLEtBQW5CLENBSnZCOztBQU1BLGFBQU9FLGNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxjQUFjLEdBQUdmLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJmLGVBQXZCLENBQXZCO0FBRUEsYUFBT2MsY0FBUDtBQUNEOzs7O0VBL0J5Q0UsbUI7Ozs7Z0JBQXZCakIsYyxTQUNOQyxlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuaW1wb3J0IHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hckJORi90ZXJtXCI7XG5pbXBvcnQgc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYvc3RhdGVtZW50XCI7XG5pbXBvcnQgZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIGZyb20gXCIuL2RlZmF1bHRDdXN0b21HcmFtbWFyQk5GL2V4cHJlc3Npb25cIjtcbmltcG9ydCBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYvbWV0YXN0YXRlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgYm5mID0gYFxuICAgIFxuICAgICAgJHtibmZ9XG4gICAgICBcbiAgICAgICR7dGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GfVxuICAgICAgXG4gICAgICAke2V4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORn1cbiAgICAgIFxuICAgICAgJHtzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORn1cbiAgICAgIFxuICAgICAgJHttZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZ9XG4gICAgICBcbiAgICBgOyAvLy9cblxuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG4iXX0=