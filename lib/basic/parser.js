'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    parserUtil = require('../util/parser'),
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
            node = bnfParser.nodeFromLines(lines),
            rules = BNFParser.generateRules(node);

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
  }, {
    key: 'findRule',
    value: function findRule(ruleName, rules) {
      return parserUtil.findRule(ruleName, rules);
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

BasicParser.bnf = bnf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsInBhcnNlclV0aWwiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCYXNpY1BhcnNlciIsImJhc2ljUGFyc2VyIiwibGluZXMiLCJsaW5lc0Zyb21CTkYiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImVycm9yIiwiZnJvbUJORiIsInJ1bGVOYW1lIiwiZmluZFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsYUFBYUYsUUFBUSxnQkFBUixDQURuQjtBQUFBLElBRU1HLFlBQVlILFFBQVEsZUFBUixDQUZsQjtBQUFBLElBR01JLGVBQWVKLFFBQVEsa0JBQVIsQ0FIckI7O0lBS1FLLFEsR0FBYU4sTSxDQUFiTSxROzs7QUFFUixJQUFNQyxXQUFXRCxTQUFTRSxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWUwsVUFBVUksV0FBVixFQURsQjs7SUFHTUUsVzs7Ozs7Ozs7Ozs7NEJBQ1dSLEcsRUFBSztBQUNsQixVQUFJUyxjQUFjLElBQWxCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxRQUFRTCxTQUFTTSxZQUFULENBQXNCWCxHQUF0QixDQUFkO0FBQUEsWUFDTVksT0FBT0wsVUFBVU0sYUFBVixDQUF3QkgsS0FBeEIsQ0FEYjtBQUFBLFlBRU1JLFFBQVFaLFVBQVVhLGFBQVYsQ0FBd0JILElBQXhCLENBRmQ7O0FBSUFILHNCQUFjLElBQUlELFdBQUosQ0FBZ0JNLEtBQWhCLENBQWQ7QUFDRCxPQU5ELENBTUUsT0FBT0UsS0FBUCxFQUFjLENBRWY7O0FBRUQsYUFBT1AsV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGNBQWNELFlBQVlTLE9BQVosQ0FBb0JqQixHQUFwQixDQUFwQjs7QUFFQSxhQUFPUyxXQUFQO0FBQ0Q7Ozs2QkFFZVMsUSxFQUFVSixLLEVBQU87QUFBRSxhQUFPYixXQUFXa0IsUUFBWCxDQUFvQkQsUUFBcEIsRUFBOEJKLEtBQTlCLENBQVA7QUFBOEM7Ozs7RUF2QnpEWCxZOztBQTBCMUJpQixPQUFPQyxPQUFQLEdBQWlCYixXQUFqQjs7QUFFQUEsWUFBWVIsR0FBWixHQUFrQkEsR0FBbEIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlcicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGxldCBiYXNpY1BhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpIHsgcmV0dXJuIHBhcnNlclV0aWwuZmluZFJ1bGUocnVsZU5hbWUsIHJ1bGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljUGFyc2VyO1xuXG5CYXNpY1BhcnNlci5ibmYgPSBibmY7XG4iXX0=