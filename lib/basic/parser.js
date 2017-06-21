'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    CommonParser = require('../common/parser'),
    ExtendedBNFParser = require('../extendedBNF/parser');

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
      var basicParser = null;

      try {
        var bnfLexer = BNFLexer.fromNothing(),
            extendedBNFParser = ExtendedBNFParser.fromNothing(),
            lines = bnfLexer.linesFromGrammar(grammar),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsIkJORkxleGVyIiwiQmFzaWNQYXJzZXIiLCJiYXNpY1BhcnNlciIsImZyb21HcmFtbWFyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJwcm9kdWN0aW9ucyIsImdlbmVyYXRlUHJvZHVjdGlvbnMiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsZUFBZUYsUUFBUSxrQkFBUixDQURyQjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjs7SUFJUUksUSxHQUFhTCxNLENBQWJLLFE7O0lBRUZDLFc7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxjQUFjRCxZQUFZRSxXQUFaLENBQXdCTixPQUF4QixDQUFwQjs7QUFFQSxhQUFPSyxXQUFQO0FBQ0Q7OztnQ0FFa0JMLE8sRUFBUztBQUMxQixVQUFJSyxjQUFjLElBQWxCOztBQUVBLFVBQUk7QUFDRixZQUFNRSxXQUFXSixTQUFTSyxXQUFULEVBQWpCO0FBQUEsWUFDTUMsb0JBQW9CUCxrQkFBa0JNLFdBQWxCLEVBRDFCO0FBQUEsWUFFTUUsUUFBUUgsU0FBU0ksZ0JBQVQsQ0FBMEJYLE9BQTFCLENBRmQ7QUFBQSxZQUdNWSxPQUFPSCxrQkFBa0JJLGFBQWxCLENBQWdDSCxLQUFoQyxDQUhiO0FBQUEsWUFJTUksY0FBY1osa0JBQWtCYSxtQkFBbEIsQ0FBc0NILElBQXRDLENBSnBCOztBQU1BUCxzQkFBYyxJQUFJRCxXQUFKLENBQWdCVSxXQUFoQixDQUFkO0FBQ0QsT0FSRCxDQVFFLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9YLFdBQVA7QUFDRDs7OztFQXZCdUJKLFk7O0FBMEIxQmdCLE9BQU9DLE9BQVAsR0FBaUJkLFdBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbiAgICBcbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgbGV0IGJhc2ljUGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICBwcm9kdWN0aW9ucyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUHJvZHVjdGlvbnMobm9kZSk7XG5cbiAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iXX0=