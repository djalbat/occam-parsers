'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      bnf = '\n    \n      ' + bnf + '\n      \n      ' + termDefaultBNF + '\n      \n      ' + expressionDefaultBNF + '\n      \n      ' + statementDefaultBNF + '\n      \n      ' + metastatementDefaultBNF + '\n      \n    '; ///

      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }, {
    key: 'fromNothing',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsInRlcm1EZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRCTkYiLCJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJGbG9yZW5jZVBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksaUJBQWlCSixRQUFRLG1CQUFSLENBSHZCO0FBQUEsSUFJTUssdUJBQXVCTCxRQUFRLHlCQUFSLENBSjdCO0FBQUEsSUFLTU0sc0JBQXNCTixRQUFRLHdCQUFSLENBTDVCO0FBQUEsSUFNTU8sMEJBQTBCUCxRQUFRLDRCQUFSLENBTmhDOztJQVFRUSxRLEdBQWFULE0sQ0FBYlMsUTs7O0FBRVIsSUFBTUMsV0FBV0QsU0FBU0UsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlULFVBQVVRLFdBQVYsRUFEbEI7O0lBR01FLGM7Ozs7Ozs7Ozs7OzRCQUNXWCxHLEVBQUs7QUFDbEJBLCtCQUVJQSxHQUZKLHdCQUlJRyxjQUpKLHdCQU1JQyxvQkFOSix3QkFRSUMsbUJBUkosd0JBVUlDLHVCQVZKLG9CQURrQixDQWFmOztBQUVILFVBQU1NLFNBQVNKLFNBQVNLLGFBQVQsQ0FBdUJiLEdBQXZCLENBQWY7QUFBQSxVQUNNYyxRQUFRSixVQUFVSyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksaUJBQWlCLElBQUlMLGNBQUosQ0FBbUJHLEtBQW5CLENBRnZCOztBQUlBLGFBQU9FLGNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxpQkFBaUJMLGVBQWVNLE9BQWYsQ0FBdUJqQixHQUF2QixDQUF2Qjs7QUFFQSxhQUFPZ0IsY0FBUDtBQUNEOzs7O0VBM0IwQmQsWTs7QUE4QjdCZ0IsT0FBT0MsTUFBUCxDQUFjUixjQUFkLEVBQThCO0FBQzVCWDtBQUQ0QixDQUE5Qjs7QUFJQW9CLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICB0ZXJtRGVmYXVsdEJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEJORi90ZXJtJyksXG4gICAgICBleHByZXNzaW9uRGVmYXVsdEJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEJORi9leHByZXNzaW9uJyksXG4gICAgICBzdGF0ZW1lbnREZWZhdWx0Qk5GID0gcmVxdWlyZSgnLi9kZWZhdWx0Qk5GL3N0YXRlbWVudCcpLFxuICAgICAgbWV0YXN0YXRlbWVudERlZmF1bHRCTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRCTkYvbWV0YXN0YXRlbWVudCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGJuZiA9IGBcbiAgICBcbiAgICAgICR7Ym5mfVxuICAgICAgXG4gICAgICAke3Rlcm1EZWZhdWx0Qk5GfVxuICAgICAgXG4gICAgICAke2V4cHJlc3Npb25EZWZhdWx0Qk5GfVxuICAgICAgXG4gICAgICAke3N0YXRlbWVudERlZmF1bHRCTkZ9XG4gICAgICBcbiAgICAgICR7bWV0YXN0YXRlbWVudERlZmF1bHRCTkZ9XG4gICAgICBcbiAgICBgOyAvLy9cblxuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZVBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19