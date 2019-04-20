'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsPart = require('./sequenceOfParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    asterisk = specialSymbols.asterisk;


var type = 'ZeroOrMoreParts';

var ZeroOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(ZeroOrMorePartsPart, _SequenceOfPartsPart);

  function ZeroOrMorePartsPart(part) {
    _classCallCheck(this, ZeroOrMorePartsPart);

    return _possibleConstructorReturn(this, (ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart)).call(this, type, part));
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var part = this.getPart();

      for (;;) {
        var partNodeOrNodes = part.parse(configuration, noWhitespace),
            parsed = partNodeOrNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodeOrNodes);
        } else {
          break;
        }
      }

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var operatorString = asterisk,
          ///
      string = _get(ZeroOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart.prototype), 'asString', this).call(this, operatorString);

      return string;
    }
  }], [{
    key: 'fromOneOrMorePartsPart',
    value: function fromOneOrMorePartsPart(oneOrMorePartsPart) {
      var part = oneOrMorePartsPart.getPart(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

Object.assign(ZeroOrMorePartsPart, {
  type: type
});

module.exports = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiYXN0ZXJpc2siLCJ0eXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJnZXRQYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJjb25jYXQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsc0JBQXNCRCxRQUFRLG1CQUFSLENBQTVCOztBQUVNLElBQUVFLFFBQUYsR0FBZUgsTUFBZixDQUFFRyxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLFFBRkYsR0FFZUQsY0FGZixDQUVFQyxRQUZGOzs7QUFJTixJQUFNQyxPQUFPLGlCQUFiOztJQUVNQyxtQjs7O0FBQ0osK0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQSxxSUFDVkYsSUFEVSxFQUNKRSxJQURJO0FBRWpCOzs7OzBCQUVLQyxhLEVBQWVDLFksRUFBYztBQUNqQ0EscUJBQWUsS0FBZixDQURpQyxDQUNYOztBQUV0QixVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBTUgsT0FBTyxLQUFLSSxPQUFMLEVBQWI7O0FBRUEsZUFBUTtBQUNOLFlBQU1DLGtCQUFrQkwsS0FBS00sS0FBTCxDQUFXTCxhQUFYLEVBQTBCQyxZQUExQixDQUF4QjtBQUFBLFlBQ01LLFNBQVVGLG9CQUFvQixJQURwQzs7QUFHQSxZQUFJRSxNQUFKLEVBQVk7QUFDVkosa0JBQVFBLE1BQU1LLE1BQU4sQ0FBYUgsZUFBYixDQUFSO0FBQ0QsU0FGRCxNQUVPO0FBQ0w7QUFDRDtBQUNGOztBQUVELGFBQU9GLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU0saUJBQWlCWixRQUF2QjtBQUFBLFVBQWtDO0FBQzVCYSxrSkFBd0JELGNBQXhCLENBRE47O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7MkNBRTZCQyxrQixFQUFvQjtBQUNoRCxVQUFNWCxPQUFPVyxtQkFBbUJQLE9BQW5CLEVBQWI7QUFBQSxVQUNNUSxzQkFBc0IsSUFBSWIsbUJBQUosQ0FBd0JDLElBQXhCLENBRDVCOztBQUdBLGFBQU9ZLG1CQUFQO0FBQ0Q7Ozs7RUF0QytCbEIsbUI7O0FBeUNsQ21CLE9BQU9DLE1BQVAsQ0FBY2YsbUJBQWQsRUFBbUM7QUFDakNEO0FBRGlDLENBQW5DOztBQUlBaUIsT0FBT0MsT0FBUCxHQUFpQmpCLG1CQUFqQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY29uc3QgdHlwZSA9ICdaZXJvT3JNb3JlUGFydHMnO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cbiAgICBcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IGFzdGVyaXNrLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT25lT3JNb3JlUGFydHNQYXJ0KG9uZU9yTW9yZVBhcnRzUGFydCkge1xuICAgIGNvbnN0IHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oWmVyb09yTW9yZVBhcnRzUGFydCwge1xuICB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNQYXJ0O1xuIl19