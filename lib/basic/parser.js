'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var parserUtil = require('../util/parser'),
    extendedBNF = require('./extendedBNF'),
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
  }, {
    key: 'findRule',
    value: function findRule(ruleName, rules) {
      return parserUtil.findRule(ruleName, rules);
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

BasicParser.extendedBNF = extendedBNF;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInBhcnNlclV0aWwiLCJleHRlbmRlZEJORiIsIkNvbW1vblBhcnNlciIsIkV4dGVuZGVkQk5GUGFyc2VyIiwiRXh0ZW5kZWRCTkZMZXhlciIsImV4dGVuZGVkQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImV4dGVuZGVkQk5GUGFyc2VyIiwiQmFzaWNQYXJzZXIiLCJiYXNpY1BhcnNlciIsImxpbmVzIiwibGluZXNGcm9tRXh0ZW5kZWRCTkYiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImVycm9yIiwiZnJvbUV4dGVuZGVkQk5GIiwicnVsZU5hbWUiLCJmaW5kUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01FLGNBQWNGLFFBQVEsZUFBUixDQURwQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsa0JBQVIsQ0FGckI7QUFBQSxJQUdNSSxvQkFBb0JKLFFBQVEsdUJBQVIsQ0FIMUI7O0lBS1FLLGdCLEdBQXFCTixNLENBQXJCTSxnQjs7O0FBRVIsSUFBTUMsbUJBQW1CRCxpQkFBaUJFLFdBQWpCLEVBQXpCO0FBQUEsSUFDTUMsb0JBQW9CSixrQkFBa0JHLFdBQWxCLEVBRDFCOztJQUdNRSxXOzs7Ozs7Ozs7OztvQ0FDbUJQLFcsRUFBYTtBQUNsQyxVQUFJUSxjQUFjLElBQWxCOztBQUVBLFVBQUk7QUFDRixZQUFNQyxRQUFRTCxpQkFBaUJNLG9CQUFqQixDQUFzQ1YsV0FBdEMsQ0FBZDtBQUFBLFlBQ01XLE9BQU9MLGtCQUFrQk0sYUFBbEIsQ0FBZ0NILEtBQWhDLENBRGI7QUFBQSxZQUVNSSxRQUFRWCxrQkFBa0JZLGFBQWxCLENBQWdDSCxJQUFoQyxDQUZkOztBQUlBSCxzQkFBYyxJQUFJRCxXQUFKLENBQWdCTSxLQUFoQixDQUFkO0FBQ0QsT0FORCxDQU1FLE9BQU9FLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU9QLFdBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxjQUFjRCxZQUFZUyxlQUFaLENBQTRCaEIsV0FBNUIsQ0FBcEI7O0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7NkJBRWVTLFEsRUFBVUosSyxFQUFPO0FBQUUsYUFBT2QsV0FBV21CLFFBQVgsQ0FBb0JELFFBQXBCLEVBQThCSixLQUE5QixDQUFQO0FBQThDOzs7O0VBdkJ6RFosWTs7QUEwQjFCa0IsT0FBT0MsT0FBUCxHQUFpQmIsV0FBakI7O0FBRUFBLFlBQVlQLFdBQVosR0FBMEJBLFdBQTFCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlcicpLFxuICAgICAgZXh0ZW5kZWRCTkYgPSByZXF1aXJlKCcuL2V4dGVuZGVkQk5GJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgZXh0ZW5kZWRCTkZMZXhlciA9IEV4dGVuZGVkQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUV4dGVuZGVkQk5GKGV4dGVuZGVkQk5GKSB7XG4gICAgbGV0IGJhc2ljUGFyc2VyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGV4dGVuZGVkQk5GTGV4ZXIubGluZXNGcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpLFxuICAgICAgICAgICAgbm9kZSA9IGV4dGVuZGVkQk5GUGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgICAgcnVsZXMgPSBFeHRlbmRlZEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21FeHRlbmRlZEJORihleHRlbmRlZEJORik7XG5cbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZmluZFJ1bGUocnVsZU5hbWUsIHJ1bGVzKSB7IHJldHVybiBwYXJzZXJVdGlsLmZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1BhcnNlcjtcblxuQmFzaWNQYXJzZXIuZXh0ZW5kZWRCTkYgPSBleHRlbmRlZEJORjtcbiJdfQ==