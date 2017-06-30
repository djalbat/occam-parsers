'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var extendedBNF = require('./extendedBNF'),
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
    key: 'fromExtendedBNF',
    value: function fromExtendedBNF(extendedBNF) {
      var basicParser = null;

      try {
        var lines = extendedBNFLexer.linesFromExtendedBNF(extendedBNF),
            node = extendedBNFParser.nodeFromLines(lines),
            rules = ExtendedBNFParser.generateRules(node);

        basicParser = new BasicParser(rules);
      } catch (error) {}

      return basicParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var basicParser = BasicParser.fromExtendedBNF(extendedBNF);

      return basicParser;
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

BasicParser.extendedBNF = extendedBNF;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImV4dGVuZGVkQk5GIiwiQ29tbW9uUGFyc2VyIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJFeHRlbmRlZEJORkxleGVyIiwiZXh0ZW5kZWRCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJCYXNpY1BhcnNlciIsImJhc2ljUGFyc2VyIiwibGluZXMiLCJsaW5lc0Zyb21FeHRlbmRlZEJORiIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZXJyb3IiLCJmcm9tRXh0ZW5kZWRCTkYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGNBQWNELFFBQVEsZUFBUixDQUFwQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsa0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0lBSVFJLGdCLEdBQXFCTCxNLENBQXJCSyxnQjs7O0FBRVIsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLFdBQWpCLEVBQXpCO0FBQUEsSUFDTUMsb0JBQW9CSixrQkFBa0JHLFdBQWxCLEVBRDFCOztJQUdNRSxXOzs7Ozs7Ozs7OztvQ0FDbUJQLFcsRUFBYTtBQUNsQyxVQUFJUSxjQUFjLElBQWxCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxRQUFRTCxpQkFBaUJNLG9CQUFqQixDQUFzQ1YsV0FBdEMsQ0FBZDtBQUFBLFlBQ01XLE9BQU9MLGtCQUFrQk0sYUFBbEIsQ0FBZ0NILEtBQWhDLENBRGI7QUFBQSxZQUVNSSxRQUFRWCxrQkFBa0JZLGFBQWxCLENBQWdDSCxJQUFoQyxDQUZkOztBQUlBSCxzQkFBYyxJQUFJRCxXQUFKLENBQWdCTSxLQUFoQixDQUFkO0FBQ0QsT0FORCxDQU1FLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9QLFdBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxjQUFjRCxZQUFZUyxlQUFaLENBQTRCaEIsV0FBNUIsQ0FBcEI7O0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7O0VBckJ1QlAsWTs7QUF3QjFCZ0IsT0FBT0MsT0FBUCxHQUFpQlgsV0FBakI7O0FBRUFBLFlBQVlQLFdBQVosR0FBMEJBLFdBQTFCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGV4dGVuZGVkQk5GID0gcmVxdWlyZSgnLi9leHRlbmRlZEJORicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGV4dGVuZGVkQk5GTGV4ZXIgPSBFeHRlbmRlZEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21FeHRlbmRlZEJORihleHRlbmRlZEJORikge1xuICAgIGxldCBiYXNpY1BhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbGluZXMgPSBleHRlbmRlZEJORkxleGVyLmxpbmVzRnJvbUV4dGVuZGVkQk5GKGV4dGVuZGVkQk5GKSxcbiAgICAgICAgICAgIG5vZGUgPSBleHRlbmRlZEJORlBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICAgIHJ1bGVzID0gRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlKTtcblxuICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocnVsZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG5cbkJhc2ljUGFyc2VyLmV4dGVuZGVkQk5GID0gZXh0ZW5kZWRCTkY7Il19