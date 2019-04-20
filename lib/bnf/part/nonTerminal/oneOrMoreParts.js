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


var type = 'OneOrMoreParts';

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).call(this, type, part));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
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

Object.assign(OneOrMorePartsPart, {
  type: type
});

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwicGx1cyIsInR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwiZ2V0UGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFyc2VkIiwiQXJyYXkiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiZnJvbU9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2RlcyIsImNvbmNhdCIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLHNCQUFzQkQsUUFBUSxtQkFBUixDQUE1QjtBQUFBLElBQ01FLHNCQUFzQkYsUUFBUSxtQkFBUixDQUQ1Qjs7QUFHTSxJQUFFRyxRQUFGLEdBQWVKLE1BQWYsQ0FBRUksUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxJQUZGLEdBRVdELGNBRlgsQ0FFRUMsSUFGRjs7O0FBSU4sSUFBTUMsT0FBTyxnQkFBYjs7SUFFTUMsa0I7OztBQUNKLDhCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsbUlBQ1ZGLElBRFUsRUFDSkUsSUFESTtBQUVqQjs7OzswQkFFS0MsYSxFQUFlQyxZLEVBQWM7QUFDakNBLHFCQUFlLEtBQWYsQ0FEaUMsQ0FDWDs7QUFFdEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFVBQU1ILE9BQU8sS0FBS0ksT0FBTCxFQUFiO0FBQUEsVUFDTUMsa0JBQWtCTCxLQUFLTSxLQUFMLENBQVdMLGFBQVgsRUFBMEJDLFlBQTFCLENBRHhCO0FBQUEsVUFFTUssU0FBVUYsb0JBQW9CLElBRnBDOztBQUlBLFVBQUlFLE1BQUosRUFBWTtBQUNWSixnQkFBU0UsMkJBQTJCRyxLQUE1QixHQUNFSCxlQURGLEdBRUksQ0FBQ0EsZUFBRCxDQUZaOztBQUlBLFlBQU1JLHFCQUFxQixJQUEzQjtBQUFBLFlBQWtDO0FBQzVCQyw4QkFBc0JoQixvQkFBb0JpQixzQkFBcEIsQ0FBMkNGLGtCQUEzQyxDQUQ1QjtBQUFBLFlBRU1HLGlDQUFpQ0Ysb0JBQW9CSixLQUFwQixDQUEwQkwsYUFBMUIsRUFBeUNDLFlBQXpDLENBRnZDOztBQUlBQyxnQkFBUUEsTUFBTVUsTUFBTixDQUFhRCw4QkFBYixDQUFSO0FBQ0Q7O0FBRUQsYUFBT1QsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVyxpQkFBaUJqQixJQUF2QjtBQUFBLFVBQThCO0FBQ3hCa0IsZ0pBQXdCRCxjQUF4QixDQUROOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OztFQWxDOEJ0QixtQjs7QUFxQ2pDdUIsT0FBT0MsTUFBUCxDQUFjbEIsa0JBQWQsRUFBa0M7QUFDaENEO0FBRGdDLENBQWxDOztBQUlBb0IsT0FBT0MsT0FBUCxHQUFpQnBCLGtCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vemVyb09yTW9yZVBhcnRzJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY29uc3QgdHlwZSA9ICdPbmVPck1vcmVQYXJ0cyc7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cblxuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gKHBhcnROb2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgcGFydE5vZGVPck5vZGVzIDpcbiAgICAgICAgICAgICAgICAgIFtwYXJ0Tm9kZU9yTm9kZXNdO1xuXG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tT25lT3JNb3JlUGFydHNQYXJ0KG9uZU9yTW9yZVBhcnRzUGFydCksXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBwbHVzLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE9uZU9yTW9yZVBhcnRzUGFydCwge1xuICB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iXX0=