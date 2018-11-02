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

var CSSParser = function (_CommonParser) {
  _inherits(CSSParser, _CommonParser);

  function CSSParser() {
    _classCallCheck(this, CSSParser);

    return _possibleConstructorReturn(this, (CSSParser.__proto__ || Object.getPrototypeOf(CSSParser)).apply(this, arguments));
  }

  _createClass(CSSParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var cssParser = null;

      try {
        var tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            rules = BNFParser.generateRules(rulesNode);

        cssParser = new CSSParser(rules);
      } catch (error) {}

      return cssParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var cssParser = CSSParser.fromBNF(bnf);

      return cssParser;
    }
  }]);

  return CSSParser;
}(CommonParser);

Object.assign(CSSParser, {
  bnf: bnf
});

module.exports = CSSParser;

/*


[
  {
    "special": ":|;|!|\\{|\\}"
  },
  {
    "hexColour": "^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"
  },
  {
    "keyword": "^(?:important)$"
  },
  {
    "unassigned": "^.*$"
  }
]


 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJibmYiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJDU1NQYXJzZXIiLCJjc3NQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVRva2VucyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImVycm9yIiwiZnJvbUJORiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCOztJQUlRSSxRLEdBQWFMLE0sQ0FBYkssUTs7O0FBRVIsSUFBTUMsV0FBV0QsU0FBU0UsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlMLFVBQVVJLFdBQVYsRUFEbEI7O0lBR01FLFM7Ozs7Ozs7Ozs7OzRCQUNXUCxHLEVBQUs7QUFDbEIsVUFBSVEsWUFBWSxJQUFoQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTUMsU0FBU0wsU0FBU00sYUFBVCxDQUF1QlYsR0FBdkIsQ0FBZjtBQUFBLFlBQ01XLFlBQVlMLFVBQVVNLG1CQUFWLENBQThCSCxNQUE5QixDQURsQjtBQUFBLFlBRU1JLFFBQVFaLFVBQVVhLGFBQVYsQ0FBd0JILFNBQXhCLENBRmQ7O0FBSUFILG9CQUFZLElBQUlELFNBQUosQ0FBY00sS0FBZCxDQUFaO0FBQ0QsT0FORCxDQU1FLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9QLFNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxZQUFZRCxVQUFVUyxPQUFWLENBQWtCaEIsR0FBbEIsQ0FBbEI7O0FBRUEsYUFBT1EsU0FBUDtBQUNEOzs7O0VBckJxQk4sWTs7QUF3QnhCZSxPQUFPQyxNQUFQLENBQWNYLFNBQWQsRUFBeUI7QUFDdkJQO0FBRHVCLENBQXpCOztBQUlBbUIsT0FBT0MsT0FBUCxHQUFpQmIsU0FBakI7O0FBRUEiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgQ1NTUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgbGV0IGNzc1BhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlKTtcblxuICAgICAgY3NzUGFyc2VyID0gbmV3IENTU1BhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBjc3NQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBjc3NQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDU1NQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDU1NQYXJzZXI7XG5cbi8qXG5cblxuW1xuICB7XG4gICAgXCJzcGVjaWFsXCI6IFwiOnw7fCF8XFxcXHt8XFxcXH1cIlxuICB9LFxuICB7XG4gICAgXCJoZXhDb2xvdXJcIjogXCJeIyg/OlswLTlhLWZBLUZdezN9fFswLTlhLWZBLUZdezZ9KSRcIlxuICB9LFxuICB7XG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OmltcG9ydGFudCkkXCJcbiAgfSxcbiAge1xuICAgIFwidW5hc3NpZ25lZFwiOiBcIl4uKiRcIlxuICB9XG5dXG5cblxuICovIl19