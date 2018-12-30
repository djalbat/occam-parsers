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

var LaTeXParser = function (_CommonParser) {
  _inherits(LaTeXParser, _CommonParser);

  function LaTeXParser() {
    _classCallCheck(this, LaTeXParser);

    return _possibleConstructorReturn(this, (LaTeXParser.__proto__ || Object.getPrototypeOf(LaTeXParser)).apply(this, arguments));
  }

  _createClass(LaTeXParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          laTeXParser = new LaTeXParser(rules);

      return laTeXParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var laTeXParser = LaTeXParser.fromBNF(bnf);

      return laTeXParser;
    }
  }]);

  return LaTeXParser;
}(CommonParser);

Object.assign(LaTeXParser, {
  bnf: bnf
});

module.exports = LaTeXParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9sYXRleC9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkxhVGVYUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwibGFUZVhQYXJzZXIiLCJmcm9tQk5GIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxNQUFNRCxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsa0JBQVIsQ0FGckI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWUwsVUFBVUksV0FBVixFQURsQjs7SUFHTUUsVzs7Ozs7Ozs7Ozs7NEJBQ1dQLEcsRUFBSztBQUNsQixVQUFNUSxTQUFTSixTQUFTSyxhQUFULENBQXVCVCxHQUF2QixDQUFmO0FBQUEsVUFDTVUsUUFBUUosVUFBVUssZUFBVixDQUEwQkgsTUFBMUIsQ0FEZDtBQUFBLFVBRU1JLGNBQWMsSUFBSUwsV0FBSixDQUFnQkcsS0FBaEIsQ0FGcEI7O0FBSUEsYUFBT0UsV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGNBQWNMLFlBQVlNLE9BQVosQ0FBb0JiLEdBQXBCLENBQXBCOztBQUVBLGFBQU9ZLFdBQVA7QUFDRDs7OztFQWJ1QlYsWTs7QUFnQjFCWSxPQUFPQyxNQUFQLENBQWNSLFdBQWQsRUFBMkI7QUFDekJQO0FBRHlCLENBQTNCOztBQUlBZ0IsT0FBT0MsT0FBUCxHQUFpQlYsV0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgTGFUZVhQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgbGFUZVhQYXJzZXIgPSBuZXcgTGFUZVhQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGxhVGVYUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGxhVGVYUGFyc2VyID0gTGFUZVhQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGxhVGVYUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGFUZVhQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYVRlWFBhcnNlcjtcbiJdfQ==