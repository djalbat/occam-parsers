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


var extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
    extendedBNFParser = ExtendedBNFParser.fromNothing();

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
        var lines = extendedBNFLexer.linesFromGrammar(grammar),
            node = extendedBNFParser.nodeFromLines(lines),
            rules = ExtendedBNFParser.generateRules(node);

        basicParser = new BasicParser(rules);
      } catch (error) {}

      return basicParser;
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

BasicParser.grammar = grammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJleHRlbmRlZEJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJleHRlbmRlZEJORlBhcnNlciIsIkJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJmcm9tR3JhbW1hciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsa0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0lBSVFJLGdCLEdBQXFCTCxNLENBQXJCSyxnQjs7O0FBRVIsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLFdBQWpCLEVBQXpCO0FBQUEsSUFDTUMsb0JBQW9CSixrQkFBa0JHLFdBQWxCLEVBRDFCOztJQUdNRSxXOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBTUMsY0FBY0QsWUFBWUUsV0FBWixDQUF3QlQsT0FBeEIsQ0FBcEI7O0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7Z0NBRWtCUixPLEVBQVM7QUFDMUIsVUFBSVEsY0FBYyxJQUFsQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTUUsUUFBUU4saUJBQWlCTyxnQkFBakIsQ0FBa0NYLE9BQWxDLENBQWQ7QUFBQSxZQUNNWSxPQUFPTixrQkFBa0JPLGFBQWxCLENBQWdDSCxLQUFoQyxDQURiO0FBQUEsWUFFTUksUUFBUVosa0JBQWtCYSxhQUFsQixDQUFnQ0gsSUFBaEMsQ0FGZDs7QUFJQUosc0JBQWMsSUFBSUQsV0FBSixDQUFnQk8sS0FBaEIsQ0FBZDtBQUNELE9BTkQsQ0FNRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjs7QUFFRCxhQUFPUixXQUFQO0FBQ0Q7Ozs7RUFyQnVCUCxZOztBQXdCMUJnQixPQUFPQyxPQUFQLEdBQWlCWCxXQUFqQjs7QUFFQUEsWUFBWVAsT0FBWixHQUFzQkEsT0FBdEIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGV4dGVuZGVkQk5GTGV4ZXIgPSBFeHRlbmRlZEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG4gICAgXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGxldCBiYXNpY1BhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbGluZXMgPSBleHRlbmRlZEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgICBub2RlID0gZXh0ZW5kZWRCTkZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICBydWxlcyA9IEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG5cbiAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHJ1bGVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG5cbkJhc2ljUGFyc2VyLmdyYW1tYXIgPSBncmFtbWFyOyJdfQ==