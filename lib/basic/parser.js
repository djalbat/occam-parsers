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

var BasicParser = function (_CommonParser) {
  _inherits(BasicParser, _CommonParser);

  function BasicParser() {
    _classCallCheck(this, BasicParser);

    return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
  }

  _createClass(BasicParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var basicParser = null;

      try {
        var lines = bnfLexer.linesFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromLines(lines),
            rules = BNFParser.generateRules(rulesNode);

        basicParser = new BasicParser(rules);
      } catch (error) {}

      return basicParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var basicParser = BasicParser.fromBNF(bnf);

      return basicParser;
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

BasicParser.bnf = bnf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJORkxleGVyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJsaW5lcyIsImxpbmVzRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImVycm9yIiwiZnJvbUJORiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCOztJQUlRSSxRLEdBQWFMLE0sQ0FBYkssUTs7O0FBRVIsSUFBTUMsV0FBV0QsU0FBU0UsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlMLFVBQVVJLFdBQVYsRUFEbEI7O0lBR01FLFc7Ozs7Ozs7Ozs7OzRCQUNXUCxHLEVBQUs7QUFDbEIsVUFBSVEsY0FBYyxJQUFsQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTUMsUUFBUUwsU0FBU00sWUFBVCxDQUFzQlYsR0FBdEIsQ0FBZDtBQUFBLFlBQ01XLFlBQVlMLFVBQVVNLGtCQUFWLENBQTZCSCxLQUE3QixDQURsQjtBQUFBLFlBRU1JLFFBQVFaLFVBQVVhLGFBQVYsQ0FBd0JILFNBQXhCLENBRmQ7O0FBSUFILHNCQUFjLElBQUlELFdBQUosQ0FBZ0JNLEtBQWhCLENBQWQ7QUFDRCxPQU5ELENBTUUsT0FBT0UsS0FBUCxFQUFjLENBRWY7O0FBRUQsYUFBT1AsV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGNBQWNELFlBQVlTLE9BQVosQ0FBb0JoQixHQUFwQixDQUFwQjs7QUFFQSxhQUFPUSxXQUFQO0FBQ0Q7Ozs7RUFyQnVCTixZOztBQXdCMUJlLE9BQU9DLE9BQVAsR0FBaUJYLFdBQWpCOztBQUVBQSxZQUFZUCxHQUFaLEdBQWtCQSxHQUFsQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGxldCBiYXNpY1BhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIHJ1bGVzTm9kZSA9IGJuZlBhcnNlci5ydWxlc05vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUpO1xuXG4gICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljUGFyc2VyO1xuXG5CYXNpY1BhcnNlci5ibmYgPSBibmY7XG4iXX0=