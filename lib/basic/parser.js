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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJDb21tb25QYXJzZXIiLCJFeHRlbmRlZEJORlBhcnNlciIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJleHRlbmRlZEJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJleHRlbmRlZEJORlBhcnNlciIsIkJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJmcm9tR3JhbW1hciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicHJvZHVjdGlvbnMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsa0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0lBSVFJLGdCLEdBQXFCTCxNLENBQXJCSyxnQjs7O0FBRVIsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLFdBQWpCLEVBQXpCO0FBQUEsSUFDTUMsb0JBQW9CSixrQkFBa0JHLFdBQWxCLEVBRDFCOztJQUdNRSxXOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBTUMsY0FBY0QsWUFBWUUsV0FBWixDQUF3QlQsT0FBeEIsQ0FBcEI7O0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7Z0NBRWtCUixPLEVBQVM7QUFDMUIsVUFBSVEsY0FBYyxJQUFsQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTUUsUUFBUU4saUJBQWlCTyxnQkFBakIsQ0FBa0NYLE9BQWxDLENBQWQ7QUFBQSxZQUNNWSxPQUFPTixrQkFBa0JPLGFBQWxCLENBQWdDSCxLQUFoQyxDQURiO0FBQUEsWUFFTUksY0FBY1osa0JBQWtCYSxtQkFBbEIsQ0FBc0NILElBQXRDLENBRnBCOztBQUlBSixzQkFBYyxJQUFJRCxXQUFKLENBQWdCTyxXQUFoQixDQUFkO0FBQ0QsT0FORCxDQU1FLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9SLFdBQVA7QUFDRDs7OztFQXJCdUJQLFk7O0FBd0IxQmdCLE9BQU9DLE9BQVAsR0FBaUJYLFdBQWpCOztBQUVBQSxZQUFZUCxPQUFaLEdBQXNCQSxPQUF0QiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbiAgICBcbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgbGV0IGJhc2ljUGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICAgIG5vZGUgPSBleHRlbmRlZEJORlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVQcm9kdWN0aW9ucyhub2RlKTtcblxuICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1BhcnNlcjtcblxuQmFzaWNQYXJzZXIuZ3JhbW1hciA9IGdyYW1tYXI7Il19