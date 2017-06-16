'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var BNFLexer = lexers.BNFLexer;

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
      var bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines),
          productions = BNFParser.generateProductions(node),
          basicParser = new BasicParser(productions);

      return basicParser;
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJCTkZMZXhlciIsIkJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJmcm9tR3JhbW1hciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInByb2R1Y3Rpb25zIiwiZ2VuZXJhdGVQcm9kdWN0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7O0lBRUZDLFc7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxjQUFjRCxZQUFZRSxXQUFaLENBQXdCTixPQUF4QixDQUFwQjs7QUFFQSxhQUFPSyxXQUFQO0FBQ0Q7OztnQ0FFa0JMLE8sRUFBUztBQUMxQixVQUFNTyxXQUFXSixTQUFTSyxXQUFULEVBQWpCO0FBQUEsVUFDTUMsWUFBWVIsVUFBVU8sV0FBVixFQURsQjtBQUFBLFVBRU1FLFFBQVFILFNBQVNJLGdCQUFULENBQTBCWCxPQUExQixDQUZkO0FBQUEsVUFHTVksT0FBT0gsVUFBVUksYUFBVixDQUF3QkgsS0FBeEIsQ0FIYjtBQUFBLFVBSU1JLGNBQWNiLFVBQVVjLG1CQUFWLENBQThCSCxJQUE5QixDQUpwQjtBQUFBLFVBS01QLGNBQWMsSUFBSUQsV0FBSixDQUFnQlUsV0FBaEIsQ0FMcEI7O0FBT0EsYUFBT1QsV0FBUDtBQUNEOzs7O0VBaEJ1QkgsWTs7QUFtQjFCYyxPQUFPQyxPQUFQLEdBQWlCYixXQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbiAgICBcbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBub2RlID0gYm5mUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLmdlbmVyYXRlUHJvZHVjdGlvbnMobm9kZSksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iXX0=