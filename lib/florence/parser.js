'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

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
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkZsb3JlbmNlUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21Ub2tlbnMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTCxVQUFVSSxXQUFWLEVBRGxCOztJQUdNRSxjOzs7Ozs7Ozs7Ozs0QkFDV1AsRyxFQUFLO0FBQ2xCLFVBQU1RLFNBQVNKLFNBQVNLLGFBQVQsQ0FBdUJULEdBQXZCLENBQWY7QUFBQSxVQUNNVSxZQUFZSixVQUFVSyxtQkFBVixDQUE4QkgsTUFBOUIsQ0FEbEI7QUFBQSxVQUVNSSxRQUFRWCxVQUFVWSxhQUFWLENBQXdCSCxTQUF4QixDQUZkO0FBQUEsVUFHTUksaUJBQWlCLElBQUlQLGNBQUosQ0FBbUJLLEtBQW5CLENBSHZCOztBQUtBLGFBQU9FLGNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxpQkFBaUJQLGVBQWVRLE9BQWYsQ0FBdUJmLEdBQXZCLENBQXZCOztBQUVBLGFBQU9jLGNBQVA7QUFDRDs7OztFQWQwQlosWTs7QUFpQjdCYyxPQUFPQyxNQUFQLENBQWNWLGNBQWQsRUFBOEI7QUFDNUJQO0FBRDRCLENBQTlCOztBQUlBa0IsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==