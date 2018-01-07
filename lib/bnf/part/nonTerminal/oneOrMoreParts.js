'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    plus = specialSymbols.plus;

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    var type = OneOrMorePartsPart.type;

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).call(this, type, part));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          partParsed = partNodeOrNodes !== null;

      if (partParsed) {
        nodes = partNodeOrNodes instanceof Array ? partNodeOrNodes : [partNodeOrNodes];

        var oneOrMorePartsPart = this,
            ///
        zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(configuration, noWhitespace);

        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
      }

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var operatorString = plus,
          ///
      string = _get(OneOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart.prototype), 'asString', this).call(this, operatorString);

      return string;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

OneOrMorePartsPart.type = 'OneOrMoreParts';

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwicGx1cyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwiZ2V0UGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsIkFycmF5Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImZyb21PbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMiLCJjb25jYXQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FBNUI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEsbUJBQVIsQ0FENUI7O0FBR00sSUFBRUcsUUFBRixHQUFlSixNQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsSUFGRixHQUVXRCxjQUZYLENBRUVDLElBRkY7O0lBSUFDLGtCOzs7QUFDSiw4QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxPQUFPRixtQkFBbUJFLElBQWhDOztBQURnQixtSUFHVkEsSUFIVSxFQUdKRCxJQUhJO0FBSWpCOzs7OzBCQUVLRSxhLEVBQWVDLFksRUFBYztBQUNqQ0EscUJBQWUsS0FBZixDQURpQyxDQUNYOztBQUV0QixVQUFJQyxRQUFRLElBQVo7O0FBRUEsVUFBTUosT0FBTyxLQUFLSyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxrQkFBa0JOLEtBQUtPLEtBQUwsQ0FBV0wsYUFBWCxFQUEwQkMsWUFBMUIsQ0FEeEI7QUFBQSxVQUVNSyxhQUFjRixvQkFBb0IsSUFGeEM7O0FBSUEsVUFBSUUsVUFBSixFQUFnQjtBQUNkSixnQkFBU0UsMkJBQTJCRyxLQUE1QixHQUNFSCxlQURGLEdBRUksQ0FBQ0EsZUFBRCxDQUZaOztBQUlBLFlBQU1JLHFCQUFxQixJQUEzQjtBQUFBLFlBQWtDO0FBQzVCQyw4QkFBc0JoQixvQkFBb0JpQixzQkFBcEIsQ0FBMkNGLGtCQUEzQyxDQUQ1QjtBQUFBLFlBRU1HLGlDQUFpQ0Ysb0JBQW9CSixLQUFwQixDQUEwQkwsYUFBMUIsRUFBeUNDLFlBQXpDLENBRnZDOztBQUlBQyxnQkFBUUEsTUFBTVUsTUFBTixDQUFhRCw4QkFBYixDQUFSO0FBQ0Q7O0FBRUQsYUFBT1QsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVyxpQkFBaUJqQixJQUF2QjtBQUFBLFVBQThCO0FBQ3hCa0IsZ0pBQXdCRCxjQUF4QixDQUROOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OztFQXBDOEJ0QixtQjs7QUF1Q2pDSyxtQkFBbUJFLElBQW5CLEdBQTBCLGdCQUExQjs7QUFFQWdCLE9BQU9DLE9BQVAsR0FBaUJuQixrQkFBakIiLCJmaWxlIjoib25lT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydC50eXBlO1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cblxuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgbm9kZXMgPSAocGFydE5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgW3BhcnROb2RlT3JOb2Rlc107XG5cbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2RlcyA9IHplcm9Pck1vcmVQYXJ0c1BhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHBsdXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbk9uZU9yTW9yZVBhcnRzUGFydC50eXBlID0gJ09uZU9yTW9yZVBhcnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iXX0=