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
    CommonParser = require('../common/parser'),
    termDefaultBNF = require('./defaultBNF/term'),
    expressionDefaultBNF = require('./defaultBNF/expression'),
    statementDefaultBNF = require('./defaultBNF/statement'),
    metastatementDefaultBNF = require('./defaultBNF/metastatement');

var BNFLexer = lexers.BNFLexer;
var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var FlorenceParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceParser).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(termDefaultBNF, "\n      \n      ").concat(expressionDefaultBNF, "\n      \n      ").concat(statementDefaultBNF, "\n      \n      ").concat(metastatementDefaultBNF, "\n      \n    "); ///

      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = new FlorenceParser(rules);
      return florenceParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var florenceParser = FlorenceParser.fromBNF(bnf);
      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

Object.assign(FlorenceParser, {
  bnf: bnf
});
module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwidGVybURlZmF1bHRCTkYiLCJleHByZXNzaW9uRGVmYXVsdEJORiIsInN0YXRlbWVudERlZmF1bHRCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEJORiIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkZsb3JlbmNlUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxHQUFHLEdBQUdELE9BQU8sQ0FBQyxPQUFELENBQW5CO0FBQUEsSUFDTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUR6QjtBQUFBLElBRU1HLFlBQVksR0FBR0gsT0FBTyxDQUFDLGtCQUFELENBRjVCO0FBQUEsSUFHTUksY0FBYyxHQUFHSixPQUFPLENBQUMsbUJBQUQsQ0FIOUI7QUFBQSxJQUlNSyxvQkFBb0IsR0FBR0wsT0FBTyxDQUFDLHlCQUFELENBSnBDO0FBQUEsSUFLTU0sbUJBQW1CLEdBQUdOLE9BQU8sQ0FBQyx3QkFBRCxDQUxuQztBQUFBLElBTU1PLHVCQUF1QixHQUFHUCxPQUFPLENBQUMsNEJBQUQsQ0FOdkM7O0lBUVFRLFEsR0FBYVQsTSxDQUFiUyxRO0FBRVIsSUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdULFNBQVMsQ0FBQ1EsV0FBVixFQURsQjs7SUFHTUUsYzs7Ozs7Ozs7Ozs7NEJBQ1dYLEcsRUFBSztBQUNsQkEsTUFBQUEsR0FBRywyQkFFQ0EsR0FGRCw2QkFJQ0csY0FKRCw2QkFNQ0Msb0JBTkQsNkJBUUNDLG1CQVJELDZCQVVDQyx1QkFWRCxtQkFBSCxDQURrQixDQWFmOztBQUVILFVBQU1NLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCYixHQUF2QixDQUFmO0FBQUEsVUFDTWMsS0FBSyxHQUFHSixTQUFTLENBQUNLLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxjQUFjLEdBQUcsSUFBSUwsY0FBSixDQUFtQkcsS0FBbkIsQ0FGdkI7QUFJQSxhQUFPRSxjQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsY0FBYyxHQUFHTCxjQUFjLENBQUNNLE9BQWYsQ0FBdUJqQixHQUF2QixDQUF2QjtBQUVBLGFBQU9nQixjQUFQO0FBQ0Q7Ozs7RUEzQjBCZCxZOztBQThCN0JnQixNQUFNLENBQUNDLE1BQVAsQ0FBY1IsY0FBZCxFQUE4QjtBQUM1QlgsRUFBQUEsR0FBRyxFQUFIQTtBQUQ0QixDQUE5QjtBQUlBb0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICB0ZXJtRGVmYXVsdEJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEJORi90ZXJtJyksXG4gICAgICBleHByZXNzaW9uRGVmYXVsdEJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEJORi9leHByZXNzaW9uJyksXG4gICAgICBzdGF0ZW1lbnREZWZhdWx0Qk5GID0gcmVxdWlyZSgnLi9kZWZhdWx0Qk5GL3N0YXRlbWVudCcpLFxuICAgICAgbWV0YXN0YXRlbWVudERlZmF1bHRCTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRCTkYvbWV0YXN0YXRlbWVudCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGJuZiA9IGBcbiAgICBcbiAgICAgICR7Ym5mfVxuICAgICAgXG4gICAgICAke3Rlcm1EZWZhdWx0Qk5GfVxuICAgICAgXG4gICAgICAke2V4cHJlc3Npb25EZWZhdWx0Qk5GfVxuICAgICAgXG4gICAgICAke3N0YXRlbWVudERlZmF1bHRCTkZ9XG4gICAgICBcbiAgICAgICR7bWV0YXN0YXRlbWVudERlZmF1bHRCTkZ9XG4gICAgICBcbiAgICBgOyAvLy9cblxuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZVBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19