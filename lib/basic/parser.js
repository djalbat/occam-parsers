'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    CommonParser = require('../common/parser'),
    ExtendedBNFParser = require('../extendedBNF/parser');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;

var BasicParser = function (_CommonParser) {
  _inherits(BasicParser, _CommonParser);

  function BasicParser() {
    _classCallCheck(this, BasicParser);

    return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
  }

  _createClass(BasicParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var basicParser = BasicParser.fromGrammar(grammar);

      return basicParser;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var basicParser = null;

      try {
        var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
            extendedBNFParser = ExtendedBNFParser.fromNothing(),
            lines = extendedBNFLexer.linesFromGrammar(grammar),
            node = extendedBNFParser.nodeFromLines(lines),
            productions = ExtendedBNFParser.generateProductions(node);

        basicParser = new BasicParser(productions);
      } catch (error) {}

      return basicParser;
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

BasicParser.grammar = grammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJCYXNpY1BhcnNlciIsImJhc2ljUGFyc2VyIiwiZnJvbUdyYW1tYXIiLCJleHRlbmRlZEJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJleHRlbmRlZEJORlBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicHJvZHVjdGlvbnMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsa0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0lBSVFJLGdCLEdBQXFCTCxNLENBQXJCSyxnQjs7SUFFRkMsVzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLGNBQWNELFlBQVlFLFdBQVosQ0FBd0JOLE9BQXhCLENBQXBCOztBQUVBLGFBQU9LLFdBQVA7QUFDRDs7O2dDQUVrQkwsTyxFQUFTO0FBQzFCLFVBQUlLLGNBQWMsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLFlBQU1FLG1CQUFtQkosaUJBQWlCSyxXQUFqQixFQUF6QjtBQUFBLFlBQ01DLG9CQUFvQlAsa0JBQWtCTSxXQUFsQixFQUQxQjtBQUFBLFlBRU1FLFFBQVFILGlCQUFpQkksZ0JBQWpCLENBQWtDWCxPQUFsQyxDQUZkO0FBQUEsWUFHTVksT0FBT0gsa0JBQWtCSSxhQUFsQixDQUFnQ0gsS0FBaEMsQ0FIYjtBQUFBLFlBSU1JLGNBQWNaLGtCQUFrQmEsbUJBQWxCLENBQXNDSCxJQUF0QyxDQUpwQjs7QUFNQVAsc0JBQWMsSUFBSUQsV0FBSixDQUFnQlUsV0FBaEIsQ0FBZDtBQUNELE9BUkQsQ0FRRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPWCxXQUFQO0FBQ0Q7Ozs7RUF2QnVCSixZOztBQTBCMUJnQixPQUFPQyxPQUFQLEdBQWlCZCxXQUFqQjs7QUFFQUEsWUFBWUosT0FBWixHQUFzQkEsT0FBdEIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG4gICAgXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGxldCBiYXNpY1BhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIGxpbmVzID0gZXh0ZW5kZWRCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbnMgPSBFeHRlbmRlZEJORlBhcnNlci5nZW5lcmF0ZVByb2R1Y3Rpb25zKG5vZGUpO1xuXG4gICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljUGFyc2VyO1xuXG5CYXNpY1BhcnNlci5ncmFtbWFyID0gZ3JhbW1hcjsiXX0=